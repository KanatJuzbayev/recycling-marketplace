"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/auth-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { addAdminLog } from "@/services/admin-service";
import { AlertTriangle, Save, Database, Mail } from "lucide-react";

export default function SystemSettingsPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [emailNotifications, setEmailNotifications] = useState(true);
  const [autoModeration, setAutoModeration] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [siteName, setSiteName] = useState("Биржа вторсырья");
  const [siteDescription, setSiteDescription] = useState(
    "Платформа для сдачи и приема вторсырья"
  );

  const [smtpHost, setSmtpHost] = useState("smtp.example.com");
  const [smtpPort, setSmtpPort] = useState("587");
  const [smtpUser, setSmtpUser] = useState("user@example.com");
  const [smtpPassword, setSmtpPassword] = useState("********");

  const [dbHost, setDbHost] = useState("localhost");
  const [dbPort, setDbPort] = useState("5432");
  const [dbName, setDbName] = useState("ecodb");
  const [dbUser, setDbUser] = useState("ecouser");

  useEffect(() => {
    if (user && user.role !== "admin") {
      toast({
        variant: "destructive",
        title: "Доступ запрещен",
        description: "Только администраторы имеют доступ к настройкам системы",
      });
    }
  }, [user, toast]);

  const handleSaveSettings = async () => {
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (user) {
        await addAdminLog({
          userId: user.id,
          userName: user.name,
          action: "update_system_settings",
          details: "Обновлены системные настройки",
          ip: "127.0.0.1",
        });
      }

      toast({
        title: "Настройки сохранены",
        description: "Системные настройки успешно обновлены",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Не удалось сохранить настройки",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (user && user.role !== "admin") {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Настройки системы</h1>
        </div>

        <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-yellow-800 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-200">
          <div className="flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5" />
            <p className="font-medium">Доступ запрещен</p>
          </div>
          <p className="mt-2">
            Только администраторы имеют доступ к настройкам системы. Обратитесь
            к администратору, если вам требуется изменить системные настройки.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Настройки системы</h1>
        <Button onClick={handleSaveSettings} disabled={isLoading}>
          <Save className="mr-2 h-4 w-4" />
          {isLoading ? "Сохранение..." : "Сохранить настройки"}
        </Button>
      </div>

      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">Общие</TabsTrigger>
          <TabsTrigger value="email">Почта</TabsTrigger>
          <TabsTrigger value="database">База данных</TabsTrigger>
          <TabsTrigger value="security">Безопасность</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Общие настройки</CardTitle>
              <CardDescription>Основные настройки платформы</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="site-name">Название сайта</Label>
                  <Input
                    id="site-name"
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="site-description">Описание сайта</Label>
                  <Input
                    id="site-description"
                    value={siteDescription}
                    onChange={(e) => setSiteDescription(e.target.value)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="maintenance-mode">Режим обслуживания</Label>
                    <p className="text-sm text-muted-foreground">
                      Временно закрыть доступ к сайту для пользователей
                    </p>
                  </div>
                  <Switch
                    id="maintenance-mode"
                    checked={maintenanceMode}
                    onCheckedChange={setMaintenanceMode}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Настройки модерации</CardTitle>
              <CardDescription>
                Управление автоматической модерацией контента
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-moderation">
                    Автоматическая модерация
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Автоматически проверять новые материалы и заявки
                  </p>
                </div>
                <Switch
                  id="auto-moderation"
                  checked={autoModeration}
                  onCheckedChange={setAutoModeration}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="email" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Настройки почты</CardTitle>
              <CardDescription>
                Настройки SMTP-сервера для отправки уведомлений
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">
                      Email-уведомления
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Отправлять уведомления пользователям по email
                    </p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="smtp-host">SMTP-сервер</Label>
                    <Input
                      id="smtp-host"
                      value={smtpHost}
                      onChange={(e) => setSmtpHost(e.target.value)}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="smtp-port">Порт</Label>
                    <Input
                      id="smtp-port"
                      value={smtpPort}
                      onChange={(e) => setSmtpPort(e.target.value)}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="smtp-user">Пользователь</Label>
                    <Input
                      id="smtp-user"
                      value={smtpUser}
                      onChange={(e) => setSmtpUser(e.target.value)}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="smtp-password">Пароль</Label>
                    <Input
                      id="smtp-password"
                      type="password"
                      value={smtpPassword}
                      onChange={(e) => setSmtpPassword(e.target.value)}
                    />
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Отправить тестовое письмо
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="database" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Настройки базы данных</CardTitle>
              <CardDescription>
                Параметры подключения к базе данных
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="db-host">Хост</Label>
                    <Input
                      id="db-host"
                      value={dbHost}
                      onChange={(e) => setDbHost(e.target.value)}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="db-port">Порт</Label>
                    <Input
                      id="db-port"
                      value={dbPort}
                      onChange={(e) => setDbPort(e.target.value)}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="db-name">Имя базы данных</Label>
                    <Input
                      id="db-name"
                      value={dbName}
                      onChange={(e) => setDbName(e.target.value)}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="db-user">Пользователь</Label>
                    <Input
                      id="db-user"
                      value={dbUser}
                      onChange={(e) => setDbUser(e.target.value)}
                    />
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <Database className="mr-2 h-4 w-4" />
                  Проверить соединение
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Настройки безопасности</CardTitle>
              <CardDescription>Параметры безопасности системы</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="two-factor-auth">
                      Двухфакторная аутентификация
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Обязательная 2FA для администраторов и менеджеров
                    </p>
                  </div>
                  <Switch id="two-factor-auth" checked={true} disabled />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="session-timeout">Время сессии</Label>
                    <p className="text-sm text-muted-foreground">
                      Автоматический выход после 30 минут неактивности
                    </p>
                  </div>
                  <Switch id="session-timeout" checked={true} disabled />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="activity-logging">
                      Журналирование действий
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Запись всех действий администраторов и менеджеров
                    </p>
                  </div>
                  <Switch id="activity-logging" checked={true} disabled />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
