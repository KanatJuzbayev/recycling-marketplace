export default function AboutPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6">О нас</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Наша миссия</h2>
          <p className="text-muted-foreground mb-4">
            Биржа вторсырья - это платформа, созданная для упрощения процесса
            переработки вторсырья. Наша миссия - сделать мир чище, соединяя тех,
            кто хочет сдать вторсырье, с теми, кто готов его принять и
            переработать.
          </p>
          <p className="text-muted-foreground mb-4">
            Мы стремимся создать эффективную экосистему, которая поможет
            сократить количество отходов и даст вторую жизнь материалам, которые
            могут быть переработаны.
          </p>
          <p className="text-muted-foreground">
            Наша цель - сделать переработку доступной и удобной для каждого,
            способствуя формированию экологически ответственного общества.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Как мы работаем</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground mr-3">
                1
              </div>
              <div>
                <h3 className="font-medium">Регистрация</h3>
                <p className="text-muted-foreground">
                  Создайте аккаунт и укажите, хотите ли вы сдавать или принимать
                  вторсырье
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground mr-3">
                2
              </div>
              <div>
                <h3 className="font-medium">Размещение объявления</h3>
                <p className="text-muted-foreground">
                  Разместите объявление о сдаче или приеме вторсырья, указав тип
                  материала, количество и цену
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground mr-3">
                3
              </div>
              <div>
                <h3 className="font-medium">Поиск и связь</h3>
                <p className="text-muted-foreground">
                  Найдите подходящие предложения или откликнитесь на объявления
                  других пользователей
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground mr-3">
                4
              </div>
              <div>
                <h3 className="font-medium">Завершение сделки</h3>
                <p className="text-muted-foreground">
                  Договоритесь о деталях и завершите сделку, оставив отзыв о
                  партнере
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Наша команда</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-muted mb-4"></div>
            <h3 className="font-medium">Александр Петров</h3>
            <p className="text-muted-foreground">Основатель и CEO</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-muted mb-4"></div>
            <h3 className="font-medium">Екатерина Иванова</h3>
            <p className="text-muted-foreground">Технический директор</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-muted mb-4"></div>
            <h3 className="font-medium">Михаил Сидоров</h3>
            <p className="text-muted-foreground">
              Руководитель отдела маркетинга
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 rounded-full bg-muted mb-4"></div>
            <h3 className="font-medium">Анна Козлова</h3>
            <p className="text-muted-foreground">
              Руководитель службы поддержки
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
