(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1375],{

/***/ 1278:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8646));


/***/ }),

/***/ 8646:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ReportsPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _context_auth_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8245);
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6013);
/* harmony import */ var _components_ui_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5273);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(495);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6459);
/* harmony import */ var _services_material_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6364);
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4910);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3028);
/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5657);
/* harmony import */ var _barrel_optimize_names_BarChart3_Download_FileText_Package_Users_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1240);
/* harmony import */ var _barrel_optimize_names_BarChart3_Download_FileText_Package_Users_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7524);
/* harmony import */ var _barrel_optimize_names_BarChart3_Download_FileText_Package_Users_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2023);
/* harmony import */ var _barrel_optimize_names_BarChart3_Download_FileText_Package_Users_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7164);
/* harmony import */ var _barrel_optimize_names_BarChart3_Download_FileText_Package_Users_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3409);
/* __next_internal_client_entry_do_not_use__ default auto */ 











function ReportsPage() {
    const { user } = (0,_context_auth_context__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();
    const { toast } = (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_6__/* .useToast */ .pm)();
    const [usersCount, setUsersCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [materialsCount, setMaterialsCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [applicationsCount, setApplicationsCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [reportType, setReportType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("users");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const [users, materials, applications] = await Promise.all([
                    (0,_services_user_service__WEBPACK_IMPORTED_MODULE_7__/* .getAllUsers */ .AW)(),
                    (0,_services_material_service__WEBPACK_IMPORTED_MODULE_8__/* .getAllMaterials */ .RU)(),
                    (0,_services_application_service__WEBPACK_IMPORTED_MODULE_9__/* .getAllApplications */ .Rl)()
                ]);
                setUsersCount(users.length);
                setMaterialsCount(materials.length);
                setApplicationsCount(applications.length);
                // Логируем действие
                if (user) {
                    await (0,_services_admin_service__WEBPACK_IMPORTED_MODULE_10__/* .addAdminLog */ .UE)({
                        userId: user.id,
                        userName: user.name,
                        action: "view_reports",
                        details: "Просмотр отчетов",
                        ip: "127.0.0.1"
                    });
                }
            } catch (error) {
                console.error("Error fetching report data:", error);
                toast({
                    variant: "destructive",
                    title: "Ошибка",
                    description: "Не удалось загрузить данные для отчетов"
                });
            } finally{
                setIsLoading(false);
            }
        };
        fetchData();
    }, [
        toast,
        user
    ]);
    const handleGenerateReport = async (type)=>{
        toast({
            title: "Отчет сгенерирован",
            description: "Отчет по ".concat(type === "users" ? "пользователям" : type === "materials" ? "материалам" : "заявкам", " успешно сгенерирован и готов к скачиванию")
        });
        // Логируем действие
        if (user) {
            await (0,_services_admin_service__WEBPACK_IMPORTED_MODULE_10__/* .addAdminLog */ .UE)({
                userId: user.id,
                userName: user.name,
                action: "generate_report",
                details: "Сгенерирован отчет по ".concat(type === "users" ? "пользователям" : type === "materials" ? "материалам" : "заявкам"),
                ip: "127.0.0.1"
            });
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "flex items-center justify-center h-full",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                className: "text-muted-foreground",
                children: "Загрузка данных для отчетов..."
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "flex items-center justify-between",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                    className: "text-3xl font-bold",
                    children: "Отчеты"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid gap-4 md:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .Zb, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardHeader */ .Ol, {
                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardTitle */ .ll, {
                                        className: "text-sm font-medium",
                                        children: "Пользователи"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BarChart3_Download_FileText_Package_Users_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        className: "h-4 w-4 text-muted-foreground"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardContent */ .aY, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "text-2xl font-bold",
                                        children: usersCount
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Всего пользователей в системе"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .Zb, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardHeader */ .Ol, {
                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardTitle */ .ll, {
                                        className: "text-sm font-medium",
                                        children: "Материалы"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BarChart3_Download_FileText_Package_Users_lucide_react__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                        className: "h-4 w-4 text-muted-foreground"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardContent */ .aY, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "text-2xl font-bold",
                                        children: materialsCount
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Всего материалов в системе"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .Zb, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardHeader */ .Ol, {
                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardTitle */ .ll, {
                                        className: "text-sm font-medium",
                                        children: "Заявки"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BarChart3_Download_FileText_Package_Users_lucide_react__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        className: "h-4 w-4 text-muted-foreground"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardContent */ .aY, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "text-2xl font-bold",
                                        children: applicationsCount
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: "Всего заявок в системе"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .Zb, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardHeader */ .Ol, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardTitle */ .ll, {
                                children: "Генерация отчетов"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardDescription */ .SZ, {
                                children: [
                                    "Выберите тип отчета для генерации.",
                                    " ",
                                    (user === null || user === void 0 ? void 0 : user.role) === "admin" ? "Как администратор, вы имеете доступ ко всем типам отчетов." : "Как менеджер, вы имеете ограниченный доступ к отчетам."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardContent */ .aY, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_4__/* .Tabs */ .mQ, {
                            value: reportType,
                            onValueChange: setReportType,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_4__/* .TabsList */ .dr, {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_4__/* .TabsTrigger */ .SP, {
                                            value: "users",
                                            children: "Пользователи"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_4__/* .TabsTrigger */ .SP, {
                                            value: "materials",
                                            children: "Материалы"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_4__/* .TabsTrigger */ .SP, {
                                            value: "applications",
                                            children: "Заявки"
                                        }),
                                        (user === null || user === void 0 ? void 0 : user.role) === "admin" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_4__/* .TabsTrigger */ .SP, {
                                            value: "financial",
                                            children: "Финансы"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_4__/* .TabsContent */ .nU, {
                                    value: "users",
                                    className: "space-y-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                className: "text-lg font-medium",
                                                children: "Отчет по пользователям"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "text-muted-foreground",
                                                children: "Отчет содержит информацию о всех пользователях системы, их активности и статусах."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                                onClick: ()=>handleGenerateReport("users"),
                                                className: "mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BarChart3_Download_FileText_Package_Users_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                        className: "mr-2 h-4 w-4"
                                                    }),
                                                    "Сгенерировать отчет"
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_4__/* .TabsContent */ .nU, {
                                    value: "materials",
                                    className: "space-y-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                className: "text-lg font-medium",
                                                children: "Отчет по материалам"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "text-muted-foreground",
                                                children: "Отчет содержит информацию о всех материалах в системе, их типах, количестве и статусах."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                                onClick: ()=>handleGenerateReport("materials"),
                                                className: "mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BarChart3_Download_FileText_Package_Users_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                        className: "mr-2 h-4 w-4"
                                                    }),
                                                    "Сгенерировать отчет"
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_4__/* .TabsContent */ .nU, {
                                    value: "applications",
                                    className: "space-y-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                className: "text-lg font-medium",
                                                children: "Отчет по заявкам"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "text-muted-foreground",
                                                children: "Отчет содержит информацию о всех заявках в системе, их статусах и деталях."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                                onClick: ()=>handleGenerateReport("applications"),
                                                className: "mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BarChart3_Download_FileText_Package_Users_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                        className: "mr-2 h-4 w-4"
                                                    }),
                                                    "Сгенерировать отчет"
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                (user === null || user === void 0 ? void 0 : user.role) === "admin" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_4__/* .TabsContent */ .nU, {
                                    value: "financial",
                                    className: "space-y-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                className: "text-lg font-medium",
                                                children: "Финансовый отчет"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "text-muted-foreground",
                                                children: "Отчет содержит финансовую информацию о транзакциях и оборотах на платформе. Доступен только для администраторов."
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                                onClick: ()=>handleGenerateReport("financial"),
                                                className: "mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BarChart3_Download_FileText_Package_Users_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                        className: "mr-2 h-4 w-4"
                                                    }),
                                                    "Сгенерировать отчет"
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .Zb, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardHeader */ .Ol, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardTitle */ .ll, {
                                children: "Визуализация данных"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardDescription */ .SZ, {
                                children: "Графическое представление ключевых показателей платформы."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardContent */ .aY, {
                        className: "h-[300px] flex items-center justify-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "text-center space-y-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_BarChart3_Download_FileText_Package_Users_lucide_react__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                    className: "h-16 w-16 mx-auto text-muted-foreground"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                    className: "text-muted-foreground",
                                    children: "Визуализация данных будет доступна в следующем обновлении."
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

/***/ 3409:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ ChartColumn; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ChartColumn = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("ChartColumn", [
    [
        "path",
        {
            d: "M3 3v16a2 2 0 0 0 2 2h16",
            key: "c24i48"
        }
    ],
    [
        "path",
        {
            d: "M18 17V9",
            key: "2bz60n"
        }
    ],
    [
        "path",
        {
            d: "M13 17V5",
            key: "1frdt8"
        }
    ],
    [
        "path",
        {
            d: "M8 17v-3",
            key: "17ska0"
        }
    ]
]);
 //# sourceMappingURL=chart-column.js.map


/***/ }),

/***/ 2023:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ FileText; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const FileText = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("FileText", [
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ],
    [
        "path",
        {
            d: "M10 9H8",
            key: "b1mrlr"
        }
    ],
    [
        "path",
        {
            d: "M16 13H8",
            key: "t4e002"
        }
    ],
    [
        "path",
        {
            d: "M16 17H8",
            key: "z1uh3a"
        }
    ]
]);
 //# sourceMappingURL=file-text.js.map


/***/ }),

/***/ 7524:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ Package; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Package = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Package", [
    [
        "path",
        {
            d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
            key: "1a0edw"
        }
    ],
    [
        "path",
        {
            d: "M12 22V12",
            key: "d0xqtd"
        }
    ],
    [
        "path",
        {
            d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",
            key: "yx3hmr"
        }
    ],
    [
        "path",
        {
            d: "m7.5 4.27 9 5.15",
            key: "1c824w"
        }
    ]
]);
 //# sourceMappingURL=package.js.map


/***/ }),

/***/ 1240:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ Users; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Users = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Users", [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "path",
        {
            d: "M22 21v-2a4 4 0 0 0-3-3.87",
            key: "kshegd"
        }
    ],
    [
        "path",
        {
            d: "M16 3.13a4 4 0 0 1 0 7.75",
            key: "1da9ce"
        }
    ]
]);
 //# sourceMappingURL=users.js.map


/***/ }),

/***/ 4910:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HT: function() { return /* binding */ getUserApplications; },
/* harmony export */   Jv: function() { return /* binding */ getApplicationById; },
/* harmony export */   Rl: function() { return /* binding */ getAllApplications; },
/* harmony export */   kP: function() { return /* binding */ updateApplicationStatus; }
/* harmony export */ });
/* unused harmony exports getApplications, createApplication, updateApplication, deleteApplication, createApplicationStatusNotification */
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8590);

const APPLICATIONS_KEY = "eco_market_applications";
const getApplicationsFromStorage = ()=>{
    const applications = localStorage.getItem(APPLICATIONS_KEY);
    if (applications) {
        return JSON.parse(applications);
    }
    const initialApplications = [
        {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),
            title: "Сдам 50 кг макулатуры",
            description: "Газеты, журналы, книги в хорошем состоянии",
            materialType: "paper",
            materialId: "material1",
            sellerUserId: "user1",
            quantity: 50,
            price: 15,
            userId: "user1",
            userName: "Иван Петров",
            status: "active",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),
            title: "Куплю алюминиевые банки",
            description: "Принимаю алюминиевые банки от напитков в любом количестве",
            materialType: "metal",
            materialId: "material2",
            sellerUserId: "user1",
            quantity: 100,
            price: 80,
            userId: "user2",
            userName: "Анна Иванова",
            status: "active",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),
            title: "Сдам старую электронику",
            description: "Старые компьютеры, телефоны, платы",
            materialType: "electronics",
            materialId: "material3",
            sellerUserId: "user2",
            quantity: 30,
            price: 200,
            userId: "user1",
            userName: "Иван Петров",
            status: "completed",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
    ];
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(initialApplications));
    return initialApplications;
};
const saveApplications = (applications)=>{
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(applications));
};
const getApplications = async ()=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    return getApplicationsFromStorage();
};
const getAllApplications = async ()=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    return getApplicationsFromStorage();
};
const getApplicationById = async (id)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const applications = getApplicationsFromStorage();
    const application = applications.find((a)=>a.id === id);
    if (!application) {
        throw new Error("Application not found");
    }
    return application;
};
const createApplication = async (application)=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const applications = getApplicationsFromStorage();
    let userName = "Пользователь";
    let userType = "buyer";
    try {
        const users = JSON.parse(localStorage.getItem("eco_market_users") || "[]");
        const user = users.find((u)=>u.id === application.userId);
        if (user) {
            userName = user.name;
            userType = user.type;
        }
    } catch (error) {
        console.error("Error getting user info:", error);
    }
    const status = userType === "buyer" ? "active" : "pending";
    const newApplication = {
        ...application,
        id: uuidv4(),
        status: status,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        userName
    };
    saveApplications([
        ...applications,
        newApplication
    ]);
    if (userType === "seller") {
        try {
            const { createNotificationForStaff } = await __webpack_require__.e(/* import() */ 6807).then(__webpack_require__.bind(__webpack_require__, 6807));
            await createNotificationForStaff("Новая заявка требует проверки", "Продавец ".concat(userName, ' создал новую заявку "').concat(newApplication.title, '"'), {
                type: "warning",
                actionUrl: "/admin/applications",
                actionText: "Проверить заявку",
                relatedUserId: application.userId,
                relatedEntityId: newApplication.id,
                relatedEntityType: "application"
            });
        } catch (error) {
            console.error("Error sending notification to admins:", error);
        }
    } else if (userType === "buyer" && application.sellerUserId) {
        try {
            const { createNotificationForUser } = await __webpack_require__.e(/* import() */ 6807).then(__webpack_require__.bind(__webpack_require__, 6807));
            await createNotificationForUser(application.sellerUserId, "Новая заявка на ваш материал", "Покупатель ".concat(userName, ' создал новую заявку "').concat(newApplication.title, '"'), {
                type: "info",
                actionUrl: "/profile/applications",
                actionText: "Просмотреть заявку",
                relatedUserId: application.userId,
                relatedEntityId: newApplication.id,
                relatedEntityType: "application"
            });
        } catch (error) {
            console.error("Error sending notification to seller:", error);
        }
    }
    return newApplication;
};
const updateApplication = async (id, updates)=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const applications = getApplicationsFromStorage();
    const index = applications.findIndex((a)=>a.id === id);
    if (index === -1) {
        throw new Error("Application not found");
    }
    const updatedApplication = {
        ...applications[index],
        ...updates,
        updatedAt: new Date().toISOString()
    };
    applications[index] = updatedApplication;
    saveApplications(applications);
    return updatedApplication;
};
const updateApplicationStatus = async (id, status)=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const applications = getApplicationsFromStorage();
    const index = applications.findIndex((a)=>a.id === id);
    if (index === -1) {
        throw new Error("Application not found");
    }
    applications[index].status = status;
    applications[index].updatedAt = new Date().toISOString();
    saveApplications(applications);
    const token = localStorage.getItem("token") || localStorage.getItem("admin_token");
    try {
        const API_URL = "https://recycling-marketplace-backend.onrender.com/api/applications";
        const updateUrl = "".concat(API_URL, "/").concat(id);
        console.log("Updating application status in API: ".concat(updateUrl));
        const applicationToUpdate = applications[index];
        const response = await fetch(updateUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                ...token ? {
                    Authorization: "Bearer ".concat(token)
                } : {}
            },
            body: JSON.stringify(applicationToUpdate)
        });
        if (!response.ok) {
            const errorText = await response.text();
            console.error("API request failed with status ".concat(response.status, ": ").concat(errorText));
        } else {
            const result = await response.json();
            console.log("Application status successfully updated in API:", result);
        }
    } catch (error) {
        console.error("Failed to update application status in API:", error);
    }
    return applications[index];
};
const deleteApplication = async (id)=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const applications = getApplicationsFromStorage();
    const filteredApplications = applications.filter((a)=>a.id !== id);
    saveApplications(filteredApplications);
    return {
        success: true
    };
};
const getUserApplications = async (userId, userType)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const applications = getApplicationsFromStorage();
    if (userType === "seller") {
        return applications.filter((a)=>a.sellerUserId === userId || a.userId === userId);
    }
    return applications.filter((a)=>a.userId === userId);
};
const createApplicationStatusNotification = async (applicationId, applicationTitle, userId, status, updatedByUserId)=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const { createNotificationForUser } = await __webpack_require__.e(/* import() */ 6807).then(__webpack_require__.bind(__webpack_require__, 6807));
    await createNotificationForUser(userId, status === "completed" ? "Заявка принята" : "Заявка отклонена", status === "completed" ? 'Ваша заявка "'.concat(applicationTitle, '" была принята продавцом') : 'Ваша заявка "'.concat(applicationTitle, '" была отклонена продавцом'), {
        type: status === "completed" ? "success" : "error",
        actionUrl: "/profile/applications",
        actionText: "Перейти к заявкам",
        relatedUserId: updatedByUserId,
        relatedEntityId: applicationId,
        relatedEntityType: "application"
    });
    return {
        success: true
    };
};


/***/ }),

/***/ 6364:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $i: function() { return /* binding */ getUserMaterials; },
/* harmony export */   J2: function() { return /* binding */ getMaterialById; },
/* harmony export */   RU: function() { return /* binding */ getAllMaterials; },
/* harmony export */   VR: function() { return /* binding */ updateMaterial; },
/* harmony export */   aS: function() { return /* binding */ getMaterials; },
/* harmony export */   hM: function() { return /* binding */ createMaterial; },
/* harmony export */   o: function() { return /* binding */ updateMaterialStatus; }
/* harmony export */ });
/* unused harmony exports updateMaterialQuantity, deleteMaterial, getMaterialsByFilter */
const API_URL = "https://recycling-marketplace-backend.onrender.com/api/materials";
const mapApiMaterialToAppMaterial = (apiMaterial)=>{
    return {
        id: apiMaterial.id.toString(),
        name: apiMaterial.name || "Без названия",
        type: apiMaterial.category_id ? mapCategoryIdToType(apiMaterial.category_id) : "other",
        description: apiMaterial.description || "",
        price: Number.parseFloat(apiMaterial.price) || 0,
        quantity: apiMaterial.quantity || 100,
        image: apiMaterial.image_url || null,
        userId: apiMaterial.user_id || "admin",
        userName: apiMaterial.user_name || "Администратор",
        status: mapApiStatusToAppStatus(apiMaterial.status),
        createdAt: apiMaterial.created_at || new Date().toISOString(),
        dealType: apiMaterial.deal_type || "sell"
    };
};
const mapCategoryIdToType = (categoryId)=>{
    const categoryMap = {
        1: "plastic",
        2: "paper",
        3: "glass",
        4: "metal",
        5: "other",
        6: "organic",
        7: "other"
    };
    return categoryMap[categoryId] || "other";
};
const mapApiStatusToAppStatus = (apiStatus)=>{
    const statusMap = {
        Approved: "active",
        "Under review": "pending",
        Rejected: "rejected"
    };
    return statusMap[apiStatus] || "pending";
};
const getMaterials = async ()=>{
    try {
        console.log("Fetching materials from API:", API_URL);
        const response = await fetch(API_URL, {
            cache: "no-store",
            headers: {
                "Cache-Control": "no-cache",
                Pragma: "no-cache"
            }
        });
        console.log("API response status:", response.status);
        if (!response.ok) {
            throw new Error("API request failed with status ".concat(response.status));
        }
        const apiMaterials = await response.json();
        console.log("Materials from API (raw):", apiMaterials);
        if (!Array.isArray(apiMaterials)) {
            console.error("API did not return an array:", apiMaterials);
            return [];
        }
        const processedMaterials = apiMaterials.map(mapApiMaterialToAppMaterial);
        console.log("Processed materials:", processedMaterials);
        return processedMaterials;
    } catch (error) {
        console.error("Error fetching materials from API:", error);
        return [];
    }
};
const getAllMaterials = async ()=>{
    return getMaterials();
};
const getUserMaterials = async (userId)=>{
    try {
        const allMaterials = await getMaterials();
        return allMaterials.filter((m)=>m.userId === userId);
    } catch (error) {
        console.error("Error fetching user materials:", error);
        return [];
    }
};
const getMaterialById = async (id)=>{
    try {
        const response = await fetch("".concat(API_URL, "/").concat(id));
        if (!response.ok) {
            throw new Error("API request failed with status ".concat(response.status));
        }
        const apiMaterial = await response.json();
        return mapApiMaterialToAppMaterial(apiMaterial);
    } catch (error) {
        console.error("Error fetching material by ID:", error);
        throw new Error("Material not found");
    }
};
const createMaterial = async (material)=>{
    try {
        const token = localStorage.getItem("token") || localStorage.getItem("admin_token");
        const apiMaterial = {
            name: material.name,
            category_id: getCategoryIdFromType(material.type),
            description: material.description,
            price: material.price.toString(),
            unit: "kg",
            image_url: material.image,
            status: "Under review"
        };
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...token ? {
                    Authorization: "Bearer ".concat(token)
                } : {}
            },
            body: JSON.stringify(apiMaterial)
        });
        if (!response.ok) {
            throw new Error("API request failed with status ".concat(response.status));
        }
        const responseData = await response.json();
        return mapApiMaterialToAppMaterial(responseData);
    } catch (error) {
        console.error("Error creating material:", error);
        throw error;
    }
};
const getCategoryIdFromType = (type)=>{
    const typeMap = {
        plastic: 1,
        paper: 2,
        glass: 3,
        metal: 4,
        other: 7,
        organic: 6
    };
    return typeMap[type] || 7;
};
const updateMaterialStatus = async (id, status)=>{
    try {
        const token = localStorage.getItem("token") || localStorage.getItem("admin_token");
        const response = await fetch("".concat(API_URL, "/").concat(id));
        if (!response.ok) {
            throw new Error("API request failed with status ".concat(response.status));
        }
        const currentMaterial = await response.json();
        const apiStatus = status === "active" ? "Approved" : status === "pending" ? "Under review" : "Rejected";
        const updatedMaterial = {
            ...currentMaterial,
            status: apiStatus
        };
        const updateResponse = await fetch("".concat(API_URL, "/").concat(id), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                ...token ? {
                    Authorization: "Bearer ".concat(token)
                } : {}
            },
            body: JSON.stringify(updatedMaterial)
        });
        if (!updateResponse.ok) {
            const errorText = await updateResponse.text();
            console.error("API request failed with status ".concat(updateResponse.status, ": ").concat(errorText));
            throw new Error("API request failed with status ".concat(updateResponse.status));
        }
        const result = await updateResponse.json();
        console.log("Material status successfully updated in API:", result);
        return mapApiMaterialToAppMaterial(result);
    } catch (error) {
        console.error("Failed to update material status in API:", error);
        throw error;
    }
};
const updateMaterial = async (id, updates)=>{
    try {
        const token = localStorage.getItem("token") || localStorage.getItem("admin_token");
        const response = await fetch("".concat(API_URL, "/").concat(id));
        if (!response.ok) {
            throw new Error("API request failed with status ".concat(response.status));
        }
        const currentMaterial = await response.json();
        const apiUpdates = {};
        if (updates.name !== undefined) apiUpdates.name = updates.name;
        if (updates.type !== undefined) apiUpdates.category_id = getCategoryIdFromType(updates.type);
        if (updates.description !== undefined) apiUpdates.description = updates.description;
        if (updates.price !== undefined) apiUpdates.price = updates.price.toString();
        if (updates.image !== undefined) apiUpdates.image_url = updates.image;
        if (updates.status !== undefined) {
            apiUpdates.status = updates.status === "active" ? "Approved" : updates.status === "pending" ? "Under review" : "Rejected";
        }
        const updatedMaterial = {
            ...currentMaterial,
            ...apiUpdates
        };
        const updateResponse = await fetch("".concat(API_URL, "/").concat(id), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                ...token ? {
                    Authorization: "Bearer ".concat(token)
                } : {}
            },
            body: JSON.stringify(updatedMaterial)
        });
        if (!updateResponse.ok) {
            throw new Error("API request failed with status ".concat(updateResponse.status));
        }
        const result = await updateResponse.json();
        return mapApiMaterialToAppMaterial(result);
    } catch (error) {
        console.error("Failed to update material in API:", error);
        throw error;
    }
};
const updateMaterialQuantity = async (id, quantityChange)=>{
    try {
        const material = await getMaterialById(id);
        const newQuantity = material.quantity - quantityChange;
        return updateMaterial(id, {
            quantity: newQuantity
        });
    } catch (error) {
        console.error("Failed to update material quantity in API:", error);
        throw error;
    }
};
const deleteMaterial = async (id)=>{
    try {
        const token = localStorage.getItem("token") || localStorage.getItem("admin_token");
        const response = await fetch("".concat(API_URL, "/").concat(id), {
            method: "DELETE",
            headers: {
                ...token ? {
                    Authorization: "Bearer ".concat(token)
                } : {}
            }
        });
        if (!response.ok) {
            throw new Error("API request failed with status ".concat(response.status));
        }
        console.log("Material successfully deleted from API");
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to delete material from API:", error);
        throw error;
    }
};
const getMaterialsByFilter = async (filters)=>{
    try {
        const allMaterials = await getMaterials();
        let filteredMaterials = [
            ...allMaterials
        ];
        if (filters.category && filters.category !== "all") {
            filteredMaterials = filteredMaterials.filter((m)=>m.type === filters.category);
        }
        if (filters.sort === "price") {
            filteredMaterials.sort((a, b)=>a.price - b.price);
        }
        return filteredMaterials;
    } catch (error) {
        console.error("Error fetching filtered materials:", error);
        return [];
    }
};


/***/ }),

/***/ 6459:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AW: function() { return /* binding */ getAllUsers; },
/* harmony export */   GA: function() { return /* binding */ getUserById; },
/* harmony export */   Nq: function() { return /* binding */ updateUser; },
/* harmony export */   OL: function() { return /* binding */ updateUserStatus; },
/* harmony export */   c7: function() { return /* binding */ updateUserRole; },
/* harmony export */   h8: function() { return /* binding */ deleteUser; }
/* harmony export */ });
const USERS_KEY = "eco_market_users";
const getUsers = ()=>{
    const users = localStorage.getItem(USERS_KEY);
    if (users) {
        return JSON.parse(users);
    }
    const initialUsers = [
        {
            id: "admin1",
            name: "Администратор",
            email: "admin@ecomarket.ru",
            password: "admin123",
            type: "seller",
            role: "admin",
            status: "active",
            avatar: "",
            location: "Москва",
            createdAt: new Date().toISOString(),
            bio: "Главный администратор системы"
        },
        {
            id: "manager1",
            name: "Менеджер",
            email: "manager@ecomarket.ru",
            password: "manager123",
            type: "seller",
            role: "manager",
            status: "active",
            avatar: "",
            location: "Санкт-Петербург",
            createdAt: new Date().toISOString(),
            bio: "Менеджер по работе с клиентами"
        },
        {
            id: "user1",
            name: "Иван Петров",
            email: "ivan@example.com",
            password: "password123",
            type: "seller",
            role: "user",
            status: "active",
            avatar: "",
            location: "Москва",
            createdAt: new Date().toISOString(),
            bio: "Продавец вторсырья"
        },
        {
            id: "user2",
            name: "Анна Иванова",
            email: "anna@example.com",
            password: "password123",
            type: "buyer",
            role: "user",
            status: "active",
            avatar: "",
            location: "Санкт-Петербург",
            createdAt: new Date().toISOString(),
            bio: "Покупатель вторсырья"
        }
    ];
    localStorage.setItem(USERS_KEY, JSON.stringify(initialUsers));
    return initialUsers;
};
const saveUsers = (users)=>{
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
};
const getAllUsers = async ()=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const users = getUsers();
    return users.map((param)=>{
        let { password, ...user } = param;
        return user;
    });
};
const getUserById = async (id)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const users = getUsers();
    const user = users.find((u)=>u.id === id);
    if (!user) {
        throw new Error("User not found");
    }
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
};
const deleteUser = async (id)=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const users = getUsers();
    const filteredUsers = users.filter((u)=>u.id !== id);
    if (filteredUsers.length === users.length) {
        throw new Error("User not found");
    }
    saveUsers(filteredUsers);
    return true;
};
const updateUser = async (id, updates)=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const users = getUsers();
    const index = users.findIndex((u)=>u.id === id);
    if (index === -1) {
        throw new Error("User not found");
    }
    const { id: _, role: __, ...allowedUpdates } = updates;
    users[index] = {
        ...users[index],
        ...allowedUpdates
    };
    saveUsers(users);
    const { password, ...userWithoutPassword } = users[index];
    return userWithoutPassword;
};
const updateUserStatus = async (id, status)=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const users = getUsers();
    const index = users.findIndex((u)=>u.id === id);
    if (index === -1) {
        throw new Error("User not found");
    }
    users[index].status = status;
    saveUsers(users);
    const { password, ...userWithoutPassword } = users[index];
    return userWithoutPassword;
};
const updateUserRole = async (id, role)=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const users = getUsers();
    const index = users.findIndex((u)=>u.id === id);
    if (index === -1) {
        throw new Error("User not found");
    }
    users[index].role = role;
    saveUsers(users);
    const { password, ...userWithoutPassword } = users[index];
    return userWithoutPassword;
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [9247,4766,1860,1601,2971,7023,1744], function() { return __webpack_exec__(1278); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);