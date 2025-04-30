(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[4279],{

/***/ 5228:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3989));


/***/ }),

/***/ 3989:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UserMaterialsPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6463);
/* harmony import */ var _context_auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8245);
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6013);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(495);
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4693);
/* harmony import */ var _services_material_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6364);
/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5657);
/* harmony import */ var _barrel_optimize_names_AlertCircle_Pencil_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2513);
/* harmony import */ var _barrel_optimize_names_AlertCircle_Pencil_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6780);
/* harmony import */ var _barrel_optimize_names_AlertCircle_Pencil_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8422);
/* harmony import */ var _components_ui_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7412);
/* __next_internal_client_entry_do_not_use__ default auto */ 










function UserMaterialsPage() {
    const { user, isLoading } = (0,_context_auth_context__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .a)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { toast } = (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_7__/* .useToast */ .pm)();
    const [materials, setMaterials] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [isLoadingMaterials, setIsLoadingMaterials] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!isLoading && !user) {
            router.push("/auth/login");
            return;
        }
        if (user && user.type !== "seller") {
            router.push("/profile");
            toast({
                variant: "destructive",
                title: "Доступ запрещен",
                description: "Только продавцы могут просматривать свои материалы"
            });
            return;
        }
        const fetchMaterials = async ()=>{
            try {
                if (!user) return;
                setError(null);
                console.log("Fetching materials for user:", user.id);
                const data = await (0,_services_material_service__WEBPACK_IMPORTED_MODULE_9__/* .getUserMaterials */ .$i)(user.id);
                console.log("Fetched materials:", data);
                setMaterials(data);
            } catch (error) {
                console.error("Error fetching materials:", error);
                setError("Не удалось загрузить материалы. Пожалуйста, попробуйте позже.");
                toast({
                    variant: "destructive",
                    title: "Ошибка",
                    description: "Не удалось загрузить материалы"
                });
            } finally{
                setIsLoadingMaterials(false);
            }
        };
        if (user) {
            fetchMaterials();
        }
    }, [
        user,
        isLoading,
        router,
        toast
    ]);
    const getStatusBadge = (status)=>{
        switch(status){
            case "active":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_6__/* .Badge */ .C, {
                    variant: "default",
                    children: "Активен"
                });
            case "pending":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_6__/* .Badge */ .C, {
                    variant: "secondary",
                    children: "На модерации"
                });
            case "rejected":
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_6__/* .Badge */ .C, {
                    variant: "destructive",
                    children: "Отклонен"
                });
            default:
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_6__/* .Badge */ .C, {
                    variant: "outline",
                    children: status
                });
        }
    };
    if (isLoading || isLoadingMaterials) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "container py-10",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                    className: "text-muted-foreground",
                    children: "Загрузка..."
                })
            })
        });
    }
    if (!user || user.type !== "seller") {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container py-10",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                        className: "text-3xl font-bold",
                        children: "Мои материалы"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                        onClick: ()=>router.push("/profile/materials/new"),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AlertCircle_Pencil_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                className: "mr-2 h-4 w-4"
                            }),
                            "Добавить материал"
                        ]
                    })
                ]
            }),
            error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_alert__WEBPACK_IMPORTED_MODULE_8__/* .Alert */ .bZ, {
                variant: "destructive",
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AlertCircle_Pencil_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        className: "h-4 w-4"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_alert__WEBPACK_IMPORTED_MODULE_8__/* .AlertTitle */ .Cd, {
                        children: "Ошибка"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_alert__WEBPACK_IMPORTED_MODULE_8__/* .AlertDescription */ .X, {
                        children: error
                    })
                ]
            }),
            materials.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
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
                                            getStatusBadge(material.status)
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
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardFooter */ .eW, {
                                className: "p-4 border-t flex justify-end space-x-2",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                    variant: "outline",
                                    size: "sm",
                                    onClick: ()=>router.push("/profile/materials/edit/".concat(material.id)),
                                    disabled: material.status !== "active" && material.status !== "pending",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_AlertCircle_Pencil_Plus_lucide_react__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
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
        ]
    });
}


/***/ }),

/***/ 7412:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cd: function() { return /* binding */ AlertTitle; },
/* harmony export */   X: function() { return /* binding */ AlertDescription; },
/* harmony export */   bZ: function() { return /* binding */ Alert; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3027);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7440);




const alertVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground", {
    variants: {
        variant: {
            default: "bg-background text-foreground",
            destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Alert = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, variant, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        role: "alert",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(alertVariants({
            variant
        }), className),
        ...props
    });
});
Alert.displayName = "Alert";
const AlertTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("mb-1 font-medium leading-none tracking-tight", className),
        ...props
    });
});
AlertTitle.displayName = "AlertTitle";
const AlertDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm [&_p]:leading-relaxed", className),
        ...props
    });
});
AlertDescription.displayName = "AlertDescription";



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

/***/ 5657:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Am: function() { return /* binding */ toast; },
/* harmony export */   pm: function() { return /* binding */ useToast; }
/* harmony export */ });
/* unused harmony export reducer */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* __next_internal_client_entry_do_not_use__ reducer,useToast,toast auto */ // Inspired by react-hot-toast library

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast(param) {
    let { ...props } = param;
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(memoryState);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}



/***/ }),

/***/ 8030:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ createLucideIcon; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/shared/src/utils.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = function() {
    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
        classes[_key] = arguments[_key];
    }
    return classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
};
 //# sourceMappingURL=utils.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
 //# sourceMappingURL=defaultAttributes.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/Icon.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 


const Icon = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest } = param;
    return /*#__PURE__*/ (0,react.createElement)("svg", {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
    }, [
        ...iconNode.map((param)=>{
            let [tag, attrs] = param;
            return /*#__PURE__*/ (0,react.createElement)(tag, attrs);
        }),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
 //# sourceMappingURL=Icon.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 


const createLucideIcon = (iconName, iconNode)=>{
    const Component = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
        let { className, ...props } = param;
        return /*#__PURE__*/ (0,react.createElement)(Icon, {
            ref,
            iconNode,
            className: mergeClasses("lucide-".concat(toKebabCase(iconName)), className),
            ...props
        });
    });
    Component.displayName = "".concat(iconName);
    return Component;
};
 //# sourceMappingURL=createLucideIcon.js.map


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

/***/ 8422:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ Pencil; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Pencil = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Pencil", [
    [
        "path",
        {
            d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
            key: "1a8usu"
        }
    ],
    [
        "path",
        {
            d: "m15 5 4 4",
            key: "1mk7zo"
        }
    ]
]);
 //# sourceMappingURL=pencil.js.map


/***/ }),

/***/ 2513:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ Plus; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Plus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Plus", [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
]);
 //# sourceMappingURL=plus.js.map


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
/******/ __webpack_require__.O(0, [9247,1860,2971,7023,1744], function() { return __webpack_exec__(5228); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);