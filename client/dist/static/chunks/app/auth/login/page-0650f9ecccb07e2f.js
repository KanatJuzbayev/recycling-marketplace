(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6716],{

/***/ 565:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6354));


/***/ }),

/***/ 6354:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ LoginForm; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(6463);
// EXTERNAL MODULE: ./node_modules/next/dist/api/link.js
var api_link = __webpack_require__(7138);
// EXTERNAL MODULE: ./context/auth-context.tsx
var auth_context = __webpack_require__(8245);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(495);
// EXTERNAL MODULE: ./components/ui/input.tsx
var input = __webpack_require__(3102);
// EXTERNAL MODULE: ./components/ui/label.tsx
var label = __webpack_require__(7135);
// EXTERNAL MODULE: ./components/ui/card.tsx
var card = __webpack_require__(6013);
// EXTERNAL MODULE: ./components/ui/use-toast.ts
var use_toast = __webpack_require__(5657);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/eye-off.js
var eye_off = __webpack_require__(7019);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/eye.js
var eye = __webpack_require__(5733);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.js
var info = __webpack_require__(690);
// EXTERNAL MODULE: ./components/ui/alert.tsx
var ui_alert = __webpack_require__(7412);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-check-big.js
var circle_check_big = __webpack_require__(2940);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-accordion/dist/index.mjs + 1 modules
var dist = __webpack_require__(4756);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(2421);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(7440);
;// CONCATENATED MODULE: ./components/ui/accordion.tsx
/* __next_internal_client_entry_do_not_use__ Accordion,AccordionItem,AccordionTrigger,AccordionContent auto */ 




const Accordion = dist/* Root */.fC;
const AccordionItem = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Item */.ck, {
        ref: ref,
        className: (0,utils.cn)("border-b", className),
        ...props
    });
});
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Header */.h4, {
        className: "flex",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dist/* Trigger */.xz, {
            ref: ref,
            className: (0,utils.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_down/* default */.Z, {
                    className: "h-4 w-4 shrink-0 transition-transform duration-200"
                })
            ]
        })
    });
});
AccordionTrigger.displayName = dist/* Trigger */.xz.displayName;
const AccordionContent = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Content */.VY, {
        ref: ref,
        className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: (0,utils.cn)("pb-4 pt-0", className),
            children: children
        })
    });
});
AccordionContent.displayName = dist/* Content */.VY.displayName;


;// CONCATENATED MODULE: ./components/login-form.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 













function LoginForm() {
    const [email, setEmail] = (0,react.useState)("");
    const [password, setPassword] = (0,react.useState)("");
    const [showPassword, setShowPassword] = (0,react.useState)(false);
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    const [showRegistrationSuccess, setShowRegistrationSuccess] = (0,react.useState)(false);
    const { login, user } = (0,auth_context/* useAuth */.a)();
    const router = (0,navigation.useRouter)();
    const searchParams = (0,navigation.useSearchParams)();
    const { toast } = (0,use_toast/* useToast */.pm)();
    (0,react.useEffect)(()=>{
        const registered = searchParams.get("registered");
        if (registered === "true") {
            setShowRegistrationSuccess(true);
        }
    }, [
        searchParams
    ]);
    (0,react.useEffect)(()=>{
        if (user) {
            router.push("/profile");
        }
    }, [
        user,
        router
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        try {
            const success = await login(email, password);
            if (success) {
                toast({
                    title: "Вход выполнен",
                    description: "Вы успешно вошли в систему"
                });
                router.push("/profile");
            } else {
                toast({
                    variant: "destructive",
                    title: "Ошибка входа",
                    description: "Неверный email или пароль"
                });
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Ошибка",
                description: "Произошла ошибка при входе"
            });
        } finally{
            setIsLoading(false);
        }
    };
    const setDemoAccount = (type)=>{
        switch(type){
            case "admin":
                setEmail("admin@ecomarket.ru");
                setPassword("admin123");
                break;
            case "manager":
                setEmail("manager@ecomarket.ru");
                setPassword("manager123");
                break;
            case "seller":
                setEmail("ivan@example.com");
                setPassword("password123");
                break;
            case "buyer":
                setEmail("anna@example.com");
                setPassword("password123");
                break;
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "container flex h-screen w-screen flex-col items-center justify-center",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]",
            children: [
                showRegistrationSuccess && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_alert/* Alert */.bZ, {
                    className: "mb-4 border-green-500 bg-green-50",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(circle_check_big/* default */.Z, {
                            className: "h-4 w-4 text-green-500"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_alert/* AlertDescription */.X, {
                            className: "text-green-700",
                            children: "Регистрация прошла успешно! Теперь вы можете войти в систему."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardHeader */.Ol, {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardTitle */.ll, {
                                    className: "text-2xl text-center",
                                    children: "Вход в систему"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardDescription */.SZ, {
                                    className: "text-center",
                                    children: "Введите свои учетные данные для входа"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardContent */.aY, {
                                    className: "grid gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "grid gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(label/* Label */._, {
                                                    htmlFor: "email",
                                                    children: "Email"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* Input */.I, {
                                                    id: "email",
                                                    type: "email",
                                                    placeholder: "name@example.com",
                                                    value: email,
                                                    onChange: (e)=>setEmail(e.target.value),
                                                    disabled: isLoading
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "grid gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(label/* Label */._, {
                                                            htmlFor: "password",
                                                            children: "Пароль"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(api_link["default"], {
                                                            href: "/auth/forgot-password",
                                                            className: "text-sm text-muted-foreground hover:underline",
                                                            children: "Забыли пароль?"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* Input */.I, {
                                                            id: "password",
                                                            type: showPassword ? "text" : "password",
                                                            placeholder: "********",
                                                            value: password,
                                                            onChange: (e)=>setPassword(e.target.value),
                                                            disabled: isLoading
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                                            type: "button",
                                                            variant: "ghost",
                                                            size: "icon",
                                                            className: "absolute right-0 top-0 h-full px-3",
                                                            onClick: ()=>setShowPassword(!showPassword),
                                                            children: [
                                                                showPassword ? /*#__PURE__*/ (0,jsx_runtime.jsx)(eye_off/* default */.Z, {
                                                                    className: "h-4 w-4"
                                                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(eye/* default */.Z, {
                                                                    className: "h-4 w-4"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                    className: "sr-only",
                                                                    children: showPassword ? "Скрыть пароль" : "Показать пароль"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Accordion, {
                                            type: "single",
                                            collapsible: true,
                                            className: "w-full",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(AccordionItem, {
                                                value: "demo-accounts",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionTrigger, {
                                                        className: "text-sm text-muted-foreground",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(info/* default */.Z, {
                                                                    className: "h-4 w-4 mr-2"
                                                                }),
                                                                "Демо-аккаунты для тестирования"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionContent, {
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "space-y-2 text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "text-muted-foreground",
                                                                    children: "Выберите тип аккаунта для входа:"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "grid grid-cols-2 gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                                                                            type: "button",
                                                                            variant: "outline",
                                                                            size: "sm",
                                                                            className: "w-full",
                                                                            onClick: ()=>setDemoAccount("admin"),
                                                                            children: "Администратор"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                                                                            type: "button",
                                                                            variant: "outline",
                                                                            size: "sm",
                                                                            className: "w-full",
                                                                            onClick: ()=>setDemoAccount("manager"),
                                                                            children: "Менеджер"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                                                                            type: "button",
                                                                            variant: "outline",
                                                                            size: "sm",
                                                                            className: "w-full",
                                                                            onClick: ()=>setDemoAccount("seller"),
                                                                            children: "Продавец"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                                                                            type: "button",
                                                                            variant: "outline",
                                                                            size: "sm",
                                                                            className: "w-full",
                                                                            onClick: ()=>setDemoAccount("buyer"),
                                                                            children: "Покупатель"
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
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardFooter */.eW, {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                                            className: "w-full",
                                            type: "submit",
                                            disabled: isLoading,
                                            children: isLoading ? "Вход..." : "Войти"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "mt-4 text-center text-sm",
                                            children: [
                                                "Нет аккаунта?",
                                                " ",
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(api_link["default"], {
                                                    href: "/auth/register",
                                                    className: "underline",
                                                    children: "Зарегистрироваться"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
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

/***/ 3102:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: function() { return /* binding */ Input; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7440);



const Input = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, type, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
        type: type,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    });
});
Input.displayName = "Input";



/***/ }),

/***/ 7135:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: function() { return /* binding */ Label; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8364);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3027);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7440);
/* __next_internal_client_entry_do_not_use__ Label auto */ 




const labelVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__/* .cva */ .j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .f, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(labelVariants(), className),
        ...props
    });
});
Label.displayName = _radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__/* .Root */ .f.displayName;



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



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [9247,231,3217,1860,2971,7023,1744], function() { return __webpack_exec__(565); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);