(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9636],{

/***/ 1487:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1404));


/***/ }),

/***/ 1404:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ SecurityPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./context/auth-context.tsx
var auth_context = __webpack_require__(8245);
// EXTERNAL MODULE: ./components/ui/card.tsx
var card = __webpack_require__(6013);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(495);
// EXTERNAL MODULE: ./components/ui/table.tsx
var table = __webpack_require__(6975);
// EXTERNAL MODULE: ./components/ui/badge.tsx
var badge = __webpack_require__(4693);
// EXTERNAL MODULE: ./components/ui/tabs.tsx
var tabs = __webpack_require__(5273);
// EXTERNAL MODULE: ./components/ui/use-toast.ts
var use_toast = __webpack_require__(5657);
// EXTERNAL MODULE: ./services/admin-service.ts
var admin_service = __webpack_require__(3028);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var triangle_alert = __webpack_require__(6127);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(8030);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/refresh-cw.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const RefreshCw = (0,createLucideIcon/* default */.Z)("RefreshCw", [
    [
        "path",
        {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc"
        }
    ],
    [
        "path",
        {
            d: "M21 3v5h-5",
            key: "1q7to0"
        }
    ],
    [
        "path",
        {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3"
        }
    ],
    [
        "path",
        {
            d: "M8 16H3v5",
            key: "1cv678"
        }
    ]
]);
 //# sourceMappingURL=refresh-cw.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/download.js
var download = __webpack_require__(7164);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/clock.js
var clock = __webpack_require__(933);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/shield.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Shield = (0,createLucideIcon/* default */.Z)("Shield", [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ]
]);
 //# sourceMappingURL=shield.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/lock.js
var lock = __webpack_require__(4453);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user.js
var icons_user = __webpack_require__(2022);
;// CONCATENATED MODULE: ./app/admin/security/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










function SecurityPage() {
    const { user } = (0,auth_context/* useAuth */.a)();
    const { toast } = (0,use_toast/* useToast */.pm)();
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    const [logs, setLogs] = (0,react.useState)([]);
    const [securityEvents] = (0,react.useState)([
        {
            id: "1",
            type: "login_failed",
            user: "unknown@example.com",
            ip: "192.168.1.1",
            timestamp: new Date(Date.now() - 3600000).toISOString(),
            details: "Неудачная попытка входа",
            severity: "medium"
        },
        {
            id: "2",
            type: "permission_change",
            user: "admin@ecomarket.ru",
            ip: "127.0.0.1",
            timestamp: new Date(Date.now() - 86400000).toISOString(),
            details: "Изменены права пользователя manager@ecomarket.ru",
            severity: "high"
        },
        {
            id: "3",
            type: "login_success",
            user: "manager@ecomarket.ru",
            ip: "192.168.1.100",
            timestamp: new Date(Date.now() - 7200000).toISOString(),
            details: "Успешный вход в систему",
            severity: "low"
        }
    ]);
    (0,react.useEffect)(()=>{
        if (user && user.role !== "admin") {
            toast({
                variant: "destructive",
                title: "Доступ запрещен",
                description: "Только администраторы имеют доступ к странице безопасности"
            });
            return;
        }
        const fetchLogs = async ()=>{
            try {
                const logsData = await (0,admin_service/* getAdminLogsHistory */.pt)(20);
                setLogs(logsData);
            } catch (error) {
                console.error("Error fetching logs:", error);
                toast({
                    variant: "destructive",
                    title: "Ошибка",
                    description: "Не удалось загрузить журнал действий"
                });
            } finally{
                setIsLoading(false);
            }
        };
        fetchLogs();
    }, [
        user,
        toast
    ]);
    const handleRefreshLogs = async ()=>{
        setIsLoading(true);
        try {
            const logsData = await (0,admin_service/* getAdminLogsHistory */.pt)(20);
            setLogs(logsData);
            toast({
                title: "Журнал обновлен",
                description: "Журнал действий успешно обновлен"
            });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Ошибка",
                description: "Не удалось обновить журнал действий"
            });
        } finally{
            setIsLoading(false);
        }
    };
    const handleExportLogs = async ()=>{
        try {
            await new Promise((resolve)=>setTimeout(resolve, 1000));
            if (user) {
                await (0,admin_service/* addAdminLog */.UE)({
                    userId: user.id,
                    userName: user.name,
                    action: "export_logs",
                    details: "Экспорт журнала действий",
                    ip: "127.0.0.1"
                });
            }
            toast({
                title: "Журнал экспортирован",
                description: "Журнал действий успешно экспортирован"
            });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Ошибка",
                description: "Не удалось экспортировать журнал действий"
            });
        }
    };
    if (user && user.role !== "admin") {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "flex items-center justify-between",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        className: "text-3xl font-bold",
                        children: "Безопасность"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-yellow-800 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-200",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(triangle_alert/* default */.Z, {
                                    className: "mr-2 h-5 w-5"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "font-medium",
                                    children: "Доступ запрещен"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "mt-2",
                            children: "Только администраторы имеют доступ к странице безопасности. Обратитесь к администратору, если вам требуется доступ к этой странице."
                        })
                    ]
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex items-center justify-between",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                    className: "text-3xl font-bold",
                    children: "Безопасность"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(tabs/* Tabs */.mQ, {
                defaultValue: "logs",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(tabs/* TabsList */.dr, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsTrigger */.SP, {
                                value: "logs",
                                children: "Журнал действий"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsTrigger */.SP, {
                                value: "monitoring",
                                children: "Мониторинг"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsTrigger */.SP, {
                                value: "access",
                                children: "Контроль доступа"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsContent */.nU, {
                        value: "logs",
                        className: "space-y-4",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardHeader */.Ol, {
                                    className: "flex flex-row items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardTitle */.ll, {
                                                    children: "Журнал действий администраторов"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardDescription */.SZ, {
                                                    children: "История действий администраторов и менеджеров в системе"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: handleRefreshLogs,
                                                    disabled: isLoading,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(RefreshCw, {
                                                            className: "mr-2 h-4 w-4"
                                                        }),
                                                        "Обновить"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                                    variant: "outline",
                                                    size: "sm",
                                                    onClick: handleExportLogs,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(download/* default */.Z, {
                                                            className: "mr-2 h-4 w-4"
                                                        }),
                                                        "Экспорт"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardContent */.aY, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(table/* Table */.iA, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHeader */.xD, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(table/* TableRow */.SC, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHead */.ss, {
                                                            children: "Время"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHead */.ss, {
                                                            children: "Пользователь"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHead */.ss, {
                                                            children: "Действие"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHead */.ss, {
                                                            children: "Детали"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHead */.ss, {
                                                            children: "IP-адрес"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableBody */.RM, {
                                                children: isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableRow */.SC, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableCell */.pj, {
                                                        colSpan: 5,
                                                        className: "text-center",
                                                        children: "Загрузка журнала..."
                                                    })
                                                }) : logs.length > 0 ? logs.map((log)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(table/* TableRow */.SC, {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableCell */.pj, {
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(clock/* default */.Z, {
                                                                            className: "h-4 w-4 text-muted-foreground"
                                                                        }),
                                                                        new Date(log.timestamp).toLocaleString()
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableCell */.pj, {
                                                                children: log.userName
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableCell */.pj, {
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* Badge */.C, {
                                                                    variant: log.action === "login" ? "default" : "secondary",
                                                                    children: log.action === "login" ? "Вход" : log.action === "logout" ? "Выход" : log.action
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableCell */.pj, {
                                                                children: log.details
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableCell */.pj, {
                                                                children: log.ip
                                                            })
                                                        ]
                                                    }, log.id)) : /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableRow */.SC, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableCell */.pj, {
                                                        colSpan: 5,
                                                        className: "text-center",
                                                        children: "Нет записей в журнале"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsContent */.nU, {
                        value: "monitoring",
                        className: "space-y-4",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardHeader */.Ol, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardTitle */.ll, {
                                            children: "Мониторинг безопасности"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardDescription */.SZ, {
                                            children: "События безопасности в системе"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardContent */.aY, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(table/* Table */.iA, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHeader */.xD, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(table/* TableRow */.SC, {
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHead */.ss, {
                                                            children: "Время"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHead */.ss, {
                                                            children: "Тип события"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHead */.ss, {
                                                            children: "Пользователь"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHead */.ss, {
                                                            children: "IP-адрес"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHead */.ss, {
                                                            children: "Детали"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHead */.ss, {
                                                            children: "Важность"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableBody */.RM, {
                                                children: securityEvents.map((event)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(table/* TableRow */.SC, {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableCell */.pj, {
                                                                children: new Date(event.timestamp).toLocaleString()
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableCell */.pj, {
                                                                children: event.type
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableCell */.pj, {
                                                                children: event.user
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableCell */.pj, {
                                                                children: event.ip
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableCell */.pj, {
                                                                children: event.details
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableCell */.pj, {
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* Badge */.C, {
                                                                    variant: event.severity === "high" ? "destructive" : event.severity === "medium" ? "default" : "secondary",
                                                                    children: event.severity === "high" ? "Высокая" : event.severity === "medium" ? "Средняя" : "Низкая"
                                                                })
                                                            })
                                                        ]
                                                    }, event.id))
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsContent */.nU, {
                        value: "access",
                        className: "space-y-4",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardHeader */.Ol, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardTitle */.ll, {
                                            children: "Контроль доступа"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardDescription */.SZ, {
                                            children: "Настройки безопасности и контроля доступа"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardContent */.aY, {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "grid gap-4",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Shield, {
                                                                    className: "h-5 w-5 text-primary"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                            className: "font-medium",
                                                                            children: "Двухфакторная аутентификация"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Обязательна для всех администраторов и менеджеров"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* Badge */.C, {
                                                            children: "Включена"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(lock/* default */.Z, {
                                                                    className: "h-5 w-5 text-primary"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                            className: "font-medium",
                                                                            children: "Блокировка по IP"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Блокировка после 5 неудачных попыток входа"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* Badge */.C, {
                                                            children: "Включена"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_user/* default */.Z, {
                                                                    className: "h-5 w-5 text-primary"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                            className: "font-medium",
                                                                            children: "Сложность паролей"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: "Минимум 8 символов, буквы, цифры и спецсимволы"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* Badge */.C, {
                                                            children: "Включена"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                                            className: "w-full",
                                            children: "Настроить политики безопасности"
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 4693:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: function() { return /* binding */ Badge; }
/* harmony export */ });
/* unused harmony export badgeVariants */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3027);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7440);



const badgeVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__/* .cva */ .j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground",
            success: "border-transparent bg-green-500 text-white hover:bg-green-600",
            warning: "border-transparent bg-yellow-500 text-white hover:bg-yellow-600",
            info: "border-transparent bg-blue-500 text-white hover:bg-blue-600"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(param) {
    let { className, variant, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(badgeVariants({
            variant
        }), className),
        ...props
    });
}



/***/ }),

/***/ 6975:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RM: function() { return /* binding */ TableBody; },
/* harmony export */   SC: function() { return /* binding */ TableRow; },
/* harmony export */   iA: function() { return /* binding */ Table; },
/* harmony export */   pj: function() { return /* binding */ TableCell; },
/* harmony export */   ss: function() { return /* binding */ TableHead; },
/* harmony export */   xD: function() { return /* binding */ TableHeader; }
/* harmony export */ });
/* unused harmony exports TableFooter, TableCaption */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7440);



const Table = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", {
            ref: ref,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("w-full caption-bottom text-sm", className),
            ...props
        })
    });
});
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("[&_tr]:border-b", className),
        ...props
    });
});
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("[&_tr:last-child]:border-0", className),
        ...props
    });
});
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tfoot", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    });
});
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    });
});
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    });
});
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    });
});
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("caption", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("mt-4 text-sm text-muted-foreground", className),
        ...props
    });
});
TableCaption.displayName = "TableCaption";



/***/ }),

/***/ 933:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ Clock; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Clock = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Clock", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }
    ]
]);
 //# sourceMappingURL=clock.js.map


/***/ }),

/***/ 4453:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ Lock; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Lock = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Lock", [
    [
        "rect",
        {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }
    ],
    [
        "path",
        {
            d: "M7 11V7a5 5 0 0 1 10 0v4",
            key: "fwvmzm"
        }
    ]
]);
 //# sourceMappingURL=lock.js.map


/***/ }),

/***/ 6127:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ TriangleAlert; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const TriangleAlert = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("TriangleAlert", [
    [
        "path",
        {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq"
        }
    ],
    [
        "path",
        {
            d: "M12 9v4",
            key: "juzpu7"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ]
]);
 //# sourceMappingURL=triangle-alert.js.map


/***/ }),

/***/ 2022:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ User; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const User = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("User", [
    [
        "path",
        {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }
    ]
]);
 //# sourceMappingURL=user.js.map


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [9247,4766,1860,1601,2971,7023,1744], function() { return __webpack_exec__(1487); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);