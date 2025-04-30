(() => {
var exports = {};
exports.id = 454;
exports.ids = [454];
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

/***/ 2596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_5___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var D_UGS_update_recycling_marketplace_client_app_auth_register_page_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3374);
/* harmony import */ var D_UGS_update_recycling_marketplace_client_app_layout_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1973);
/* harmony import */ var next_dist_client_components_not_found_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5866);
/* harmony import */ var next_dist_client_components_not_found_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_not_found_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3191);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8716);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7922);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5231);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_6__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


"TURBOPACK { transition: next-ssr }";


// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'auth',
        {
        children: [
        'register',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3374)), "D:\\UGS\\update\\recycling-marketplace\\client\\app\\auth\\register\\page.tsx"],
          
        }]
      },
        {
        
        
      }
      ]
      },
        {
        
        
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1973)), "D:\\UGS\\update\\recycling-marketplace\\client\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5866, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["D:\\UGS\\update\\recycling-marketplace\\client\\app\\auth\\register\\page.tsx"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/auth/register/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_3__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_4__/* .RouteKind */ .x.APP_PAGE,
        page: "/auth/register/page",
        pathname: "/auth/register",
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

/***/ 2736:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1915));


/***/ }),

/***/ 1915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RegisterPage)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(326);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(7577);
// EXTERNAL MODULE: ./node_modules/next/dist/api/link.js
var api_link = __webpack_require__(434);
// EXTERNAL MODULE: ./node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(5047);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(772);
// EXTERNAL MODULE: ./components/ui/input.tsx
var input = __webpack_require__(4432);
// EXTERNAL MODULE: ./components/ui/label.tsx + 1 modules
var label = __webpack_require__(5842);
// EXTERNAL MODULE: ./components/ui/card.tsx
var card = __webpack_require__(2643);
// EXTERNAL MODULE: ./node_modules/@radix-ui/primitive/dist/index.mjs
var dist = __webpack_require__(2561);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var react_compose_refs_dist = __webpack_require__(8051);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-context/dist/index.mjs
var react_context_dist = __webpack_require__(3095);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var react_primitive_dist = __webpack_require__(5226);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var react_roving_focus_dist = __webpack_require__(5594);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var react_use_controllable_state_dist = __webpack_require__(2067);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-direction/dist/index.mjs
var react_direction_dist = __webpack_require__(7124);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-size/dist/index.mjs
var react_use_size_dist = __webpack_require__(2566);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-previous/dist/index.mjs
var react_use_previous_dist = __webpack_require__(3405);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-presence/dist/index.mjs
var react_presence_dist = __webpack_require__(9815);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-radio-group/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ Indicator,Item,RadioGroup,RadioGroupIndicator,RadioGroupItem,Root,createRadioGroupScope auto */ // packages/react/radio-group/src/radio-group.tsx









// packages/react/radio-group/src/radio.tsx









var RADIO_NAME = "Radio";
var [createRadioContext, createRadioScope] = (0,react_context_dist/* createContextScope */.b)(RADIO_NAME);
var [RadioProvider, useRadioContext] = createRadioContext(RADIO_NAME);
var Radio = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeRadio, name, checked = false, required, disabled, value = "on", onCheck, form, ...radioProps } = props;
    const [button, setButton] = react.useState(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node)=>setButton(node));
    const hasConsumerStoppedPropagationRef = react.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    return /* @__PURE__ */ (0,react_jsx_runtime.jsxs)(RadioProvider, {
        scope: __scopeRadio,
        checked,
        disabled,
        children: [
            /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.button, {
                type: "button",
                role: "radio",
                "aria-checked": checked,
                "data-state": getState(checked),
                "data-disabled": disabled ? "" : void 0,
                disabled,
                value,
                ...radioProps,
                ref: composedRefs,
                onClick: (0,dist/* composeEventHandlers */.M)(props.onClick, (event)=>{
                    if (!checked) onCheck?.();
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
Radio.displayName = RADIO_NAME;
var INDICATOR_NAME = "RadioIndicator";
var RadioIndicator = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeRadio, forceMount, ...indicatorProps } = props;
    const context = useRadioContext(INDICATOR_NAME, __scopeRadio);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_presence_dist/* Presence */.z, {
        present: forceMount || context.checked,
        children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.span, {
            "data-state": getState(context.checked),
            "data-disabled": context.disabled ? "" : void 0,
            ...indicatorProps,
            ref: forwardedRef
        })
    });
});
RadioIndicator.displayName = INDICATOR_NAME;
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
        type: "radio",
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
// packages/react/radio-group/src/radio-group.tsx

var ARROW_KEYS = [
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight"
];
var RADIO_GROUP_NAME = "RadioGroup";
var [createRadioGroupContext, createRadioGroupScope] = (0,react_context_dist/* createContextScope */.b)(RADIO_GROUP_NAME, [
    react_roving_focus_dist/* createRovingFocusGroupScope */.Pc,
    createRadioScope
]);
var useRovingFocusGroupScope = (0,react_roving_focus_dist/* createRovingFocusGroupScope */.Pc)();
var useRadioScope = createRadioScope();
var [RadioGroupProvider, useRadioGroupContext] = createRadioGroupContext(RADIO_GROUP_NAME);
var RadioGroup = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeRadioGroup, name, defaultValue, value: valueProp, required = false, disabled = false, orientation, dir, loop = true, onValueChange, ...groupProps } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
    const direction = (0,react_direction_dist/* useDirection */.gm)(dir);
    const [value, setValue] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(RadioGroupProvider, {
        scope: __scopeRadioGroup,
        name,
        required,
        disabled,
        value,
        onValueChange: setValue,
        children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_roving_focus_dist/* Root */.fC, {
            asChild: true,
            ...rovingFocusGroupScope,
            orientation,
            dir: direction,
            loop,
            children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.div, {
                role: "radiogroup",
                "aria-required": required,
                "aria-orientation": orientation,
                "data-disabled": disabled ? "" : void 0,
                dir: direction,
                ...groupProps,
                ref: forwardedRef
            })
        })
    });
});
RadioGroup.displayName = RADIO_GROUP_NAME;
var ITEM_NAME = "RadioGroupItem";
var RadioGroupItem = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeRadioGroup, disabled, ...itemProps } = props;
    const context = useRadioGroupContext(ITEM_NAME, __scopeRadioGroup);
    const isDisabled = context.disabled || disabled;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeRadioGroup);
    const radioScope = useRadioScope(__scopeRadioGroup);
    const ref = react.useRef(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref);
    const checked = context.value === itemProps.value;
    const isArrowKeyPressedRef = react.useRef(false);
    react.useEffect(()=>{
        const handleKeyDown = (event)=>{
            if (ARROW_KEYS.includes(event.key)) {
                isArrowKeyPressedRef.current = true;
            }
        };
        const handleKeyUp = ()=>isArrowKeyPressedRef.current = false;
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);
        return ()=>{
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, []);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_roving_focus_dist/* Item */.ck, {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !isDisabled,
        active: checked,
        children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Radio, {
            disabled: isDisabled,
            required: context.required,
            checked,
            ...radioScope,
            ...itemProps,
            name: context.name,
            ref: composedRefs,
            onCheck: ()=>context.onValueChange(itemProps.value),
            onKeyDown: (0,dist/* composeEventHandlers */.M)((event)=>{
                if (event.key === "Enter") event.preventDefault();
            }),
            onFocus: (0,dist/* composeEventHandlers */.M)(itemProps.onFocus, ()=>{
                if (isArrowKeyPressedRef.current) ref.current?.click();
            })
        })
    });
});
RadioGroupItem.displayName = ITEM_NAME;
var INDICATOR_NAME2 = "RadioGroupIndicator";
var RadioGroupIndicator = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeRadioGroup, ...indicatorProps } = props;
    const radioScope = useRadioScope(__scopeRadioGroup);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(RadioIndicator, {
        ...radioScope,
        ...indicatorProps,
        ref: forwardedRef
    });
});
RadioGroupIndicator.displayName = INDICATOR_NAME2;
var Root2 = RadioGroup;
var Item2 = RadioGroupItem;
var Indicator = RadioGroupIndicator;
 //# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle.js
var circle = __webpack_require__(3982);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(7863);
;// CONCATENATED MODULE: ./components/ui/radio-group.tsx
/* __next_internal_client_entry_do_not_use__ RadioGroup,RadioGroupItem auto */ 




const radio_group_RadioGroup = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime.jsx(Root2, {
        className: (0,utils.cn)("grid gap-2", className),
        ...props,
        ref: ref
    });
});
radio_group_RadioGroup.displayName = Root2.displayName;
const radio_group_RadioGroupItem = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime.jsx(Item2, {
        ref: ref,
        className: (0,utils.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime.jsx(Indicator, {
            className: "flex items-center justify-center",
            children: /*#__PURE__*/ react_jsx_runtime.jsx(circle/* default */.Z, {
                className: "h-2.5 w-2.5 fill-current text-current"
            })
        })
    });
});
radio_group_RadioGroupItem.displayName = Item2.displayName;


// EXTERNAL MODULE: ./components/ui/use-toast.ts
var use_toast = __webpack_require__(4008);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/eye-off.js
var eye_off = __webpack_require__(1216);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/eye.js
var eye = __webpack_require__(2714);
;// CONCATENATED MODULE: ./app/auth/register/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










function RegisterPage() {
    const [name, setName] = (0,react.useState)("");
    const [email, setEmail] = (0,react.useState)("");
    const [password, setPassword] = (0,react.useState)("");
    const [confirmPassword, setConfirmPassword] = (0,react.useState)("");
    const [userType, setUserType] = (0,react.useState)("buyer");
    const [showPassword, setShowPassword] = (0,react.useState)(false);
    const [isLoading, setIsLoading] = (0,react.useState)(false);
    const [errors, setErrors] = (0,react.useState)({});
    const router = (0,navigation.useRouter)();
    const { toast } = (0,use_toast/* useToast */.pm)();
    const validateForm = ()=>{
        const newErrors = {};
        if (!name) {
            newErrors.name = "Имя обязательно";
        }
        if (!email) {
            newErrors.email = "Email обязателен";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Некорректный email";
        }
        if (!password) {
            newErrors.password = "Пароль обязателен";
        } else if (password.length < 6) {
            newErrors.password = "Пароль должен содержать минимум 6 символов";
        }
        if (password !== confirmPassword) {
            newErrors.confirmPassword = "Пароли не совпадают";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validateForm()) return;
        setIsLoading(true);
        try {
            const userTypeForAPI = userType;
            const { registerUser } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 5837));
            const response = await registerUser(name, email, password, userTypeForAPI);
            if (response.success) {
                toast({
                    title: "Регистрация успешна",
                    description: "Вы успешно зарегистрировались. Теперь вы можете войти в систему."
                });
                router.push("/auth/login?registered=true");
            } else {
                toast({
                    variant: "destructive",
                    title: "Ошибка регистрации",
                    description: "Пользователь с таким email уже существует"
                });
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Ошибка",
                description: "Произошла ошибка при регистрации"
            });
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime.jsx("div", {
        className: "container flex h-screen w-screen flex-col items-center justify-center",
        children: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
            className: "mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]",
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* Card */.Zb, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardHeader */.Ol, {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardTitle */.ll, {
                                className: "text-2xl text-center",
                                children: "Регистрация"
                            }),
                            /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardDescription */.SZ, {
                                className: "text-center",
                                children: "Создайте аккаунт для использования платформы"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("form", {
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardContent */.aY, {
                                className: "grid gap-4",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "grid gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                htmlFor: "name",
                                                children: "Имя"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                                id: "name",
                                                type: "text",
                                                placeholder: "Иван Иванов",
                                                value: name,
                                                onChange: (e)=>setName(e.target.value),
                                                disabled: isLoading
                                            }),
                                            errors.name && /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                className: "text-sm text-destructive",
                                                children: errors.name
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "grid gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                htmlFor: "email",
                                                children: "Email"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                                id: "email",
                                                type: "email",
                                                placeholder: "name@example.com",
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value),
                                                disabled: isLoading
                                            }),
                                            errors.email && /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                className: "text-sm text-destructive",
                                                children: errors.email
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "grid gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                htmlFor: "password",
                                                children: "Пароль"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                                        id: "password",
                                                        type: showPassword ? "text" : "password",
                                                        placeholder: "********",
                                                        value: password,
                                                        onChange: (e)=>setPassword(e.target.value),
                                                        disabled: isLoading
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                                        type: "button",
                                                        variant: "ghost",
                                                        size: "icon",
                                                        className: "absolute right-0 top-0 h-full px-3",
                                                        onClick: ()=>setShowPassword(!showPassword),
                                                        children: [
                                                            showPassword ? /*#__PURE__*/ react_jsx_runtime.jsx(eye_off/* default */.Z, {
                                                                className: "h-4 w-4"
                                                            }) : /*#__PURE__*/ react_jsx_runtime.jsx(eye/* default */.Z, {
                                                                className: "h-4 w-4"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                className: "sr-only",
                                                                children: showPassword ? "Скрыть пароль" : "Показать пароль"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            errors.password && /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                className: "text-sm text-destructive",
                                                children: errors.password
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "grid gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                htmlFor: "confirmPassword",
                                                children: "Подтверждение пароля"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                                id: "confirmPassword",
                                                type: showPassword ? "text" : "password",
                                                placeholder: "********",
                                                value: confirmPassword,
                                                onChange: (e)=>setConfirmPassword(e.target.value),
                                                disabled: isLoading
                                            }),
                                            errors.confirmPassword && /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                className: "text-sm text-destructive",
                                                children: errors.confirmPassword
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "grid gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                children: "Тип пользователя"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(radio_group_RadioGroup, {
                                                value: userType,
                                                onValueChange: setUserType,
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(radio_group_RadioGroupItem, {
                                                                value: "buyer",
                                                                id: "buyer"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                                htmlFor: "buyer",
                                                                children: "Покупатель (ищу вторсырье)"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(radio_group_RadioGroupItem, {
                                                                value: "seller",
                                                                id: "seller"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                                htmlFor: "seller",
                                                                children: "Продавец (сдаю вторсырье)"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(radio_group_RadioGroupItem, {
                                                                value: "manager",
                                                                id: "role-manager"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                                htmlFor: "role-manager",
                                                                children: "Менеджер"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(radio_group_RadioGroupItem, {
                                                                value: "admin",
                                                                id: "role-admin"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                                htmlFor: "role-admin",
                                                                children: "Администратор"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardFooter */.eW, {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(ui_button/* Button */.z, {
                                        className: "w-full",
                                        type: "submit",
                                        disabled: isLoading,
                                        children: isLoading ? "Регистрация..." : "Зарегистрироваться"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "mt-4 text-center text-sm",
                                        children: [
                                            "Уже есть аккаунт?",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime.jsx(api_link["default"], {
                                                href: "/auth/login",
                                                className: "underline",
                                                children: "Войти"
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

/***/ 1216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ EyeOff)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const EyeOff = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("EyeOff", [
    [
        "path",
        {
            d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
            key: "ct8e1f"
        }
    ],
    [
        "path",
        {
            d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
            key: "151rxh"
        }
    ],
    [
        "path",
        {
            d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
            key: "13bj9a"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ]
]);
 //# sourceMappingURL=eye-off.js.map


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

/***/ 3374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8570);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\app\auth\register\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\app\auth\register\page.tsx#default`));


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
var __webpack_exports__ = __webpack_require__.X(0, [960,230], () => (__webpack_exec__(2596)));
module.exports = __webpack_exports__;

})();