(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6688],{

/***/ 3368:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1974));


/***/ }),

/***/ 1974:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MaterialDetailClient; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6463);
/* harmony import */ var _services_material_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(6364);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6648);
/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6013);
/* harmony import */ var _components_ui_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6975);
/* harmony import */ var _components_ui_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4693);
/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2738);
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(495);
/* harmony import */ var _context_auth_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8245);
/* harmony import */ var _barrel_optimize_names_Heart_Package_ShoppingCart_lucide_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4042);
/* harmony import */ var _barrel_optimize_names_Heart_Package_ShoppingCart_lucide_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7524);
/* harmony import */ var _barrel_optimize_names_Heart_Package_ShoppingCart_lucide_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(8960);
/* harmony import */ var _components_ui_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(837);
/* harmony import */ var _components_ui_label__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7135);
/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3102);
/* harmony import */ var _components_ui_textarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3146);
/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5657);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9235);
/* harmony import */ var _context_favorites_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(4651);
/* __next_internal_client_entry_do_not_use__ default auto */ 


















function MaterialDetailClient() {
    const { id } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { user } = (0,_context_auth_context__WEBPACK_IMPORTED_MODULE_9__/* .useAuth */ .a)();
    const { isFavorite, toggleFavorite } = (0,_context_favorites_context__WEBPACK_IMPORTED_MODULE_16__/* .useFavorites */ .r)();
    const { toast } = (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_14__/* .useToast */ .pm)();
    const [material, setMaterial] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [stocks, setStocks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isFav, setIsFav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isOrderDialogOpen, setIsOrderDialogOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedStock, setSelectedStock] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [redirecting, setRedirecting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("1");
    const [deliveryAddress, setDeliveryAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [contactPhone, setContactPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [notes, setNotes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [userType, setUserType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const getActualUserType = async ()=>{
        try {
            const serverType = await (0,_services_auth_service__WEBPACK_IMPORTED_MODULE_15__.getUserTypeFromServer)();
            if (serverType) {
                console.log("[MaterialDetail] User type from server:", serverType);
                setUserType(serverType);
                return serverType;
            }
            const localType = localStorage.getItem("user_type") || "";
            console.log("[MaterialDetail] User type from localStorage:", localType);
            setUserType(localType);
            return localType;
        } catch (error) {
            console.error("[MaterialDetail] Error getting user type:", error);
            const localType = localStorage.getItem("user_type") || "";
            setUserType(localType);
            return localType;
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getActualUserType();
        if (user) {
            console.log("[MaterialDetail] User from context:", user);
            console.log("[MaterialDetail] User type from context:", user.type);
            console.log("[MaterialDetail] User role from context:", user.role);
        }
    }, [
        user
    ]);
    const isBuyer = userType === "buyer";
    const isSeller = userType === "seller";
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                setLoading(true);
                const materialData = await (0,_services_material_service__WEBPACK_IMPORTED_MODULE_17__/* .getMaterialById */ .J2)(id);
                setMaterial(materialData);
                if (user && materialData) {
                    const favStatus = isFavorite(materialData.id);
                    setIsFav(favStatus);
                }
                const stocksResponse = await fetch("https://recycling-marketplace-backend.onrender.com/api/stocks/available/material/".concat(id));
                if (!stocksResponse.ok) {
                    throw new Error("Failed to fetch stocks: ".concat(stocksResponse.status));
                }
                const stocksData = await stocksResponse.json();
                setStocks(stocksData);
                setError(null);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Не удалось загрузить данные. Пожалуйста, попробуйте позже.");
            } finally{
                setLoading(false);
            }
        };
        if (id) {
            fetchData();
        }
    }, [
        id,
        user,
        isFavorite
    ]);
    const safeRedirect = (path)=>{
        try {
            console.log("[MaterialDetail] Redirecting to ".concat(path, "..."));
            setRedirecting(true);
            setTimeout(()=>{
                router.push(path);
            }, 100);
        } catch (error) {
            console.error("[MaterialDetail] Error redirecting to ".concat(path, ":"), error);
            toast({
                title: "Ошибка перенаправления",
                description: "Не удалось перейти на страницу ".concat(path, ". Пожалуйста, попробуйте вручную."),
                variant: "destructive"
            });
        }
    };
    const handleToggleFavorite = async ()=>{
        if (!user) {
            toast({
                title: "Требуется авторизация",
                description: "Пожалуйста, войдите в систему, чтобы добавить материал в избранное",
                variant: "destructive"
            });
            safeRedirect("/auth/login");
            return;
        }
        if (material) {
            try {
                await toggleFavorite(material.id);
                const newFavStatus = !isFav;
                setIsFav(newFavStatus);
                toast({
                    title: newFavStatus ? "Добавлено в избранное" : "Удалено из избранного",
                    description: newFavStatus ? "Материал успешно добавлен в избранное" : "Материал успешно удален из избранного"
                });
            } catch (error) {
                console.error("Error toggling favorite:", error);
                toast({
                    title: "Ошибка",
                    description: "Не удалось обновить избранное. Пожалуйста, попробуйте позже.",
                    variant: "destructive"
                });
            }
        }
    };
    const handleCreateOrder = async (stock)=>{
        if (!user) {
            toast({
                title: "Требуется авторизация",
                description: "Пожалуйста, войдите в систему, чтобы создать заявку",
                variant: "destructive"
            });
            safeRedirect("/auth/login");
            return;
        }
        const token = localStorage.getItem("token");
        if (!token) {
            toast({
                title: "Ошибка авторизации",
                description: "Токен авторизации отсутствует. Пожалуйста, войдите в систему заново.",
                variant: "destructive"
            });
            safeRedirect("/auth/login");
            return;
        }
        const actualUserType = await getActualUserType();
        console.log("[MaterialDetail] Creating order - Actual user type:", actualUserType);
        if (actualUserType !== "buyer") {
            toast({
                title: "Доступно только для покупателей",
                description: "Создание заявок доступно только для пользователей с типом 'Покупатель'",
                variant: "destructive"
            });
            return;
        }
        setSelectedStock(stock);
        setIsOrderDialogOpen(true);
    };
    const handleSubmitOrder = async ()=>{
        console.log("[MaterialDetail] handleSubmitOrder started");
        console.log("[MaterialDetail] User:", user);
        console.log("[MaterialDetail] Selected stock:", selectedStock);
        console.log("[MaterialDetail] Material:", material);
        if (!user || !selectedStock || !material) {
            console.error("[MaterialDetail] Missing required data:", {
                user: !!user,
                selectedStock: !!selectedStock,
                material: !!material
            });
            toast({
                title: "Ошибка",
                description: "Отсутствуют необходимые данные для создания заявки",
                variant: "destructive"
            });
            return;
        }
        try {
            setIsSubmitting(true);
            console.log("[MaterialDetail] Setting isSubmitting to true");
            const token = localStorage.getItem("token");
            console.log("[MaterialDetail] Token exists:", !!token);
            if (!token) {
                toast({
                    title: "Ошибка авторизации",
                    description: "Токен авторизации отсутствует. Пожалуйста, войдите в систему заново.",
                    variant: "destructive"
                });
                safeRedirect("/auth/login");
                return;
            }
            let buyerId = null;
            if (user && user.id) {
                console.log("[MaterialDetail] Raw user.id value:", user.id);
                console.log("[MaterialDetail] Type of user.id:", typeof user.id);
                if (user.id !== "user_id" && !isNaN(Number(user.id))) {
                    buyerId = Number(user.id);
                    console.log("[MaterialDetail] Using buyer_id from user object:", buyerId);
                } else {
                    console.log("[MaterialDetail] Invalid user.id value:", user.id);
                }
            }
            if (!buyerId || isNaN(buyerId)) {
                const userId = localStorage.getItem("user_id");
                if (userId && !isNaN(Number(userId))) {
                    buyerId = Number(userId);
                    console.log("[MaterialDetail] Using buyer_id from localStorage:", buyerId);
                } else {
                    console.log("[MaterialDetail] Invalid localStorage user_id:", userId);
                }
            }
            if (!buyerId || isNaN(buyerId)) {
                try {
                    const tokenParts = token.split(".");
                    if (tokenParts.length === 3) {
                        const payload = JSON.parse(atob(tokenParts[1]));
                        console.log("[MaterialDetail] JWT token payload:", payload);
                        if (payload && payload.id && !isNaN(Number(payload.id))) {
                            buyerId = Number(payload.id);
                            console.log("[MaterialDetail] Using buyer_id from JWT token:", buyerId);
                        }
                    }
                } catch (e) {
                    console.error("[MaterialDetail] Error parsing JWT token:", e);
                }
            }
            if (!buyerId || isNaN(buyerId)) {
                const userAny = user;
                console.log("[MaterialDetail] All user properties:", Object.keys(userAny));
                if (userAny.userId && !isNaN(Number(userAny.userId))) {
                    buyerId = Number(userAny.userId);
                    console.log("[MaterialDetail] Using buyer_id from user.userId:", buyerId);
                } else if (userAny.user_id && !isNaN(Number(userAny.user_id))) {
                    buyerId = Number(userAny.user_id);
                    console.log("[MaterialDetail] Using buyer_id from user.user_id:", buyerId);
                }
            }
            if (!buyerId || isNaN(buyerId)) {
                buyerId = 1;
                console.log("[MaterialDetail] Using fixed test buyer_id:", buyerId);
            }
            if (!buyerId || isNaN(buyerId)) {
                console.error("[MaterialDetail] Failed to determine buyer_id");
                toast({
                    title: "Ошибка",
                    description: "Не удалось определить ID пользователя. Пожалуйста, войдите в систему заново.",
                    variant: "destructive"
                });
                safeRedirect("/auth/login");
                return;
            }
            const orderQuantity = Number(quantity);
            const availableQuantity = Number(selectedStock.quantity);
            console.log("[MaterialDetail] Order quantity:", orderQuantity);
            console.log("[MaterialDetail] Available quantity:", availableQuantity);
            if (isNaN(orderQuantity) || orderQuantity <= 0) {
                console.error("[MaterialDetail] Invalid quantity:", orderQuantity);
                toast({
                    title: "Ошибка",
                    description: "Количество должно быть больше нуля",
                    variant: "destructive"
                });
                return;
            }
            if (orderQuantity > availableQuantity) {
                console.error("[MaterialDetail] Quantity exceeds available:", {
                    orderQuantity,
                    availableQuantity
                });
                toast({
                    title: "Ошибка",
                    description: "Доступно только ".concat(availableQuantity, " кг"),
                    variant: "destructive"
                });
                return;
            }
            const orderData = {
                buyer_id: buyerId,
                material_id: Number(selectedStock.material_id),
                quantity: orderQuantity,
                price: Number(selectedStock.material_price),
                bin_id: Number(selectedStock.bin_id),
                delivery_address: deliveryAddress || "string",
                contact_phone: contactPhone || "string",
                notes: notes || "string"
            };
            console.log("[MaterialDetail] Submitting order with data:", JSON.stringify(orderData, null, 2));
            console.log("[MaterialDetail] Calling createOrder directly");
            if (!token) {
                throw new Error("Токен авторизации отсутствует. Пожалуйста, войдите в систему.");
            }
            if (!orderData.buyer_id || isNaN(Number(orderData.buyer_id))) {
                throw new Error("ID покупателя отсутствует или некорректен");
            }
            const formattedOrderData = {
                buyer_id: Number(orderData.buyer_id),
                material_id: Number(orderData.material_id),
                quantity: Number(orderData.quantity),
                price: Number(orderData.price),
                bin_id: Number(orderData.bin_id),
                delivery_address: orderData.delivery_address || "string",
                contact_phone: orderData.contact_phone || "string",
                notes: orderData.notes || "string"
            };
            console.log("[MaterialDetail] Formatted order data:", JSON.stringify(formattedOrderData, null, 2));
            console.log("[MaterialDetail] Sending direct fetch request to:", "https://recycling-marketplace-backend.onrender.com/api/orders/create");
            const response = await fetch("https://recycling-marketplace-backend.onrender.com/api/orders/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(token)
                },
                body: JSON.stringify(formattedOrderData)
            });
            console.log("[MaterialDetail] Response status:", response.status);
            const responseText = await response.text();
            console.log("[MaterialDetail] Response text:", responseText);
            let responseData;
            try {
                responseData = JSON.parse(responseText);
                console.log("[MaterialDetail] Parsed response data:", responseData);
            } catch (e) {
                console.error("[MaterialDetail] Error parsing response JSON:", e);
                if (!response.ok) {
                    throw new Error("Ошибка при создании заявки: ".concat(response.status, " - ").concat(responseText));
                }
                responseData = {
                    success: true
                };
            }
            if (!response.ok) {
                const errorMessage = responseData.message || responseData.error || "Ошибка при создании заявки: ".concat(response.status);
                console.error("[MaterialDetail] Error response data:", responseData);
                throw new Error(errorMessage);
            }
            console.log("[MaterialDetail] Order created successfully:", responseData);
            toast({
                title: "Заявка создана",
                description: "Ваша заявка успешно создана и отправлена продавцу"
            });
            setIsOrderDialogOpen(false);
            setQuantity("1");
            setDeliveryAddress("");
            setContactPhone("");
            setNotes("");
            setSelectedStock(null);
            console.log("[MaterialDetail] Preparing to redirect to /profile/applications");
            setTimeout(()=>{
                console.log("[MaterialDetail] Executing redirect to /profile/applications");
                safeRedirect("/profile/applications");
            }, 500);
        } catch (error) {
            console.error("[MaterialDetail] Error creating order:", error);
            let errorMessage = "Не удалось создать заявку. Пожалуйста, попробуйте позже.";
            if (error instanceof Error) {
                errorMessage = error.message;
            } else if (typeof error === "object" && error !== null) {
                const errorObj = error;
                if (errorObj.message) {
                    errorMessage = errorObj.message;
                } else if (errorObj.error) {
                    errorMessage = typeof errorObj.error === "string" ? errorObj.error : JSON.stringify(errorObj.error);
                }
            }
            toast({
                title: "Ошибка",
                description: errorMessage,
                variant: "destructive"
            });
        } finally{
            console.log("[MaterialDetail] Setting isSubmitting to false");
            setIsSubmitting(false);
        }
    };
    const handleManualRedirect = ()=>{
        safeRedirect("/profile/applications");
    };
    if (loading) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container mx-auto py-8 px-4",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_7__/* .Skeleton */ .O, {
                    className: "h-[300px] w-full mb-8"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_7__/* .Skeleton */ .O, {
                    className: "h-[400px] w-full"
                })
            ]
        });
    }
    if (error) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "container mx-auto py-8 px-4",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",
                role: "alert",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
                        className: "font-bold",
                        children: "Ошибка!"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "block sm:inline",
                        children: [
                            " ",
                            error
                        ]
                    })
                ]
            })
        });
    }
    if (!material) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: "container mx-auto py-8 px-4",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative",
                role: "alert",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", {
                        className: "font-bold",
                        children: "Внимание!"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        className: "block sm:inline",
                        children: " Материал не найден."
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container mx-auto py-8 px-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                            className: "text-2xl font-bold",
                                            children: material.name
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardDescription */ .SZ, {
                                            className: "text-gray-500",
                                            children: [
                                                material.type && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_6__/* .Badge */ .C, {
                                                    variant: "outline",
                                                    className: "mr-2",
                                                    children: mapTypeToRussian(material.type)
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_6__/* .Badge */ .C, {
                                                    variant: material.dealType === "sell" ? "default" : "secondary",
                                                    children: material.dealType === "sell" ? "Продажа" : "Покупка"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "text-2xl font-bold text-green-600",
                                    children: [
                                        material.price,
                                        " ₸/кг"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    children: material.image && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                        className: "relative h-[300px] w-full rounded-lg overflow-hidden",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(next_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                            src: material.image || "/placeholder.svg",
                                            alt: material.name,
                                            fill: true,
                                            style: {
                                                objectFit: "cover"
                                            },
                                            className: "rounded-lg"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", {
                                            className: "text-xl font-semibold mb-4",
                                            children: "Описание"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                            className: "text-gray-700 mb-6",
                                            children: material.description
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "grid grid-cols-2 gap-4 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                            className: "text-sm text-gray-500",
                                                            children: "Продавец"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                            className: "font-medium",
                                                            children: material.userName
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                            className: "text-sm text-gray-500",
                                                            children: "Дата публикации"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                                            className: "font-medium",
                                                            children: new Date(material.createdAt).toLocaleDateString("ru-RU")
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex flex-wrap gap-4",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                                    variant: "outline",
                                                    size: "icon",
                                                    onClick: handleToggleFavorite,
                                                    className: isFav ? "text-red-500 hover:text-red-600" : "text-gray-500 hover:text-red-500",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Heart_Package_ShoppingCart_lucide_react__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {
                                                        className: isFav ? "fill-current" : ""
                                                    })
                                                }),
                                                user && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                                    onClick: handleManualRedirect,
                                                    className: "flex items-center gap-2",
                                                    variant: "outline",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Heart_Package_ShoppingCart_lucide_react__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {
                                                            className: "h-4 w-4"
                                                        }),
                                                        "Мои заявки"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .Zb, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardHeader */ .Ol, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardTitle */ .ll, {
                                children: "Доступные запасы"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardDescription */ .SZ, {
                                children: [
                                    "Всего доступно:",
                                    " ",
                                    stocks.reduce((acc, stock)=>acc + Number.parseFloat(stock.quantity), 0).toFixed(2),
                                    " ",
                                    "кг"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_card__WEBPACK_IMPORTED_MODULE_4__/* .CardContent */ .aY, {
                        children: stocks.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .Table */ .iA, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .TableHeader */ .xD, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .TableRow */ .SC, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .TableHead */ .ss, {
                                                children: "ID"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .TableHead */ .ss, {
                                                children: "Продавец"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .TableHead */ .ss, {
                                                children: "Склад"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .TableHead */ .ss, {
                                                children: "Местоположение"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .TableHead */ .ss, {
                                                children: "Количество (кг)"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .TableHead */ .ss, {
                                                children: "Цена (₸/кг)"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .TableHead */ .ss, {
                                                children: "Статус"
                                            }),
                                            isBuyer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .TableHead */ .ss, {
                                                children: "Действия"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .TableBody */ .RM, {
                                    children: stocks.map((stock)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .TableRow */ .SC, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .TableCell */ .pj, {
                                                    className: "font-medium",
                                                    children: stock.id
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .TableCell */ .pj, {
                                                    children: stock.seller_name
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .TableCell */ .pj, {
                                                    children: stock.storage_name
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .TableCell */ .pj, {
                                                    children: stock.storage_location
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .TableCell */ .pj, {
                                                    children: Number.parseFloat(stock.quantity).toFixed(2)
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .TableCell */ .pj, {
                                                    children: Number.parseFloat(stock.material_price).toFixed(2)
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .TableCell */ .pj, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_badge__WEBPACK_IMPORTED_MODULE_6__/* .Badge */ .C, {
                                                        variant: stock.status === "active" ? "success" : "secondary",
                                                        children: mapStatusToRussian(stock.status)
                                                    })
                                                }),
                                                isBuyer && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_table__WEBPACK_IMPORTED_MODULE_5__/* .TableCell */ .pj, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                                        variant: "default",
                                                        size: "sm",
                                                        onClick: ()=>handleCreateOrder(stock),
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Heart_Package_ShoppingCart_lucide_react__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                                                                className: "mr-2 h-4 w-4"
                                                            }),
                                                            "Создать заявку"
                                                        ]
                                                    })
                                                })
                                            ]
                                        }, stock.id))
                                })
                            ]
                        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                            className: "text-center py-8 text-gray-500",
                            children: "Нет доступных запасов для этого материала. Пожалуйста, проверьте позже."
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_10__/* .Dialog */ .Vq, {
                open: isOrderDialogOpen,
                onOpenChange: setIsOrderDialogOpen,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_10__/* .DialogContent */ .cZ, {
                    className: "sm:max-w-[500px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_10__/* .DialogHeader */ .fK, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_10__/* .DialogTitle */ .$N, {
                                    children: "Создание заявки"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_10__/* .DialogDescription */ .Be, {
                                    children: "Заполните форму для создания заявки на покупку материала"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid gap-4 py-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_label__WEBPACK_IMPORTED_MODULE_11__/* .Label */ ._, {
                                                    htmlFor: "material-name",
                                                    children: "Материал"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_input__WEBPACK_IMPORTED_MODULE_12__/* .Input */ .I, {
                                                    id: "material-name",
                                                    value: material.name,
                                                    disabled: true
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_label__WEBPACK_IMPORTED_MODULE_11__/* .Label */ ._, {
                                                    htmlFor: "price",
                                                    children: "Цена (₸/кг)"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_input__WEBPACK_IMPORTED_MODULE_12__/* .Input */ .I, {
                                                    id: "price",
                                                    value: (selectedStock === null || selectedStock === void 0 ? void 0 : selectedStock.material_price) || "",
                                                    disabled: true
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_label__WEBPACK_IMPORTED_MODULE_11__/* .Label */ ._, {
                                                    htmlFor: "quantity",
                                                    children: "Количество (кг)"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_input__WEBPACK_IMPORTED_MODULE_12__/* .Input */ .I, {
                                                    id: "quantity",
                                                    type: "number",
                                                    value: quantity,
                                                    onChange: (e)=>setQuantity(e.target.value),
                                                    min: "1",
                                                    max: (selectedStock === null || selectedStock === void 0 ? void 0 : selectedStock.quantity) || "1",
                                                    step: "0.1"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_label__WEBPACK_IMPORTED_MODULE_11__/* .Label */ ._, {
                                                    htmlFor: "total",
                                                    children: "Итого (₸)"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_input__WEBPACK_IMPORTED_MODULE_12__/* .Input */ .I, {
                                                    id: "total",
                                                    value: (Number.parseFloat(quantity || "0") * Number.parseFloat((selectedStock === null || selectedStock === void 0 ? void 0 : selectedStock.material_price) || "0")).toFixed(2),
                                                    disabled: true
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_label__WEBPACK_IMPORTED_MODULE_11__/* .Label */ ._, {
                                            htmlFor: "delivery-address",
                                            children: "Адрес доставки"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_input__WEBPACK_IMPORTED_MODULE_12__/* .Input */ .I, {
                                            id: "delivery-address",
                                            value: deliveryAddress,
                                            onChange: (e)=>setDeliveryAddress(e.target.value),
                                            placeholder: "Введите адрес доставки"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: "Если не указан, будет использовано значение по умолчанию"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_label__WEBPACK_IMPORTED_MODULE_11__/* .Label */ ._, {
                                            htmlFor: "contact-phone",
                                            children: "Контактный телефон"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_input__WEBPACK_IMPORTED_MODULE_12__/* .Input */ .I, {
                                            id: "contact-phone",
                                            value: contactPhone,
                                            onChange: (e)=>setContactPhone(e.target.value),
                                            placeholder: "+7 (XXX) XXX-XX-XX"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: "Если не указан, будет использовано значение по умолчанию"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_label__WEBPACK_IMPORTED_MODULE_11__/* .Label */ ._, {
                                            htmlFor: "notes",
                                            children: "Примечания"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_textarea__WEBPACK_IMPORTED_MODULE_13__/* .Textarea */ .g, {
                                            id: "notes",
                                            value: notes,
                                            onChange: (e)=>setNotes(e.target.value),
                                            placeholder: "Дополнительная информация для продавца"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_ui_dialog__WEBPACK_IMPORTED_MODULE_10__/* .DialogFooter */ .cN, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                    variant: "outline",
                                    onClick: ()=>setIsOrderDialogOpen(false),
                                    children: "Отмена"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                                    onClick: handleSubmitOrder,
                                    disabled: isSubmitting,
                                    children: isSubmitting ? "Отправка..." : "Создать заявку"
                                })
                            ]
                        })
                    ]
                })
            }),
            redirecting && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-white p-6 rounded-lg shadow-lg",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                            className: "text-lg font-semibold",
                            children: "Перенаправление..."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                            className: "mt-2",
                            children: "Пожалуйста, подождите, вы будете перенаправлены на страницу заявок."
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_button__WEBPACK_IMPORTED_MODULE_8__/* .Button */ .z, {
                            className: "mt-4 w-full",
                            onClick: handleManualRedirect,
                            children: "Перейти вручную"
                        })
                    ]
                })
            })
        ]
    });
}
function mapTypeToRussian(type) {
    const typeMap = {
        plastic: "Пластик",
        paper: "Бумага",
        glass: "Стекло",
        metal: "Металл",
        organic: "Органика",
        other: "Другое"
    };
    return typeMap[type] || "Другое";
}
function mapStatusToRussian(status) {
    const statusMap = {
        active: "Активный",
        pending: "В ожидании",
        rejected: "Отклонен"
    };
    return statusMap[status] || "Неизвестно";
}


/***/ }),

/***/ 837:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $N: function() { return /* binding */ DialogTitle; },
/* harmony export */   Be: function() { return /* binding */ DialogDescription; },
/* harmony export */   Vq: function() { return /* binding */ Dialog; },
/* harmony export */   cN: function() { return /* binding */ DialogFooter; },
/* harmony export */   cZ: function() { return /* binding */ DialogContent; },
/* harmony export */   fK: function() { return /* binding */ DialogHeader; },
/* harmony export */   hg: function() { return /* binding */ DialogTrigger; }
/* harmony export */ });
/* unused harmony exports DialogPortal, DialogOverlay, DialogClose */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3304);
/* harmony import */ var _barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4697);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7440);
/* __next_internal_client_entry_do_not_use__ Dialog,DialogPortal,DialogOverlay,DialogClose,DialogTrigger,DialogContent,DialogHeader,DialogFooter,DialogTitle,DialogDescription auto */ 




const Dialog = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Root */ .fC;
const DialogTrigger = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Trigger */ .xz;
const DialogPortal = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Portal */ .h_;
const DialogClose = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Close */ .x8;
const DialogOverlay = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Overlay */ .aV, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    });
});
DialogOverlay.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Overlay */ .aV.displayName;
const DialogContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DialogPortal, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DialogOverlay, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY, {
                ref: ref,
                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Close */ .x8, {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                className: "h-4 w-4"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    });
});
DialogContent.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .VY.displayName;
const DialogHeader = (param)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    });
};
DialogHeader.displayName = "DialogHeader";
const DialogFooter = (param)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    });
};
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Title */ .Dx, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    });
});
DialogTitle.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Title */ .Dx.displayName;
const DialogDescription = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Description */ .dk, {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("text-sm text-muted-foreground", className),
        ...props
    });
});
DialogDescription.displayName = _radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_2__/* .Description */ .dk.displayName;



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

/***/ 2738:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: function() { return /* binding */ Skeleton; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7440);


function Skeleton(param) {
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("animate-pulse rounded-md bg-muted", className),
        ...props
    });
}



/***/ }),

/***/ 6975:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RM: function() { return /* binding */ TableBody; },
/* harmony export */   SC: function() { return /* binding */ TableRow; },
/* harmony export */   iA: function() { return /* binding */ Table; },
/* harmony export */   pj: function() { return /* binding */ TableCell; },
/* harmony export */   ss: function() { return /* binding */ TableHead; },
/* harmony export */   xD: function() { return /* binding */ TableHeader; }
/* harmony export */ });
/* unused harmony exports TableFooter, TableCaption */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7440);



const Table = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("table", {
            ref: ref,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("w-full caption-bottom text-sm", className),
            ...props
        })
    });
});
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("thead", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("[&_tr]:border-b", className),
        ...props
    });
});
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tbody", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("[&_tr:last-child]:border-0", className),
        ...props
    });
});
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tfoot", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    });
});
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("tr", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    });
});
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("th", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    });
});
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("td", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    });
});
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("caption", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("mt-4 text-sm text-muted-foreground", className),
        ...props
    });
});
TableCaption.displayName = "TableCaption";



/***/ }),

/***/ 3146:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: function() { return /* binding */ Textarea; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7440);



const Textarea = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    });
});
Textarea.displayName = "Textarea";



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [9247,7876,2154,1860,813,2971,7023,1744], function() { return __webpack_exec__(3368); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);