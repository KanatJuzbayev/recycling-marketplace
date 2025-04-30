(() => {
var exports = {};
exports.id = 674;
exports.ids = [674];
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

/***/ 4965:
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
/* harmony import */ var D_UGS_update_recycling_marketplace_client_app_admin_users_page_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9049);
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
        'users',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9049)), "D:\\UGS\\update\\recycling-marketplace\\client\\app\\admin\\users\\page.tsx"],
          
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
const pages = ["D:\\UGS\\update\\recycling-marketplace\\client\\app\\admin\\users\\page.tsx"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/admin/users/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_4__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_5__/* .RouteKind */ .x.APP_PAGE,
        page: "/admin/users/page",
        pathname: "/admin/users",
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

/***/ 7347:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4149));


/***/ }),

/***/ 4149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ UsersPage)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(326);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(7577);
// EXTERNAL MODULE: ./context/auth-context.tsx
var auth_context = __webpack_require__(3860);
// EXTERNAL MODULE: ./components/ui/card.tsx
var card = __webpack_require__(2643);
// EXTERNAL MODULE: ./components/ui/table.tsx
var table = __webpack_require__(5940);
// EXTERNAL MODULE: ./components/ui/badge.tsx
var badge = __webpack_require__(567);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(772);
// EXTERNAL MODULE: ./components/ui/dropdown-menu.tsx
var dropdown_menu = __webpack_require__(97);
// EXTERNAL MODULE: ./services/user-service.ts
var user_service = __webpack_require__(7065);
// EXTERNAL MODULE: ./services/admin-service.ts
var admin_service = __webpack_require__(7055);
// EXTERNAL MODULE: ./components/ui/use-toast.ts
var use_toast = __webpack_require__(4008);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/shield-alert.js
var shield_alert = __webpack_require__(5601);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/shield-check.js
var shield_check = __webpack_require__(763);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/ellipsis.js
var ellipsis = __webpack_require__(5919);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(2881);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/user-x.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const UserX = (0,createLucideIcon/* default */.Z)("UserX", [
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
        "line",
        {
            x1: "17",
            x2: "22",
            y1: "8",
            y2: "13",
            key: "3nzzx3"
        }
    ],
    [
        "line",
        {
            x1: "22",
            x2: "17",
            y1: "8",
            y2: "13",
            key: "1swrse"
        }
    ]
]);
 //# sourceMappingURL=user-x.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/user-check.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const UserCheck = (0,createLucideIcon/* default */.Z)("UserCheck", [
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
        "polyline",
        {
            points: "16 11 18 13 22 9",
            key: "1pwet4"
        }
    ]
]);
 //# sourceMappingURL=user-check.js.map

;// CONCATENATED MODULE: ./app/admin/users/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 











function UsersPage() {
    const { user } = (0,auth_context/* useAuth */.a)();
    const { toast } = (0,use_toast/* useToast */.pm)();
    const [users, setUsers] = (0,react.useState)([]);
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    null;
    const handleUpdateStatus = async (userId, newStatus)=>{
        try {
            await (0,user_service/* updateUserStatus */.OL)(userId, newStatus);
            setUsers(users.map((u)=>u.id === userId ? {
                    ...u,
                    status: newStatus
                } : u));
            if (user) {
                await (0,admin_service/* addAdminLog */.UE)({
                    userId: user.id,
                    userName: user.name,
                    action: "update_user_status",
                    details: `Изменен статус пользователя ${userId} на ${newStatus}`,
                    ip: "127.0.0.1"
                });
            }
            toast({
                title: "Статус обновлен",
                description: `Статус пользователя успешно изменен на "${newStatus === "active" ? "Активен" : "Заблокирован"}"`
            });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Ошибка",
                description: "Не удалось обновить статус пользователя"
            });
        }
    };
    const handleUpdateRole = async (userId, newRole)=>{
        if (user?.role !== "admin") {
            toast({
                variant: "destructive",
                title: "Доступ запрещен",
                description: "Только администраторы могут изменять роли пользователей"
            });
            return;
        }
        try {
            await (0,user_service/* updateUserRole */.c7)(userId, newRole);
            setUsers(users.map((u)=>u.id === userId ? {
                    ...u,
                    role: newRole
                } : u));
            if (user) {
                await (0,admin_service/* addAdminLog */.UE)({
                    userId: user.id,
                    userName: user.name,
                    action: "update_user_role",
                    details: `Изменена роль пользователя ${userId} на ${newRole}`,
                    ip: "127.0.0.1"
                });
            }
            toast({
                title: "Роль обновлена",
                description: `Роль пользователя успешно изменена на "${newRole === "admin" ? "Администратор" : newRole === "manager" ? "Менеджер" : "Пользователь"}"`
            });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Ошибка",
                description: "Не удалось обновить роль пользователя"
            });
        }
    };
    const getRoleLabel = (role)=>{
        switch(role){
            case "admin":
                return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(badge/* Badge */.C, {
                    variant: "destructive",
                    className: "flex items-center gap-1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime.jsx(shield_alert/* default */.Z, {
                            className: "h-3 w-3"
                        }),
                        " Администратор"
                    ]
                });
            case "manager":
                return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(badge/* Badge */.C, {
                    variant: "default",
                    className: "flex items-center gap-1",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime.jsx(shield_check/* default */.Z, {
                            className: "h-3 w-3"
                        }),
                        " Менеджер"
                    ]
                });
            default:
                return /*#__PURE__*/ react_jsx_runtime.jsx(badge/* Badge */.C, {
                    variant: "outline",
                    children: "Пользователь"
                });
        }
    };
    const getTypeLabel = (type)=>{
        switch(type){
            case "staff":
                return /*#__PURE__*/ react_jsx_runtime.jsx(badge/* Badge */.C, {
                    variant: "secondary",
                    children: "Персонал"
                });
            case "seller":
                return /*#__PURE__*/ react_jsx_runtime.jsx(badge/* Badge */.C, {
                    variant: "outline",
                    children: "Продавец"
                });
            case "buyer":
                return /*#__PURE__*/ react_jsx_runtime.jsx(badge/* Badge */.C, {
                    variant: "outline",
                    children: "Покупатель"
                });
            default:
                return /*#__PURE__*/ react_jsx_runtime.jsx(badge/* Badge */.C, {
                    variant: "outline",
                    children: type || "Не указан"
                });
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ react_jsx_runtime.jsx("div", {
            className: "flex items-center justify-center h-full",
            children: /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                className: "text-muted-foreground",
                children: "Загрузка пользователей..."
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx("h1", {
                        className: "text-3xl font-bold",
                        children: "Управление пользователями"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(badge/* Badge */.C, {
                        variant: "outline",
                        children: [
                            users.length,
                            " пользователей"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* Card */.Zb, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardHeader */.Ol, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardTitle */.ll, {
                                children: "Список пользователей"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardDescription */.SZ, {
                                children: [
                                    "Управление пользователями платформы.",
                                    " ",
                                    user?.role === "admin" ? "Как администратор, вы можете изменять роли и статусы пользователей." : "Как менеджер, вы можете изменять статусы пользователей."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardContent */.aY, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(table/* Table */.iA, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableHeader */.xD, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(table/* TableRow */.SC, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableHead */.ss, {
                                                children: "Имя"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableHead */.ss, {
                                                children: "Email"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableHead */.ss, {
                                                children: "Тип"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableHead */.ss, {
                                                children: "Роль"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableHead */.ss, {
                                                children: "Статус"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableHead */.ss, {
                                                children: "Дата регистрации"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableHead */.ss, {
                                                className: "text-right",
                                                children: "Действия"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableBody */.RM, {
                                    children: users.map((user)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(table/* TableRow */.SC, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableCell */.pj, {
                                                    className: "font-medium",
                                                    children: user.name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableCell */.pj, {
                                                    children: user.email
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableCell */.pj, {
                                                    children: getTypeLabel(user.type)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableCell */.pj, {
                                                    children: getRoleLabel(user.role)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableCell */.pj, {
                                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(badge/* Badge */.C, {
                                                        variant: user.status === "active" ? "success" : "destructive",
                                                        className: user.status === "active" ? "bg-green-500 hover:bg-green-600" : "",
                                                        children: user.status === "active" ? "Активен" : "Заблокирован"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableCell */.pj, {
                                                    children: user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "Не указана"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableCell */.pj, {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.h_, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu/* DropdownMenuTrigger */.$F, {
                                                                asChild: true,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                                                    variant: "ghost",
                                                                    size: "icon",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx(ellipsis/* default */.Z, {
                                                                            className: "h-4 w-4"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                            className: "sr-only",
                                                                            children: "Меню"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuContent */.AW, {
                                                                align: "end",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu/* DropdownMenuLabel */.Ju, {
                                                                        children: "Действия"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu/* DropdownMenuSeparator */.VD, {}),
                                                                    user.status === "active" ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */.Xi, {
                                                                        onClick: ()=>handleUpdateStatus(user.id, "blocked"),
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime.jsx(UserX, {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                                children: "Заблокировать"
                                                                            })
                                                                        ]
                                                                    }) : /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */.Xi, {
                                                                        onClick: ()=>handleUpdateStatus(user.id, "active"),
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime.jsx(UserCheck, {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                                children: "Активировать"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    user.role !== "admin" && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(react_jsx_runtime.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu/* DropdownMenuSeparator */.VD, {}),
                                                                            /*#__PURE__*/ react_jsx_runtime.jsx(dropdown_menu/* DropdownMenuLabel */.Ju, {
                                                                                children: "Изменить роль"
                                                                            }),
                                                                            user.role !== "manager" && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */.Xi, {
                                                                                onClick: ()=>handleUpdateRole(user.id, "manager"),
                                                                                disabled: user.role === "admin" || user.role === "manager",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime.jsx(shield_check/* default */.Z, {
                                                                                        className: "mr-2 h-4 w-4"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                                        children: "Сделать менеджером"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            user.role !== "user" && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */.Xi, {
                                                                                onClick: ()=>handleUpdateRole(user.id, "user"),
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime.jsx(UserCheck, {
                                                                                        className: "mr-2 h-4 w-4"
                                                                                    }),
                                                                                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                                        children: "Сделать обычным пользователем"
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }, user.id))
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

/***/ 7065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nq: () => (/* binding */ updateUser),
/* harmony export */   OL: () => (/* binding */ updateUserStatus),
/* harmony export */   c7: () => (/* binding */ updateUserRole),
/* harmony export */   h8: () => (/* binding */ deleteUser)
/* harmony export */ });
/* unused harmony exports getAllUsers, getUserById */
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
    return users.map(({ password, ...user })=>user);
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


/***/ }),

/***/ 9049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8570);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\app\admin\users\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\app\admin\users\page.tsx#default`));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [960,230,741], () => (__webpack_exec__(4965)));
module.exports = __webpack_exports__;

})();