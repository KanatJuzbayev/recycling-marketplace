(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[3227],{

/***/ 6233:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1470));


/***/ }),

/***/ 1470:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AdminMaterialsPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6463);
/* harmony import */ var _context_auth_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8245);
/* harmony import */ var _services_material_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6364);
/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6975);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(495);
/* harmony import */ var _components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6910);
/* harmony import */ var _barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3550);
/* harmony import */ var _barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5733);
/* harmony import */ var _barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2940);
/* harmony import */ var _barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1935);
/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5657);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3028);
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4693);
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6013);
/* __next_internal_client_entry_do_not_use__ default auto */ 












function AdminMaterialsPage() {
    const [materials, setMaterials] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { toast } = (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_7__/* .useToast */ .pm)();
    const { user } = (0,_context_auth_context__WEBPACK_IMPORTED_MODULE_3__/* .useAuth */ .a)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchMaterials = async ()=>{
            try {
                const data = await (0,_services_material_service__WEBPACK_IMPORTED_MODULE_10__/* .getAllMaterials */ .RU)();
                setMaterials(data);
            } catch (error) {
                console.error("Error fetching materials:", error);
                toast({
                    variant: "destructive",
                    title: "Ошибка",
                    description: "Не удалось загрузить список материалов"
                });
            } finally{
                setIsLoading(false);
            }
        };
        fetchMaterials();
    }, [
        toast
    ]);
    const handleUpdateStatus = async (materialId, newStatus)=>{
        try {
            const updatedMaterial = await (0,_services_material_service__WEBPACK_IMPORTED_MODULE_10__/* .updateMaterialStatus */ .o)(materialId, newStatus);
            setMaterials(materials.map((m)=>m.id === materialId ? {
                    ...m,
                    status: newStatus
                } : m));
            try {
                const { createMaterialNotification } = await __webpack_require__.e(/* import() */ 6807).then(__webpack_require__.bind(__webpack_require__, 6807));
                await createMaterialNotification(materialId, updatedMaterial.name, updatedMaterial.userId, newStatus);
            } catch (error) {
                console.error("Error creating notification:", error);
            }
            if (user) {
                await (0,_services_admin_service__WEBPACK_IMPORTED_MODULE_11__/* .addAdminLog */ .UE)({
                    userId: user.id,
                    userName: user.name,
                    action: "update_material_status",
                    details: "Изменен статус материала ".concat(materialId, " на ").concat(newStatus),
                    ip: "127.0.0.1"
                });
            }
            toast({
                title: "Статус обновлен",
                description: 'Статус материала успешно изменен на "'.concat(newStatus === "active" ? "Активен" : newStatus === "pending" ? "На проверке" : "Отклонен", '"')
            });
        } catch (error) {
            console.error("Error updating material status:", error);
            let errorMessage = "Не удалось обновить статус материала";
            if (error instanceof Error) {
                errorMessage = error.message;
            } else if (typeof error === "object" && error !== null && "message" in error) {
                errorMessage = String(error.message);
            }
            toast({
                variant: "destructive",
                title: "Ошибка",
                description: errorMessage
            });
        }
    };
    const getMaterialTypeLabel = (type)=>{
        switch(type){
            case "paper":
                return "Бумага";
            case "plastic":
                return "Пластик";
            case "glass":
                return "Стекло";
            case "metal":
                return "Металл";
            case "electronics":
                return "Электроника";
            default:
                return type;
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "flex items-center justify-center h-full",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                className: "text-muted-foreground",
                children: "Загрузка материалов..."
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                        className: "text-3xl font-bold",
                        children: "Управление материалами"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_8__/* .Badge */ .C, {
                        variant: "outline",
                        children: [
                            materials.length,
                            " материалов"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_9__/* .Card */ .Zb, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_9__/* .CardHeader */ .Ol, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_9__/* .CardTitle */ .ll, {
                                children: "Список материалов"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_9__/* .CardDescription */ .SZ, {
                                children: "Управление материалами на платформе. Вы можете изменять статусы материалов и модерировать их."
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_9__/* .CardContent */ .aY, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .Table */ .iA, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHeader */ .xD, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableRow */ .SC, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Название"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Тип"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Продавец"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Цена (₸/кг)"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Количество (кг)"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Статус"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                children: "Дата создания"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableHead */ .ss, {
                                                className: "text-right",
                                                children: "Действия"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableBody */ .RM, {
                                    children: materials.map((material)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableRow */ .SC, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    className: "font-medium",
                                                    children: material.name
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    children: getMaterialTypeLabel(material.type)
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    children: material.userName
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    children: material.price
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    children: material.quantity
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_8__/* .Badge */ .C, {
                                                        variant: material.status === "active" ? "default" : material.status === "pending" ? "secondary" : "destructive",
                                                        children: material.status === "active" ? "Активен" : material.status === "pending" ? "На проверке" : "Отклонен"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    children: new Date(material.createdAt).toLocaleDateString()
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_4__/* .TableCell */ .pj, {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .DropdownMenu */ .h_, {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .DropdownMenuTrigger */ .$F, {
                                                                asChild: true,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_5__/* .Button */ .z, {
                                                                    variant: "ghost",
                                                                    size: "icon",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                                            className: "h-4 w-4"
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                            className: "sr-only",
                                                                            children: "Меню"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .DropdownMenuContent */ .AW, {
                                                                align: "end",
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .DropdownMenuLabel */ .Ju, {
                                                                        children: "Действия"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .DropdownMenuItem */ .Xi, {
                                                                        onClick: ()=>router.push("/marketplace/".concat(material.id)),
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                children: "Просмотреть"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .DropdownMenuSeparator */ .VD, {}),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .DropdownMenuItem */ .Xi, {
                                                                        onClick: ()=>handleUpdateStatus(material.id, "active"),
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                children: "Активировать"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .DropdownMenuItem */ .Xi, {
                                                                        onClick: ()=>handleUpdateStatus(material.id, "pending"),
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                children: "На проверку"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__/* .DropdownMenuItem */ .Xi, {
                                                                        onClick: ()=>handleUpdateStatus(material.id, "rejected"),
                                                                        children: [
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_CheckCircle_Eye_MoreHorizontal_XCircle_lucide_react__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                                                                children: "Отклонить"
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }, material.id))
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

/***/ 1935:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ CircleX; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const CircleX = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("CircleX", [
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
            d: "m15 9-6 6",
            key: "1uzhvr"
        }
    ],
    [
        "path",
        {
            d: "m9 9 6 6",
            key: "z0biqf"
        }
    ]
]);
 //# sourceMappingURL=circle-x.js.map


/***/ }),

/***/ 5733:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ Eye; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [9247,4766,7876,5176,193,1860,270,2971,7023,1744], function() { return __webpack_exec__(6233); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);