(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3602,6807],{

/***/ 2895:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3737));


/***/ }),

/***/ 3737:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ApplicationsPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _context_auth_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8245);
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6013);
/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6975);
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4693);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(495);
/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6910);
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4910);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3028);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6807);
/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5657);
/* harmony import */ var _barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3550);
/* harmony import */ var _barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5733);
/* harmony import */ var _barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2940);
/* harmony import */ var _barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1935);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6463);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6459);
/* __next_internal_client_entry_do_not_use__ default auto */ 














function ApplicationsPage() {
    const { user } = (0,_context_auth_context__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();
    const { toast } = (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_8__/* .useToast */ .pm)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const [applications, setApplications] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const data = await (0,_services_application_service__WEBPACK_IMPORTED_MODULE_10__/* .getAllApplications */ .Rl)();
                setApplications(data);
                const usersData = await (0,_services_user_service__WEBPACK_IMPORTED_MODULE_11__/* .getAllUsers */ .AW)();
                setUsers(usersData);
            } catch (error) {
                console.error("Error fetching data:", error);
                toast({
                    variant: "destructive",
                    title: "Ошибка",
                    description: "Не удалось загрузить данные"
                });
            } finally{
                setIsLoading(false);
            }
        };
        fetchData();
    }, [
        toast
    ]);
    const getUserTypeFromId = (userId)=>{
        const user = users.find((u)=>u.id === userId);
        return user ? user.type : "unknown";
    };
    const handleUpdateStatus = async (applicationId, newStatus)=>{
        try {
            const updatedApp = await (0,_services_application_service__WEBPACK_IMPORTED_MODULE_10__/* .updateApplicationStatus */ .kP)(applicationId, newStatus);
            setApplications(applications.map((a)=>a.id === applicationId ? {
                    ...a,
                    status: newStatus
                } : a));
            if (user) {
                await (0,_services_notification_service__WEBPACK_IMPORTED_MODULE_12__/* .createApplicationStatusNotification */ .Co)(applicationId, updatedApp.title, updatedApp.userId, newStatus, user.id);
            }
            if (user) {
                await (0,_services_admin_service__WEBPACK_IMPORTED_MODULE_13__/* .addAdminLog */ .UE)({
                    userId: user.id,
                    userName: user.name,
                    action: "update_application_status",
                    details: "Изменен статус заявки ".concat(applicationId, " на ").concat(newStatus),
                    ip: "127.0.0.1"
                });
            }
            toast({
                title: "Статус обновлен",
                description: 'Статус заявки успешно изменен на "'.concat(newStatus === "active" ? "Активна" : newStatus === "completed" ? "Завершена" : "Отменена", '"')
            });
        } catch (error) {
            console.error("Error updating application status:", error);
            let errorMessage = "Не удалось обновить статус заявки";
            if (error instanceof Error) {
                errorMessage = error.message;
            } else if (typeof error === "object" && error !== null && "message" in error) {
                errorMessage = String(error.message);
            }
            toast({
                variant: "destructive",
                title: "Ошибка",
                description: errorMessage
            });
        }
    };
    const getMaterialTypeLabel = (type)=>{
        switch(type){
            case "paper":
                return "Бумага";
            case "plastic":
                return "Пластик";
            case "glass":
                return "Стекло";
            case "metal":
                return "Металл";
            case "electronics":
                return "Электроника";
            default:
                return type;
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "flex items-center justify-center h-full",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                className: "text-muted-foreground",
                children: "Загрузка заявок..."
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                        className: "text-3xl font-bold",
                        children: "Управление заявками"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_5__/* .Badge */ .C, {
                        variant: "outline",
                        children: [
                            applications.length,
                            " заявок"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .Zb, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardHeader */ .Ol, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardTitle */ .ll, {
                                children: "Список заявок"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardDescription */ .SZ, {
                                children: "Управление заявками на платформе. Вы можете изменять статусы заявок и модерировать их."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardContent */ .aY, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .Table */ .iA, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHeader */ .xD, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableRow */ .SC, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Заголовок"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Пользователь"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Тип материала"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Количество (кг)"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Цена (₸/кг)"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Статус"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Дата создания"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                className: "text-right",
                                                children: "Действия"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableBody */ .RM, {
                                    children: applications.length > 0 ? applications.map((application)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableRow */ .SC, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    className: "font-medium",
                                                    children: application.title
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    children: [
                                                        application.userName || "Пользователь",
                                                        application.userId && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_5__/* .Badge */ .C, {
                                                            variant: "outline",
                                                            className: "ml-2",
                                                            children: getUserTypeFromId(application.userId) === "seller" ? "Продавец" : "Покупатель"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    children: getMaterialTypeLabel(application.materialType)
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    children: application.quantity
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    children: application.price
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_5__/* .Badge */ .C, {
                                                        variant: application.status === "active" ? "default" : application.status === "completed" ? "secondary" : application.status === "pending" ? "outline" : "destructive",
                                                        className: application.status === "completed" ? "bg-green-500 hover:bg-green-600" : "",
                                                        children: application.status === "active" ? "Активна" : application.status === "completed" ? "Завершена" : application.status === "pending" ? "Ожидает модерации" : "Отменена"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    children: new Date(application.createdAt).toLocaleDateString()
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenu */ .h_, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuTrigger */ .$F, {
                                                                asChild: true,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                                                                    variant: "ghost",
                                                                    size: "icon",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                                            className: "h-4 w-4"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                            className: "sr-only",
                                                                            children: "Меню"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuContent */ .AW, {
                                                                align: "end",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuLabel */ .Ju, {
                                                                        children: "Действия"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuSeparator */ .VD, {}),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                                                        onClick: ()=>router.push("/admin/applications/".concat(application.id)),
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                children: "Просмотреть детали"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuSeparator */ .VD, {}),
                                                                    application.status === "pending" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                                                        onClick: ()=>handleUpdateStatus(application.id, "active"),
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                children: "Активировать"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    application.status !== "completed" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                                                        onClick: ()=>handleUpdateStatus(application.id, "completed"),
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                children: "Завершить"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    application.status !== "cancelled" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                                                        onClick: ()=>handleUpdateStatus(application.id, "cancelled"),
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                children: "Отменить"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    application.status !== "active" && application.status !== "pending" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                                                        onClick: ()=>handleUpdateStatus(application.id, "active"),
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                children: "Активировать"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }, application.id)) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableRow */ .SC, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                            colSpan: 8,
                                            className: "text-center py-6",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                className: "text-muted-foreground",
                                                children: "Заявки отсутствуют"
                                            })
                                        })
                                    })
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

/***/ 2940:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ CircleCheckBig; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const CircleCheckBig = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("CircleCheckBig", [
    [
        "path",
        {
            d: "M21.801 10A10 10 0 1 1 17 3.335",
            key: "yps3ct"
        }
    ],
    [
        "path",
        {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }
    ]
]);
 //# sourceMappingURL=circle-check-big.js.map


/***/ }),

/***/ 1935:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ CircleX; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const CircleX = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("CircleX", [
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
        "path",
        {
            d: "m15 9-6 6",
            key: "1uzhvr"
        }
    ],
    [
        "path",
        {
            d: "m9 9 6 6",
            key: "z0biqf"
        }
    ]
]);
 //# sourceMappingURL=circle-x.js.map


/***/ }),

/***/ 5733:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ Eye; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Eye = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Eye", [
    [
        "path",
        {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
]);
 //# sourceMappingURL=eye.js.map


/***/ }),

/***/ 6463:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1169);
/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "useParams")) __webpack_require__.d(__webpack_exports__, { useParams: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.useParams; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "usePathname")) __webpack_require__.d(__webpack_exports__, { usePathname: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.usePathname; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "useRouter")) __webpack_require__.d(__webpack_exports__, { useRouter: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.useRouter; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__, "useSearchParams")) __webpack_require__.d(__webpack_exports__, { useSearchParams: function() { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__.useSearchParams; } });


//# sourceMappingURL=navigation.js.map

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

/***/ 6807:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Co: function() { return /* binding */ createApplicationStatusNotification; },
/* harmony export */   SF: function() { return /* binding */ markAllAsRead; },
/* harmony export */   TH: function() { return /* binding */ getNotifications; },
/* harmony export */   createMaterialNotification: function() { return /* binding */ createMaterialNotification; },
/* harmony export */   createNotificationForStaff: function() { return /* binding */ createNotificationForStaff; },
/* harmony export */   createNotificationForUser: function() { return /* binding */ createNotificationForUser; },
/* harmony export */   rj: function() { return /* binding */ getUnreadNotificationsCount; },
/* harmony export */   zJ: function() { return /* binding */ markAsRead; }
/* harmony export */ });
/* unused harmony exports createNotification, createApplicationNotificationForAdmins, createApplicationNotification, deleteNotification, deleteAllNotifications */
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8590);

const NOTIFICATIONS_KEY = "eco_market_notifications";
const getNotificationsFromStorage = ()=>{
    const notifications = localStorage.getItem(NOTIFICATIONS_KEY);
    if (notifications) {
        return JSON.parse(notifications);
    }
    const initialNotifications = {
        user1: [
            {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),
                userId: "user1",
                title: "Новая заявка",
                message: "Ваша заявка на сдачу макулатуры была принята",
                read: false,
                createdAt: new Date().toISOString(),
                type: "success",
                actionUrl: "/profile/applications",
                actionText: "Перейти к заявкам"
            },
            {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),
                userId: "user1",
                title: "Сделка завершена",
                message: "Сделка по сдаче электроники успешно завершена",
                read: true,
                createdAt: new Date(Date.now() - 86400000).toISOString(),
                type: "info"
            }
        ],
        user2: [
            {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),
                userId: "user2",
                title: "Новое сообщение",
                message: "У вас новое сообщение от пользователя Иван Петров",
                read: false,
                createdAt: new Date().toISOString(),
                type: "info",
                actionUrl: "/messages",
                actionText: "Прочитать"
            }
        ],
        admin1: [
            {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),
                userId: "admin1",
                title: "Новый материал на проверке",
                message: "Пользователь Иван Петров добавил новый материал, требующий проверки",
                read: false,
                createdAt: new Date().toISOString(),
                type: "warning",
                actionUrl: "/admin/materials",
                actionText: "Проверить",
                relatedUserId: "user1",
                relatedEntityType: "material"
            }
        ],
        manager1: [
            {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),
                userId: "manager1",
                title: "Новая заявка требует внимания",
                message: "Поступила новая заявка от пользователя Анна Иванова",
                read: false,
                createdAt: new Date().toISOString(),
                type: "info",
                actionUrl: "/admin/applications",
                actionText: "Просмотреть",
                relatedUserId: "user2",
                relatedEntityType: "application"
            }
        ]
    };
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(initialNotifications));
    return initialNotifications;
};
const saveNotifications = (notificationsMap)=>{
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notificationsMap));
};
const getNotifications = async (userId)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const notificationsMap = getNotificationsFromStorage();
    return notificationsMap[userId] || [];
};
const createNotification = async (notification)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const notificationsMap = getNotificationsFromStorage();
    const newNotification = {
        ...notification,
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),
        read: false,
        createdAt: new Date().toISOString()
    };
    if (!notificationsMap[notification.userId]) {
        notificationsMap[notification.userId] = [];
    }
    notificationsMap[notification.userId].unshift(newNotification);
    saveNotifications(notificationsMap);
    return newNotification;
};
const markAsRead = async (notificationId)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const notificationsMap = getNotificationsFromStorage();
    for(const userId in notificationsMap){
        const userNotifications = notificationsMap[userId];
        const index = userNotifications.findIndex((n)=>n.id === notificationId);
        if (index !== -1) {
            userNotifications[index].read = true;
            saveNotifications(notificationsMap);
            return userNotifications[index];
        }
    }
    throw new Error("Notification not found");
};
const markAllAsRead = async (userId)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const notificationsMap = getNotificationsFromStorage();
    if (!notificationsMap[userId]) {
        return [];
    }
    notificationsMap[userId] = notificationsMap[userId].map((notification)=>({
            ...notification,
            read: true
        }));
    saveNotifications(notificationsMap);
    return notificationsMap[userId];
};
const createNotificationForUser = async function(userId, title, message) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return createNotification({
        userId,
        title,
        message,
        ...options
    });
};
const createNotificationForStaff = async function(title, message) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const users = JSON.parse(localStorage.getItem("eco_market_users") || "[]");
    const staffUsers = users.filter((user)=>user.role === "admin" || user.role === "manager");
    const promises = staffUsers.map((user)=>createNotification({
            userId: user.id,
            title,
            message,
            ...options
        }));
    await Promise.all(promises);
    return {
        success: true
    };
};
const createApplicationNotificationForAdmins = async (applicationId, applicationTitle, userId, userName)=>{
    const users = JSON.parse(localStorage.getItem("eco_market_users") || "[]");
    const adminUsers = users.filter((user)=>user.role === "admin" || user.role === "manager");
    const promises = adminUsers.map((adminUser)=>createNotification({
            userId: adminUser.id,
            title: "Новая заявка",
            message: "Пользователь ".concat(userName, ' создал новую заявку "').concat(applicationTitle, '"'),
            type: "info",
            actionUrl: "/admin/applications",
            actionText: "Просмотреть заявку",
            relatedUserId: userId,
            relatedEntityId: applicationId,
            relatedEntityType: "application"
        }));
    await Promise.all(promises);
    return {
        success: true
    };
};
const createApplicationNotification = async (applicationId, applicationTitle, userId, sellerUserId)=>{
    let userName = "Пользователь";
    try {
        const users = JSON.parse(localStorage.getItem("eco_market_users") || "[]");
        const user = users.find((u)=>u.id === userId);
        if (user) {
            userName = user.name;
        }
    } catch (error) {
        console.error("Error getting user name:", error);
    }
    await createNotificationForUser(userId, "Заявка создана", 'Ваша заявка "'.concat(applicationTitle, '" успешно создана'), {
        type: "success",
        actionUrl: "/profile/applications",
        actionText: "Перейти к заявкам",
        relatedEntityId: applicationId,
        relatedEntityType: "application"
    });
    await createNotificationForUser(sellerUserId, "Новая заявка", 'Поступила новая заявка "'.concat(applicationTitle, '" от пользователя ').concat(userName), {
        type: "info",
        actionUrl: "/profile/applications",
        actionText: "Просмотреть заявку",
        relatedUserId: userId,
        relatedEntityId: applicationId,
        relatedEntityType: "application"
    });
    await createApplicationNotificationForAdmins(applicationId, applicationTitle, userId, userName);
    return {
        success: true
    };
};
const createMaterialNotification = async (materialId, materialName, userId, status)=>{
    await createNotificationForUser(userId, status === "active" ? "Материал одобрен" : status === "rejected" ? "Материал отклонен" : "Материал на проверке", status === "active" ? 'Ваш материал "'.concat(materialName, '" был одобрен и опубликован') : status === "rejected" ? 'Ваш материал "'.concat(materialName, '" был отклонен. Пожалуйста, проверьте требования и попробуйте снова') : 'Ваш материал "'.concat(materialName, '" отправлен на проверку'), {
        type: status === "active" ? "success" : status === "rejected" ? "error" : "info",
        actionUrl: "/profile/materials",
        actionText: "Перейти к материалам",
        relatedEntityId: materialId,
        relatedEntityType: "material"
    });
    if (status === "pending") {
        await createNotificationForStaff("Новый материал требует проверки", 'Пользователь добавил новый материал "'.concat(materialName, '"'), {
            type: "warning",
            actionUrl: "/admin/materials",
            actionText: "Проверить",
            relatedUserId: userId,
            relatedEntityId: materialId,
            relatedEntityType: "material"
        });
    }
    return {
        success: true
    };
};
const createApplicationStatusNotification = async (applicationId, applicationTitle, userId, status, updatedByUserId)=>{
    await createNotificationForUser(userId, status === "completed" ? "Заявка завершена" : status === "cancelled" ? "Заявка отменена" : "Статус заявки изменен", status === "completed" ? 'Ваша заявка "'.concat(applicationTitle, '" была успешно завершена') : status === "cancelled" ? 'Ваша заявка "'.concat(applicationTitle, '" была отменена') : 'Статус вашей заявки "'.concat(applicationTitle, '" был изменен на "').concat(status === "active" ? "Активна" : status, '"'), {
        type: status === "completed" ? "success" : status === "cancelled" ? "error" : "info",
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
const getUnreadNotificationsCount = async (userId)=>{
    const notifications = await getNotifications(userId);
    return notifications.filter((n)=>!n.read).length;
};
const deleteNotification = async (notificationId)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const notificationsMap = getNotificationsFromStorage();
    for(const userId in notificationsMap){
        const userNotifications = notificationsMap[userId];
        const index = userNotifications.findIndex((n)=>n.id === notificationId);
        if (index !== -1) {
            userNotifications.splice(index, 1);
            saveNotifications(notificationsMap);
            return {
                success: true
            };
        }
    }
    throw new Error("Notification not found");
};
const deleteAllNotifications = async (userId)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const notificationsMap = getNotificationsFromStorage();
    if (notificationsMap[userId]) {
        notificationsMap[userId] = [];
        saveNotifications(notificationsMap);
    }
    return {
        success: true
    };
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
/******/ __webpack_require__.O(0, [9247,4766,7876,5176,193,1860,270,2971,7023,1744], function() { return __webpack_exec__(2895); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);