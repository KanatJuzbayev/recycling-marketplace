(() => {
var exports = {};
exports.id = 336;
exports.ids = [336];
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

/***/ 4481:
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
/* harmony import */ var D_UGS_update_recycling_marketplace_client_app_admin_system_settings_page_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6775);
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
        'system-settings',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6775)), "D:\\UGS\\update\\recycling-marketplace\\client\\app\\admin\\system-settings\\page.tsx"],
          
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
const pages = ["D:\\UGS\\update\\recycling-marketplace\\client\\app\\admin\\system-settings\\page.tsx"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/admin/system-settings/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_4__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_5__/* .RouteKind */ .x.APP_PAGE,
        page: "/admin/system-settings/page",
        pathname: "/admin/system-settings",
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

/***/ 5130:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2952));


/***/ }),

/***/ 2952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SystemSettingsPage)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(326);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(7577);
// EXTERNAL MODULE: ./context/auth-context.tsx
var auth_context = __webpack_require__(3860);
// EXTERNAL MODULE: ./components/ui/card.tsx
var card = __webpack_require__(2643);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(772);
// EXTERNAL MODULE: ./components/ui/switch.tsx + 1 modules
var ui_switch = __webpack_require__(6655);
// EXTERNAL MODULE: ./components/ui/label.tsx + 1 modules
var label = __webpack_require__(5842);
// EXTERNAL MODULE: ./components/ui/input.tsx
var input = __webpack_require__(4432);
// EXTERNAL MODULE: ./components/ui/tabs.tsx + 1 modules
var tabs = __webpack_require__(3427);
// EXTERNAL MODULE: ./components/ui/use-toast.ts
var use_toast = __webpack_require__(4008);
// EXTERNAL MODULE: ./services/admin-service.ts
var admin_service = __webpack_require__(7055);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/triangle-alert.js
var triangle_alert = __webpack_require__(949);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(2881);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/save.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Save = (0,createLucideIcon/* default */.Z)("Save", [
    [
        "path",
        {
            d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
            key: "1c8476"
        }
    ],
    [
        "path",
        {
            d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
            key: "1ydtos"
        }
    ],
    [
        "path",
        {
            d: "M7 3v4a1 1 0 0 0 1 1h7",
            key: "t51u73"
        }
    ]
]);
 //# sourceMappingURL=save.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/mail.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Mail = (0,createLucideIcon/* default */.Z)("Mail", [
    [
        "rect",
        {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2",
            key: "18n3k1"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ]
]);
 //# sourceMappingURL=mail.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/database.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Database = (0,createLucideIcon/* default */.Z)("Database", [
    [
        "ellipse",
        {
            cx: "12",
            cy: "5",
            rx: "9",
            ry: "3",
            key: "msslwz"
        }
    ],
    [
        "path",
        {
            d: "M3 5V19A9 3 0 0 0 21 19V5",
            key: "1wlel7"
        }
    ],
    [
        "path",
        {
            d: "M3 12A9 3 0 0 0 21 12",
            key: "mv7ke4"
        }
    ]
]);
 //# sourceMappingURL=database.js.map

;// CONCATENATED MODULE: ./app/admin/system-settings/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 











function SystemSettingsPage() {
    const { user } = (0,auth_context/* useAuth */.a)();
    const { toast } = (0,use_toast/* useToast */.pm)();
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    const [emailNotifications, setEmailNotifications] = (0,react.useState)(true);
    const [autoModeration, setAutoModeration] = (0,react.useState)(false);
    const [maintenanceMode, setMaintenanceMode] = (0,react.useState)(false);
    const [siteName, setSiteName] = (0,react.useState)("ЭкоМаркет");
    const [siteDescription, setSiteDescription] = (0,react.useState)("Платформа для сдачи и приема вторсырья");
    const [smtpHost, setSmtpHost] = (0,react.useState)("smtp.example.com");
    const [smtpPort, setSmtpPort] = (0,react.useState)("587");
    const [smtpUser, setSmtpUser] = (0,react.useState)("user@example.com");
    const [smtpPassword, setSmtpPassword] = (0,react.useState)("********");
    const [dbHost, setDbHost] = (0,react.useState)("localhost");
    const [dbPort, setDbPort] = (0,react.useState)("5432");
    const [dbName, setDbName] = (0,react.useState)("ecodb");
    const [dbUser, setDbUser] = (0,react.useState)("ecouser");
    null;
    const handleSaveSettings = async ()=>{
        setIsLoading(true);
        try {
            await new Promise((resolve)=>setTimeout(resolve, 1000));
            if (user) {
                await (0,admin_service/* addAdminLog */.UE)({
                    userId: user.id,
                    userName: user.name,
                    action: "update_system_settings",
                    details: "Обновлены системные настройки",
                    ip: "127.0.0.1"
                });
            }
            toast({
                title: "Настройки сохранены",
                description: "Системные настройки успешно обновлены"
            });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Ошибка",
                description: "Не удалось сохранить настройки"
            });
        } finally{
            setIsLoading(false);
        }
    };
    if (user && user.role !== "admin") {
        return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                    className: "flex items-center justify-between",
                    children: /*#__PURE__*/ react_jsx_runtime.jsx("h1", {
                        className: "text-3xl font-bold",
                        children: "Настройки системы"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-yellow-800 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-200",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx(triangle_alert/* default */.Z, {
                                    className: "mr-2 h-5 w-5"
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                    className: "font-medium",
                                    children: "Доступ запрещен"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                            className: "mt-2",
                            children: "Только администраторы имеют доступ к настройкам системы. Обратитесь к администратору, если вам требуется изменить системные настройки."
                        })
                    ]
                })
            ]
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
                        children: "Настройки системы"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ui_button/* Button */.z, {
                        onClick: handleSaveSettings,
                        disabled: isLoading,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(Save, {
                                className: "mr-2 h-4 w-4"
                            }),
                            isLoading ? "Сохранение..." : "Сохранить настройки"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tabs/* Tabs */.mQ, {
                defaultValue: "general",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tabs/* TabsList */.dr, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(tabs/* TabsTrigger */.SP, {
                                value: "general",
                                children: "Общие"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(tabs/* TabsTrigger */.SP, {
                                value: "email",
                                children: "Почта"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(tabs/* TabsTrigger */.SP, {
                                value: "database",
                                children: "База данных"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(tabs/* TabsTrigger */.SP, {
                                value: "security",
                                children: "Безопасность"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tabs/* TabsContent */.nU, {
                        value: "general",
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* Card */.Zb, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardHeader */.Ol, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardTitle */.ll, {
                                                children: "Общие настройки"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardDescription */.SZ, {
                                                children: "Основные настройки платформы"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardContent */.aY, {
                                        className: "space-y-4",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            className: "grid gap-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "grid gap-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                            htmlFor: "site-name",
                                                            children: "Название сайта"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                                            id: "site-name",
                                                            value: siteName,
                                                            onChange: (e)=>setSiteName(e.target.value)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "grid gap-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                            htmlFor: "site-description",
                                                            children: "Описание сайта"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                                            id: "site-description",
                                                            value: siteDescription,
                                                            onChange: (e)=>setSiteDescription(e.target.value)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                            className: "space-y-0.5",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                                    htmlFor: "maintenance-mode",
                                                                    children: "Режим обслуживания"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: "Временно закрыть доступ к сайту для пользователей"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(ui_switch/* Switch */.r, {
                                                            id: "maintenance-mode",
                                                            checked: maintenanceMode,
                                                            onCheckedChange: setMaintenanceMode
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* Card */.Zb, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardHeader */.Ol, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardTitle */.ll, {
                                                children: "Настройки модерации"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardDescription */.SZ, {
                                                children: "Управление автоматической модерацией контента"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardContent */.aY, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "space-y-0.5",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                            htmlFor: "auto-moderation",
                                                            children: "Автоматическая модерация"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                            className: "text-sm text-muted-foreground",
                                                            children: "Автоматически проверять новые материалы и заявки"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(ui_switch/* Switch */.r, {
                                                    id: "auto-moderation",
                                                    checked: autoModeration,
                                                    onCheckedChange: setAutoModeration
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(tabs/* TabsContent */.nU, {
                        value: "email",
                        className: "space-y-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* Card */.Zb, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardHeader */.Ol, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardTitle */.ll, {
                                            children: "Настройки почты"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardDescription */.SZ, {
                                            children: "Настройки SMTP-сервера для отправки уведомлений"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardContent */.aY, {
                                    className: "space-y-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "grid gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "space-y-0.5",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                                htmlFor: "email-notifications",
                                                                children: "Email-уведомления"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "Отправлять уведомления пользователям по email"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime.jsx(ui_switch/* Switch */.r, {
                                                        id: "email-notifications",
                                                        checked: emailNotifications,
                                                        onCheckedChange: setEmailNotifications
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "grid gap-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                                htmlFor: "smtp-host",
                                                                children: "SMTP-сервер"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                                                id: "smtp-host",
                                                                value: smtpHost,
                                                                onChange: (e)=>setSmtpHost(e.target.value)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "grid gap-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                                htmlFor: "smtp-port",
                                                                children: "Порт"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                                                id: "smtp-port",
                                                                value: smtpPort,
                                                                onChange: (e)=>setSmtpPort(e.target.value)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "grid gap-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                                htmlFor: "smtp-user",
                                                                children: "Пользователь"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                                                id: "smtp-user",
                                                                value: smtpUser,
                                                                onChange: (e)=>setSmtpUser(e.target.value)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "grid gap-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                                htmlFor: "smtp-password",
                                                                children: "Пароль"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                                                id: "smtp-password",
                                                                type: "password",
                                                                value: smtpPassword,
                                                                onChange: (e)=>setSmtpPassword(e.target.value)
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                                variant: "outline",
                                                className: "w-full",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime.jsx(Mail, {
                                                        className: "mr-2 h-4 w-4"
                                                    }),
                                                    "Отправить тестовое письмо"
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(tabs/* TabsContent */.nU, {
                        value: "database",
                        className: "space-y-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* Card */.Zb, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardHeader */.Ol, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardTitle */.ll, {
                                            children: "Настройки базы данных"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardDescription */.SZ, {
                                            children: "Параметры подключения к базе данных"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardContent */.aY, {
                                    className: "space-y-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "grid gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                className: "grid grid-cols-2 gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "grid gap-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                                htmlFor: "db-host",
                                                                children: "Хост"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                                                id: "db-host",
                                                                value: dbHost,
                                                                onChange: (e)=>setDbHost(e.target.value)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "grid gap-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                                htmlFor: "db-port",
                                                                children: "Порт"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                                                id: "db-port",
                                                                value: dbPort,
                                                                onChange: (e)=>setDbPort(e.target.value)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "grid gap-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                                htmlFor: "db-name",
                                                                children: "Имя базы данных"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                                                id: "db-name",
                                                                value: dbName,
                                                                onChange: (e)=>setDbName(e.target.value)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "grid gap-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                                htmlFor: "db-user",
                                                                children: "Пользователь"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                                                id: "db-user",
                                                                value: dbUser,
                                                                onChange: (e)=>setDbUser(e.target.value)
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                                variant: "outline",
                                                className: "w-full",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime.jsx(Database, {
                                                        className: "mr-2 h-4 w-4"
                                                    }),
                                                    "Проверить соединение"
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(tabs/* TabsContent */.nU, {
                        value: "security",
                        className: "space-y-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* Card */.Zb, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardHeader */.Ol, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardTitle */.ll, {
                                            children: "Настройки безопасности"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardDescription */.SZ, {
                                            children: "Параметры безопасности системы"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardContent */.aY, {
                                    className: "space-y-4",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "grid gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "space-y-0.5",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                                htmlFor: "two-factor-auth",
                                                                children: "Двухфакторная аутентификация"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "Обязательная 2FA для администраторов и менеджеров"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime.jsx(ui_switch/* Switch */.r, {
                                                        id: "two-factor-auth",
                                                        checked: true,
                                                        disabled: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "space-y-0.5",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                                htmlFor: "session-timeout",
                                                                children: "Время сессии"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "Автоматический выход после 30 минут неактивности"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime.jsx(ui_switch/* Switch */.r, {
                                                        id: "session-timeout",
                                                        checked: true,
                                                        disabled: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "space-y-0.5",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                                htmlFor: "activity-logging",
                                                                children: "Журналирование действий"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                                className: "text-sm text-muted-foreground",
                                                                children: "Запись всех действий администраторов и менеджеров"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime.jsx(ui_switch/* Switch */.r, {
                                                        id: "activity-logging",
                                                        checked: true,
                                                        disabled: true
                                                    })
                                                ]
                                            })
                                        ]
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

/***/ 4432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7863);



const Input = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        type: type,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    });
});
Input.displayName = "Input";



/***/ }),

/***/ 5842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* binding */ label_Label)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(326);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(7577);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var dist = __webpack_require__(5226);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-label/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ Label,Root auto */ // packages/react/label/src/label.tsx



var NAME = "Label";
var Label = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(dist/* Primitive */.WV.label, {
        ...props,
        ref: forwardedRef,
        onMouseDown: (event)=>{
            const target = event.target;
            if (target.closest("button, input, select, textarea")) return;
            props.onMouseDown?.(event);
            if (!event.defaultPrevented && event.detail > 1) event.preventDefault();
        }
    });
});
Label.displayName = NAME;
var Root = Label;
 //# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(9360);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(7863);
;// CONCATENATED MODULE: ./components/ui/label.tsx
/* __next_internal_client_entry_do_not_use__ Label auto */ 




const labelVariants = (0,class_variance_authority_dist/* cva */.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const label_Label = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime.jsx(Root, {
        ref: ref,
        className: (0,utils.cn)(labelVariants(), className),
        ...props
    }));
label_Label.displayName = Root.displayName;



/***/ }),

/***/ 6655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* binding */ switch_Switch)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(326);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(7577);
// EXTERNAL MODULE: ./node_modules/@radix-ui/primitive/dist/index.mjs
var dist = __webpack_require__(2561);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var react_compose_refs_dist = __webpack_require__(8051);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-context/dist/index.mjs
var react_context_dist = __webpack_require__(3095);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var react_use_controllable_state_dist = __webpack_require__(2067);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-previous/dist/index.mjs
var react_use_previous_dist = __webpack_require__(3405);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-size/dist/index.mjs
var react_use_size_dist = __webpack_require__(2566);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var react_primitive_dist = __webpack_require__(5226);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-switch/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ Root,Switch,SwitchThumb,Thumb,createSwitchScope auto */ // packages/react/switch/src/switch.tsx









var SWITCH_NAME = "Switch";
var [createSwitchContext, createSwitchScope] = (0,react_context_dist/* createContextScope */.b)(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeSwitch, name, checked: checkedProp, defaultChecked, required, disabled, value = "on", onCheckedChange, form, ...switchProps } = props;
    const [button, setButton] = react.useState(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node)=>setButton(node));
    const hasConsumerStoppedPropagationRef = react.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked = false, setChecked] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: checkedProp,
        defaultProp: defaultChecked,
        onChange: onCheckedChange
    });
    return /* @__PURE__ */ (0,react_jsx_runtime.jsxs)(SwitchProvider, {
        scope: __scopeSwitch,
        checked,
        disabled,
        children: [
            /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.button, {
                type: "button",
                role: "switch",
                "aria-checked": checked,
                "aria-required": required,
                "data-state": getState(checked),
                "data-disabled": disabled ? "" : void 0,
                disabled,
                value,
                ...switchProps,
                ref: composedRefs,
                onClick: (0,dist/* composeEventHandlers */.M)(props.onClick, (event)=>{
                    setChecked((prevChecked)=>!prevChecked);
                    if (isFormControl) {
                        hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
                        if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
                    }
                })
            }),
            isFormControl && /* @__PURE__ */ (0,react_jsx_runtime.jsx)(BubbleInput, {
                control: button,
                bubbles: !hasConsumerStoppedPropagationRef.current,
                name,
                value,
                checked,
                required,
                disabled,
                form,
                style: {
                    transform: "translateX(-100%)"
                }
            })
        ]
    });
});
Switch.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.span, {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
    });
});
SwitchThumb.displayName = THUMB_NAME;
var BubbleInput = (props)=>{
    const { control, checked, bubbles = true, ...inputProps } = props;
    const ref = react.useRef(null);
    const prevChecked = (0,react_use_previous_dist/* usePrevious */.D)(checked);
    const controlSize = (0,react_use_size_dist/* useSize */.t)(control);
    react.useEffect(()=>{
        const input = ref.current;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(inputProto, "checked");
        const setChecked = descriptor.set;
        if (prevChecked !== checked && setChecked) {
            const event = new Event("click", {
                bubbles
            });
            setChecked.call(input, checked);
            input.dispatchEvent(event);
        }
    }, [
        prevChecked,
        checked,
        bubbles
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)("input", {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked,
        ...inputProps,
        tabIndex: -1,
        ref,
        style: {
            ...props.style,
            ...controlSize,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0
        }
    });
};
function getState(checked) {
    return checked ? "checked" : "unchecked";
}
var Root = Switch;
var Thumb = SwitchThumb;
 //# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(7863);
;// CONCATENATED MODULE: ./components/ui/switch.tsx
/* __next_internal_client_entry_do_not_use__ Switch auto */ 



const switch_Switch = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime.jsx(Root, {
        className: (0,utils.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
        ...props,
        ref: ref,
        children: /*#__PURE__*/ react_jsx_runtime.jsx(Thumb, {
            className: (0,utils.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")
        })
    }));
switch_Switch.displayName = Root.displayName;



/***/ }),

/***/ 3427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  mQ: () => (/* binding */ tabs_Tabs),
  nU: () => (/* binding */ tabs_TabsContent),
  dr: () => (/* binding */ tabs_TabsList),
  SP: () => (/* binding */ tabs_TabsTrigger)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(326);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(7577);
// EXTERNAL MODULE: ./node_modules/@radix-ui/primitive/dist/index.mjs
var dist = __webpack_require__(2561);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-context/dist/index.mjs
var react_context_dist = __webpack_require__(3095);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var react_roving_focus_dist = __webpack_require__(5594);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-presence/dist/index.mjs
var react_presence_dist = __webpack_require__(9815);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var react_primitive_dist = __webpack_require__(5226);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-direction/dist/index.mjs
var react_direction_dist = __webpack_require__(7124);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var react_use_controllable_state_dist = __webpack_require__(2067);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-id/dist/index.mjs
var react_id_dist = __webpack_require__(8957);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-tabs/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ Content,List,Root,Tabs,TabsContent,TabsList,TabsTrigger,Trigger,createTabsScope auto */ // packages/react/tabs/src/tabs.tsx











var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = (0,react_context_dist/* createContextScope */.b)(TABS_NAME, [
    react_roving_focus_dist/* createRovingFocusGroupScope */.Pc
]);
var useRovingFocusGroupScope = (0,react_roving_focus_dist/* createRovingFocusGroupScope */.Pc)();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeTabs, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", dir, activationMode = "automatic", ...tabsProps } = props;
    const direction = (0,react_direction_dist/* useDirection */.gm)(dir);
    const [value, setValue] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: valueProp,
        onChange: onValueChange,
        defaultProp: defaultValue
    });
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(TabsProvider, {
        scope: __scopeTabs,
        baseId: (0,react_id_dist/* useId */.M)(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.div, {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
        })
    });
});
Tabs.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_roving_focus_dist/* Root */.fC, {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.div, {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
        })
    });
});
TabsList.displayName = TAB_LIST_NAME;
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_roving_focus_dist/* Item */.ck, {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.button, {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: (0,dist/* composeEventHandlers */.M)(props.onMouseDown, (event)=>{
                if (!disabled && event.button === 0 && event.ctrlKey === false) {
                    context.onValueChange(value);
                } else {
                    event.preventDefault();
                }
            }),
            onKeyDown: (0,dist/* composeEventHandlers */.M)(props.onKeyDown, (event)=>{
                if ([
                    " ",
                    "Enter"
                ].includes(event.key)) context.onValueChange(value);
            }),
            onFocus: (0,dist/* composeEventHandlers */.M)(props.onFocus, ()=>{
                const isAutomaticActivation = context.activationMode !== "manual";
                if (!isSelected && !disabled && isAutomaticActivation) {
                    context.onValueChange(value);
                }
            })
        })
    });
});
TabsTrigger.displayName = TRIGGER_NAME;
var CONTENT_NAME = "TabsContent";
var TabsContent = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = react.useRef(isSelected);
    react.useEffect(()=>{
        const rAF = requestAnimationFrame(()=>isMountAnimationPreventedRef.current = false);
        return ()=>cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_presence_dist/* Presence */.z, {
        present: forceMount || isSelected,
        children: ({ present })=>/* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.div, {
                "data-state": isSelected ? "active" : "inactive",
                "data-orientation": context.orientation,
                role: "tabpanel",
                "aria-labelledby": triggerId,
                hidden: !present,
                id: contentId,
                tabIndex: 0,
                ...contentProps,
                ref: forwardedRef,
                style: {
                    ...props.style,
                    animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
                },
                children: present && children
            })
    });
});
TabsContent.displayName = CONTENT_NAME;
function makeTriggerId(baseId, value) {
    return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
    return `${baseId}-content-${value}`;
}
var Root2 = Tabs;
var List = TabsList;
var Trigger = TabsTrigger;
var Content = TabsContent;
 //# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(7863);
;// CONCATENATED MODULE: ./components/ui/tabs.tsx
/* __next_internal_client_entry_do_not_use__ Tabs,TabsList,TabsTrigger,TabsContent auto */ 



const tabs_Tabs = Root2;
const tabs_TabsList = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime.jsx(List, {
        ref: ref,
        className: (0,utils.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className),
        ...props
    }));
tabs_TabsList.displayName = List.displayName;
const tabs_TabsTrigger = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime.jsx(Trigger, {
        ref: ref,
        className: (0,utils.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", className),
        ...props
    }));
tabs_TabsTrigger.displayName = Trigger.displayName;
const tabs_TabsContent = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime.jsx(Content, {
        ref: ref,
        className: (0,utils.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
        ...props
    }));
tabs_TabsContent.displayName = Content.displayName;



/***/ }),

/***/ 6775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8570);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\app\admin\system-settings\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\app\admin\system-settings\page.tsx#default`));


/***/ }),

/***/ 3405:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ usePrevious)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7577);
// packages/react/use-previous/src/use-previous.tsx

function usePrevious(value) {
  const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef({ value, previous: value });
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (ref.current.value !== value) {
      ref.current.previous = ref.current.value;
      ref.current.value = value;
    }
    return ref.current.previous;
  }, [value]);
}

//# sourceMappingURL=index.mjs.map


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [960,230,741], () => (__webpack_exec__(4481)));
module.exports = __webpack_exports__;

})();