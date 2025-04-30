(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[5193],{

/***/ 2248:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5069));


/***/ }),

/***/ 5069:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ NotificationsPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(6463);
// EXTERNAL MODULE: ./context/auth-context.tsx
var auth_context = __webpack_require__(8245);
// EXTERNAL MODULE: ./context/notifications-context.tsx
var notifications_context = __webpack_require__(2605);
// EXTERNAL MODULE: ./components/ui/card.tsx
var card = __webpack_require__(6013);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(495);
// EXTERNAL MODULE: ./components/ui/tabs.tsx
var tabs = __webpack_require__(5273);
// EXTERNAL MODULE: ./services/notification-service.ts
var notification_service = __webpack_require__(6807);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-check-big.js
var circle_check_big = __webpack_require__(2940);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-alert.js
var circle_alert = __webpack_require__(6780);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.js
var info = __webpack_require__(690);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(8030);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/check-check.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const CheckCheck = (0,createLucideIcon/* default */.Z)("CheckCheck", [
    [
        "path",
        {
            d: "M18 6 7 17l-5-5",
            key: "116fxf"
        }
    ],
    [
        "path",
        {
            d: "m22 10-7.5 7.5L13 16",
            key: "ke71qq"
        }
    ]
]);
 //# sourceMappingURL=check-check.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/bell.js
var bell = __webpack_require__(6600);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/clock.js
var clock = __webpack_require__(933);
// EXTERNAL MODULE: ./components/ui/badge.tsx
var badge = __webpack_require__(4693);
// EXTERNAL MODULE: ./components/ui/separator.tsx + 1 modules
var separator = __webpack_require__(42);
// EXTERNAL MODULE: ./components/ui/use-toast.ts
var use_toast = __webpack_require__(5657);
;// CONCATENATED MODULE: ./app/notifications/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 












function NotificationsPage() {
    const { user, isLoading } = (0,auth_context/* useAuth */.a)();
    const { notifications, markNotificationAsRead, isLoading: notificationsLoading } = (0,notifications_context/* useNotifications */.z)();
    const router = (0,navigation.useRouter)();
    const { toast } = (0,use_toast/* useToast */.pm)();
    const [isMarkingAllAsRead, setIsMarkingAllAsRead] = (0,react.useState)(false);
    const [activeTab, setActiveTab] = (0,react.useState)("all");
    (0,react.useEffect)(()=>{
        if (!isLoading && !user) {
            router.push("/auth/login");
        }
    }, [
        user,
        isLoading,
        router
    ]);
    const handleMarkAllAsRead = async ()=>{
        if (!user) return;
        setIsMarkingAllAsRead(true);
        try {
            await (0,notification_service/* markAllAsRead */.SF)(user.id);
            notifications.forEach((notification)=>{
                if (!notification.read) {
                    markNotificationAsRead(notification.id);
                }
            });
            toast({
                title: "Уведомления прочитаны",
                description: "Все уведомления отмечены как прочитанные"
            });
        } catch (error) {
            console.error("Error marking all notifications as read:", error);
            toast({
                variant: "destructive",
                title: "Ошибка",
                description: "Не удалось отметить уведомления как прочитанные"
            });
        } finally{
            setIsMarkingAllAsRead(false);
        }
    };
    const getNotificationIcon = (type)=>{
        switch(type){
            case "success":
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(circle_check_big/* default */.Z, {
                    className: "h-5 w-5 text-green-500"
                });
            case "warning":
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(circle_alert/* default */.Z, {
                    className: "h-5 w-5 text-yellow-500"
                });
            case "error":
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(circle_alert/* default */.Z, {
                    className: "h-5 w-5 text-red-500"
                });
            case "info":
            default:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(info/* default */.Z, {
                    className: "h-5 w-5 text-blue-500"
                });
        }
    };
    const filteredNotifications = notifications.filter((notification)=>{
        if (activeTab === "all") return true;
        if (activeTab === "unread") return !notification.read;
        if (activeTab === "read") return notification.read;
        return true;
    });
    if (isLoading || notificationsLoading || !user) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "container py-10",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "flex items-center justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "text-muted-foreground",
                    children: "Загрузка уведомлений..."
                })
            })
        });
    }
    const unreadCount = notifications.filter((n)=>!n.read).length;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "container py-10",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        className: "text-3xl font-bold",
                        children: "Уведомления"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                            unreadCount > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(badge/* Badge */.C, {
                                variant: "secondary",
                                className: "mr-2",
                                children: [
                                    unreadCount,
                                    " непрочитанных"
                                ]
                            }),
                            unreadCount > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                onClick: handleMarkAllAsRead,
                                disabled: isMarkingAllAsRead,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCheck, {
                                        className: "mr-2 h-4 w-4"
                                    }),
                                    "Отметить все как прочитанные"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardHeader */.Ol, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardTitle */.ll, {
                                children: "Центр уведомлений"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardDescription */.SZ, {
                                children: "Здесь вы можете просматривать все уведомления о действиях на платформе, связанных с вашим аккаунтом."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardContent */.aY, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(tabs/* Tabs */.mQ, {
                            defaultValue: "all",
                            value: activeTab,
                            onValueChange: setActiveTab,
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(tabs/* TabsList */.dr, {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsTrigger */.SP, {
                                            value: "all",
                                            children: "Все"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsTrigger */.SP, {
                                            value: "unread",
                                            children: "Непрочитанные"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsTrigger */.SP, {
                                            value: "read",
                                            children: "Прочитанные"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsContent */.nU, {
                                    value: activeTab,
                                    children: filteredNotifications.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "space-y-4",
                                        children: filteredNotifications.map((notification)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                className: "p-4 rounded-lg border ".concat(notification.read ? "bg-muted/50" : "bg-card", " transition-colors"),
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-start gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "mt-1",
                                                            children: notification.type ? getNotificationIcon(notification.type) : /*#__PURE__*/ (0,jsx_runtime.jsx)(bell/* default */.Z, {
                                                                className: "h-5 w-5 ".concat(notification.read ? "text-muted-foreground" : "text-primary")
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex justify-between items-start",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                                    className: "font-medium ".concat(notification.read ? "text-muted-foreground" : ""),
                                                                                    children: notification.title
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                                    className: "text-sm text-muted-foreground flex items-center mt-1",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(clock/* default */.Z, {
                                                                                            className: "h-3 w-3 mr-1"
                                                                                        }),
                                                                                        new Date(notification.createdAt).toLocaleString()
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        !notification.read && /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                                                                            variant: "ghost",
                                                                            size: "sm",
                                                                            onClick: ()=>markNotificationAsRead(notification.id),
                                                                            children: "Отметить как прочитанное"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(separator/* Separator */.Z, {
                                                                    className: "my-2"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "text-sm",
                                                                    children: notification.message
                                                                }),
                                                                notification.actionUrl && /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                                                                    variant: "link",
                                                                    className: "p-0 h-auto mt-2",
                                                                    onClick: ()=>router.push(notification.actionUrl || "/"),
                                                                    children: notification.actionText || "Подробнее"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, notification.id))
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-center py-10",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(bell/* default */.Z, {
                                                className: "mx-auto h-12 w-12 text-muted-foreground"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "mt-4 text-muted-foreground",
                                                children: activeTab === "all" ? "У вас пока нет уведомлений" : activeTab === "unread" ? "У вас нет непрочитанных уведомлений" : "У вас нет прочитанных уведомлений"
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

/***/ 42:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ separator_Separator; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var dist = __webpack_require__(5171);
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
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
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
var utils = __webpack_require__(7440);
;// CONCATENATED MODULE: ./components/ui/separator.tsx
/* __next_internal_client_entry_do_not_use__ Separator auto */ 



const separator_Separator = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, orientation = "horizontal", decorative = true, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Root, {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0,utils.cn)("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    });
});
separator_Separator.displayName = Root.displayName;



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

/***/ 6600:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ Bell; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Bell = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Bell", [
    [
        "path",
        {
            d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",
            key: "1qo2s2"
        }
    ],
    [
        "path",
        {
            d: "M10.3 21a1.94 1.94 0 0 0 3.4 0",
            key: "qgo35s"
        }
    ]
]);
 //# sourceMappingURL=bell.js.map


/***/ }),

/***/ 6780:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ CircleAlert; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const CircleAlert = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("CircleAlert", [
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
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
]);
 //# sourceMappingURL=circle-alert.js.map


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

/***/ 690:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ Info; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Info = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Info", [
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
            d: "M12 16v-4",
            key: "1dtifu"
        }
    ],
    [
        "path",
        {
            d: "M12 8h.01",
            key: "e9boi3"
        }
    ]
]);
 //# sourceMappingURL=info.js.map


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

/***/ 2447:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VY: function() { return /* binding */ Content; },
/* harmony export */   aV: function() { return /* binding */ List; },
/* harmony export */   fC: function() { return /* binding */ Root2; },
/* harmony export */   xz: function() { return /* binding */ Trigger; }
/* harmony export */ });
/* unused harmony exports Tabs, TabsContent, TabsList, TabsTrigger, createTabsScope */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8149);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8324);
/* harmony import */ var _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3398);
/* harmony import */ var _radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1383);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5171);
/* harmony import */ var _radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7513);
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1715);
/* harmony import */ var _radix_ui_react_id__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3201);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7437);
/* __next_internal_client_entry_do_not_use__ Content,List,Root,Tabs,TabsContent,TabsList,TabsTrigger,Trigger,createTabsScope auto */ // packages/react/tabs/src/tabs.tsx











var TABS_NAME = "Tabs";
var [createTabsContext, createTabsScope] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__/* .createContextScope */ .b)(TABS_NAME, [
    _radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_3__/* .createRovingFocusGroupScope */ .Pc
]);
var useRovingFocusGroupScope = (0,_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_3__/* .createRovingFocusGroupScope */ .Pc)();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeTabs, value: valueProp, onValueChange, defaultValue, orientation = "horizontal", dir, activationMode = "automatic", ...tabsProps } = props;
    const direction = (0,_radix_ui_react_direction__WEBPACK_IMPORTED_MODULE_4__/* .useDirection */ .gm)(dir);
    const [value, setValue] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_5__/* .useControllableState */ .T)({
        prop: valueProp,
        onChange: onValueChange,
        defaultProp: defaultValue
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TabsProvider, {
        scope: __scopeTabs,
        baseId: (0,_radix_ui_react_id__WEBPACK_IMPORTED_MODULE_6__/* .useId */ .M)(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .Primitive */ .WV.div, {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
        })
    });
});
Tabs.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .fC, {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .Primitive */ .WV.div, {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
        })
    });
});
TabsList.displayName = TAB_LIST_NAME;
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_roving_focus__WEBPACK_IMPORTED_MODULE_3__/* .Item */ .ck, {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .Primitive */ .WV.button, {
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
            onMouseDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__/* .composeEventHandlers */ .M)(props.onMouseDown, (event)=>{
                if (!disabled && event.button === 0 && event.ctrlKey === false) {
                    context.onValueChange(value);
                } else {
                    event.preventDefault();
                }
            }),
            onKeyDown: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__/* .composeEventHandlers */ .M)(props.onKeyDown, (event)=>{
                if ([
                    " ",
                    "Enter"
                ].includes(event.key)) context.onValueChange(value);
            }),
            onFocus: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_8__/* .composeEventHandlers */ .M)(props.onFocus, ()=>{
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
var TabsContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef)=>{
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(isSelected);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        const rAF = requestAnimationFrame(()=>isMountAnimationPreventedRef.current = false);
        return ()=>cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_presence__WEBPACK_IMPORTED_MODULE_9__/* .Presence */ .z, {
        present: forceMount || isSelected,
        children: (param)=>{
            let { present } = param;
            return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_7__/* .Primitive */ .WV.div, {
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
            });
        }
    });
});
TabsContent.displayName = CONTENT_NAME;
function makeTriggerId(baseId, value) {
    return "".concat(baseId, "-trigger-").concat(value);
}
function makeContentId(baseId, value) {
    return "".concat(baseId, "-content-").concat(value);
}
var Root2 = Tabs;
var List = TabsList;
var Trigger = TabsTrigger;
var Content = TabsContent;
 //# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 8590:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ esm_browser_v4; }
});

;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/native.js
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ var esm_browser_native = ({ randomUUID });

;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}

;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/stringify.js

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!validate(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
/* harmony default export */ var esm_browser_stringify = ((/* unused pure expression or super */ null && (stringify)));

;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js



function v4(options, buf, offset) {
    if (esm_browser_native.randomUUID && !buf && !options) {
        return esm_browser_native.randomUUID();
    }
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? rng();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return unsafeStringify(rnds);
}
/* harmony default export */ var esm_browser_v4 = (v4);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [9247,4766,1860,7642,2971,7023,1744], function() { return __webpack_exec__(2248); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);