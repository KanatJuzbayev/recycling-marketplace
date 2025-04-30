(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7240],{

/***/ 6282:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2646));


/***/ }),

/***/ 2646:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ MarketplacePage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(6463);
// EXTERNAL MODULE: ./components/ui/card.tsx
var card = __webpack_require__(6013);
// EXTERNAL MODULE: ./components/ui/input.tsx
var input = __webpack_require__(3102);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(495);
// EXTERNAL MODULE: ./components/ui/select.tsx
var ui_select = __webpack_require__(6294);
// EXTERNAL MODULE: ./components/ui/tabs.tsx
var tabs = __webpack_require__(5273);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slider/dist/index.mjs
var dist = __webpack_require__(7553);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(7440);
;// CONCATENATED MODULE: ./components/ui/slider.tsx
/* __next_internal_client_entry_do_not_use__ Slider auto */ 



const Slider = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(dist/* Root */.fC, {
        ref: ref,
        className: (0,utils.cn)("relative flex w-full touch-none select-none items-center", className),
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Track */.fQ, {
                className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Range */.e6, {
                    className: "absolute h-full bg-primary"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dist/* Thumb */.bU, {
                className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            })
        ]
    });
});
Slider.displayName = dist/* Root */.fC.displayName;


// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/search.js
var search = __webpack_require__(4817);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/x.js
var x = __webpack_require__(4697);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/loader-circle.js
var loader_circle = __webpack_require__(3274);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/filter.js
var filter = __webpack_require__(404);
// EXTERNAL MODULE: ./services/material-service.ts
var material_service = __webpack_require__(6364);
// EXTERNAL MODULE: ./components/material-card.tsx
var material_card = __webpack_require__(5000);
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
    (0,react.useEffect)(()=>{
        const fetchMaterials = async ()=>{
            try {
                setIsLoading(true);
                setError(null);
                const data = await (0,material_service/* getMaterials */.aS)();
                const activeMaterials = data.filter((material)=>material.status === "active");
                setMaterials(activeMaterials);
                setFilteredMaterials(activeMaterials);
            } catch (error) {
                console.error("Error fetching materials:", error);
                setError("Не удалось загрузить материалы. Пожалуйста, попробуйте позже.");
            } finally{
                setIsLoading(false);
            }
        };
        fetchMaterials();
    }, []);
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
    (0,react.useEffect)(()=>{
        setPriceRange([
            0,
            maxPrice
        ]);
    }, [
        maxPrice
    ]);
    (0,react.useEffect)(()=>{
        let result = [
            ...materials
        ];
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter((material)=>{
                var _material_name, _material_description, _material_type;
                return ((_material_name = material.name) === null || _material_name === void 0 ? void 0 : _material_name.toLowerCase().includes(query)) || ((_material_description = material.description) === null || _material_description === void 0 ? void 0 : _material_description.toLowerCase().includes(query)) || ((_material_type = material.type) === null || _material_type === void 0 ? void 0 : _material_type.toLowerCase().includes(query));
            });
        }
        if (materialType !== "all") {
            result = result.filter((material)=>material.type === materialType);
        }
        result = result.filter((material)=>material.price !== undefined && material.price >= priceRange[0] && material.price <= priceRange[1]);
        setFilteredMaterials(result);
    }, [
        materials,
        searchQuery,
        materialType,
        priceRange
    ]);
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "container py-8",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Витрина материалов"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid gap-6 md:grid-cols-[1fr_3fr]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* Card */.Zb, {
                        className: "h-fit",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardContent */.aY, {
                            className: "p-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                    className: "text-lg font-semibold mb-4",
                                    children: "Фильтры"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                    htmlFor: "search",
                                                    className: "text-sm font-medium mb-1 block",
                                                    children: "Поиск"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(search/* default */.Z, {
                                                            className: "absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(input/* Input */.I, {
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
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                    htmlFor: "material-type",
                                                    className: "text-sm font-medium mb-1 block",
                                                    children: "Тип материала"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_select/* Select */.Ph, {
                                                    value: materialType,
                                                    onValueChange: setMaterialType,
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* SelectTrigger */.i4, {
                                                            id: "material-type",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* SelectValue */.ki, {
                                                                placeholder: "Выберите тип"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* SelectContent */.Bw, {
                                                            children: availableMaterialTypes.map((type)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ui_select/* SelectItem */.Ql, {
                                                                    value: type.value,
                                                                    children: type.label
                                                                }, type.value))
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("label", {
                                                    className: "text-sm font-medium mb-3 block",
                                                    children: "Цена за кг (₸)"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider, {
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
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex justify-between mt-1 text-sm text-muted-foreground",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                            children: [
                                                                priceRange[0],
                                                                " ₸"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                            children: [
                                                                priceRange[1],
                                                                " ₸"
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                            variant: "outline",
                                            className: "w-full flex items-center justify-center",
                                            onClick: handleClearFilters,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(x/* default */.Z, {
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
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(tabs/* Tabs */.mQ, {
                            defaultValue: "grid",
                            className: "mb-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "text-sm text-muted-foreground",
                                            children: [
                                                filteredMaterials.length,
                                                " ",
                                                filteredMaterials.length === 1 ? "материал" : "материалов"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(tabs/* TabsList */.dr, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsTrigger */.SP, {
                                                    value: "grid",
                                                    children: "Сетка"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsTrigger */.SP, {
                                                    value: "list",
                                                    children: "Список"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsContent */.nU, {
                                    value: "grid",
                                    className: "mt-6",
                                    children: isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "flex justify-center items-center py-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(loader_circle/* default */.Z, {
                                            className: "h-8 w-8 animate-spin text-primary"
                                        })
                                    }) : error ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-center py-12",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-destructive mb-4",
                                                children: error
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                                                onClick: ()=>window.location.reload(),
                                                children: "Попробовать снова"
                                            })
                                        ]
                                    }) : filteredMaterials.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                        children: filteredMaterials.map((material)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(material_card/* MaterialCard */.F, {
                                                material: material
                                            }, material.id))
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-center py-12",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(filter/* default */.Z, {
                                                className: "h-12 w-12 mx-auto text-muted-foreground mb-4"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                className: "text-lg font-medium",
                                                children: "Материалы не найдены"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-muted-foreground mt-1",
                                                children: "Попробуйте изменить параметры фильтрации или поисковый запрос"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                                                className: "mt-4",
                                                onClick: handleClearFilters,
                                                children: "Сбросить фильтры"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsContent */.nU, {
                                    value: "list",
                                    className: "mt-6",
                                    children: isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "flex justify-center items-center py-12",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(loader_circle/* default */.Z, {
                                            className: "h-8 w-8 animate-spin text-primary"
                                        })
                                    }) : error ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-center py-12",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-destructive mb-4",
                                                children: error
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                                                onClick: ()=>window.location.reload(),
                                                children: "Попробовать снова"
                                            })
                                        ]
                                    }) : filteredMaterials.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "space-y-4",
                                        children: filteredMaterials.map((material)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(card/* Card */.Zb, {
                                                className: "overflow-hidden cursor-pointer hover:shadow-md transition-shadow",
                                                onClick: ()=>router.push("/marketplace/".concat(material.id)),
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex flex-col sm:flex-row",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "h-40 sm:h-auto sm:w-40 bg-cover bg-center",
                                                            style: {
                                                                backgroundImage: "url(".concat(material.image || "/placeholder.svg?key=oxk1n", ")")
                                                            }
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "p-4 flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                    className: "flex justify-between items-start",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                                    className: "font-semibold text-lg",
                                                                                    children: material.name
                                                                                }),
                                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                                    className: "text-sm text-muted-foreground",
                                                                                    children: getMaterialTypeLabel(material.type || "other")
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                            className: "flex items-center space-x-2",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                                                className: "font-bold",
                                                                                children: [
                                                                                    material.price,
                                                                                    " ₸/кг"
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "mt-2 text-sm line-clamp-2",
                                                                    children: material.description
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, material.id))
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "text-center py-12",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(filter/* default */.Z, {
                                                className: "h-12 w-12 mx-auto text-muted-foreground mb-4"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                className: "text-lg font-medium",
                                                children: "Материалы не найдены"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-muted-foreground mt-1",
                                                children: "Попробуйте изменить параметры фильтрации или поисковый запрос"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
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

/***/ 5000:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: function() { return /* binding */ MaterialCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6463);
/* harmony import */ var _barrel_optimize_names_Heart_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3274);
/* harmony import */ var _barrel_optimize_names_Heart_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4042);
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6013);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(495);
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4693);
/* harmony import */ var _context_favorites_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4651);
/* harmony import */ var _context_auth_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8245);
/* __next_internal_client_entry_do_not_use__ MaterialCard auto */ 








function MaterialCard(param) {
    let { material, showFavoriteButton = true } = param;
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { user } = (0,_context_auth_context__WEBPACK_IMPORTED_MODULE_7__/* .useAuth */ .a)();
    const { favorites, toggleFavorite, isToggling } = (0,_context_favorites_context__WEBPACK_IMPORTED_MODULE_6__/* .useFavorites */ .r)();
    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const isFavorite = favorites.includes(material.id);
    const handleMaterialClick = ()=>{
        router.push("/marketplace/".concat(material.id));
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "h-48 bg-muted bg-cover bg-center cursor-pointer relative",
                style: {
                    backgroundImage: "url(".concat(material.image || "/placeholder.svg?key=oxk1n", ")"),
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                },
                onMouseEnter: ()=>setIsHovered(true),
                onMouseLeave: ()=>setIsHovered(false),
                children: showFavoriteButton && user && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "absolute top-2 right-2 transition-opacity duration-200 ".concat(isHovered || isFavorite ? "opacity-100" : "opacity-0"),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .z, {
                        variant: "secondary",
                        size: "icon",
                        className: "h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background",
                        disabled: isToggling[material.id],
                        onClick: handleToggleFavorite,
                        "aria-label": isFavorite ? "Удалить из избранного" : "Добавить в избранное",
                        children: isToggling[material.id] ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Heart_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            className: "h-5 w-5 animate-spin"
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Heart_Loader2_lucide_react__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            className: "h-5 w-5 ".concat(isFavorite ? "fill-primary text-primary" : "text-muted-foreground")
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardHeader */ .Ol, {
                className: "p-4 cursor-pointer",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                    className: "flex justify-between items-start",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardTitle */ .ll, {
                                className: "text-lg",
                                children: material.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardDescription */ .SZ, {
                                children: material.type
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardContent */ .aY, {
                className: "p-4 pt-0 cursor-pointer",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                    className: "text-sm line-clamp-2",
                    children: material.description
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_3__/* .CardFooter */ .eW, {
                className: "p-4 flex justify-between cursor-pointer",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_5__/* .Badge */ .C, {
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

/***/ 6294:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bw: function() { return /* binding */ SelectContent; },
/* harmony export */   Ph: function() { return /* binding */ Select; },
/* harmony export */   Ql: function() { return /* binding */ SelectItem; },
/* harmony export */   i4: function() { return /* binding */ SelectTrigger; },
/* harmony export */   ki: function() { return /* binding */ SelectValue; }
/* harmony export */ });
/* unused harmony exports SelectGroup, SelectLabel, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7549);
/* harmony import */ var _barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2421);
/* harmony import */ var _barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4392);
/* harmony import */ var _barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2468);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7440);
/* __next_internal_client_entry_do_not_use__ Select,SelectGroup,SelectValue,SelectTrigger,SelectContent,SelectLabel,SelectItem,SelectSeparator,SelectScrollUpButton,SelectScrollDownButton auto */ 




const Select = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC;
const SelectGroup = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Group */ .ZA;
const SelectValue = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Value */ .B4;
const SelectTrigger = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .JO, {
                asChild: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    className: "h-4 w-4 opacity-50"
                })
            })
        ]
    });
});
SelectTrigger.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz.displayName;
const SelectScrollUpButton = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .ScrollUpButton */ .u_, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            className: "h-4 w-4"
        })
    });
});
SelectScrollUpButton.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .ScrollUpButton */ .u_.displayName;
const SelectScrollDownButton = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .ScrollDownButton */ .$G, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            className: "h-4 w-4"
        })
    });
});
SelectScrollDownButton.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .ScrollDownButton */ .$G.displayName;
const SelectContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, children, position = "popper", ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .h_, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, {
            ref: ref,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectScrollUpButton, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Viewport */ .l_, {
                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                    children: children
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SelectScrollDownButton, {})
            ]
        })
    });
});
SelectContent.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY.displayName;
const SelectLabel = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Label */ .__, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", className),
        ...props
    });
});
SelectLabel.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Label */ .__.displayName;
const SelectItem = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .ItemIndicator */ .wU, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Check_ChevronDown_ChevronUp_lucide_react__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: "h-4 w-4"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .ItemText */ .eT, {
                children: children
            })
        ]
    });
});
SelectItem.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck.displayName;
const SelectSeparator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Separator */ .Z0, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("-mx-1 my-1 h-px bg-muted", className),
        ...props
    });
});
SelectSeparator.displayName = _radix_ui_react_select__WEBPACK_IMPORTED_MODULE_2__/* .Separator */ .Z0.displayName;



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



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [9247,4766,7876,5176,7600,7795,1860,813,2971,7023,1744], function() { return __webpack_exec__(6282); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);