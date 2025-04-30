(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4178],{

/***/ 9842:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7083));


/***/ }),

/***/ 7083:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProfilePage; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6463);
/* harmony import */ var _context_auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8245);
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6013);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(495);
/* harmony import */ var _components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5273);
/* harmony import */ var _components_ui_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1647);
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4910);
/* harmony import */ var _services_material_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6364);
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4693);
/* harmony import */ var _barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6141);
/* harmony import */ var _barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2022);
/* harmony import */ var _barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7524);
/* harmony import */ var _barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2023);
/* harmony import */ var _barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7385);
/* harmony import */ var _barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(933);
/* harmony import */ var _barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9321);
/* harmony import */ var _barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2513);
/* harmony import */ var _barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8422);
/* __next_internal_client_entry_do_not_use__ default auto */ 











function ProfilePage() {
    const { user, isLoading } = (0,_context_auth_context__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .a)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [applications, setApplications] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [materials, setMaterials] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [allMaterials, setAllMaterials] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("overview");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (true) {
            if (!isLoading && !user) {
                router.push("/auth/login");
                return;
            }
            if (user) {
                const fetchData = async ()=>{
                    try {
                        const appsData = await (0,_services_application_service__WEBPACK_IMPORTED_MODULE_9__/* .getUserApplications */ .HT)(user.id, user.type);
                        setApplications(appsData);
                        // Загружаем материалы пользователя, если он продавец
                        if (user.type === "seller") {
                            const materialsData = await (0,_services_material_service__WEBPACK_IMPORTED_MODULE_10__/* .getUserMaterials */ .$i)(user.id);
                            setMaterials(materialsData);
                        }
                        if (user.role === "admin" || user.role === "manager") {
                            const allMaterialsData = await (0,_services_material_service__WEBPACK_IMPORTED_MODULE_10__/* .getAllMaterials */ .RU)();
                            setAllMaterials(allMaterialsData);
                        }
                    } catch (error) {
                        console.error("Error fetching user data:", error);
                    }
                };
                fetchData();
            }
        }
    }, [
        user,
        isLoading,
        router
    ]);
    if (!user) {
        return null;
    }
    const pendingMaterialsCount = user.role === "admin" || user.role === "manager" ? allMaterials.filter((m)=>m.status === "pending").length : 0;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "container py-10",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid grid-cols-1 md:grid-cols-4 gap-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "md:col-span-1",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_7__/* .Avatar */ .qE, {
                                        className: "h-24 w-24",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_7__/* .AvatarImage */ .F$, {
                                                src: user.avatar || "/placeholder.svg",
                                                alt: user.name
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_7__/* .AvatarFallback */ .Q5, {
                                                className: "text-lg",
                                                children: user.name.charAt(0)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                        className: "mt-4",
                                        children: user.name
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardDescription */ .SZ, {
                                        children: user.email
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_8__/* .Badge */ .C, {
                                        className: "mt-2",
                                        children: user.type === "staff" ? user.role === "admin" ? "Администратор" : "Менеджер" : user.type === "buyer" ? "Покупатель" : "Продавец"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                            variant: "outline",
                                            className: "justify-start",
                                            onClick: ()=>router.push("/profile/edit"),
                                            children: "Редактировать профиль"
                                        }),
                                        user.role === "user" ? user.type === "buyer" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                                variant: "outline",
                                                className: "justify-start",
                                                onClick: ()=>router.push("/profile/applications"),
                                                children: "Мои заявки на покупку"
                                            })
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                                    variant: "outline",
                                                    className: "justify-start",
                                                    onClick: ()=>router.push("/profile/materials"),
                                                    children: "Мои материалы"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                                    variant: "outline",
                                                    className: "justify-start",
                                                    onClick: ()=>router.push("/profile/applications"),
                                                    children: "Заявки на мои материалы"
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                            variant: "outline",
                                            className: "justify-start",
                                            onClick: ()=>router.push("/admin"),
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Административная панель"
                                            ]
                                        }),
                                        user.role === "user" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                            variant: "outline",
                                            className: "justify-start",
                                            onClick: ()=>router.push("/profile/favorites"),
                                            children: "Избранное"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                            variant: "outline",
                                            className: "justify-start",
                                            onClick: ()=>router.push("/profile/settings"),
                                            children: "Настройки"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "md:col-span-3",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__/* .Tabs */ .mQ, {
                        value: activeTab,
                        onValueChange: setActiveTab,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__/* .TabsList */ .dr, {
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__/* .TabsTrigger */ .SP, {
                                        value: "overview",
                                        children: "Обзор"
                                    }),
                                    user.role === "user" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: user.type === "buyer" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__/* .TabsTrigger */ .SP, {
                                            value: "applications",
                                            children: "Мои заявки"
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__/* .TabsTrigger */ .SP, {
                                                    value: "materials",
                                                    children: "Мои материалы"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__/* .TabsTrigger */ .SP, {
                                                    value: "applications",
                                                    children: "Заявки"
                                                })
                                            ]
                                        })
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__/* .TabsTrigger */ .SP, {
                                        value: "platform-stats",
                                        children: "Статистика платформы"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__/* .TabsContent */ .nU, {
                                value: "overview",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                    children: [
                                                        "Добро пожаловать, ",
                                                        user.name,
                                                        "!"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardDescription */ .SZ, {
                                                    children: user.role === "admin" ? "Это ваш личный кабинет администратора, где вы можете отслеживать активность на платформе." : user.role === "manager" ? "Это ваш личный кабинет менеджера, где вы можете отслеживать активность на платформе." : "Это ваш личный кабинет, где вы можете искать и покупать материалы."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                children: [
                                                    user.role === "admin" || user.role === "manager" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                                                        className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                                                className: "text-sm font-medium",
                                                                                children: "Новые пользователи"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                                                className: "h-4 w-4 text-muted-foreground"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                                className: "text-2xl font-bold",
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                    title: "Динамическое значение",
                                                                                    children: "-"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                                className: "text-xs text-muted-foreground",
                                                                                children: "За последние 7 дней"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                                                        className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                                                className: "text-sm font-medium",
                                                                                children: "Ожидающие модерации"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                                                className: "h-4 w-4 text-muted-foreground"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                                className: "text-2xl font-bold",
                                                                                children: pendingMaterialsCount
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                                className: "text-xs text-muted-foreground",
                                                                                children: "Материалы, требующие проверки"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                                                        className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                                                className: "text-sm font-medium",
                                                                                children: "Активные заявки"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                                                className: "h-4 w-4 text-muted-foreground"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                                className: "text-2xl font-bold",
                                                                                children: applications.filter((app)=>app.status === "active").length
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                                className: "text-xs text-muted-foreground",
                                                                                children: "Требуют внимания"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                                                        className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                                                className: "text-sm font-medium",
                                                                                children: "Завершенные сделки"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                                className: "h-4 w-4 text-muted-foreground"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                                className: "text-2xl font-bold",
                                                                                children: applications.filter((app)=>app.status === "completed").length
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                                className: "text-xs text-muted-foreground",
                                                                                children: "За последние 30 дней"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }) : user.type === "buyer" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                                                        className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                                                className: "text-sm font-medium",
                                                                                children: "Активные заявки"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                                                className: "h-4 w-4 text-muted-foreground"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                            className: "text-2xl font-bold",
                                                                            children: applications.filter((app)=>app.status === "active").length
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                                                        className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                                                className: "text-sm font-medium",
                                                                                children: "Завершенные покупки"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                                                className: "h-4 w-4 text-muted-foreground"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                            className: "text-2xl font-bold",
                                                                            children: applications.filter((app)=>app.status === "completed").length
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                                                        className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                                                className: "text-sm font-medium",
                                                                                children: "Активные материалы"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                                                className: "h-4 w-4 text-muted-foreground"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                            className: "text-2xl font-bold",
                                                                            children: materials.filter((mat)=>mat.status === "active").length
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                                                        className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                                                className: "text-sm font-medium",
                                                                                children: "Заявки на материалы"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                                                className: "h-4 w-4 text-muted-foreground"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                            className: "text-2xl font-bold",
                                                                            children: applications.filter((app)=>app.sellerUserId === user.id && app.userId !== user.id).length
                                                                        })
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                                        className: "text-sm font-medium",
                                                                        children: "Дата регистрации"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                                        className: "h-4 w-4 text-muted-foreground"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                    className: "text-sm",
                                                                    children: user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "Не указано"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                                                className: "flex flex-row items-center justify-between space-y-0 pb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                                        className: "text-sm font-medium",
                                                                        children: user.role === "admin" || user.role === "manager" ? "Последний вход" : "Местоположение"
                                                                    }),
                                                                    user.role === "admin" || user.role === "manager" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                                        className: "h-4 w-4 text-muted-foreground"
                                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                                        className: "h-4 w-4 text-muted-foreground"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                    className: "text-sm",
                                                                    children: user.role === "admin" || user.role === "manager" ? new Date().toLocaleString() : user.location || "Не указано"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            user.type === "seller" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__/* .TabsContent */ .nU, {
                                value: "materials",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                            className: "flex justify-between items-center",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                            children: "Мои материалы"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardDescription */ .SZ, {
                                                            children: "Управляйте своими материалами на продажу"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                                    onClick: ()=>router.push("/profile/materials/new"),
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                            className: "mr-2 h-4 w-4"
                                                        }),
                                                        "Добавить материал"
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                            children: materials.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                                children: materials.map((material)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                                        className: "overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "h-40 bg-muted bg-cover bg-center cursor-pointer",
                                                                style: {
                                                                    backgroundImage: "url(".concat(material.image, ")")
                                                                },
                                                                onClick: ()=>router.push("/marketplace/".concat(material.id))
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                                                className: "p-4 cursor-pointer",
                                                                onClick: ()=>router.push("/marketplace/".concat(material.id)),
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "flex justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                                                className: "text-lg",
                                                                                children: material.name
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_8__/* .Badge */ .C, {
                                                                                variant: material.status === "active" ? "default" : material.status === "pending" ? "secondary" : "destructive",
                                                                                children: material.status === "active" ? "Активен" : material.status === "pending" ? "На проверке" : "Отклонен"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardDescription */ .SZ, {
                                                                        children: material.type
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                                                className: "p-4 pt-0 cursor-pointer",
                                                                onClick: ()=>router.push("/marketplace/".concat(material.id)),
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex justify-between items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            className: "font-bold",
                                                                            children: [
                                                                                material.price,
                                                                                " ₸/кг"
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                            children: [
                                                                                "Количество: ",
                                                                                material.quantity,
                                                                                " кг"
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "p-4 border-t flex justify-end space-x-2",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                                                    variant: "outline",
                                                                    size: "sm",
                                                                    onClick: ()=>router.push("/profile/materials/edit/".concat(material.id)),
                                                                    disabled: material.status !== "active" && material.status !== "pending",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CalendarDays_Clock_FileText_MapPin_Package_Pencil_Plus_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                                            className: "mr-2 h-4 w-4"
                                                                        }),
                                                                        "Редактировать"
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }, material.id))
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-center py-10",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                        className: "text-muted-foreground",
                                                        children: "У вас пока нет материалов на продажу"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                                        className: "mt-4",
                                                        onClick: ()=>router.push("/profile/materials/new"),
                                                        children: "Добавить материал"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__/* .TabsContent */ .nU, {
                                value: "applications",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                    children: user.type === "buyer" ? "Ваши заявки на покупку" : "Заявки на ваши материалы"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardDescription */ .SZ, {
                                                    children: user.type === "buyer" ? "Управляйте своими заявками на покупку вторсырья" : "Просмотрите заявки от покупателей на ваши материалы"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                            children: applications.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                className: "space-y-4",
                                                children: applications.map((application)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                                                className: "pb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "flex justify-between",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                                                className: "text-lg",
                                                                                children: application.title
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_8__/* .Badge */ .C, {
                                                                                variant: application.status === "active" ? "default" : "secondary",
                                                                                className: application.status === "completed" ? "bg-green-500 hover:bg-green-600" : "",
                                                                                children: application.status === "active" ? "Активна" : application.status === "completed" ? "Завершена" : "В обработке"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardDescription */ .SZ, {
                                                                        children: [
                                                                            "Создана:",
                                                                            " ",
                                                                            new Date(application.createdAt).toLocaleDateString()
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                        className: "text-sm",
                                                                        children: application.description
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "flex justify-between items-center mt-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                        className: "text-sm text-muted-foreground",
                                                                                        children: [
                                                                                            "Материал:",
                                                                                            " "
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                        className: "text-sm font-medium",
                                                                                        children: application.materialType
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                        className: "text-sm text-muted-foreground",
                                                                                        children: [
                                                                                            "Количество:",
                                                                                            " "
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                        className: "text-sm font-medium",
                                                                                        children: [
                                                                                            application.quantity,
                                                                                            " кг"
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                        className: "text-sm text-muted-foreground",
                                                                                        children: [
                                                                                            "Цена:",
                                                                                            " "
                                                                                        ]
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                        className: "text-sm font-medium",
                                                                                        children: [
                                                                                            application.price,
                                                                                            " ₸/кг"
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            user.type === "seller" && application.userId !== user.id && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                className: "p-4 border-t text-sm text-muted-foreground text-right",
                                                                children: 'Для управления заявками перейдите в раздел "Заявки на материалы"'
                                                            })
                                                        ]
                                                    }, application.id))
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text-center py-10",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                        className: "text-muted-foreground",
                                                        children: user.type === "buyer" ? "У вас пока нет заявок" : "На ваши материалы пока нет заявок"
                                                    }),
                                                    user.type === "buyer" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                                        className: "mt-4",
                                                        onClick: ()=>router.push("/marketplace"),
                                                        children: "Перейти на витрину"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_tabs__WEBPACK_IMPORTED_MODULE_6__/* .TabsContent */ .nU, {
                                value: "platform-stats",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                    children: "Статистика платформы"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardDescription */ .SZ, {
                                                    children: "Общая статистика активности на платформе"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "space-y-6",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                                className: "text-lg font-medium mb-2",
                                                                children: "Активность пользователей"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                                                                className: "pb-2",
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                                                    className: "text-sm",
                                                                                    children: "Покупатели"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                                        className: "text-2xl font-bold",
                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                            title: "В реальном приложении здесь будет динамическое значение",
                                                                                            children: "-"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                                        className: "text-xs text-muted-foreground",
                                                                                        children: "Активных покупателей"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                                                                className: "pb-2",
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                                                    className: "text-sm",
                                                                                    children: "Продавцы"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                                        className: "text-2xl font-bold",
                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                            title: "В реальном приложении здесь будет динамическое значение",
                                                                                            children: "-"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                                        className: "text-xs text-muted-foreground",
                                                                                        children: "Активных продавцов"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                                                                className: "pb-2",
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                                                    className: "text-sm",
                                                                                    children: "Новые регистрации"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                                        className: "text-2xl font-bold",
                                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                            title: "В реальном приложении здесь будет динамическое значение",
                                                                                            children: "-"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                                        className: "text-xs text-muted-foreground",
                                                                                        children: "За последние 7 дней"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                                className: "text-lg font-medium mb-2",
                                                                children: "Материалы и заявки"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                                                                className: "pb-2",
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                                                    className: "text-sm",
                                                                                    children: "Активные материалы"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                                        className: "text-2xl font-bold",
                                                                                        children: allMaterials.filter((m)=>m.status === "active").length
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                                        className: "text-xs text-muted-foreground",
                                                                                        children: "Доступны для покупки"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                                                                className: "pb-2",
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                                                    className: "text-sm",
                                                                                    children: "Ожидают модерации"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                                        className: "text-2xl font-bold",
                                                                                        children: allMaterials.filter((m)=>m.status === "pending").length
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                                        className: "text-xs text-muted-foreground",
                                                                                        children: "Требуют проверки"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                                                                className: "pb-2",
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                                                    className: "text-sm",
                                                                                    children: "Активные заявки"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                                        className: "text-2xl font-bold",
                                                                                        children: applications.filter((a)=>a.status === "active").length
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                                        className: "text-xs text-muted-foreground",
                                                                                        children: "В процессе"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                                                className: "text-lg font-medium mb-2",
                                                                children: "Сделки"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                                                                className: "pb-2",
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                                                    className: "text-sm",
                                                                                    children: "Завершенные сделки"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                                        className: "text-2xl font-bold",
                                                                                        children: applications.filter((a)=>a.status === "completed").length
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                                        className: "text-xs text-muted-foreground",
                                                                                        children: "Успешно завершены"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                                                                                className: "pb-2",
                                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                                                                    className: "text-sm",
                                                                                    children: "Отмененные заявки"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                                                        className: "text-2xl font-bold",
                                                                                        children: applications.filter((a)=>a.status === "cancelled").length
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                                                        className: "text-xs text-muted-foreground",
                                                                                        children: "Были отменены"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                                        className: "flex justify-end",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                                            variant: "outline",
                                                            onClick: ()=>router.push("/admin/reports"),
                                                            children: "Подробная статистика"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 1647:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F$: function() { return /* binding */ AvatarImage; },
/* harmony export */   Q5: function() { return /* binding */ AvatarFallback; },
/* harmony export */   qE: function() { return /* binding */ Avatar; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4458);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7440);
/* __next_internal_client_entry_do_not_use__ Avatar,AvatarImage,AvatarFallback auto */ 



const Avatar = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
        ...props
    });
});
Avatar.displayName = _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC.displayName;
const AvatarImage = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .Ee, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("aspect-square h-full w-full", className),
        ...props
    });
});
AvatarImage.displayName = _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .Ee.displayName;
const AvatarFallback = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__/* .Fallback */ .NY, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
        ...props
    });
});
AvatarFallback.displayName = _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__/* .Fallback */ .NY.displayName;



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

/***/ 495:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: function() { return /* binding */ Button; }
/* harmony export */ });
/* unused harmony export buttonVariants */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1538);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3027);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7440);





const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__/* .Slot */ .g7 : "button";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comp, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";



/***/ }),

/***/ 6013:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ol: function() { return /* binding */ CardHeader; },
/* harmony export */   SZ: function() { return /* binding */ CardDescription; },
/* harmony export */   Zb: function() { return /* binding */ Card; },
/* harmony export */   aY: function() { return /* binding */ CardContent; },
/* harmony export */   eW: function() { return /* binding */ CardFooter; },
/* harmony export */   ll: function() { return /* binding */ CardTitle; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7440);



const Card = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    });
});
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col space-y-1.5 p-6", className),
        ...props
    });
});
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    });
});
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-sm text-muted-foreground", className),
        ...props
    });
});
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("p-6 pt-0", className),
        ...props
    });
});
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center p-6 pt-0", className),
        ...props
    });
});
CardFooter.displayName = "CardFooter";



/***/ }),

/***/ 5273:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SP: function() { return /* binding */ TabsTrigger; },
/* harmony export */   dr: function() { return /* binding */ TabsList; },
/* harmony export */   mQ: function() { return /* binding */ Tabs; },
/* harmony export */   nU: function() { return /* binding */ TabsContent; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2447);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7440);
/* __next_internal_client_entry_do_not_use__ Tabs,TabsList,TabsTrigger,TabsContent auto */ 



const Tabs = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC;
const TabsList = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .List */ .aV, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className),
        ...props
    });
});
TabsList.displayName = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .List */ .aV.displayName;
const TabsTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", className),
        ...props
    });
});
TabsTrigger.displayName = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz.displayName;
const TabsContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
        ...props
    });
});
TabsContent.displayName = _radix_ui_react_tabs__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY.displayName;



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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [9247,4766,559,1860,2971,7023,1744], function() { return __webpack_exec__(9842); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);