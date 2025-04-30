exports.id = 230;
exports.ids = [230];
exports.modules = {

/***/ 6628:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3872));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5813));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1245));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5573));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3860));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4642));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8947));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9404, 23));


/***/ }),

/***/ 9287:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2994, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6114, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9727, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9671, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1868, 23));
;
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4759, 23));


/***/ }),

/***/ 3872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainNav: () => (/* binding */ MainNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(434);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5047);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7863);
/* harmony import */ var _barrel_optimize_names_Recycle_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5859);
/* __next_internal_client_entry_do_not_use__ MainNav auto */ 




function MainNav() {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const routes = [
        {
            href: "/",
            label: "Главная",
            active: pathname === "/"
        },
        {
            href: "/marketplace",
            label: "Витрина",
            active: pathname === "/marketplace"
        },
        {
            href: "/about",
            label: "О нас",
            active: pathname === "/about"
        }
    ];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex gap-6 md:gap-10",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/",
                className: "flex items-center space-x-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Recycle_lucide_react__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        className: "h-6 w-6"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-bold inline-block",
                        children: "ЭкоМаркет"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: "flex gap-6",
                children: routes.map((route)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        href: route.href,
                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex items-center text-sm font-medium transition-colors hover:text-primary", route.active ? "text-primary" : "text-muted-foreground"),
                        children: route.label
                    }, route.href))
            })
        ]
    });
}


/***/ }),

/***/ 5813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4831);
/* __next_internal_client_entry_do_not_use__ ThemeProvider auto */ 


function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_2__/* .ThemeProvider */ .f, {
        ...props,
        children: children
    });
}


/***/ }),

/***/ 8758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F$: () => (/* binding */ AvatarImage),
/* harmony export */   Q5: () => (/* binding */ AvatarFallback),
/* harmony export */   qE: () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4150);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7863);
/* __next_internal_client_entry_do_not_use__ Avatar,AvatarImage,AvatarFallback auto */ 



const Avatar = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }));
Avatar.displayName = _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC.displayName;
const AvatarImage = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .Ee, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("aspect-square h-full w-full", className),
        ...props
    }));
AvatarImage.displayName = _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .Ee.displayName;
const AvatarFallback = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__/* .Fallback */ .NY, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
        ...props
    }));
AvatarFallback.displayName = _radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_2__/* .Fallback */ .NY.displayName;



/***/ }),

/***/ 567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ Badge)
/* harmony export */ });
/* unused harmony export badgeVariants */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9360);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7863);



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
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(badgeVariants({
            variant
        }), className),
        ...props
    });
}



/***/ }),

/***/ 772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Button)
/* harmony export */ });
/* unused harmony export buttonVariants */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4214);
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9360);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7863);





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
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__/* .Slot */ .g7 : "button";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Comp, {
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

/***/ 97:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $F: () => (/* binding */ DropdownMenuTrigger),
/* harmony export */   AW: () => (/* binding */ DropdownMenuContent),
/* harmony export */   Ju: () => (/* binding */ DropdownMenuLabel),
/* harmony export */   Qk: () => (/* binding */ DropdownMenuGroup),
/* harmony export */   VD: () => (/* binding */ DropdownMenuSeparator),
/* harmony export */   Xi: () => (/* binding */ DropdownMenuItem),
/* harmony export */   h_: () => (/* binding */ DropdownMenu)
/* harmony export */ });
/* unused harmony exports DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuShortcut, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9313);
/* harmony import */ var _barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9183);
/* harmony import */ var _barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2933);
/* harmony import */ var _barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3982);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7863);
/* __next_internal_client_entry_do_not_use__ DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem,DropdownMenuCheckboxItem,DropdownMenuRadioItem,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuShortcut,DropdownMenuGroup,DropdownMenuPortal,DropdownMenuSub,DropdownMenuSubContent,DropdownMenuSubTrigger,DropdownMenuRadioGroup auto */ 




const DropdownMenu = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC;
const DropdownMenuTrigger = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz;
const DropdownMenuGroup = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Group */ .ZA;
const DropdownMenuPortal = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .Uv;
const DropdownMenuSub = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Sub */ .Tr;
const DropdownMenuRadioGroup = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .RadioGroup */ .Ee;
const DropdownMenuSubTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, inset, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .SubTrigger */ .fF, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                className: "ml-auto"
            })
        ]
    }));
DropdownMenuSubTrigger.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .SubTrigger */ .fF.displayName;
const DropdownMenuSubContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .SubContent */ .tu, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }));
DropdownMenuSubContent.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .SubContent */ .tu.displayName;
const DropdownMenuContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, sideOffset = 4, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .Uv, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, {
            ref: ref,
            sideOffset: sideOffset,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
            ...props
        })
    }));
DropdownMenuContent.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY.displayName;
const DropdownMenuItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, inset, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
        ...props
    }));
DropdownMenuItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck.displayName;
const DropdownMenuCheckboxItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, checked, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .CheckboxItem */ .oC, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .ItemIndicator */ .wU, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: "h-4 w-4"
                    })
                })
            }),
            children
        ]
    }));
DropdownMenuCheckboxItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .CheckboxItem */ .oC.displayName;
const DropdownMenuRadioItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .RadioItem */ .Rk, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .ItemIndicator */ .wU, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Check_ChevronRight_Circle_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: "h-2 w-2 fill-current"
                    })
                })
            }),
            children
        ]
    }));
DropdownMenuRadioItem.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .RadioItem */ .Rk.displayName;
const DropdownMenuLabel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, inset, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Label */ .__, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
        ...props
    }));
DropdownMenuLabel.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Label */ .__.displayName;
const DropdownMenuSeparator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Separator */ .Z0, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("-mx-1 my-1 h-px bg-muted", className),
        ...props
    }));
DropdownMenuSeparator.displayName = _radix_ui_react_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__/* .Separator */ .Z0.displayName;
const DropdownMenuShortcut = ({ className, ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("ml-auto text-xs tracking-widest opacity-60", className),
        ...props
    });
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";



/***/ }),

/***/ 1245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Toaster: () => (/* binding */ Toaster)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(326);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(7577);
;// CONCATENATED MODULE: ./hooks/use-toast.ts
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
function toast({ ...props }) {
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
    const [state, setState] = react.useState(memoryState);
    react.useEffect(()=>{
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


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-toast/dist/index.mjs
var dist = __webpack_require__(321);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(9360);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(4019);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(7863);
;// CONCATENATED MODULE: ./components/ui/toast.tsx
/* __next_internal_client_entry_do_not_use__ ToastProvider,ToastViewport,Toast,ToastTitle,ToastDescription,ToastClose,ToastAction auto */ 





const ToastProvider = dist/* Provider */.zt;
const ToastViewport = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime.jsx(dist/* Viewport */.l_, {
        ref: ref,
        className: (0,utils.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", className),
        ...props
    }));
ToastViewport.displayName = dist/* Viewport */.l_.displayName;
const toastVariants = (0,class_variance_authority_dist/* cva */.j)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
const Toast = /*#__PURE__*/ react.forwardRef(({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime.jsx(dist/* Root */.fC, {
        ref: ref,
        className: (0,utils.cn)(toastVariants({
            variant
        }), className),
        ...props
    });
});
Toast.displayName = dist/* Root */.fC.displayName;
const ToastAction = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime.jsx(dist/* Action */.aU, {
        ref: ref,
        className: (0,utils.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", className),
        ...props
    }));
ToastAction.displayName = dist/* Action */.aU.displayName;
const ToastClose = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime.jsx(dist/* Close */.x8, {
        ref: ref,
        className: (0,utils.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime.jsx(x/* default */.Z, {
            className: "h-4 w-4"
        })
    }));
ToastClose.displayName = dist/* Close */.x8.displayName;
const ToastTitle = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime.jsx(dist/* Title */.Dx, {
        ref: ref,
        className: (0,utils.cn)("text-sm font-semibold", className),
        ...props
    }));
ToastTitle.displayName = dist/* Title */.Dx.displayName;
const ToastDescription = /*#__PURE__*/ react.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime.jsx(dist/* Description */.dk, {
        ref: ref,
        className: (0,utils.cn)("text-sm opacity-90", className),
        ...props
    }));
ToastDescription.displayName = dist/* Description */.dk.displayName;


;// CONCATENATED MODULE: ./components/ui/toaster.tsx
/* __next_internal_client_entry_do_not_use__ Toaster auto */ 


function Toaster() {
    const { toasts } = useToast();
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ToastProvider, {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(Toast, {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ react_jsx_runtime.jsx(ToastTitle, {
                                    children: title
                                }),
                                description && /*#__PURE__*/ react_jsx_runtime.jsx(ToastDescription, {
                                    children: description
                                })
                            ]
                        }),
                        action,
                        /*#__PURE__*/ react_jsx_runtime.jsx(ToastClose, {})
                    ]
                }, id);
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(ToastViewport, {})
        ]
    });
}


/***/ }),

/***/ 4008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Am: () => (/* binding */ toast),
/* harmony export */   pm: () => (/* binding */ useToast)
/* harmony export */ });
/* unused harmony export reducer */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
function toast({ ...props }) {
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

/***/ 5573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserNav: () => (/* binding */ UserNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(434);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5047);
/* harmony import */ var _context_auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3860);
/* harmony import */ var _context_notifications_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8947);
/* harmony import */ var _components_ui_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8758);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(772);
/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97);
/* harmony import */ var _barrel_optimize_names_Bell_LogOut_Settings_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6507);
/* harmony import */ var _barrel_optimize_names_Bell_LogOut_Settings_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(763);
/* harmony import */ var _barrel_optimize_names_Bell_LogOut_Settings_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9635);
/* harmony import */ var _barrel_optimize_names_Bell_LogOut_Settings_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8378);
/* harmony import */ var _barrel_optimize_names_Bell_LogOut_Settings_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1810);
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(567);
/* __next_internal_client_entry_do_not_use__ UserNav auto */ 









function UserNav() {
    const { user, logout } = (0,_context_auth_context__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .a)();
    const { unreadCount } = (0,_context_notifications_context__WEBPACK_IMPORTED_MODULE_4__/* .useNotifications */ .z)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const handleLogout = ()=>{
        logout();
        router.push("/");
    };
    if (!user) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex items-center gap-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/auth/login",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                        variant: "ghost",
                        size: "sm",
                        children: "Войти"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/auth/register",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                        size: "sm",
                        children: "Регистрация"
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center gap-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                href: "/notifications",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                    variant: "ghost",
                    size: "icon",
                    className: "relative",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bell_LogOut_Settings_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            className: "h-5 w-5"
                        }),
                        unreadCount > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_badge__WEBPACK_IMPORTED_MODULE_8__/* .Badge */ .C, {
                            className: "absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0",
                            children: unreadCount
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenu */ .h_, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuTrigger */ .$F, {
                        asChild: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .z, {
                            variant: "ghost",
                            className: "relative h-8 w-8 rounded-full",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_5__/* .Avatar */ .qE, {
                                className: "h-8 w-8",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_5__/* .AvatarImage */ .F$, {
                                        src: user.avatar || "/placeholder.svg",
                                        alt: user.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_5__/* .AvatarFallback */ .Q5, {
                                        children: user.name.charAt(0)
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuContent */ .AW, {
                        className: "w-56",
                        align: "end",
                        forceMount: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuLabel */ .Ju, {
                                className: "font-normal",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col space-y-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm font-medium leading-none",
                                            children: user.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-xs leading-none text-muted-foreground",
                                            children: user.email
                                        }),
                                        user.role !== "user" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center mt-1",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bell_LogOut_Settings_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                    className: "h-3 w-3 mr-1 text-primary"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-xs text-primary",
                                                    children: user.role === "admin" ? "Администратор" : "Менеджер"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuSeparator */ .VD, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuGroup */ .Qk, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            href: "/profile",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bell_LogOut_Settings_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Профиль"
                                                })
                                            ]
                                        })
                                    }),
                                    user.role === "user" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: user.type === "buyer" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                            asChild: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                href: "/profile/applications",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Мои заявки"
                                                })
                                            })
                                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                        href: "/profile/materials",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Мои материалы"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                                        href: "/profile/applications",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "Заявки на материалы"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }) : null,
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                        asChild: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            href: "/profile/favorites",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Избранное"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            href: "/notifications",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bell_LogOut_Settings_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Уведомления"
                                                }),
                                                unreadCount > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_badge__WEBPACK_IMPORTED_MODULE_8__/* .Badge */ .C, {
                                                    variant: "secondary",
                                                    className: "ml-auto",
                                                    children: unreadCount
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            href: "/profile/settings",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bell_LogOut_Settings_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Настройки"
                                                })
                                            ]
                                        })
                                    }),
                                    (user.role === "admin" || user.role === "manager") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                            href: "/admin",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bell_LogOut_Settings_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Административная панель"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuSeparator */ .VD, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__/* .DropdownMenuItem */ .Xi, {
                                onClick: handleLogout,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Bell_LogOut_Settings_ShieldCheck_User_lucide_react__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        className: "mr-2 h-4 w-4"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Выйти"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),
/* harmony export */   a: () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5837);
/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ 


const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
function AuthProvider({ children }) {
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    null;
    const login = async (email, password)=>{
        try {
            console.log("[Auth Context] Login attempt for:", email);
            const { token, user } = await (0,_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.loginUser)(email, password);
            if (token) {
                console.log("[Auth Context] Login successful, setting token and user:", user);
                console.log("[Auth Context] User type:", user.type);
                localStorage.setItem("token", token);
                if (user.type) localStorage.setItem("user_type", user.type);
                if (user.role) localStorage.setItem("user_role", user.role);
                setUser(user);
                return true;
            }
            console.log("[Auth Context] Login failed: No token received");
            return false;
        } catch (error) {
            console.log("[Auth Context] Login error:", error);
            return false;
        }
    };
    const register = async (name, email, password, type)=>{
        try {
            const response = await (0,_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.registerUser)(name, email, password, type);
            return response.success;
        } catch (error) {
            return false;
        }
    };
    const logout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("admin_token");
        localStorage.removeItem("user_type");
        localStorage.removeItem("user_role");
        Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 5837)).then(({ logout })=>logout());
        setUser(null);
    };
    const setAdminSession = (token)=>{
        localStorage.setItem("admin_token", token);
    };
    const refreshUserType = async ()=>{
        const updated = await (0,_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.forceUpdateUserTypeFromServer)();
        if (updated && user) {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const updatedUserData = await (0,_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.getUserProfile)(token);
                    setUser(updatedUserData);
                    return true;
                } catch (error) {
                    console.error("[Auth Context] Error updating user after type refresh:", error);
                    return false;
                }
            }
        }
        return updated;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            user,
            login,
            register,
            logout,
            isLoading,
            setAdminSession,
            refreshUserType
        },
        children: children
    });
}
function useAuth() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}


/***/ }),

/***/ 4642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  FavoritesProvider: () => (/* binding */ FavoritesProvider),
  r: () => (/* binding */ useFavorites)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(326);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(7577);
// EXTERNAL MODULE: ./context/auth-context.tsx
var auth_context = __webpack_require__(3860);
;// CONCATENATED MODULE: ./services/favorites-service.ts
const API_BASE_URL = "https://recycling-marketplace-backend.onrender.com/api";
const getAuthToken = ()=>{
    if (true) return null;
    return localStorage.getItem("token");
};
const createAuthHeaders = ()=>{
    const token = getAuthToken();
    const headers = {
        "Content-Type": "application/json"
    };
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }
    return headers;
};
const getFavorites = async (userId)=>{
    try {
        const headers = createAuthHeaders();
        console.log(`[Favorites Service] Getting favorites for user ${userId} with auth:`, !!headers["Authorization"]);
        const response = await fetch(`${API_BASE_URL}/favorites/${userId}`, {
            headers
        });
        if (response.status === 401) {
            console.error("Unauthorized: Token is invalid or expired");
            return [];
        }
        if (!response.ok) {
            console.error(`Error fetching favorites: ${response.status} ${response.statusText}`);
            return [];
        }
        const data = await response.json();
        console.log(`[Favorites Service] Received favorites data:`, data);
        return Array.isArray(data) ? data.map((item)=>item.materialId.toString()) : [];
    } catch (error) {
        console.error("Error fetching favorites:", error);
        return [];
    }
};
const addToFavorites = async (userId, materialId)=>{
    try {
        const headers = createAuthHeaders();
        console.log(`[Favorites Service] Adding material ${materialId} to favorites for user ${userId}`);
        const response = await fetch(`${API_BASE_URL}/favorites`, {
            method: "POST",
            headers,
            body: JSON.stringify({
                userId: Number.parseInt(userId),
                materialId: Number.parseInt(materialId)
            })
        });
        if (response.status === 401) {
            console.error("Unauthorized: Token is invalid or expired");
            throw new Error("Unauthorized: Please log in again");
        }
        if (!response.ok) {
            console.error(`Error adding to favorites: ${response.status} ${response.statusText}`);
            throw new Error("Failed to add to favorites");
        }
        return await getFavorites(userId);
    } catch (error) {
        console.error("Error adding to favorites:", error);
        throw error;
    }
};
const removeFromFavorites = async (userId, materialId)=>{
    try {
        const headers = createAuthHeaders();
        console.log(`[Favorites Service] Removing material ${materialId} from favorites for user ${userId}`);
        const response = await fetch(`${API_BASE_URL}/favorites`, {
            method: "DELETE",
            headers,
            body: JSON.stringify({
                userId: Number.parseInt(userId),
                materialId: Number.parseInt(materialId)
            })
        });
        if (response.status === 401) {
            console.error("Unauthorized: Token is invalid or expired");
            throw new Error("Unauthorized: Please log in again");
        }
        if (!response.ok) {
            console.error(`Error removing from favorites: ${response.status} ${response.statusText}`);
            throw new Error("Failed to remove from favorites");
        }
        return await getFavorites(userId);
    } catch (error) {
        console.error("Error removing from favorites:", error);
        throw error;
    }
};
const checkIsFavorite = async (userId, materialId)=>{
    try {
        const headers = createAuthHeaders();
        console.log(`[Favorites Service] Checking if material ${materialId} is favorite for user ${userId}`);
        const response = await fetch(`${API_BASE_URL}/favorites/check`, {
            method: "POST",
            headers,
            body: JSON.stringify({
                userId: Number.parseInt(userId),
                materialId: Number.parseInt(materialId)
            })
        });
        if (response.status === 401) {
            console.error("Unauthorized: Token is invalid or expired");
            return false;
        }
        if (!response.ok) {
            console.error(`Error checking favorite status: ${response.status} ${response.statusText}`);
            return false;
        }
        const data = await response.json();
        return data.isFavorite === true;
    } catch (error) {
        console.error("Error checking favorite status:", error);
        return false;
    }
};

// EXTERNAL MODULE: ./components/ui/use-toast.ts
var use_toast = __webpack_require__(4008);
;// CONCATENATED MODULE: ./context/favorites-context.tsx
/* __next_internal_client_entry_do_not_use__ FavoritesProvider,useFavorites auto */ 




const FavoritesContext = /*#__PURE__*/ (0,react.createContext)(undefined);
function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = (0,react.useState)([]);
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    const [isToggling, setIsToggling] = (0,react.useState)({});
    const { user } = (0,auth_context/* useAuth */.a)();
    const fetchFavorites = async ()=>{
        if (!user) {
            setFavorites([]);
            setIsLoading(false);
            return;
        }
        try {
            setIsLoading(true);
            console.log("[Favorites Context] Fetching favorites for user:", user.id);
            const data = await getFavorites(user.id);
            console.log("[Favorites Context] Received favorites:", data);
            setFavorites(data);
        } catch (error) {
            console.error("[Favorites Context] Error fetching favorites:", error);
            (0,use_toast/* toast */.Am)({
                title: "Ошибка",
                description: "Не удалось загрузить избранное. Пожалуйста, попробуйте позже.",
                variant: "destructive"
            });
        } finally{
            setIsLoading(false);
        }
    };
    null;
    const isFavorite = (materialId)=>{
        return favorites.includes(materialId);
    };
    const toggleFavorite = async (materialId)=>{
        if (!user) {
            (0,use_toast/* toast */.Am)({
                title: "Требуется авторизация",
                description: "Пожалуйста, войдите в систему, чтобы добавить материал в избранное.",
                variant: "default"
            });
            return;
        }
        try {
            setIsToggling((prev)=>({
                    ...prev,
                    [materialId]: true
                }));
            if (favorites.includes(materialId)) {
                setFavorites(favorites.filter((id)=>id !== materialId));
                try {
                    await removeFromFavorites(user.id, materialId);
                    (0,use_toast/* toast */.Am)({
                        title: "Успешно",
                        description: "Материал удален из избранного",
                        variant: "default"
                    });
                } catch (error) {
                    console.error("[Favorites Context] Error removing from favorites:", error);
                    setFavorites((prev)=>[
                            ...prev,
                            materialId
                        ]);
                    const errorMessage = error instanceof Error ? error.message : "Не удалось удалить из избранного";
                    (0,use_toast/* toast */.Am)({
                        title: "Ошибка",
                        description: errorMessage,
                        variant: "destructive"
                    });
                }
            } else {
                setFavorites((prev)=>[
                        ...prev,
                        materialId
                    ]);
                try {
                    await addToFavorites(user.id, materialId);
                    (0,use_toast/* toast */.Am)({
                        title: "Успешно",
                        description: "Материал добавлен в избранное",
                        variant: "default"
                    });
                } catch (error) {
                    console.error("[Favorites Context] Error adding to favorites:", error);
                    setFavorites((prev)=>prev.filter((id)=>id !== materialId));
                    const errorMessage = error instanceof Error ? error.message : "Не удалось добавить в избранное";
                    (0,use_toast/* toast */.Am)({
                        title: "Ошибка",
                        description: errorMessage,
                        variant: "destructive"
                    });
                }
            }
        } catch (error) {
            console.error("[Favorites Context] Error toggling favorite:", error);
            (0,use_toast/* toast */.Am)({
                title: "Ошибка",
                description: "Произошла ошибка при обновлении избранного",
                variant: "destructive"
            });
        } finally{
            setIsToggling((prev)=>({
                    ...prev,
                    [materialId]: false
                }));
        }
    };
    const refreshFavorites = async ()=>{
        await fetchFavorites();
    };
    return /*#__PURE__*/ react_jsx_runtime.jsx(FavoritesContext.Provider, {
        value: {
            favorites,
            toggleFavorite,
            isFavorite,
            isLoading,
            isToggling,
            refreshFavorites
        },
        children: children
    });
}
function useFavorites() {
    const context = (0,react.useContext)(FavoritesContext);
    if (context === undefined) {
        throw new Error("useFavorites must be used within a FavoritesProvider");
    }
    return context;
}


/***/ }),

/***/ 8947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsProvider: () => (/* binding */ NotificationsProvider),
/* harmony export */   z: () => (/* binding */ useNotifications)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_auth_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3860);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7444);
/* __next_internal_client_entry_do_not_use__ NotificationsProvider,useNotifications auto */ 



const NotificationsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
function NotificationsProvider({ children }) {
    const [notifications, setNotifications] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [unreadCount, setUnreadCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { user } = (0,_context_auth_context__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();
    const fetchNotifications = async ()=>{
        if (true) {
            setNotifications([]);
            setUnreadCount(0);
            setIsLoading(false);
            return;
        }
        if (!user) {
            setNotifications([]);
            setUnreadCount(0);
            setIsLoading(false);
            return;
        }
        try {
            const data = await (0,_services_notification_service__WEBPACK_IMPORTED_MODULE_3__/* .getNotifications */ .TH)(user.id);
            setNotifications(data);
            const count = await (0,_services_notification_service__WEBPACK_IMPORTED_MODULE_3__/* .getUnreadNotificationsCount */ .rj)(user.id);
            setUnreadCount(count);
        } catch (error) {
            console.error("Error fetching notifications:", error);
        } finally{
            setIsLoading(false);
        }
    };
    null;
    const markNotificationAsRead = async (id)=>{
        if (!user) return;
        try {
            await (0,_services_notification_service__WEBPACK_IMPORTED_MODULE_3__/* .markAsRead */ .zJ)(id);
            setNotifications(notifications.map((notification)=>notification.id === id ? {
                    ...notification,
                    read: true
                } : notification));
            setUnreadCount((prev)=>Math.max(0, prev - 1));
        } catch (error) {
            console.error("Error marking notification as read:", error);
        }
    };
    const refreshNotifications = async ()=>{
        await fetchNotifications();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NotificationsContext.Provider, {
        value: {
            notifications,
            markNotificationAsRead,
            isLoading,
            unreadCount,
            refreshNotifications
        },
        children: children
    });
}
function useNotifications() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NotificationsContext);
    if (context === undefined) {
        throw new Error("useNotifications must be used within a NotificationsProvider");
    }
    return context;
}


/***/ }),

/***/ 7863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1135);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1009);


function cn(...inputs) {
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__/* .twMerge */ .m6)((0,clsx__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .W)(inputs));
}


/***/ }),

/***/ 5837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adminLogin: () => (/* binding */ adminLogin),
/* harmony export */   forceUpdateUserTypeFromServer: () => (/* binding */ forceUpdateUserTypeFromServer),
/* harmony export */   getCurrentUserRole: () => (/* binding */ getCurrentUserRole),
/* harmony export */   getCurrentUserType: () => (/* binding */ getCurrentUserType),
/* harmony export */   getUserProfile: () => (/* binding */ getUserProfile),
/* harmony export */   getUserTypeFromServer: () => (/* binding */ getUserTypeFromServer),
/* harmony export */   loginUser: () => (/* binding */ loginUser),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   refreshUserData: () => (/* binding */ refreshUserData),
/* harmony export */   registerUser: () => (/* binding */ registerUser),
/* harmony export */   updateUserRole: () => (/* binding */ updateUserRole),
/* harmony export */   updateUserType: () => (/* binding */ updateUserType),
/* harmony export */   verifyTwoFactorCode: () => (/* binding */ verifyTwoFactorCode)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2665);

const API_BASE_URL = "https://recycling-marketplace-backend.onrender.com/api";
const REGISTER_ENDPOINT = `${API_BASE_URL}/users/register`;
const LOGIN_ENDPOINT = `${API_BASE_URL}/users/login`;
const ADMIN_SESSIONS_KEY = "eco_market_admin_sessions";
const MOCK_USERS = [
    {
        id: "admin1",
        name: "Администратор",
        email: "admin@ecomarket.ru",
        password: "admin123",
        type: "staff",
        role: "admin",
        status: "active",
        twoFactorEnabled: true
    },
    {
        id: "manager1",
        name: "Менеджер",
        email: "manager@ecomarket.ru",
        password: "manager123",
        type: "staff",
        role: "manager",
        status: "active",
        twoFactorEnabled: true
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
const apiRequest = async (url, method, data)=>{
    try {
        const token = localStorage.getItem("token") || localStorage.getItem("admin_token");
        console.log(`[Auth Service] Making ${method} request to ${url} with token: ${token ? "present" : "missing"}`);
        const response = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
                ...token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            },
            body: data ? JSON.stringify(data) : undefined
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({}));
            console.error(`API request failed with status ${response.status}:`, errorData);
            throw new Error(errorData.message || `API request failed with status ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("API request error:", error);
        throw error;
    }
};
const adminLogin = async (email, password)=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const user = MOCK_USERS.find((u)=>u.email === email && u.password === password && (u.role === "admin" || u.role === "manager"));
    if (!user) {
        throw new Error("Invalid credentials or insufficient permissions");
    }
    const tempToken = `temp_${(0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)()}`;
    return {
        tempToken,
        requireTwoFactor: user.twoFactorEnabled,
        userId: user.id
    };
};
const verifyTwoFactorCode = async (tempToken, code)=>{
    await new Promise((resolve)=>setTimeout(resolve, 800));
    if (code !== "123456") {
        return {
            success: false,
            token: ""
        };
    }
    const token = `admin_${(0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)()}`;
    const sessions = JSON.parse(localStorage.getItem(ADMIN_SESSIONS_KEY) || "[]");
    sessions.push({
        token,
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    });
    localStorage.setItem(ADMIN_SESSIONS_KEY, JSON.stringify(sessions));
    return {
        success: true,
        token
    };
};
const registerUser = async (name, email, password, userType)=>{
    console.log("[Auth Service] Attempting registration for:", email);
    try {
        if (MOCK_USERS.some((u)=>u.email === email)) {
            throw new Error("User already exists");
        }
        const userData = await apiRequest(REGISTER_ENDPOINT, "POST", {
            name,
            email,
            password,
            userType
        });
        console.log("[Auth Service] Registration response:", userData);
        try {
            const users = JSON.parse(localStorage.getItem("eco_market_users") || "[]");
            let role = "user";
            let type = userType;
            if (userType === "manager" || userType === "admin") {
                role = userType;
                type = "staff";
            }
            const newUser = {
                id: `user_${Date.now()}`,
                name,
                email,
                password,
                type,
                role,
                status: "active",
                createdAt: new Date().toISOString()
            };
            users.push(newUser);
            localStorage.setItem("eco_market_users", JSON.stringify(users));
            localStorage.setItem("user_type", type);
            localStorage.setItem("user_role", role);
            console.log(`[Auth Service] User registered with type: ${type}, role: ${role}`);
        } catch (error) {
            console.error("Error storing user data:", error);
        }
        return {
            success: true,
            userData
        };
    } catch (error) {
        console.error("[Auth Service] Registration error:", error);
        throw error;
    }
};
const loginUser = async (email, password)=>{
    console.log("[Auth Service] Attempting login for:", email);
    try {
        const mockUser = MOCK_USERS.find((u)=>u.email === email && u.password === password);
        if (mockUser) {
            console.log("[Auth Service] Mock user found:", mockUser.name);
            console.log("[Auth Service] Mock user type:", mockUser.type);
            localStorage.setItem("last_login_email", email);
            localStorage.setItem("user_type", mockUser.type);
            localStorage.setItem("user_role", mockUser.role);
            const token = `token_${(0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)()}`;
            const { password: _, ...userWithoutPassword } = mockUser;
            return {
                token,
                user: userWithoutPassword
            };
        }
        const data = await apiRequest(LOGIN_ENDPOINT, "POST", {
            email,
            password
        });
        console.log("[Auth Service] Login response:", data);
        if (data.token) {
            localStorage.setItem("last_login_email", email);
            let userType = data.user?.userType || "buyer";
            let userRole = "user";
            if (data.user && data.user.userType) {
                if (data.user.userType === "manager" || data.user.userType === "admin") {
                    userRole = data.user.userType;
                    userType = "staff";
                } else {
                    userType = data.user.userType;
                    userRole = "user";
                }
            } else {
                try {
                    const registeredUsers = JSON.parse(localStorage.getItem("eco_market_users") || "[]");
                    const registeredUser = registeredUsers.find((u)=>u.email === email);
                    if (registeredUser) {
                        userType = registeredUser.type || userType;
                        userRole = registeredUser.role || userRole;
                    }
                } catch (error) {
                    console.error("Error retrieving user info:", error);
                }
            }
            try {
                const userProfileResponse = await fetch(`${API_BASE_URL}/users/profile`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${data.token}`
                    }
                });
                if (userProfileResponse.ok) {
                    const userProfileData = await userProfileResponse.json();
                    if (userProfileData.userType) {
                        console.log("[Auth Service] User type from server:", userProfileData.userType);
                        userType = userProfileData.userType;
                    }
                }
            } catch (error) {
                console.warn("[Auth Service] Could not fetch user type from server:", error);
            }
            localStorage.setItem("user_type", userType);
            localStorage.setItem("user_role", userRole);
            console.log(`[Auth Service] User logged in with type: ${userType}, role: ${userRole}`);
            const user = {
                id: data.user?.id || "user_id",
                name: data.user?.name || email.split("@")[0],
                email,
                type: userType,
                role: userRole,
                status: "active"
            };
            console.log("[Auth Service] User object created:", user);
            return {
                token: data.token,
                user
            };
        }
        throw new Error("Invalid credentials");
    } catch (error) {
        console.error("[Auth Service] Login error:", error);
        throw error;
    }
};
const getUserProfile = async (token)=>{
    console.log("[Auth Service] Getting user profile for token:", token);
    if (token.startsWith("admin_")) {
        console.log("[Auth Service] Admin token detected");
        const email = localStorage.getItem("last_login_email");
        const adminUser = MOCK_USERS.find((u)=>u.email === email && (u.role === "admin" || u.role === "manager"));
        if (adminUser) {
            const { password: _, ...userWithoutPassword } = adminUser;
            return userWithoutPassword;
        }
    }
    const email = localStorage.getItem("last_login_email");
    if (email) {
        const mockUser = MOCK_USERS.find((u)=>u.email === email);
        if (mockUser) {
            const { password: _, ...userWithoutPassword } = mockUser;
            console.log("[Auth Service] Returning mock user profile:", userWithoutPassword);
            localStorage.setItem("user_type", mockUser.type);
            localStorage.setItem("user_role", mockUser.role);
            return userWithoutPassword;
        }
        try {
            const registeredUsers = JSON.parse(localStorage.getItem("eco_market_users") || "[]");
            const registeredUser = registeredUsers.find((u)=>u.email === email);
            if (registeredUser) {
                const { password: _, ...userWithoutPassword } = registeredUser;
                console.log("[Auth Service] Returning registered user profile:", userWithoutPassword);
                localStorage.setItem("user_type", registeredUser.type);
                localStorage.setItem("user_role", registeredUser.role);
                return userWithoutPassword;
            }
            const userType = localStorage.getItem("user_type") || "buyer";
            const userRole = localStorage.getItem("user_role") || "user";
            const user = {
                id: "user_id",
                name: email.split("@")[0],
                email,
                type: userType,
                role: userRole,
                status: "active"
            };
            console.log("[Auth Service] Restored user profile from localStorage:", user);
            return user;
        } catch (error) {
            console.error("Error retrieving user profile:", error);
            throw error;
        }
    }
    throw new Error("User not found");
};
const logout = ()=>{
    localStorage.removeItem("last_login_email");
    localStorage.removeItem("user_type");
    localStorage.removeItem("user_role");
    return {
        success: true
    };
};
const getUserTypeFromServer = async ()=>{
    try {
        const token = localStorage.getItem("token");
        if (!token) return null;
        const response = await fetch(`${API_BASE_URL}/users/profile`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch user type: ${response.status}`);
        }
        const userData = await response.json();
        console.log("[Auth Service] User type from server:", userData.userType);
        if (userData.userType) {
            localStorage.setItem("user_type", userData.userType);
        }
        return userData.userType;
    } catch (error) {
        console.error("[Auth Service] Error fetching user type from server:", error);
        return localStorage.getItem("user_type");
    }
};
const getCurrentUserType = async ()=>{
    const serverType = await getUserTypeFromServer().catch(()=>null);
    if (serverType) {
        return serverType;
    }
    return localStorage.getItem("user_type") || "";
};
const updateUserType = async (newType)=>{
    if (newType !== "buyer" && newType !== "seller" && newType !== "staff") {
        console.error("[Auth Service] Invalid user type:", newType);
        return false;
    }
    try {
        const token = localStorage.getItem("token");
        if (!token) return false;
        const response = await fetch(`${API_BASE_URL}/users/update-type`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                userType: newType
            })
        });
        if (!response.ok) {
            console.warn("[Auth Service] Failed to update user type on server, updating localStorage only");
            localStorage.setItem("user_type", newType);
            return true;
        }
        localStorage.setItem("user_type", newType);
        const currentRole = localStorage.getItem("user_role") || "user";
        if (newType !== "staff" && (currentRole === "admin" || currentRole === "manager")) {
            localStorage.setItem("user_role", "user");
        }
        console.log("[Auth Service] User type updated to:", newType);
        console.log("[Auth Service] User role is:", localStorage.getItem("user_role"));
        return true;
    } catch (error) {
        console.error("[Auth Service] Error updating user type on server:", error);
        localStorage.setItem("user_type", newType);
        return true;
    }
};
const updateUserRole = (newRole)=>{
    if (newRole !== "user" && newRole !== "manager" && newRole !== "admin") {
        console.error("[Auth Service] Invalid user role:", newRole);
        return false;
    }
    localStorage.setItem("user_role", newRole);
    if (newRole === "admin" || newRole === "manager") {
        localStorage.setItem("user_type", "staff");
    }
    console.log("[Auth Service] User role updated to:", newRole);
    console.log("[Auth Service] User type is:", localStorage.getItem("user_type"));
    const email = localStorage.getItem("last_login_email");
    if (email) {
        try {
            const users = JSON.parse(localStorage.getItem("eco_market_users") || "[]");
            const userIndex = users.findIndex((u)=>u.email === email);
            if (userIndex !== -1) {
                users[userIndex].role = newRole;
                if (newRole === "admin" || newRole === "manager") {
                    users[userIndex].type = "staff";
                }
                localStorage.setItem("eco_market_users", JSON.stringify(users));
                console.log("[Auth Service] Updated user role and type in stored users");
            }
        } catch (error) {
            console.error("Error updating user role in localStorage:", error);
        }
    }
    return true;
};
const getCurrentUserRole = ()=>{
    return localStorage.getItem("user_role") || "user";
};
const refreshUserData = async ()=>{
    const token = localStorage.getItem("token");
    if (!token) return null;
    try {
        return await getUserProfile(token);
    } catch (error) {
        console.error("Error refreshing user data:", error);
        return null;
    }
};
const forceUpdateUserTypeFromServer = async ()=>{
    try {
        const token = localStorage.getItem("token");
        if (!token) return false;
        const response = await fetch(`${API_BASE_URL}/users/profile`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        if (!response.ok) {
            console.error(`[Auth Service] Failed to fetch user profile: ${response.status}`);
            return false;
        }
        const userData = await response.json();
        if (userData.userType) {
            console.log("[Auth Service] Forced update - User type from server:", userData.userType);
            localStorage.setItem("user_type", userData.userType);
            return true;
        }
        return false;
    } catch (error) {
        console.error("[Auth Service] Error during forced update of user type:", error);
        return false;
    }
};


/***/ }),

/***/ 7444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Co: () => (/* binding */ createApplicationStatusNotification),
/* harmony export */   SF: () => (/* binding */ markAllAsRead),
/* harmony export */   TH: () => (/* binding */ getNotifications),
/* harmony export */   createMaterialNotification: () => (/* binding */ createMaterialNotification),
/* harmony export */   createNotificationForStaff: () => (/* binding */ createNotificationForStaff),
/* harmony export */   createNotificationForUser: () => (/* binding */ createNotificationForUser),
/* harmony export */   rj: () => (/* binding */ getUnreadNotificationsCount),
/* harmony export */   zJ: () => (/* binding */ markAsRead)
/* harmony export */ });
/* unused harmony exports createNotification, createApplicationNotificationForAdmins, createApplicationNotification, deleteNotification, deleteAllNotifications */
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2665);

const NOTIFICATIONS_KEY = "eco_market_notifications";
const getNotificationsFromStorage = ()=>{
    const notifications = localStorage.getItem(NOTIFICATIONS_KEY);
    if (notifications) {
        return JSON.parse(notifications);
    }
    const initialNotifications = {
        user1: [
            {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),
                userId: "user1",
                title: "Новая заявка",
                message: "Ваша заявка на сдачу макулатуры была принята",
                read: false,
                createdAt: new Date().toISOString(),
                type: "success",
                actionUrl: "/profile/applications",
                actionText: "Перейти к заявкам"
            },
            {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),
                userId: "user1",
                title: "Сделка завершена",
                message: "Сделка по сдаче электроники успешно завершена",
                read: true,
                createdAt: new Date(Date.now() - 86400000).toISOString(),
                type: "info"
            }
        ],
        user2: [
            {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),
                userId: "user2",
                title: "Новое сообщение",
                message: "У вас новое сообщение от пользователя Иван Петров",
                read: false,
                createdAt: new Date().toISOString(),
                type: "info",
                actionUrl: "/messages",
                actionText: "Прочитать"
            }
        ],
        admin1: [
            {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),
                userId: "admin1",
                title: "Новый материал на проверке",
                message: "Пользователь Иван Петров добавил новый материал, требующий проверки",
                read: false,
                createdAt: new Date().toISOString(),
                type: "warning",
                actionUrl: "/admin/materials",
                actionText: "Проверить",
                relatedUserId: "user1",
                relatedEntityType: "material"
            }
        ],
        manager1: [
            {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),
                userId: "manager1",
                title: "Новая заявка требует внимания",
                message: "Поступила новая заявка от пользователя Анна Иванова",
                read: false,
                createdAt: new Date().toISOString(),
                type: "info",
                actionUrl: "/admin/applications",
                actionText: "Просмотреть",
                relatedUserId: "user2",
                relatedEntityType: "application"
            }
        ]
    };
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(initialNotifications));
    return initialNotifications;
};
const saveNotifications = (notificationsMap)=>{
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notificationsMap));
};
const getNotifications = async (userId)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const notificationsMap = getNotificationsFromStorage();
    return notificationsMap[userId] || [];
};
const createNotification = async (notification)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const notificationsMap = getNotificationsFromStorage();
    const newNotification = {
        ...notification,
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),
        read: false,
        createdAt: new Date().toISOString()
    };
    if (!notificationsMap[notification.userId]) {
        notificationsMap[notification.userId] = [];
    }
    notificationsMap[notification.userId].unshift(newNotification);
    saveNotifications(notificationsMap);
    return newNotification;
};
const markAsRead = async (notificationId)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const notificationsMap = getNotificationsFromStorage();
    for(const userId in notificationsMap){
        const userNotifications = notificationsMap[userId];
        const index = userNotifications.findIndex((n)=>n.id === notificationId);
        if (index !== -1) {
            userNotifications[index].read = true;
            saveNotifications(notificationsMap);
            return userNotifications[index];
        }
    }
    throw new Error("Notification not found");
};
const markAllAsRead = async (userId)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const notificationsMap = getNotificationsFromStorage();
    if (!notificationsMap[userId]) {
        return [];
    }
    notificationsMap[userId] = notificationsMap[userId].map((notification)=>({
            ...notification,
            read: true
        }));
    saveNotifications(notificationsMap);
    return notificationsMap[userId];
};
const createNotificationForUser = async (userId, title, message, options = {})=>{
    return createNotification({
        userId,
        title,
        message,
        ...options
    });
};
const createNotificationForStaff = async (title, message, options = {})=>{
    const users = JSON.parse(localStorage.getItem("eco_market_users") || "[]");
    const staffUsers = users.filter((user)=>user.role === "admin" || user.role === "manager");
    const promises = staffUsers.map((user)=>createNotification({
            userId: user.id,
            title,
            message,
            ...options
        }));
    await Promise.all(promises);
    return {
        success: true
    };
};
const createApplicationNotificationForAdmins = async (applicationId, applicationTitle, userId, userName)=>{
    const users = JSON.parse(localStorage.getItem("eco_market_users") || "[]");
    const adminUsers = users.filter((user)=>user.role === "admin" || user.role === "manager");
    const promises = adminUsers.map((adminUser)=>createNotification({
            userId: adminUser.id,
            title: "Новая заявка",
            message: `Пользователь ${userName} создал новую заявку "${applicationTitle}"`,
            type: "info",
            actionUrl: "/admin/applications",
            actionText: "Просмотреть заявку",
            relatedUserId: userId,
            relatedEntityId: applicationId,
            relatedEntityType: "application"
        }));
    await Promise.all(promises);
    return {
        success: true
    };
};
const createApplicationNotification = async (applicationId, applicationTitle, userId, sellerUserId)=>{
    let userName = "Пользователь";
    try {
        const users = JSON.parse(localStorage.getItem("eco_market_users") || "[]");
        const user = users.find((u)=>u.id === userId);
        if (user) {
            userName = user.name;
        }
    } catch (error) {
        console.error("Error getting user name:", error);
    }
    await createNotificationForUser(userId, "Заявка создана", `Ваша заявка "${applicationTitle}" успешно создана`, {
        type: "success",
        actionUrl: "/profile/applications",
        actionText: "Перейти к заявкам",
        relatedEntityId: applicationId,
        relatedEntityType: "application"
    });
    await createNotificationForUser(sellerUserId, "Новая заявка", `Поступила новая заявка "${applicationTitle}" от пользователя ${userName}`, {
        type: "info",
        actionUrl: "/profile/applications",
        actionText: "Просмотреть заявку",
        relatedUserId: userId,
        relatedEntityId: applicationId,
        relatedEntityType: "application"
    });
    await createApplicationNotificationForAdmins(applicationId, applicationTitle, userId, userName);
    return {
        success: true
    };
};
const createMaterialNotification = async (materialId, materialName, userId, status)=>{
    await createNotificationForUser(userId, status === "active" ? "Материал одобрен" : status === "rejected" ? "Материал отклонен" : "Материал на проверке", status === "active" ? `Ваш материал "${materialName}" был одобрен и опубликован` : status === "rejected" ? `Ваш материал "${materialName}" был отклонен. Пожалуйста, проверьте требования и попробуйте снова` : `Ваш материал "${materialName}" отправлен на проверку`, {
        type: status === "active" ? "success" : status === "rejected" ? "error" : "info",
        actionUrl: `/profile/materials`,
        actionText: "Перейти к материалам",
        relatedEntityId: materialId,
        relatedEntityType: "material"
    });
    if (status === "pending") {
        await createNotificationForStaff("Новый материал требует проверки", `Пользователь добавил новый материал "${materialName}"`, {
            type: "warning",
            actionUrl: "/admin/materials",
            actionText: "Проверить",
            relatedUserId: userId,
            relatedEntityId: materialId,
            relatedEntityType: "material"
        });
    }
    return {
        success: true
    };
};
const createApplicationStatusNotification = async (applicationId, applicationTitle, userId, status, updatedByUserId)=>{
    await createNotificationForUser(userId, status === "completed" ? "Заявка завершена" : status === "cancelled" ? "Заявка отменена" : "Статус заявки изменен", status === "completed" ? `Ваша заявка "${applicationTitle}" была успешно завершена` : status === "cancelled" ? `Ваша заявка "${applicationTitle}" была отменена` : `Статус вашей заявки "${applicationTitle}" был изменен на "${status === "active" ? "Активна" : status}"`, {
        type: status === "completed" ? "success" : status === "cancelled" ? "error" : "info",
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
const getUnreadNotificationsCount = async (userId)=>{
    const notifications = await getNotifications(userId);
    return notifications.filter((n)=>!n.read).length;
};
const deleteNotification = async (notificationId)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const notificationsMap = getNotificationsFromStorage();
    for(const userId in notificationsMap){
        const userNotifications = notificationsMap[userId];
        const index = userNotifications.findIndex((n)=>n.id === notificationId);
        if (index !== -1) {
            userNotifications.splice(index, 1);
            saveNotifications(notificationsMap);
            return {
                success: true
            };
        }
    }
    throw new Error("Notification not found");
};
const deleteAllNotifications = async (userId)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const notificationsMap = getNotificationsFromStorage();
    if (notificationsMap[userId]) {
        notificationsMap[userId] = [];
        saveNotifications(notificationsMap);
    }
    return {
        success: true
    };
};


/***/ }),

/***/ 1973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(9510);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(8570);
;// CONCATENATED MODULE: ./components/theme-provider.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\components\theme-provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = (0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\components\theme-provider.tsx#ThemeProvider`);

;// CONCATENATED MODULE: ./components/main-nav.tsx

const main_nav_proxy = (0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\components\main-nav.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: main_nav_esModule, $$typeof: main_nav_$$typeof } = main_nav_proxy;
const main_nav_default_ = main_nav_proxy.default;

const main_nav_e0 = (0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\components\main-nav.tsx#MainNav`);

;// CONCATENATED MODULE: ./components/user-nav.tsx

const user_nav_proxy = (0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\components\user-nav.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: user_nav_esModule, $$typeof: user_nav_$$typeof } = user_nav_proxy;
const user_nav_default_ = user_nav_proxy.default;

const user_nav_e0 = (0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\components\user-nav.tsx#UserNav`);

;// CONCATENATED MODULE: ./context/auth-context.tsx

const auth_context_proxy = (0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\context\auth-context.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: auth_context_esModule, $$typeof: auth_context_$$typeof } = auth_context_proxy;
const auth_context_default_ = auth_context_proxy.default;

const auth_context_e0 = (0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\context\auth-context.tsx#AuthProvider`);

const e1 = (0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\context\auth-context.tsx#useAuth`);

;// CONCATENATED MODULE: ./context/notifications-context.tsx

const notifications_context_proxy = (0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\context\notifications-context.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: notifications_context_esModule, $$typeof: notifications_context_$$typeof } = notifications_context_proxy;
const notifications_context_default_ = notifications_context_proxy.default;

const notifications_context_e0 = (0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\context\notifications-context.tsx#NotificationsProvider`);

const notifications_context_e1 = (0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\context\notifications-context.tsx#useNotifications`);

;// CONCATENATED MODULE: ./components/ui/toaster.tsx

const toaster_proxy = (0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\components\ui\toaster.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: toaster_esModule, $$typeof: toaster_$$typeof } = toaster_proxy;
const toaster_default_ = toaster_proxy.default;

const toaster_e0 = (0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\components\ui\toaster.tsx#Toaster`);

// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(7272);
;// CONCATENATED MODULE: ./context/favorites-context.tsx

const favorites_context_proxy = (0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\context\favorites-context.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: favorites_context_esModule, $$typeof: favorites_context_$$typeof } = favorites_context_proxy;
const favorites_context_default_ = favorites_context_proxy.default;

const favorites_context_e0 = (0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\context\favorites-context.tsx#FavoritesProvider`);

const favorites_context_e1 = (0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\context\favorites-context.tsx#useFavorites`);

// EXTERNAL MODULE: ./node_modules/next/dist/api/link.js
var api_link = __webpack_require__(7371);
;// CONCATENATED MODULE: ./app/layout.tsx










function RootLayout({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("html", {
        lang: "ru",
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("head", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx("title", {
                        children: "ЭкоМаркет - платформа для переработки вторсырья"
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Платформа для сдачи и приема вторсырья"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx("body", {
                children: /*#__PURE__*/ react_jsx_runtime.jsx(e0, {
                    attribute: "class",
                    defaultTheme: "system",
                    enableSystem: true,
                    disableTransitionOnChange: true,
                    children: /*#__PURE__*/ react_jsx_runtime.jsx(auth_context_e0, {
                        children: /*#__PURE__*/ react_jsx_runtime.jsx(notifications_context_e0, {
                            children: /*#__PURE__*/ react_jsx_runtime.jsx(favorites_context_e0, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "flex min-h-screen flex-col w-full max-w-7xl mx-auto",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx("header", {
                                            className: "border-b",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                className: "container flex h-16 items-center px-4",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime.jsx(main_nav_e0, {}),
                                                    /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                        className: "ml-auto flex items-center space-x-4",
                                                        children: /*#__PURE__*/ react_jsx_runtime.jsx(user_nav_e0, {})
                                                    })
                                                ]
                                            })
                                        }),
                                        children,
                                        /*#__PURE__*/ react_jsx_runtime.jsx("footer", {
                                            className: "border-t py-6 md:py-0",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                className: "container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: [
                                                            "\xa9 ",
                                                            new Date().getFullYear(),
                                                            " ЭкоМаркет. Все права защищены."
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        className: "flex gap-4 text-sm text-muted-foreground",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(api_link["default"], {
                                                                href: "/terms",
                                                                children: "Условия использования"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(api_link["default"], {
                                                                href: "/privacy",
                                                                children: "Политика конфиденциальности"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(toaster_e0, {})
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;