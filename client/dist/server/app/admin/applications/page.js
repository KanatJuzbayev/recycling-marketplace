(() => {
var exports = {};
exports.id = 602;
exports.ids = [602];
exports.modules = {

/***/ 7849:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external");

/***/ }),

/***/ 2934:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ 5403:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external");

/***/ }),

/***/ 4580:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ 4749:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external");

/***/ }),

/***/ 5869:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ 399:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 8761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_6___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var D_UGS_update_recycling_marketplace_client_app_admin_applications_page_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1123);
/* harmony import */ var D_UGS_update_recycling_marketplace_client_app_admin_layout_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(596);
/* harmony import */ var D_UGS_update_recycling_marketplace_client_app_layout_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1973);
/* harmony import */ var next_dist_client_components_not_found_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5866);
/* harmony import */ var next_dist_client_components_not_found_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_not_found_error__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3191);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8716);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7922);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5231);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_7__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_7__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);




"TURBOPACK { transition: next-ssr }";


// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'admin',
        {
        children: [
        'applications',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1123)), "D:\\UGS\\update\\recycling-marketplace\\client\\app\\admin\\applications\\page.tsx"],
          
        }]
      },
        {
        
        
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 596)), "D:\\UGS\\update\\recycling-marketplace\\client\\app\\admin\\layout.tsx"],
'loading': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2406)), "D:\\UGS\\update\\recycling-marketplace\\client\\app\\admin\\loading.tsx"],
        
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1973)), "D:\\UGS\\update\\recycling-marketplace\\client\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5866, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["D:\\UGS\\update\\recycling-marketplace\\client\\app\\admin\\applications\\page.tsx"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/admin/applications/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_4__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_5__/* .RouteKind */ .x.APP_PAGE,
        page: "/admin/applications/page",
        pathname: "/admin/applications",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 9176:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7320));


/***/ }),

/***/ 7320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ApplicationsPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_auth_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3860);
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2643);
/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5940);
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(772);
/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97);
/* harmony import */ var _services_application_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(523);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7055);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7444);
/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4008);
/* harmony import */ var _barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5919);
/* harmony import */ var _barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2714);
/* harmony import */ var _barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(361);
/* harmony import */ var _barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9669);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5047);
/* __next_internal_client_entry_do_not_use__ default auto */ 














function ApplicationsPage() {
    const { user } = (0,_context_auth_context__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();
    const { toast } = (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_8__/* .useToast */ .pm)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const [applications, setApplications] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    null;
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
                await (0,_services_notification_service__WEBPACK_IMPORTED_MODULE_11__/* .createApplicationStatusNotification */ .Co)(applicationId, updatedApp.title, updatedApp.userId, newStatus, user.id);
            }
            if (user) {
                await (0,_services_admin_service__WEBPACK_IMPORTED_MODULE_12__/* .addAdminLog */ .UE)({
                    userId: user.id,
                    userName: user.name,
                    action: "update_application_status",
                    details: `Изменен статус заявки ${applicationId} на ${newStatus}`,
                    ip: "127.0.0.1"
                });
            }
            toast({
                title: "Статус обновлен",
                description: `Статус заявки успешно изменен на "${newStatus === "active" ? "Активна" : newStatus === "completed" ? "Завершена" : "Отменена"}"`
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
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex items-center justify-center h-full",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
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
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
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
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardTitle */ .ll, {
                                children: "Список заявок"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardDescription */ .SZ, {
                                children: "Управление заявками на платформе. Вы можете изменять статусы заявок и модерировать их."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardContent */ .aY, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .Table */ .iA, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHeader */ .xD, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableRow */ .SC, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Заголовок"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Пользователь"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Тип материала"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Количество (кг)"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Цена (₸/кг)"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Статус"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Дата создания"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                className: "text-right",
                                                children: "Действия"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableBody */ .RM, {
                                    children: applications.length > 0 ? applications.map((application)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableRow */ .SC, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    className: "font-medium",
                                                    children: application.title
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    children: [
                                                        application.userName || "Пользователь",
                                                        application.userId && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_badge__WEBPACK_IMPORTED_MODULE_5__/* .Badge */ .C, {
                                                            variant: "outline",
                                                            className: "ml-2",
                                                            children: getUserTypeFromId(application.userId) === "seller" ? "Продавец" : "Покупатель"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    children: getMaterialTypeLabel(application.materialType)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    children: application.quantity
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    children: application.price
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_badge__WEBPACK_IMPORTED_MODULE_5__/* .Badge */ .C, {
                                                        variant: application.status === "active" ? "default" : application.status === "completed" ? "secondary" : application.status === "pending" ? "outline" : "destructive",
                                                        className: application.status === "completed" ? "bg-green-500 hover:bg-green-600" : "",
                                                        children: application.status === "active" ? "Активна" : application.status === "completed" ? "Завершена" : application.status === "pending" ? "Ожидает модерации" : "Отменена"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    children: new Date(application.createdAt).toLocaleDateString()
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenu */ .h_, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuTrigger */ .$F, {
                                                                asChild: true,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                                                                    variant: "ghost",
                                                                    size: "icon",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                                            className: "h-4 w-4"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            className: "sr-only",
                                                                            children: "Меню"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuContent */ .AW, {
                                                                align: "end",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuLabel */ .Ju, {
                                                                        children: "Действия"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuSeparator */ .VD, {}),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                                                        onClick: ()=>router.push(`/admin/applications/${application.id}`),
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                children: "Просмотреть детали"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuSeparator */ .VD, {}),
                                                                    application.status === "pending" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                                                        onClick: ()=>handleUpdateStatus(application.id, "active"),
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                children: "Активировать"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    application.status !== "completed" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                                                        onClick: ()=>handleUpdateStatus(application.id, "completed"),
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                children: "Завершить"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    application.status !== "cancelled" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                                                        onClick: ()=>handleUpdateStatus(application.id, "cancelled"),
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                children: "Отменить"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    application.status !== "active" && application.status !== "pending" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                                                        onClick: ()=>handleUpdateStatus(application.id, "active"),
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
                                        }, application.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableRow */ .SC, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                            colSpan: 8,
                                            className: "text-center py-6",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
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

/***/ 5940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RM: () => (/* binding */ TableBody),
/* harmony export */   SC: () => (/* binding */ TableRow),
/* harmony export */   iA: () => (/* binding */ Table),
/* harmony export */   pj: () => (/* binding */ TableCell),
/* harmony export */   ss: () => (/* binding */ TableHead),
/* harmony export */   xD: () => (/* binding */ TableHeader)
/* harmony export */ });
/* unused harmony exports TableFooter, TableCaption */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7863);



const Table = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
            ref: ref,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("w-full caption-bottom text-sm", className),
            ...props
        })
    }));
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("[&_tr]:border-b", className),
        ...props
    }));
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("[&_tr:last-child]:border-0", className),
        ...props
    }));
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tfoot", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }));
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }));
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }));
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }));
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("caption", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("mt-4 text-sm text-muted-foreground", className),
        ...props
    }));
TableCaption.displayName = "TableCaption";



/***/ }),

/***/ 361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CircleCheckBig)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
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

/***/ 9669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CircleX)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
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

/***/ 5919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Ellipsis)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Ellipsis = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Ellipsis", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "1",
            key: "41hilf"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "12",
            r: "1",
            key: "1wjl8i"
        }
    ],
    [
        "circle",
        {
            cx: "5",
            cy: "12",
            r: "1",
            key: "1pcz8c"
        }
    ]
]);
 //# sourceMappingURL=ellipsis.js.map


/***/ }),

/***/ 2714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Eye)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
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

/***/ 523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   kP: () => (/* binding */ updateApplicationStatus)
/* harmony export */ });
/* unused harmony exports getApplications, getAllApplications, getApplicationById, createApplication, updateApplication, deleteApplication, getUserApplications, createApplicationStatusNotification */
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2665);

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
            const { createNotificationForStaff } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 7444));
            await createNotificationForStaff("Новая заявка требует проверки", `Продавец ${userName} создал новую заявку "${newApplication.title}"`, {
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
            const { createNotificationForUser } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 7444));
            await createNotificationForUser(application.sellerUserId, "Новая заявка на ваш материал", `Покупатель ${userName} создал новую заявку "${newApplication.title}"`, {
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
        const updateUrl = `${API_URL}/${id}`;
        console.log(`Updating application status in API: ${updateUrl}`);
        const applicationToUpdate = applications[index];
        const response = await fetch(updateUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                ...token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            },
            body: JSON.stringify(applicationToUpdate)
        });
        if (!response.ok) {
            const errorText = await response.text();
            console.error(`API request failed with status ${response.status}: ${errorText}`);
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
    const { createNotificationForUser } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 7444));
    await createNotificationForUser(userId, status === "completed" ? "Заявка принята" : "Заявка отклонена", status === "completed" ? `Ваша заявка "${applicationTitle}" была принята продавцом` : `Ваша заявка "${applicationTitle}" была отклонена продавцом`, {
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

/***/ 1123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8570);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\app\admin\applications\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\app\admin\applications\page.tsx#default`));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [960,230,741], () => (__webpack_exec__(8761)));
module.exports = __webpack_exports__;

})();