exports.id = 741;
exports.ids = [741];
exports.modules = {

/***/ 370:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2802));


/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 2802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AdminLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5047);
/* harmony import */ var _context_auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3860);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(772);
/* harmony import */ var _components_ui_separator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8483);
/* harmony import */ var _barrel_optimize_names_AlertTriangle_BarChart3_FileText_Lock_LogOut_Package_Settings_ShieldAlert_Users_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5601);
/* harmony import */ var _barrel_optimize_names_AlertTriangle_BarChart3_FileText_Lock_LogOut_Package_Settings_ShieldAlert_Users_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4061);
/* harmony import */ var _barrel_optimize_names_AlertTriangle_BarChart3_FileText_Lock_LogOut_Package_Settings_ShieldAlert_Users_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8705);
/* harmony import */ var _barrel_optimize_names_AlertTriangle_BarChart3_FileText_Lock_LogOut_Package_Settings_ShieldAlert_Users_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6283);
/* harmony import */ var _barrel_optimize_names_AlertTriangle_BarChart3_FileText_Lock_LogOut_Package_Settings_ShieldAlert_Users_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6754);
/* harmony import */ var _barrel_optimize_names_AlertTriangle_BarChart3_FileText_Lock_LogOut_Package_Settings_ShieldAlert_Users_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8378);
/* harmony import */ var _barrel_optimize_names_AlertTriangle_BarChart3_FileText_Lock_LogOut_Package_Settings_ShieldAlert_Users_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9015);
/* harmony import */ var _barrel_optimize_names_AlertTriangle_BarChart3_FileText_Lock_LogOut_Package_Settings_ShieldAlert_Users_lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1810);
/* harmony import */ var _barrel_optimize_names_AlertTriangle_BarChart3_FileText_Lock_LogOut_Package_Settings_ShieldAlert_Users_lucide_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(949);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(434);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7863);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7055);
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(567);
/* __next_internal_client_entry_do_not_use__ default auto */ 










function AdminLayout({ children }) {
    const { user, isLoading } = (0,_context_auth_context__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .a)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const [lastActivity, setLastActivity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Date.now());
    const [isSessionExpired, setIsSessionExpired] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    null;
    null;
    const handleLogout = async ()=>{
        if (user) {
            await (0,_services_admin_service__WEBPACK_IMPORTED_MODULE_8__/* .addAdminLog */ .UE)({
                userId: user.id,
                userName: user.name,
                action: "logout",
                details: "Выход из административной панели",
                ip: "127.0.0.1"
            });
        }
        localStorage.removeItem("admin_token");
        router.push("/admin/login");
    };
    if (isLoading || !user || user.role !== "admin" && user.role !== "manager" || isSessionExpired) {
        return null;
    }
    const navItems = [
        {
            title: "Обзор",
            href: "/admin",
            icon: _barrel_optimize_names_AlertTriangle_BarChart3_FileText_Lock_LogOut_Package_Settings_ShieldAlert_Users_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
            access: [
                "admin",
                "manager"
            ]
        },
        {
            title: "Пользователи",
            href: "/admin/users",
            icon: _barrel_optimize_names_AlertTriangle_BarChart3_FileText_Lock_LogOut_Package_Settings_ShieldAlert_Users_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
            access: [
                "admin",
                "manager"
            ]
        },
        {
            title: "Материалы",
            href: "/admin/materials",
            icon: _barrel_optimize_names_AlertTriangle_BarChart3_FileText_Lock_LogOut_Package_Settings_ShieldAlert_Users_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
            access: [
                "admin",
                "manager"
            ]
        },
        {
            title: "Заявки",
            href: "/admin/applications",
            icon: _barrel_optimize_names_AlertTriangle_BarChart3_FileText_Lock_LogOut_Package_Settings_ShieldAlert_Users_lucide_react__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
            access: [
                "admin",
                "manager"
            ]
        },
        {
            title: "Отчеты",
            href: "/admin/reports",
            icon: _barrel_optimize_names_AlertTriangle_BarChart3_FileText_Lock_LogOut_Package_Settings_ShieldAlert_Users_lucide_react__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
            access: [
                "admin",
                "manager"
            ]
        },
        {
            title: "Настройки системы",
            href: "/admin/system-settings",
            icon: _barrel_optimize_names_AlertTriangle_BarChart3_FileText_Lock_LogOut_Package_Settings_ShieldAlert_Users_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,
            access: [
                "admin"
            ]
        },
        {
            title: "Безопасность",
            href: "/admin/security",
            icon: _barrel_optimize_names_AlertTriangle_BarChart3_FileText_Lock_LogOut_Package_Settings_ShieldAlert_Users_lucide_react__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z,
            access: [
                "admin"
            ]
        }
    ];
    const filteredNavItems = navItems.filter((item)=>user.role && item.access.includes(user.role));
    const currentPageItem = navItems.find((item)=>pathname === item.href);
    const hasAccessToCurrentPage = currentPageItem ? user.role && currentPageItem.access.includes(user.role) : true;
    if (!hasAccessToCurrentPage) {
        router.push("/admin");
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex min-h-screen flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                className: `sticky top-0 z-10 border-b ${user.role === "admin" ? "bg-background" : "bg-muted/30"}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container flex h-16 items-center justify-between py-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_AlertTriangle_BarChart3_FileText_Lock_LogOut_Package_Settings_ShieldAlert_Users_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    className: `h-6 w-6 ${user.role === "admin" ? "text-primary" : "text-muted-foreground"}`
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    className: "text-xl font-bold",
                                    children: [
                                        "Административная панель",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_badge__WEBPACK_IMPORTED_MODULE_7__/* .Badge */ .C, {
                                            variant: user.role === "admin" ? "destructive" : "secondary",
                                            className: "ml-2",
                                            children: user.role === "admin" ? "Администратор" : "Менеджер"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                        user.name,
                                        " (",
                                        user.role === "admin" ? "Администратор" : "Менеджер",
                                        ")"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                                    variant: "ghost",
                                    size: "icon",
                                    onClick: handleLogout,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_AlertTriangle_BarChart3_FileText_Lock_LogOut_Package_Settings_ShieldAlert_Users_lucide_react__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                        className: "h-5 w-5"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                        className: "fixed top-16 z-30 -ml-2 hidden h-[calc(100vh-4rem)] w-full shrink-0 md:sticky md:block",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                            className: "h-full py-6 pr-6 lg:py-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "space-y-1",
                                    children: filteredNavItems.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                            href: item.href,
                                            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_17__.cn)("flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground", pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(item.icon, {
                                                    className: "h-5 w-5"
                                                }),
                                                item.title,
                                                item.access.includes("admin") && !item.access.includes("manager") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "ml-auto flex items-center",
                                                    title: "Только для администраторов",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_AlertTriangle_BarChart3_FileText_Lock_LogOut_Package_Settings_ShieldAlert_Users_lucide_react__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                        className: "h-4 w-4 text-yellow-500",
                                                        "aria-label": "Только для администраторов"
                                                    })
                                                })
                                            ]
                                        }, item.href))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_separator__WEBPACK_IMPORTED_MODULE_5__/* .Separator */ .Z, {
                                    className: "my-6"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "space-y-1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                        href: "/",
                                        className: "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                                        children: "Вернуться на сайт"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                        className: "flex w-full flex-col overflow-hidden py-6",
                        children: [
                            user.role === "manager" && pathname.includes("/admin/system-settings") && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-yellow-800 dark:border-yellow-900 dark:bg-yellow-950 dark:text-yellow-200",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_AlertTriangle_BarChart3_FileText_Lock_LogOut_Package_Settings_ShieldAlert_Users_lucide_react__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                className: "mr-2 h-5 w-5"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "font-medium",
                                                children: "Ограниченный доступ"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mt-2 text-sm",
                                        children: "Некоторые функции доступны только администраторам. Обратитесь к администратору системы, если вам требуется доступ к этим функциям."
                                    })
                                ]
                            }),
                            children
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 2643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ol: () => (/* binding */ CardHeader),
/* harmony export */   SZ: () => (/* binding */ CardDescription),
/* harmony export */   Zb: () => (/* binding */ Card),
/* harmony export */   aY: () => (/* binding */ CardContent),
/* harmony export */   eW: () => (/* binding */ CardFooter),
/* harmony export */   ll: () => (/* binding */ CardTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7863);



const Card = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col space-y-1.5 p-6", className),
        ...props
    }));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("text-sm text-muted-foreground", className),
        ...props
    }));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("p-6 pt-0", className),
        ...props
    }));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center p-6 pt-0", className),
        ...props
    }));
CardFooter.displayName = "CardFooter";



/***/ }),

/***/ 8483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ separator_Separator)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(326);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(7577);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var dist = __webpack_require__(5226);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-separator/dist/index.mjs
// packages/react/separator/src/separator.tsx



var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator = react.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(
    dist/* Primitive */.WV.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator.displayName = NAME;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root = Separator;

//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(7863);
;// CONCATENATED MODULE: ./components/ui/separator.tsx
/* __next_internal_client_entry_do_not_use__ Separator auto */ 



const separator_Separator = /*#__PURE__*/ react.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime.jsx(Root, {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0,utils.cn)("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    }));
separator_Separator.displayName = Root.displayName;



/***/ }),

/***/ 6754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ChartColumn)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
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

/***/ 6283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FileText)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
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

/***/ 9015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Lock)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
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

/***/ 8705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Package)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
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

/***/ 5601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ShieldAlert)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ShieldAlert = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("ShieldAlert", [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ],
    [
        "path",
        {
            d: "M12 8v4",
            key: "1got3b"
        }
    ],
    [
        "path",
        {
            d: "M12 16h.01",
            key: "1drbdi"
        }
    ]
]);
 //# sourceMappingURL=shield-alert.js.map


/***/ }),

/***/ 949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ TriangleAlert)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
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

/***/ 4061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Users)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
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

/***/ 7055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UE: () => (/* binding */ addAdminLog),
/* harmony export */   pt: () => (/* binding */ getAdminLogsHistory)
/* harmony export */ });
/* unused harmony exports getUserAdminLogs, clearAdminLogs */
const ADMIN_LOGS_KEY = "eco_market_admin_logs";
const getAdminLogs = ()=>{
    const logs = localStorage.getItem(ADMIN_LOGS_KEY);
    return logs ? JSON.parse(logs) : [];
};
const saveAdminLogs = (logs)=>{
    localStorage.setItem(ADMIN_LOGS_KEY, JSON.stringify(logs));
};
const addAdminLog = async (logData)=>{
    await new Promise((resolve)=>setTimeout(resolve, 200));
    const logs = getAdminLogs();
    const newLog = {
        ...logData,
        id: `log_${Date.now()}`,
        timestamp: new Date().toISOString()
    };
    saveAdminLogs([
        newLog,
        ...logs
    ]);
    return newLog;
};
const getAdminLogsHistory = async (limit = 100)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const logs = getAdminLogs();
    return logs.slice(0, limit);
};
const getUserAdminLogs = async (userId, limit = 50)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const logs = getAdminLogs();
    return logs.filter((log)=>log.userId === userId).slice(0, limit);
};
const clearAdminLogs = async ()=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    saveAdminLogs([]);
    return {
        success: true
    };
};


/***/ }),

/***/ 596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8570);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\app\admin\layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\app\admin\layout.tsx#default`));


/***/ }),

/***/ 2406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
function Loading() {
    return null;
}


/***/ })

};
;