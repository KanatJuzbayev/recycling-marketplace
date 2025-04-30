(() => {
var exports = {};
exports.id = 240;
exports.ids = [240];
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

/***/ 2469:
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
/* harmony import */ var D_UGS_update_recycling_marketplace_client_app_marketplace_page_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9888);
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
        'marketplace',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9888)), "D:\\UGS\\update\\recycling-marketplace\\client\\app\\marketplace\\page.tsx"],
          
        }]
      },
        {
        'loading': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8849)), "D:\\UGS\\update\\recycling-marketplace\\client\\app\\marketplace\\loading.tsx"],
        
      }
      ]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1973)), "D:\\UGS\\update\\recycling-marketplace\\client\\app\\layout.tsx"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5866, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["D:\\UGS\\update\\recycling-marketplace\\client\\app\\marketplace\\page.tsx"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/marketplace/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_3__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_4__/* .RouteKind */ .x.APP_PAGE,
        page: "/marketplace/page",
        pathname: "/marketplace",
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

/***/ 6586:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2126));


/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 2126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MarketplacePage)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(326);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(7577);
// EXTERNAL MODULE: ./node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(5047);
// EXTERNAL MODULE: ./components/ui/card.tsx
var card = __webpack_require__(2643);
// EXTERNAL MODULE: ./components/ui/input.tsx
var input = __webpack_require__(4432);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(772);
// EXTERNAL MODULE: ./components/ui/select.tsx
var ui_select = __webpack_require__(4474);
// EXTERNAL MODULE: ./components/ui/tabs.tsx + 1 modules
var tabs = __webpack_require__(3427);
// EXTERNAL MODULE: ./node_modules/@radix-ui/number/dist/index.mjs
var dist = __webpack_require__(7125);
// EXTERNAL MODULE: ./node_modules/@radix-ui/primitive/dist/index.mjs
var primitive_dist = __webpack_require__(2561);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var react_compose_refs_dist = __webpack_require__(8051);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-context/dist/index.mjs
var react_context_dist = __webpack_require__(3095);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var react_use_controllable_state_dist = __webpack_require__(2067);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-direction/dist/index.mjs
var react_direction_dist = __webpack_require__(7124);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-previous/dist/index.mjs
var react_use_previous_dist = __webpack_require__(3405);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-size/dist/index.mjs
var react_use_size_dist = __webpack_require__(2566);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var react_primitive_dist = __webpack_require__(5226);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-collection/dist/index.mjs
var react_collection_dist = __webpack_require__(545);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-slider/dist/index.mjs
/* __next_internal_client_entry_do_not_use__ Range,Root,Slider,SliderRange,SliderThumb,SliderTrack,Thumb,Track,createSliderScope auto */ // packages/react/slider/src/slider.tsx












var PAGE_KEYS = [
    "PageUp",
    "PageDown"
];
var ARROW_KEYS = [
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight"
];
var BACK_KEYS = {
    "from-left": [
        "Home",
        "PageDown",
        "ArrowDown",
        "ArrowLeft"
    ],
    "from-right": [
        "Home",
        "PageDown",
        "ArrowDown",
        "ArrowRight"
    ],
    "from-bottom": [
        "Home",
        "PageDown",
        "ArrowDown",
        "ArrowLeft"
    ],
    "from-top": [
        "Home",
        "PageDown",
        "ArrowUp",
        "ArrowLeft"
    ]
};
var SLIDER_NAME = "Slider";
var [Collection, useCollection, createCollectionScope] = (0,react_collection_dist/* createCollection */.B)(SLIDER_NAME);
var [createSliderContext, createSliderScope] = (0,react_context_dist/* createContextScope */.b)(SLIDER_NAME, [
    createCollectionScope
]);
var [SliderProvider, useSliderContext] = createSliderContext(SLIDER_NAME);
var Slider = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { name, min = 0, max = 100, step = 1, orientation = "horizontal", disabled = false, minStepsBetweenThumbs = 0, defaultValue = [
        min
    ], value, onValueChange = ()=>{}, onValueCommit = ()=>{}, inverted = false, form, ...sliderProps } = props;
    const thumbRefs = react.useRef(/* @__PURE__ */ new Set());
    const valueIndexToChangeRef = react.useRef(0);
    const isHorizontal = orientation === "horizontal";
    const SliderOrientation = isHorizontal ? SliderHorizontal : SliderVertical;
    const [values = [], setValues] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: value,
        defaultProp: defaultValue,
        onChange: (value2)=>{
            const thumbs = [
                ...thumbRefs.current
            ];
            thumbs[valueIndexToChangeRef.current]?.focus();
            onValueChange(value2);
        }
    });
    const valuesBeforeSlideStartRef = react.useRef(values);
    function handleSlideStart(value2) {
        const closestIndex = getClosestValueIndex(values, value2);
        updateValues(value2, closestIndex);
    }
    function handleSlideMove(value2) {
        updateValues(value2, valueIndexToChangeRef.current);
    }
    function handleSlideEnd() {
        const prevValue = valuesBeforeSlideStartRef.current[valueIndexToChangeRef.current];
        const nextValue = values[valueIndexToChangeRef.current];
        const hasChanged = nextValue !== prevValue;
        if (hasChanged) onValueCommit(values);
    }
    function updateValues(value2, atIndex, { commit } = {
        commit: false
    }) {
        const decimalCount = getDecimalCount(step);
        const snapToStep = roundValue(Math.round((value2 - min) / step) * step + min, decimalCount);
        const nextValue = (0,dist/* clamp */.u)(snapToStep, [
            min,
            max
        ]);
        setValues((prevValues = [])=>{
            const nextValues = getNextSortedValues(prevValues, nextValue, atIndex);
            if (hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
                valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
                const hasChanged = String(nextValues) !== String(prevValues);
                if (hasChanged && commit) onValueCommit(nextValues);
                return hasChanged ? nextValues : prevValues;
            } else {
                return prevValues;
            }
        });
    }
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(SliderProvider, {
        scope: props.__scopeSlider,
        name,
        disabled,
        min,
        max,
        valueIndexToChangeRef,
        thumbs: thumbRefs.current,
        values,
        orientation,
        form,
        children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Collection.Provider, {
            scope: props.__scopeSlider,
            children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Collection.Slot, {
                scope: props.__scopeSlider,
                children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(SliderOrientation, {
                    "aria-disabled": disabled,
                    "data-disabled": disabled ? "" : void 0,
                    ...sliderProps,
                    ref: forwardedRef,
                    onPointerDown: (0,primitive_dist/* composeEventHandlers */.M)(sliderProps.onPointerDown, ()=>{
                        if (!disabled) valuesBeforeSlideStartRef.current = values;
                    }),
                    min,
                    max,
                    inverted,
                    onSlideStart: disabled ? void 0 : handleSlideStart,
                    onSlideMove: disabled ? void 0 : handleSlideMove,
                    onSlideEnd: disabled ? void 0 : handleSlideEnd,
                    onHomeKeyDown: ()=>!disabled && updateValues(min, 0, {
                            commit: true
                        }),
                    onEndKeyDown: ()=>!disabled && updateValues(max, values.length - 1, {
                            commit: true
                        }),
                    onStepKeyDown: ({ event, direction: stepDirection })=>{
                        if (!disabled) {
                            const isPageKey = PAGE_KEYS.includes(event.key);
                            const isSkipKey = isPageKey || event.shiftKey && ARROW_KEYS.includes(event.key);
                            const multiplier = isSkipKey ? 10 : 1;
                            const atIndex = valueIndexToChangeRef.current;
                            const value2 = values[atIndex];
                            const stepInDirection = step * multiplier * stepDirection;
                            updateValues(value2 + stepInDirection, atIndex, {
                                commit: true
                            });
                        }
                    }
                })
            })
        })
    });
});
Slider.displayName = SLIDER_NAME;
var [SliderOrientationProvider, useSliderOrientationContext] = createSliderContext(SLIDER_NAME, {
    startEdge: "left",
    endEdge: "right",
    size: "width",
    direction: 1
});
var SliderHorizontal = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { min, max, dir, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
    const [slider, setSlider] = react.useState(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node)=>setSlider(node));
    const rectRef = react.useRef(void 0);
    const direction = (0,react_direction_dist/* useDirection */.gm)(dir);
    const isDirectionLTR = direction === "ltr";
    const isSlidingFromLeft = isDirectionLTR && !inverted || !isDirectionLTR && inverted;
    function getValueFromPointer(pointerPosition) {
        const rect = rectRef.current || slider.getBoundingClientRect();
        const input = [
            0,
            rect.width
        ];
        const output = isSlidingFromLeft ? [
            min,
            max
        ] : [
            max,
            min
        ];
        const value = linearScale(input, output);
        rectRef.current = rect;
        return value(pointerPosition - rect.left);
    }
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(SliderOrientationProvider, {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromLeft ? "left" : "right",
        endEdge: isSlidingFromLeft ? "right" : "left",
        direction: isSlidingFromLeft ? 1 : -1,
        size: "width",
        children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(SliderImpl, {
            dir: direction,
            "data-orientation": "horizontal",
            ...sliderProps,
            ref: composedRefs,
            style: {
                ...sliderProps.style,
                ["--radix-slider-thumb-transform"]: "translateX(-50%)"
            },
            onSlideStart: (event)=>{
                const value = getValueFromPointer(event.clientX);
                onSlideStart?.(value);
            },
            onSlideMove: (event)=>{
                const value = getValueFromPointer(event.clientX);
                onSlideMove?.(value);
            },
            onSlideEnd: ()=>{
                rectRef.current = void 0;
                onSlideEnd?.();
            },
            onStepKeyDown: (event)=>{
                const slideDirection = isSlidingFromLeft ? "from-left" : "from-right";
                const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
                onStepKeyDown?.({
                    event,
                    direction: isBackKey ? -1 : 1
                });
            }
        })
    });
});
var SliderVertical = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { min, max, inverted, onSlideStart, onSlideMove, onSlideEnd, onStepKeyDown, ...sliderProps } = props;
    const sliderRef = react.useRef(null);
    const ref = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, sliderRef);
    const rectRef = react.useRef(void 0);
    const isSlidingFromBottom = !inverted;
    function getValueFromPointer(pointerPosition) {
        const rect = rectRef.current || sliderRef.current.getBoundingClientRect();
        const input = [
            0,
            rect.height
        ];
        const output = isSlidingFromBottom ? [
            max,
            min
        ] : [
            min,
            max
        ];
        const value = linearScale(input, output);
        rectRef.current = rect;
        return value(pointerPosition - rect.top);
    }
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(SliderOrientationProvider, {
        scope: props.__scopeSlider,
        startEdge: isSlidingFromBottom ? "bottom" : "top",
        endEdge: isSlidingFromBottom ? "top" : "bottom",
        size: "height",
        direction: isSlidingFromBottom ? 1 : -1,
        children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(SliderImpl, {
            "data-orientation": "vertical",
            ...sliderProps,
            ref,
            style: {
                ...sliderProps.style,
                ["--radix-slider-thumb-transform"]: "translateY(50%)"
            },
            onSlideStart: (event)=>{
                const value = getValueFromPointer(event.clientY);
                onSlideStart?.(value);
            },
            onSlideMove: (event)=>{
                const value = getValueFromPointer(event.clientY);
                onSlideMove?.(value);
            },
            onSlideEnd: ()=>{
                rectRef.current = void 0;
                onSlideEnd?.();
            },
            onStepKeyDown: (event)=>{
                const slideDirection = isSlidingFromBottom ? "from-bottom" : "from-top";
                const isBackKey = BACK_KEYS[slideDirection].includes(event.key);
                onStepKeyDown?.({
                    event,
                    direction: isBackKey ? -1 : 1
                });
            }
        })
    });
});
var SliderImpl = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeSlider, onSlideStart, onSlideMove, onSlideEnd, onHomeKeyDown, onEndKeyDown, onStepKeyDown, ...sliderProps } = props;
    const context = useSliderContext(SLIDER_NAME, __scopeSlider);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.span, {
        ...sliderProps,
        ref: forwardedRef,
        onKeyDown: (0,primitive_dist/* composeEventHandlers */.M)(props.onKeyDown, (event)=>{
            if (event.key === "Home") {
                onHomeKeyDown(event);
                event.preventDefault();
            } else if (event.key === "End") {
                onEndKeyDown(event);
                event.preventDefault();
            } else if (PAGE_KEYS.concat(ARROW_KEYS).includes(event.key)) {
                onStepKeyDown(event);
                event.preventDefault();
            }
        }),
        onPointerDown: (0,primitive_dist/* composeEventHandlers */.M)(props.onPointerDown, (event)=>{
            const target = event.target;
            target.setPointerCapture(event.pointerId);
            event.preventDefault();
            if (context.thumbs.has(target)) {
                target.focus();
            } else {
                onSlideStart(event);
            }
        }),
        onPointerMove: (0,primitive_dist/* composeEventHandlers */.M)(props.onPointerMove, (event)=>{
            const target = event.target;
            if (target.hasPointerCapture(event.pointerId)) onSlideMove(event);
        }),
        onPointerUp: (0,primitive_dist/* composeEventHandlers */.M)(props.onPointerUp, (event)=>{
            const target = event.target;
            if (target.hasPointerCapture(event.pointerId)) {
                target.releasePointerCapture(event.pointerId);
                onSlideEnd(event);
            }
        })
    });
});
var TRACK_NAME = "SliderTrack";
var SliderTrack = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeSlider, ...trackProps } = props;
    const context = useSliderContext(TRACK_NAME, __scopeSlider);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.span, {
        "data-disabled": context.disabled ? "" : void 0,
        "data-orientation": context.orientation,
        ...trackProps,
        ref: forwardedRef
    });
});
SliderTrack.displayName = TRACK_NAME;
var RANGE_NAME = "SliderRange";
var SliderRange = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeSlider, ...rangeProps } = props;
    const context = useSliderContext(RANGE_NAME, __scopeSlider);
    const orientation = useSliderOrientationContext(RANGE_NAME, __scopeSlider);
    const ref = react.useRef(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref);
    const valuesCount = context.values.length;
    const percentages = context.values.map((value)=>convertValueToPercentage(value, context.min, context.max));
    const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
    const offsetEnd = 100 - Math.max(...percentages);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.span, {
        "data-orientation": context.orientation,
        "data-disabled": context.disabled ? "" : void 0,
        ...rangeProps,
        ref: composedRefs,
        style: {
            ...props.style,
            [orientation.startEdge]: offsetStart + "%",
            [orientation.endEdge]: offsetEnd + "%"
        }
    });
});
SliderRange.displayName = RANGE_NAME;
var THUMB_NAME = "SliderThumb";
var SliderThumb = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const getItems = useCollection(props.__scopeSlider);
    const [thumb, setThumb] = react.useState(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node)=>setThumb(node));
    const index = react.useMemo(()=>thumb ? getItems().findIndex((item)=>item.ref.current === thumb) : -1, [
        getItems,
        thumb
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)(SliderThumbImpl, {
        ...props,
        ref: composedRefs,
        index
    });
});
var SliderThumbImpl = /*#__PURE__*/ react.forwardRef((props, forwardedRef)=>{
    const { __scopeSlider, index, name, ...thumbProps } = props;
    const context = useSliderContext(THUMB_NAME, __scopeSlider);
    const orientation = useSliderOrientationContext(THUMB_NAME, __scopeSlider);
    const [thumb, setThumb] = react.useState(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node)=>setThumb(node));
    const isFormControl = thumb ? context.form || !!thumb.closest("form") : true;
    const size = (0,react_use_size_dist/* useSize */.t)(thumb);
    const value = context.values[index];
    const percent = value === void 0 ? 0 : convertValueToPercentage(value, context.min, context.max);
    const label = getLabel(index, context.values.length);
    const orientationSize = size?.[orientation.size];
    const thumbInBoundsOffset = orientationSize ? getThumbInBoundsOffset(orientationSize, percent, orientation.direction) : 0;
    react.useEffect(()=>{
        if (thumb) {
            context.thumbs.add(thumb);
            return ()=>{
                context.thumbs.delete(thumb);
            };
        }
    }, [
        thumb,
        context.thumbs
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsxs)("span", {
        style: {
            transform: "var(--radix-slider-thumb-transform)",
            position: "absolute",
            [orientation.startEdge]: `calc(${percent}% + ${thumbInBoundsOffset}px)`
        },
        children: [
            /* @__PURE__ */ (0,react_jsx_runtime.jsx)(Collection.ItemSlot, {
                scope: props.__scopeSlider,
                children: /* @__PURE__ */ (0,react_jsx_runtime.jsx)(react_primitive_dist/* Primitive */.WV.span, {
                    role: "slider",
                    "aria-label": props["aria-label"] || label,
                    "aria-valuemin": context.min,
                    "aria-valuenow": value,
                    "aria-valuemax": context.max,
                    "aria-orientation": context.orientation,
                    "data-orientation": context.orientation,
                    "data-disabled": context.disabled ? "" : void 0,
                    tabIndex: context.disabled ? void 0 : 0,
                    ...thumbProps,
                    ref: composedRefs,
                    style: value === void 0 ? {
                        display: "none"
                    } : props.style,
                    onFocus: (0,primitive_dist/* composeEventHandlers */.M)(props.onFocus, ()=>{
                        context.valueIndexToChangeRef.current = index;
                    })
                })
            }),
            isFormControl && /* @__PURE__ */ (0,react_jsx_runtime.jsx)(BubbleInput, {
                name: name ?? (context.name ? context.name + (context.values.length > 1 ? "[]" : "") : void 0),
                form: context.form,
                value
            }, index)
        ]
    });
});
SliderThumb.displayName = THUMB_NAME;
var BubbleInput = (props)=>{
    const { value, ...inputProps } = props;
    const ref = react.useRef(null);
    const prevValue = (0,react_use_previous_dist/* usePrevious */.D)(value);
    react.useEffect(()=>{
        const input = ref.current;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(inputProto, "value");
        const setValue = descriptor.set;
        if (prevValue !== value && setValue) {
            const event = new Event("input", {
                bubbles: true
            });
            setValue.call(input, value);
            input.dispatchEvent(event);
        }
    }, [
        prevValue,
        value
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime.jsx)("input", {
        style: {
            display: "none"
        },
        ...inputProps,
        ref,
        defaultValue: value
    });
};
function getNextSortedValues(prevValues = [], nextValue, atIndex) {
    const nextValues = [
        ...prevValues
    ];
    nextValues[atIndex] = nextValue;
    return nextValues.sort((a, b)=>a - b);
}
function convertValueToPercentage(value, min, max) {
    const maxSteps = max - min;
    const percentPerStep = 100 / maxSteps;
    const percentage = percentPerStep * (value - min);
    return (0,dist/* clamp */.u)(percentage, [
        0,
        100
    ]);
}
function getLabel(index, totalValues) {
    if (totalValues > 2) {
        return `Value ${index + 1} of ${totalValues}`;
    } else if (totalValues === 2) {
        return [
            "Minimum",
            "Maximum"
        ][index];
    } else {
        return void 0;
    }
}
function getClosestValueIndex(values, nextValue) {
    if (values.length === 1) return 0;
    const distances = values.map((value)=>Math.abs(value - nextValue));
    const closestDistance = Math.min(...distances);
    return distances.indexOf(closestDistance);
}
function getThumbInBoundsOffset(width, left, direction) {
    const halfWidth = width / 2;
    const halfPercent = 50;
    const offset = linearScale([
        0,
        halfPercent
    ], [
        0,
        halfWidth
    ]);
    return (halfWidth - offset(left) * direction) * direction;
}
function getStepsBetweenValues(values) {
    return values.slice(0, -1).map((value, index)=>values[index + 1] - value);
}
function hasMinStepsBetweenValues(values, minStepsBetweenValues) {
    if (minStepsBetweenValues > 0) {
        const stepsBetweenValues = getStepsBetweenValues(values);
        const actualMinStepsBetweenValues = Math.min(...stepsBetweenValues);
        return actualMinStepsBetweenValues >= minStepsBetweenValues;
    }
    return true;
}
function linearScale(input, output) {
    return (value)=>{
        if (input[0] === input[1] || output[0] === output[1]) return output[0];
        const ratio = (output[1] - output[0]) / (input[1] - input[0]);
        return output[0] + ratio * (value - input[0]);
    };
}
function getDecimalCount(value) {
    return (String(value).split(".")[1] || "").length;
}
function roundValue(value, decimalCount) {
    const rounder = Math.pow(10, decimalCount);
    return Math.round(value * rounder) / rounder;
}
var Root = Slider;
var Track = SliderTrack;
var Range = SliderRange;
var Thumb = SliderThumb;
 //# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(7863);
;// CONCATENATED MODULE: ./components/ui/slider.tsx
/* __next_internal_client_entry_do_not_use__ Slider auto */ 



const slider_Slider = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(Root, {
        ref: ref,
        className: (0,utils.cn)("relative flex w-full touch-none select-none items-center", className),
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx(Track, {
                className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
                children: /*#__PURE__*/ react_jsx_runtime.jsx(Range, {
                    className: "absolute h-full bg-primary"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(Thumb, {
                className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            })
        ]
    }));
slider_Slider.displayName = Root.displayName;


// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(2881);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/search.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Search = (0,createLucideIcon/* default */.Z)("Search", [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "path",
        {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }
    ]
]);
 //# sourceMappingURL=search.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(4019);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(7506);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/filter.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Filter = (0,createLucideIcon/* default */.Z)("Filter", [
    [
        "polygon",
        {
            points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",
            key: "1yg77f"
        }
    ]
]);
 //# sourceMappingURL=filter.js.map

// EXTERNAL MODULE: ./components/material-card.tsx
var material_card = __webpack_require__(6918);
;// CONCATENATED MODULE: ./app/marketplace/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 











const getMaterialTypeLabel = (type)=>{
    const typeMap = {
        plastic: "Пластик",
        paper: "Бумага",
        glass: "Стекло",
        metal: "Металл",
        textile: "Текстиль",
        organic: "Органика",
        other: "Другое"
    };
    return typeMap[type] || type;
};
function MarketplacePage() {
    const [materials, setMaterials] = (0,react.useState)([]);
    const [filteredMaterials, setFilteredMaterials] = (0,react.useState)([]);
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    const [error, setError] = (0,react.useState)(null);
    const [searchQuery, setSearchQuery] = (0,react.useState)("");
    const [materialType, setMaterialType] = (0,react.useState)("all");
    const [priceRange, setPriceRange] = (0,react.useState)([
        0,
        1000
    ]);
    const router = (0,navigation.useRouter)();
    null;
    const availableMaterialTypes = (0,react.useMemo)(()=>{
        const types = new Set();
        materials.forEach((material)=>{
            if (material.type) {
                types.add(material.type);
            }
        });
        const typeOptions = Array.from(types).map((type)=>({
                value: type,
                label: getMaterialTypeLabel(type)
            }));
        typeOptions.sort((a, b)=>a.label.localeCompare(b.label));
        return [
            {
                value: "all",
                label: "Все типы"
            },
            ...typeOptions
        ];
    }, [
        materials
    ]);
    const maxPrice = (0,react.useMemo)(()=>{
        if (materials.length === 0) return 1000;
        const max = Math.max(...materials.map((m)=>m.price || 0));
        return Math.ceil(max / 100) * 100;
    }, [
        materials
    ]);
    null;
    null;
    const handleSearch = (e)=>{
        setSearchQuery(e.target.value);
    };
    const handleClearFilters = ()=>{
        setSearchQuery("");
        setMaterialType("all");
        setPriceRange([
            0,
            maxPrice
        ]);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "container py-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Витрина материалов"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "grid gap-6 md:grid-cols-[1fr_3fr]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(card/* Card */.Zb, {
                        className: "h-fit",
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardContent */.aY, {
                            className: "p-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx("h2", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Фильтры"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime.jsx("label", {
                                                    htmlFor: "search",
                                                    className: "text-sm font-medium mb-1 block",
                                                    children: "Поиск"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(Search, {
                                                            className: "absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                                            id: "search",
                                                            placeholder: "Название, описание...",
                                                            className: "pl-8",
                                                            value: searchQuery,
                                                            onChange: handleSearch
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime.jsx("label", {
                                                    htmlFor: "material-type",
                                                    className: "text-sm font-medium mb-1 block",
                                                    children: "Тип материала"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ui_select/* Select */.Ph, {
                                                    value: materialType,
                                                    onValueChange: setMaterialType,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(ui_select/* SelectTrigger */.i4, {
                                                            id: "material-type",
                                                            children: /*#__PURE__*/ react_jsx_runtime.jsx(ui_select/* SelectValue */.ki, {
                                                                placeholder: "Выберите тип"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(ui_select/* SelectContent */.Bw, {
                                                            children: availableMaterialTypes.map((type)=>/*#__PURE__*/ react_jsx_runtime.jsx(ui_select/* SelectItem */.Ql, {
                                                                    value: type.value,
                                                                    children: type.label
                                                                }, type.value))
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime.jsx("label", {
                                                    className: "text-sm font-medium mb-3 block",
                                                    children: "Цена за кг (₸)"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(slider_Slider, {
                                                    defaultValue: [
                                                        0,
                                                        maxPrice
                                                    ],
                                                    max: maxPrice,
                                                    step: 10,
                                                    value: priceRange,
                                                    onValueChange: (value)=>setPriceRange(value),
                                                    className: "mb-2"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "flex justify-between mt-1 text-sm text-muted-foreground",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                                                            children: [
                                                                priceRange[0],
                                                                " ₸"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                                                            children: [
                                                                priceRange[1],
                                                                " ₸"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                            variant: "outline",
                                            className: "w-full flex items-center justify-center",
                                            onClick: handleClearFilters,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime.jsx(x/* default */.Z, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Сбросить фильтры"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tabs/* Tabs */.mQ, {
                            defaultValue: "grid",
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            className: "text-sm text-muted-foreground",
                                            children: [
                                                filteredMaterials.length,
                                                " ",
                                                filteredMaterials.length === 1 ? "материал" : "материалов"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tabs/* TabsList */.dr, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime.jsx(tabs/* TabsTrigger */.SP, {
                                                    value: "grid",
                                                    children: "Сетка"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(tabs/* TabsTrigger */.SP, {
                                                    value: "list",
                                                    children: "Список"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(tabs/* TabsContent */.nU, {
                                    value: "grid",
                                    className: "mt-6",
                                    children: isLoading ? /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                        className: "flex justify-center items-center py-12",
                                        children: /*#__PURE__*/ react_jsx_runtime.jsx(loader_circle/* default */.Z, {
                                            className: "h-8 w-8 animate-spin text-primary"
                                        })
                                    }) : error ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "text-center py-12",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                className: "text-destructive mb-4",
                                                children: error
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(ui_button/* Button */.z, {
                                                onClick: ()=>window.location.reload(),
                                                children: "Попробовать снова"
                                            })
                                        ]
                                    }) : filteredMaterials.length > 0 ? /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                        children: filteredMaterials.map((material)=>/*#__PURE__*/ react_jsx_runtime.jsx(material_card/* MaterialCard */.F, {
                                                material: material
                                            }, material.id))
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "text-center py-12",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime.jsx(Filter, {
                                                className: "h-12 w-12 mx-auto text-muted-foreground mb-4"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx("h3", {
                                                className: "text-lg font-medium",
                                                children: "Материалы не найдены"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                className: "text-muted-foreground mt-1",
                                                children: "Попробуйте изменить параметры фильтрации или поисковый запрос"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(ui_button/* Button */.z, {
                                                className: "mt-4",
                                                onClick: handleClearFilters,
                                                children: "Сбросить фильтры"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(tabs/* TabsContent */.nU, {
                                    value: "list",
                                    className: "mt-6",
                                    children: isLoading ? /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                        className: "flex justify-center items-center py-12",
                                        children: /*#__PURE__*/ react_jsx_runtime.jsx(loader_circle/* default */.Z, {
                                            className: "h-8 w-8 animate-spin text-primary"
                                        })
                                    }) : error ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "text-center py-12",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                className: "text-destructive mb-4",
                                                children: error
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(ui_button/* Button */.z, {
                                                onClick: ()=>window.location.reload(),
                                                children: "Попробовать снова"
                                            })
                                        ]
                                    }) : filteredMaterials.length > 0 ? /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                        className: "space-y-4",
                                        children: filteredMaterials.map((material)=>/*#__PURE__*/ react_jsx_runtime.jsx(card/* Card */.Zb, {
                                                className: "overflow-hidden cursor-pointer hover:shadow-md transition-shadow",
                                                onClick: ()=>router.push(`/marketplace/${material.id}`),
                                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "flex flex-col sm:flex-row",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                            className: "h-40 sm:h-auto sm:w-40 bg-cover bg-center",
                                                            style: {
                                                                backgroundImage: `url(${material.image || "/placeholder.svg?key=oxk1n"})`
                                                            }
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                            className: "p-4 flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                                    className: "flex justify-between items-start",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime.jsx("h3", {
                                                                                    className: "font-semibold text-lg",
                                                                                    children: material.name
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                                                    className: "text-sm text-muted-foreground",
                                                                                    children: getMaterialTypeLabel(material.type || "other")
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                                            className: "flex items-center space-x-2",
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
                                                                                className: "font-bold",
                                                                                children: [
                                                                                    material.price,
                                                                                    " ₸/кг"
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                                    className: "mt-2 text-sm line-clamp-2",
                                                                    children: material.description
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, material.id))
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                        className: "text-center py-12",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime.jsx(Filter, {
                                                className: "h-12 w-12 mx-auto text-muted-foreground mb-4"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx("h3", {
                                                className: "text-lg font-medium",
                                                children: "Материалы не найдены"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                className: "text-muted-foreground mt-1",
                                                children: "Попробуйте изменить параметры фильтрации или поисковый запрос"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(ui_button/* Button */.z, {
                                                className: "mt-4",
                                                onClick: handleClearFilters,
                                                children: "Сбросить фильтры"
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

/***/ 6918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ MaterialCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5047);
/* harmony import */ var _barrel_optimize_names_Heart_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7506);
/* harmony import */ var _barrel_optimize_names_Heart_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7427);
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2643);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(772);
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(567);
/* harmony import */ var _context_favorites_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4642);
/* harmony import */ var _context_auth_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3860);
/* __next_internal_client_entry_do_not_use__ MaterialCard auto */ 








function MaterialCard({ material, showFavoriteButton = true }) {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { user } = (0,_context_auth_context__WEBPACK_IMPORTED_MODULE_7__/* .useAuth */ .a)();
    const { favorites, toggleFavorite, isToggling } = (0,_context_favorites_context__WEBPACK_IMPORTED_MODULE_6__/* .useFavorites */ .r)();
    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const isFavorite = favorites.includes(material.id);
    const handleMaterialClick = ()=>{
        router.push(`/marketplace/${material.id}`);
    };
    const handleToggleFavorite = async (e)=>{
        e.stopPropagation();
        if (!user) {
            router.push("/auth/login");
            return;
        }
        await toggleFavorite(material.id);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .Zb, {
        className: "overflow-hidden transition-all duration-200 hover:shadow-md",
        onClick: handleMaterialClick,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-48 bg-muted bg-cover bg-center cursor-pointer relative",
                style: {
                    backgroundImage: `url(${material.image || "/placeholder.svg?key=oxk1n"})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                },
                onMouseEnter: ()=>setIsHovered(true),
                onMouseLeave: ()=>setIsHovered(false),
                children: showFavoriteButton && user && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `absolute top-2 right-2 transition-opacity duration-200 ${isHovered || isFavorite ? "opacity-100" : "opacity-0"}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                        variant: "secondary",
                        size: "icon",
                        className: "h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background",
                        disabled: isToggling[material.id],
                        onClick: handleToggleFavorite,
                        "aria-label": isFavorite ? "Удалить из избранного" : "Добавить в избранное",
                        children: isToggling[material.id] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Heart_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            className: "h-5 w-5 animate-spin"
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Heart_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            className: `h-5 w-5 ${isFavorite ? "fill-primary text-primary" : "text-muted-foreground"}`
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardHeader */ .Ol, {
                className: "p-4 cursor-pointer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex justify-between items-start",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardTitle */ .ll, {
                                className: "text-lg",
                                children: material.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardDescription */ .SZ, {
                                children: material.type
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardContent */ .aY, {
                className: "p-4 pt-0 cursor-pointer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-sm line-clamp-2",
                    children: material.description
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardFooter */ .eW, {
                className: "p-4 flex justify-between cursor-pointer",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_badge__WEBPACK_IMPORTED_MODULE_5__/* .Badge */ .C, {
                        variant: material.dealType === "buy" ? "default" : "outline",
                        children: material.dealType === "buy" ? "Покупка" : "Продажа"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "font-bold",
                        children: [
                            material.price,
                            " ₸/кг"
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

/***/ 4474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bw: () => (/* binding */ SelectContent),
/* harmony export */   Ph: () => (/* binding */ Select),
/* harmony export */   Ql: () => (/* binding */ SelectItem),
/* harmony export */   i4: () => (/* binding */ SelectTrigger),
/* harmony export */   ki: () => (/* binding */ SelectValue)
/* harmony export */ });
/* unused harmony exports SelectGroup, SelectLabel, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4875);
/* harmony import */ var _barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8393);
/* harmony import */ var _barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6633);
/* harmony import */ var _barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2933);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7863);
/* __next_internal_client_entry_do_not_use__ Select,SelectGroup,SelectValue,SelectTrigger,SelectContent,SelectLabel,SelectItem,SelectSeparator,SelectScrollUpButton,SelectScrollDownButton auto */ 




const Select = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC;
const SelectGroup = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Group */ .ZA;
const SelectValue = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Value */ .B4;
const SelectTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .JO, {
                asChild: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    className: "h-4 w-4 opacity-50"
                })
            })
        ]
    }));
SelectTrigger.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz.displayName;
const SelectScrollUpButton = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .ScrollUpButton */ .u_, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            className: "h-4 w-4"
        })
    }));
SelectScrollUpButton.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .ScrollUpButton */ .u_.displayName;
const SelectScrollDownButton = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .ScrollDownButton */ .$G, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            className: "h-4 w-4"
        })
    }));
SelectScrollDownButton.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .ScrollDownButton */ .$G.displayName;
const SelectContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, position = "popper", ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .h_, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, {
            ref: ref,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SelectScrollUpButton, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Viewport */ .l_, {
                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SelectScrollDownButton, {})
            ]
        })
    }));
SelectContent.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY.displayName;
const SelectLabel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Label */ .__, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    }));
SelectLabel.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Label */ .__.displayName;
const SelectItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .ItemIndicator */ .wU, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: "h-4 w-4"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .ItemText */ .eT, {
                children: children
            })
        ]
    }));
SelectItem.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck.displayName;
const SelectSeparator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Separator */ .Z0, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }));
SelectSeparator.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Separator */ .Z0.displayName;



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

/***/ 7427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Heart)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Heart = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Heart", [
    [
        "path",
        {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
            key: "c3ymky"
        }
    ]
]);
 //# sourceMappingURL=heart.js.map


/***/ }),

/***/ 7506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ LoaderCircle)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const LoaderCircle = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("LoaderCircle", [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
]);
 //# sourceMappingURL=loader-circle.js.map


/***/ }),

/***/ 8849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
function Loading() {
    return null;
}


/***/ }),

/***/ 9888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8570);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\app\marketplace\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\app\marketplace\page.tsx#default`));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [960,180,230], () => (__webpack_exec__(2469)));
module.exports = __webpack_exports__;

})();