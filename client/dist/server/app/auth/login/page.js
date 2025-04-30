(() => {
var exports = {};
exports.id = 716;
exports.ids = [716];
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

/***/ 4997:
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
/* harmony import */ var D_UGS_update_recycling_marketplace_client_app_auth_login_page_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3369);
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
        'login',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3369)), "D:\\UGS\\update\\recycling-marketplace\\client\\app\\auth\\login\\page.tsx"],
          
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
const pages = ["D:\\UGS\\update\\recycling-marketplace\\client\\app\\auth\\login\\page.tsx"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/auth/login/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_3__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_4__/* .RouteKind */ .x.APP_PAGE,
        page: "/auth/login/page",
        pathname: "/auth/login",
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

/***/ 2870:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6082));


/***/ }),

/***/ 6082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LoginForm)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(326);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(7577);
// EXTERNAL MODULE: ./node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(5047);
// EXTERNAL MODULE: ./node_modules/next/dist/api/link.js
var api_link = __webpack_require__(434);
// EXTERNAL MODULE: ./context/auth-context.tsx
var auth_context = __webpack_require__(3860);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(772);
// EXTERNAL MODULE: ./components/ui/input.tsx
var input = __webpack_require__(4432);
// EXTERNAL MODULE: ./components/ui/label.tsx + 1 modules
var label = __webpack_require__(5842);
// EXTERNAL MODULE: ./components/ui/card.tsx
var card = __webpack_require__(2643);
// EXTERNAL MODULE: ./components/ui/use-toast.ts
var use_toast = __webpack_require__(4008);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/eye-off.js
var eye_off = __webpack_require__(1216);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/eye.js
var eye = __webpack_require__(2714);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/info.js
var info = __webpack_require__(8019);
// EXTERNAL MODULE: ./components/ui/alert.tsx
var ui_alert = __webpack_require__(3273);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-check-big.js
var circle_check_big = __webpack_require__(361);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-context/dist/index.mjs
var dist = __webpack_require__(3095);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-collection/dist/index.mjs
var react_collection_dist = __webpack_require__(545);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var react_compose_refs_dist = __webpack_require__(8051);
// EXTERNAL MODULE: ./node_modules/@radix-ui/primitive/dist/index.mjs
var primitive_dist = __webpack_require__(2561);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var react_use_controllable_state_dist = __webpack_require__(2067);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var react_primitive_dist = __webpack_require__(5226);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var react_use_layout_effect_dist = __webpack_require__(5819);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-presence/dist/index.mjs
var react_presence_dist = __webpack_require__(9815);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-id/dist/index.mjs
var react_id_dist = __webpack_require__(8957);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-collapsible/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ Collapsible,CollapsibleContent,CollapsibleTrigger,Content,Root,Trigger,createCollapsibleScope auto */ // packages/react/collapsible/src/collapsible.tsx










var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = (0,dist/* createContextScope */.b)(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeCollapsible, open: openProp, defaultOpen, disabled, onOpenChange, ...collapsibleProps } = props;
    const [open = false, setOpen] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(CollapsibleProvider, {
        scope: __scopeCollapsible,
        disabled,
        contentId: (0,react_id_dist/* useId */.M)(),
        open,
        onOpenToggle: react.useCallback(()=>setOpen((prevOpen)=>!prevOpen), [
            setOpen
        ]),
        children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.div, {
            "data-state": getState(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
        })
    });
});
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME = "CollapsibleTrigger";
var CollapsibleTrigger = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME, __scopeCollapsible);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.button, {
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": getState(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: (0,primitive_dist/* composeEventHandlers */.M)(props.onClick, context.onOpenToggle)
    });
});
CollapsibleTrigger.displayName = TRIGGER_NAME;
var CONTENT_NAME = "CollapsibleContent";
var CollapsibleContent = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME, props.__scopeCollapsible);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_presence_dist/* Presence */.z, {
        present: forceMount || context.open,
        children: ({ present })=>/* @__PURE__ */ (0,react_jsx_runtime.jsx)(CollapsibleContentImpl, {
                ...contentProps,
                ref: forwardedRef,
                present
            })
    });
});
CollapsibleContent.displayName = CONTENT_NAME;
var CollapsibleContentImpl = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeCollapsible, present, children, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME, __scopeCollapsible);
    const [isPresent, setIsPresent] = react.useState(present);
    const ref = react.useRef(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref);
    const heightRef = react.useRef(0);
    const height = heightRef.current;
    const widthRef = react.useRef(0);
    const width = widthRef.current;
    const isOpen = context.open || isPresent;
    const isMountAnimationPreventedRef = react.useRef(isOpen);
    const originalStylesRef = react.useRef(void 0);
    react.useEffect(()=>{
        const rAF = requestAnimationFrame(()=>isMountAnimationPreventedRef.current = false);
        return ()=>cancelAnimationFrame(rAF);
    }, []);
    (0,react_use_layout_effect_dist/* useLayoutEffect */.b)(()=>{
        const node = ref.current;
        if (node) {
            originalStylesRef.current = originalStylesRef.current || {
                transitionDuration: node.style.transitionDuration,
                animationName: node.style.animationName
            };
            node.style.transitionDuration = "0s";
            node.style.animationName = "none";
            const rect = node.getBoundingClientRect();
            heightRef.current = rect.height;
            widthRef.current = rect.width;
            if (!isMountAnimationPreventedRef.current) {
                node.style.transitionDuration = originalStylesRef.current.transitionDuration;
                node.style.animationName = originalStylesRef.current.animationName;
            }
            setIsPresent(present);
        }
    }, [
        context.open,
        present
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.div, {
        "data-state": getState(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        id: context.contentId,
        hidden: !isOpen,
        ...contentProps,
        ref: composedRefs,
        style: {
            [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
            [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
            ...props.style
        },
        children: isOpen && children
    });
});
function getState(open) {
    return open ? "open" : "closed";
}
var Root = Collapsible;
var Trigger = CollapsibleTrigger;
var Content = CollapsibleContent;
 //# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/@radix-ui/react-direction/dist/index.mjs
var react_direction_dist = __webpack_require__(7124);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-accordion/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ Accordion,AccordionContent,AccordionHeader,AccordionItem,AccordionTrigger,Content,Header,Item,Root,Trigger,createAccordionScope auto */ // packages/react/accordion/src/accordion.tsx












var ACCORDION_NAME = "Accordion";
var ACCORDION_KEYS = [
    "Home",
    "End",
    "ArrowDown",
    "ArrowUp",
    "ArrowLeft",
    "ArrowRight"
];
var [Collection, useCollection, createCollectionScope] = (0,react_collection_dist/* createCollection */.B)(ACCORDION_NAME);
var [createAccordionContext, createAccordionScope] = (0,dist/* createContextScope */.b)(ACCORDION_NAME, [
    createCollectionScope,
    createCollapsibleScope
]);
var useCollapsibleScope = createCollapsibleScope();
var Accordion = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { type, ...accordionProps } = props;
    const singleProps = accordionProps;
    const multipleProps = accordionProps;
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Collection.Provider, {
        scope: props.__scopeAccordion,
        children: type === "multiple" ? /* @__PURE__ */ (0,react_jsx_runtime.jsx)(AccordionImplMultiple, {
            ...multipleProps,
            ref: forwardedRef
        }) : /* @__PURE__ */ (0,react_jsx_runtime.jsx)(AccordionImplSingle, {
            ...singleProps,
            ref: forwardedRef
        })
    });
});
Accordion.displayName = ACCORDION_NAME;
var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(ACCORDION_NAME, {
    collapsible: false
});
var AccordionImplSingle = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { value: valueProp, defaultValue, onValueChange = ()=>{}, collapsible = false, ...accordionSingleProps } = props;
    const [value, setValue] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(AccordionValueProvider, {
        scope: props.__scopeAccordion,
        value: value ? [
            value
        ] : [],
        onItemOpen: setValue,
        onItemClose: react.useCallback(()=>collapsible && setValue(""), [
            collapsible,
            setValue
        ]),
        children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(AccordionCollapsibleProvider, {
            scope: props.__scopeAccordion,
            collapsible,
            children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(AccordionImpl, {
                ...accordionSingleProps,
                ref: forwardedRef
            })
        })
    });
});
var AccordionImplMultiple = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { value: valueProp, defaultValue, onValueChange = ()=>{}, ...accordionMultipleProps } = props;
    const [value = [], setValue] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    const handleItemOpen = react.useCallback((itemValue)=>setValue((prevValue = [])=>[
                ...prevValue,
                itemValue
            ]), [
        setValue
    ]);
    const handleItemClose = react.useCallback((itemValue)=>setValue((prevValue = [])=>prevValue.filter((value2)=>value2 !== itemValue)), [
        setValue
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(AccordionValueProvider, {
        scope: props.__scopeAccordion,
        value,
        onItemOpen: handleItemOpen,
        onItemClose: handleItemClose,
        children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(AccordionCollapsibleProvider, {
            scope: props.__scopeAccordion,
            collapsible: true,
            children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(AccordionImpl, {
                ...accordionMultipleProps,
                ref: forwardedRef
            })
        })
    });
});
var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
var AccordionImpl = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion, disabled, dir, orientation = "vertical", ...accordionProps } = props;
    const accordionRef = react.useRef(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(accordionRef, forwardedRef);
    const getItems = useCollection(__scopeAccordion);
    const direction = (0,react_direction_dist/* useDirection */.gm)(dir);
    const isDirectionLTR = direction === "ltr";
    const handleKeyDown = (0,primitive_dist/* composeEventHandlers */.M)(props.onKeyDown, (event)=>{
        if (!ACCORDION_KEYS.includes(event.key)) return;
        const target = event.target;
        const triggerCollection = getItems().filter((item)=>!item.ref.current?.disabled);
        const triggerIndex = triggerCollection.findIndex((item)=>item.ref.current === target);
        const triggerCount = triggerCollection.length;
        if (triggerIndex === -1) return;
        event.preventDefault();
        let nextIndex = triggerIndex;
        const homeIndex = 0;
        const endIndex = triggerCount - 1;
        const moveNext = ()=>{
            nextIndex = triggerIndex + 1;
            if (nextIndex > endIndex) {
                nextIndex = homeIndex;
            }
        };
        const movePrev = ()=>{
            nextIndex = triggerIndex - 1;
            if (nextIndex < homeIndex) {
                nextIndex = endIndex;
            }
        };
        switch(event.key){
            case "Home":
                nextIndex = homeIndex;
                break;
            case "End":
                nextIndex = endIndex;
                break;
            case "ArrowRight":
                if (orientation === "horizontal") {
                    if (isDirectionLTR) {
                        moveNext();
                    } else {
                        movePrev();
                    }
                }
                break;
            case "ArrowDown":
                if (orientation === "vertical") {
                    moveNext();
                }
                break;
            case "ArrowLeft":
                if (orientation === "horizontal") {
                    if (isDirectionLTR) {
                        movePrev();
                    } else {
                        moveNext();
                    }
                }
                break;
            case "ArrowUp":
                if (orientation === "vertical") {
                    movePrev();
                }
                break;
        }
        const clampedIndex = nextIndex % triggerCount;
        triggerCollection[clampedIndex].ref.current?.focus();
    });
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(AccordionImplProvider, {
        scope: __scopeAccordion,
        disabled,
        direction: dir,
        orientation,
        children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Collection.Slot, {
            scope: __scopeAccordion,
            children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.div, {
                ...accordionProps,
                "data-orientation": orientation,
                ref: composedRefs,
                onKeyDown: disabled ? void 0 : handleKeyDown
            })
        })
    });
});
var ITEM_NAME = "AccordionItem";
var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME);
var AccordionItem = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion, value, ...accordionItemProps } = props;
    const accordionContext = useAccordionContext(ITEM_NAME, __scopeAccordion);
    const valueContext = useAccordionValueContext(ITEM_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    const triggerId = (0,react_id_dist/* useId */.M)();
    const open = value && valueContext.value.includes(value) || false;
    const disabled = accordionContext.disabled || props.disabled;
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(AccordionItemProvider, {
        scope: __scopeAccordion,
        open,
        disabled,
        triggerId,
        children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Root, {
            "data-orientation": accordionContext.orientation,
            "data-state": dist_getState(open),
            ...collapsibleScope,
            ...accordionItemProps,
            ref: forwardedRef,
            disabled,
            open,
            onOpenChange: (open2)=>{
                if (open2) {
                    valueContext.onItemOpen(value);
                } else {
                    valueContext.onItemClose(value);
                }
            }
        })
    });
});
AccordionItem.displayName = ITEM_NAME;
var HEADER_NAME = "AccordionHeader";
var AccordionHeader = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion, ...headerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.h3, {
        "data-orientation": accordionContext.orientation,
        "data-state": dist_getState(itemContext.open),
        "data-disabled": itemContext.disabled ? "" : void 0,
        ...headerProps,
        ref: forwardedRef
    });
});
AccordionHeader.displayName = HEADER_NAME;
var dist_TRIGGER_NAME = "AccordionTrigger";
var AccordionTrigger = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion, ...triggerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(dist_TRIGGER_NAME, __scopeAccordion);
    const collapsibleContext = useAccordionCollapsibleContext(dist_TRIGGER_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Collection.ItemSlot, {
        scope: __scopeAccordion,
        children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Trigger, {
            "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
            "data-orientation": accordionContext.orientation,
            id: itemContext.triggerId,
            ...collapsibleScope,
            ...triggerProps,
            ref: forwardedRef
        })
    });
});
AccordionTrigger.displayName = dist_TRIGGER_NAME;
var dist_CONTENT_NAME = "AccordionContent";
var AccordionContent = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion, ...contentProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(dist_CONTENT_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Content, {
        role: "region",
        "aria-labelledby": itemContext.triggerId,
        "data-orientation": accordionContext.orientation,
        ...collapsibleScope,
        ...contentProps,
        ref: forwardedRef,
        style: {
            ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
            ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
            ...props.style
        }
    });
});
AccordionContent.displayName = dist_CONTENT_NAME;
function dist_getState(open) {
    return open ? "open" : "closed";
}
var Root2 = Accordion;
var Item = AccordionItem;
var Header = AccordionHeader;
var Trigger2 = AccordionTrigger;
var Content2 = AccordionContent;
 //# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/chevron-down.js
var chevron_down = __webpack_require__(8393);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(7863);
;// CONCATENATED MODULE: ./components/ui/accordion.tsx
/* __next_internal_client_entry_do_not_use__ Accordion,AccordionItem,AccordionTrigger,AccordionContent auto */ 




const accordion_Accordion = Root2;
const accordion_AccordionItem = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime.jsx(Item, {
        ref: ref,
        className: (0,utils.cn)("border-b", className),
        ...props
    }));
accordion_AccordionItem.displayName = "AccordionItem";
const accordion_AccordionTrigger = /*#__PURE__*/ react.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime.jsx(Header, {
        className: "flex",
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(Trigger2, {
            ref: ref,
            className: (0,utils.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ react_jsx_runtime.jsx(chevron_down/* default */.Z, {
                    className: "h-4 w-4 shrink-0 transition-transform duration-200"
                })
            ]
        })
    }));
accordion_AccordionTrigger.displayName = Trigger2.displayName;
const accordion_AccordionContent = /*#__PURE__*/ react.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime.jsx(Content2, {
        ref: ref,
        className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
            className: (0,utils.cn)("pb-4 pt-0", className),
            children: children
        })
    }));
accordion_AccordionContent.displayName = Content2.displayName;


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
    null;
    null;
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
    return /*#__PURE__*/ react_jsx_runtime.jsx("div", {
        className: "container flex h-screen w-screen flex-col items-center justify-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]",
            children: [
                showRegistrationSuccess && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ui_alert/* Alert */.bZ, {
                    className: "mb-4 border-green-500 bg-green-50",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime.jsx(circle_check_big/* default */.Z, {
                            className: "h-4 w-4 text-green-500"
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx(ui_alert/* AlertDescription */.X, {
                            className: "text-green-700",
                            children: "Регистрация прошла успешно! Теперь вы можете войти в систему."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* Card */.Zb, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardHeader */.Ol, {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardTitle */.ll, {
                                    className: "text-2xl text-center",
                                    children: "Вход в систему"
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardDescription */.SZ, {
                                    className: "text-center",
                                    children: "Введите свои учетные данные для входа"
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
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            className: "grid gap-2",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                            htmlFor: "password",
                                                            children: "Пароль"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(api_link["default"], {
                                                            href: "/auth/forgot-password",
                                                            className: "text-sm text-muted-foreground hover:underline",
                                                            children: "Забыли пароль?"
                                                        })
                                                    ]
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
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(accordion_Accordion, {
                                            type: "single",
                                            collapsible: true,
                                            className: "w-full",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(accordion_AccordionItem, {
                                                value: "demo-accounts",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime.jsx(accordion_AccordionTrigger, {
                                                        className: "text-sm text-muted-foreground",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                            className: "flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime.jsx(info/* default */.Z, {
                                                                    className: "h-4 w-4 mr-2"
                                                                }),
                                                                "Демо-аккаунты для тестирования"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime.jsx(accordion_AccordionContent, {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                            className: "space-y-2 text-sm",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                                    className: "text-muted-foreground",
                                                                    children: "Выберите тип аккаунта для входа:"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                                    className: "grid grid-cols-2 gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx(ui_button/* Button */.z, {
                                                                            type: "button",
                                                                            variant: "outline",
                                                                            size: "sm",
                                                                            className: "w-full",
                                                                            onClick: ()=>setDemoAccount("admin"),
                                                                            children: "Администратор"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx(ui_button/* Button */.z, {
                                                                            type: "button",
                                                                            variant: "outline",
                                                                            size: "sm",
                                                                            className: "w-full",
                                                                            onClick: ()=>setDemoAccount("manager"),
                                                                            children: "Менеджер"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx(ui_button/* Button */.z, {
                                                                            type: "button",
                                                                            variant: "outline",
                                                                            size: "sm",
                                                                            className: "w-full",
                                                                            onClick: ()=>setDemoAccount("seller"),
                                                                            children: "Продавец"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx(ui_button/* Button */.z, {
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
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardFooter */.eW, {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(ui_button/* Button */.z, {
                                            className: "w-full",
                                            type: "submit",
                                            disabled: isLoading,
                                            children: isLoading ? "Вход..." : "Войти"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            className: "mt-4 text-center text-sm",
                                            children: [
                                                "Нет аккаунта?",
                                                " ",
                                                /*#__PURE__*/ react_jsx_runtime.jsx(api_link["default"], {
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

/***/ 3273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cd: () => (/* binding */ AlertTitle),
/* harmony export */   X: () => (/* binding */ AlertDescription),
/* harmony export */   bZ: () => (/* binding */ Alert)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9360);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7863);




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
const Alert = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        role: "alert",
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(alertVariants({
            variant
        }), className),
        ...props
    }));
Alert.displayName = "Alert";
const AlertTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("mb-1 font-medium leading-none tracking-tight", className),
        ...props
    }));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm [&_p]:leading-relaxed", className),
        ...props
    }));
AlertDescription.displayName = "AlertDescription";



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

/***/ 8393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ChevronDown)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ChevronDown = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("ChevronDown", [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
]);
 //# sourceMappingURL=chevron-down.js.map


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

/***/ 8019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Info)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
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

/***/ 3369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LoginPage)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(9510);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js
var react = __webpack_require__(1159);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(8570);
;// CONCATENATED MODULE: ./components/login-form.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\components\login-form.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

/* harmony default export */ const login_form = ((0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\components\login-form.tsx#default`));

;// CONCATENATED MODULE: ./app/auth/login/page.tsx



function LoginPage() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(react.Suspense, {
        fallback: /*#__PURE__*/ react_jsx_runtime.jsx("div", {
            className: "flex h-screen items-center justify-center",
            children: "Загрузка..."
        }),
        children: /*#__PURE__*/ react_jsx_runtime.jsx(login_form, {})
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [960,230], () => (__webpack_exec__(4997)));
module.exports = __webpack_exports__;

})();