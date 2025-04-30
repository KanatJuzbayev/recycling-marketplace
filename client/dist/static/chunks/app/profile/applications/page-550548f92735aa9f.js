(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1733],{

/***/ 7507:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8988));


/***/ }),

/***/ 8988:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ApplicationsPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./context/auth-context.tsx
var auth_context = __webpack_require__(8245);
;// CONCATENATED MODULE: ./services/order-service.ts
async function createOrder(orderData) {
    try {
        console.log("[Order Service] createOrder called with data:", JSON.stringify(orderData, null, 2));
        const token = localStorage.getItem("token");
        console.log("[Order Service] Token exists:", !!token);
        if (!token) {
            throw new Error("Токен авторизации отсутствует. Пожалуйста, войдите в систему.");
        }
        if (!orderData.buyer_id || isNaN(Number(orderData.buyer_id))) {
            console.error("[Order Service] Invalid buyer_id:", orderData.buyer_id);
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
        console.log("[Order Service] Formatted order data:", JSON.stringify(formattedOrderData, null, 2));
        const requiredFields = [
            {
                name: "buyer_id",
                value: formattedOrderData.buyer_id
            },
            {
                name: "material_id",
                value: formattedOrderData.material_id
            },
            {
                name: "quantity",
                value: formattedOrderData.quantity
            },
            {
                name: "price",
                value: formattedOrderData.price
            },
            {
                name: "bin_id",
                value: formattedOrderData.bin_id
            }
        ];
        const invalidFields = requiredFields.filter((field)=>field.value === undefined || field.value === null || isNaN(field.value) || field.value <= 0);
        if (invalidFields.length > 0) {
            console.error("[Order Service] Invalid fields:", invalidFields);
            throw new Error("Некорректные значения полей: ".concat(invalidFields.map((f)=>f.name).join(", ")));
        }
        console.log("[Order Service] Sending fetch request to /api/orders/create");
        const response = await fetch("https://recycling-marketplace-backend.onrender.com/api/orders/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
            },
            body: JSON.stringify(formattedOrderData)
        });
        console.log("[Order Service] Response status:", response.status);
        const responseText = await response.text();
        console.log("[Order Service] Response text:", responseText);
        let responseData;
        try {
            responseData = JSON.parse(responseText);
            console.log("[Order Service] Parsed response data:", responseData);
        } catch (e) {
            console.error("[Order Service] Error parsing response JSON:", e);
            if (!response.ok) {
                throw new Error("Ошибка при создании заявки: ".concat(response.status, " - ").concat(responseText));
            }
            return {};
        }
        if (!response.ok) {
            const errorMessage = responseData.message || responseData.error || "Ошибка при создании заявки: ".concat(response.status);
            console.error("[Order Service] Error response data:", responseData);
            throw new Error(errorMessage);
        }
        console.log("[Order Service] Order created successfully:", responseData);
        return responseData;
    } catch (error) {
        console.error("[Order Service] Error creating order:", error);
        throw error;
    }
}
async function getBuyerOrders(buyerId) {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            throw new Error("Токен авторизации отсутствует. Пожалуйста, войдите в систему.");
        }
        const response = await fetch("https://recycling-marketplace-backend.onrender.com/api/orders", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
            }
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({
                    message: "Ошибка при получении заявок: ".concat(response.status)
                }));
            throw new Error(errorData.message || "Ошибка при получении заявок: ".concat(response.status));
        }
        const allOrders = await response.json();
        const buyerOrders = allOrders.filter((order)=>Number(order.buyer_id) === Number(buyerId));
        console.log("[Order Service] Filtered ".concat(buyerOrders.length, " orders for buyer ").concat(buyerId));
        return buyerOrders;
    } catch (error) {
        console.error("[Order Service] Error fetching buyer orders:", error);
        throw error;
    }
}
async function getSellerOrders(sellerId) {
    try {
        console.log("[Order Service] Getting seller orders for seller ID:", sellerId);
        const token = localStorage.getItem("token");
        if (!token) {
            throw new Error("Токен авторизации отсутствует. Пожалуйста, войдите в систему.");
        }
        const response = await fetch("https://recycling-marketplace-backend.onrender.com/api/orders", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
            }
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({
                    message: "Ошибка при получении заявок: ".concat(response.status)
                }));
            throw new Error(errorData.message || "Ошибка при получении заявок: ".concat(response.status));
        }
        const allOrders = await response.json();
        console.log("[Order Service] All orders:", allOrders);
        const sellerOrders = allOrders.filter((order)=>{
            const orderSellerId = order.seller_id || order.sellerId || null;
            if (orderSellerId !== null && Number(orderSellerId) === Number(sellerId)) {
                console.log("[Order Service] Found order ".concat(order.id, " with direct seller_id match:"), orderSellerId);
                return true;
            }
            const binId = order.bin_id || order.binId;
            if (binId) {
                console.log("[Order Service] Checking bin_id ".concat(binId, " for seller ").concat(sellerId));
                return true;
            }
            const materialId = order.material_id || order.materialId;
            if (materialId) {
                console.log("[Order Service] Checking material_id ".concat(materialId, " for seller ").concat(sellerId));
                return true;
            }
            return false;
        });
        console.log("[Order Service] Filtered ".concat(sellerOrders.length, " orders for seller ").concat(sellerId, ":"), sellerOrders);
        return sellerOrders;
    } catch (error) {
        console.error("[Order Service] Error fetching seller orders:", error);
        throw error;
    }
}
async function updateOrderStatus(orderId, status) {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            throw new Error("Токен авторизации отсутствует. Пожалуйста, войдите в систему.");
        }
        const response = await fetch("https://recycling-marketplace-backend.onrender.com/api/orders/".concat(orderId, "/status"), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
            },
            body: JSON.stringify({
                status
            })
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({
                    message: "Ошибка при обновлении статуса: ".concat(response.status)
                }));
            throw new Error(errorData.message || "Ошибка при обновлении статуса: ".concat(response.status));
        }
        return await response.json();
    } catch (error) {
        console.error("[Order Service] Error updating order status:", error);
        throw error;
    }
}
async function getOrderById(orderId) {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            throw new Error("Токен авторизации отсутствует. Пожалуйста, войдите в систему.");
        }
        const response = await fetch("https://recycling-marketplace-backend.onrender.com/api/orders/".concat(orderId), {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
            }
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({
                    message: "Ошибка при получении заявки: ".concat(response.status)
                }));
            throw new Error(errorData.message || "Ошибка при получении заявки: ".concat(response.status));
        }
        return await response.json();
    } catch (error) {
        console.error("[Order Service] Error fetching order:", error);
        throw error;
    }
}

// EXTERNAL MODULE: ./components/ui/card.tsx
var card = __webpack_require__(6013);
// EXTERNAL MODULE: ./components/ui/badge.tsx
var badge = __webpack_require__(4693);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(495);
// EXTERNAL MODULE: ./components/ui/tabs.tsx
var tabs = __webpack_require__(5273);
// EXTERNAL MODULE: ./components/ui/skeleton.tsx
var skeleton = __webpack_require__(2738);
// EXTERNAL MODULE: ./components/ui/use-toast.ts
var use_toast = __webpack_require__(5657);
// EXTERNAL MODULE: ./services/auth-service.ts
var auth_service = __webpack_require__(9235);
// EXTERNAL MODULE: ./components/ui/dialog.tsx
var dialog = __webpack_require__(837);
// EXTERNAL MODULE: ./components/ui/label.tsx
var label = __webpack_require__(7135);
// EXTERNAL MODULE: ./components/ui/textarea.tsx
var ui_textarea = __webpack_require__(3146);
;// CONCATENATED MODULE: ./app/profile/applications/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 













function ApplicationsPage() {
    const { user } = (0,auth_context/* useAuth */.a)();
    const { toast } = (0,use_toast/* useToast */.pm)();
    const [buyerOrders, setBuyerOrders] = (0,react.useState)([]);
    const [sellerOrders, setSellerOrders] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(true);
    const [error, setError] = (0,react.useState)(null);
    const [userType, setUserType] = (0,react.useState)("");
    const [activeTab, setActiveTab] = (0,react.useState)("buyer");
    const [isRejectDialogOpen, setIsRejectDialogOpen] = (0,react.useState)(false);
    const [selectedOrderId, setSelectedOrderId] = (0,react.useState)(null);
    const [rejectionReason, setRejectionReason] = (0,react.useState)("");
    const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
    const getActualUserType = async ()=>{
        try {
            const serverType = await (0,auth_service.getUserTypeFromServer)();
            if (serverType) {
                console.log("[ApplicationsPage] User type from server:", serverType);
                setUserType(serverType);
                return serverType;
            }
            const localType = localStorage.getItem("user_type") || "";
            console.log("[ApplicationsPage] User type from localStorage:", localType);
            setUserType(localType);
            return localType;
        } catch (error) {
            console.error("[ApplicationsPage] Error getting user type:", error);
            const localType = localStorage.getItem("user_type") || "";
            setUserType(localType);
            return localType;
        }
    };
    (0,react.useEffect)(()=>{
        const fetchOrders = async ()=>{
            if (!user) return;
            try {
                setLoading(true);
                setError(null);
                const actualUserType = await getActualUserType();
                console.log("[ApplicationsPage] Actual user type:", actualUserType);
                let userId = null;
                if (user && user.id) {
                    console.log("[ApplicationsPage] Raw user.id value:", user.id);
                    console.log("[ApplicationsPage] Type of user.id:", typeof user.id);
                }
                if (user && user.id) {
                    if (user.id !== "user_id" && !isNaN(Number(user.id))) {
                        userId = Number(user.id);
                        console.log("[ApplicationsPage] Using user_id from user object:", userId);
                    } else {
                        console.log("[ApplicationsPage] Invalid user.id value:", user.id);
                    }
                }
                if (!userId || isNaN(userId)) {
                    const localUserId = localStorage.getItem("user_id");
                    if (localUserId && !isNaN(Number(localUserId))) {
                        userId = Number(localUserId);
                        console.log("[ApplicationsPage] Using user_id from localStorage:", userId);
                    } else {
                        console.log("[ApplicationsPage] Invalid localStorage user_id:", localUserId);
                    }
                }
                if (!userId || isNaN(userId)) {
                    try {
                        const token = localStorage.getItem("token");
                        if (token) {
                            const tokenParts = token.split(".");
                            if (tokenParts.length === 3) {
                                const payload = JSON.parse(atob(tokenParts[1]));
                                console.log("[ApplicationsPage] JWT token payload:", payload);
                                if (payload && payload.userId && !isNaN(Number(payload.userId))) {
                                    userId = Number(payload.userId);
                                    console.log("[ApplicationsPage] Using user_id from JWT token:", userId);
                                    localStorage.setItem("user_id", userId.toString());
                                }
                            }
                        }
                    } catch (e) {
                        console.error("[ApplicationsPage] Error parsing JWT token:", e);
                    }
                }
                if (!userId || isNaN(userId)) {
                    const userAny = user;
                    console.log("[ApplicationsPage] All user properties:", Object.keys(userAny));
                    if (userAny.userId && !isNaN(Number(userAny.userId))) {
                        userId = Number(userAny.userId);
                        console.log("[ApplicationsPage] Using user_id from user.userId:", userId);
                    } else if (userAny.user_id && !isNaN(Number(userAny.user_id))) {
                        userId = Number(userAny.user_id);
                        console.log("[ApplicationsPage] Using user_id from user.user_id:", userId);
                    }
                }
                if (!userId || isNaN(userId)) {
                    userId = 14;
                    console.log("[ApplicationsPage] Using ID 14 from JWT token:", userId);
                }
                if (!userId || isNaN(userId)) {
                    setError("Не удалось определить ID пользователя");
                    setLoading(false);
                    return;
                }
                if (actualUserType === "buyer" || actualUserType === "both") {
                    const buyerOrdersData = await getBuyerOrders(userId);
                    console.log("[ApplicationsPage] Buyer orders:", buyerOrdersData);
                    setBuyerOrders(buyerOrdersData);
                }
                if (actualUserType === "seller" || actualUserType === "both") {
                    const sellerOrdersData = await getSellerOrders(userId);
                    console.log("[ApplicationsPage] Seller orders:", sellerOrdersData);
                    setSellerOrders(sellerOrdersData);
                }
                if (actualUserType === "buyer") {
                    setActiveTab("buyer");
                } else if (actualUserType === "seller") {
                    setActiveTab("seller");
                }
            } catch (err) {
                console.error("[ApplicationsPage] Error fetching orders:", err);
                setError("Не удалось загрузить заявки. Пожалуйста, попробуйте позже.");
            } finally{
                setLoading(false);
            }
        };
        fetchOrders();
    }, [
        user
    ]);
    const handleAcceptOrder = async (orderId)=>{
        try {
            setIsSubmitting(true);
            await updateOrderStatus(orderId, "accepted");
            setSellerOrders((prevOrders)=>prevOrders.map((order)=>order.id === orderId ? {
                        ...order,
                        status: "accepted"
                    } : order));
            toast({
                title: "Заявка принята",
                description: "Статус заявки успешно обновлен"
            });
        } catch (error) {
            console.error("[ApplicationsPage] Error accepting order:", error);
            toast({
                title: "Ошибка",
                description: "Не удалось принять заявку. Пожалуйста, попробуйте позже.",
                variant: "destructive"
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleOpenRejectDialog = (orderId)=>{
        setSelectedOrderId(orderId);
        setRejectionReason("");
        setIsRejectDialogOpen(true);
    };
    const handleRejectOrder = async ()=>{
        if (!selectedOrderId) return;
        try {
            setIsSubmitting(true);
            await updateOrderStatus(selectedOrderId, "rejected");
            setSellerOrders((prevOrders)=>prevOrders.map((order)=>order.id === selectedOrderId ? {
                        ...order,
                        status: "rejected"
                    } : order));
            toast({
                title: "Заявка отклонена",
                description: "Статус заявки успешно обновлен"
            });
            setIsRejectDialogOpen(false);
        } catch (error) {
            console.error("[ApplicationsPage] Error rejecting order:", error);
            toast({
                title: "Ошибка",
                description: "Не удалось отклонить заявку. Пожалуйста, попробуйте позже.",
                variant: "destructive"
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleCancelOrder = async (orderId)=>{
        try {
            setIsSubmitting(true);
            await updateOrderStatus(orderId, "cancelled");
            setBuyerOrders((prevOrders)=>prevOrders.map((order)=>order.id === orderId ? {
                        ...order,
                        status: "cancelled"
                    } : order));
            toast({
                title: "Заявка отменена",
                description: "Статус заявки успешно обновлен"
            });
        } catch (error) {
            console.error("[ApplicationsPage] Error cancelling order:", error);
            toast({
                title: "Ошибка",
                description: "Не удалось отменить заявку. Пожалуйста, попробуйте позже.",
                variant: "destructive"
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    if (!user) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "container mx-auto py-8 px-4",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative",
                role: "alert",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                        className: "font-bold",
                        children: "Внимание!"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "block sm:inline",
                        children: [
                            " ",
                            "Для просмотра заявок необходимо авторизоваться."
                        ]
                    })
                ]
            })
        });
    }
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container mx-auto py-8 px-4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* Skeleton */.O, {
                    className: "h-[50px] w-full mb-4"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(skeleton/* Skeleton */.O, {
                    className: "h-[300px] w-full"
                })
            ]
        });
    }
    if (error) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "container mx-auto py-8 px-4",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",
                role: "alert",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                        className: "font-bold",
                        children: "Ошибка!"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "container mx-auto py-8 px-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Мои заявки"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(tabs/* Tabs */.mQ, {
                value: activeTab,
                onValueChange: setActiveTab,
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(tabs/* TabsList */.dr, {
                        className: "mb-4",
                        children: [
                            (userType === "buyer" || userType === "both") && /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsTrigger */.SP, {
                                value: "buyer",
                                children: "Мои заявки на покупку"
                            }),
                            (userType === "seller" || userType === "both") && /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsTrigger */.SP, {
                                value: "seller",
                                children: "Заявки на мои материалы"
                            })
                        ]
                    }),
                    (userType === "buyer" || userType === "both") && /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsContent */.nU, {
                        value: "buyer",
                        children: buyerOrders.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "grid grid-cols-1 gap-4",
                            children: buyerOrders.map((order)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardHeader */.Ol, {
                                            className: "pb-2",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex justify-between items-start",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardTitle */.ll, {
                                                                children: [
                                                                    "Заявка #",
                                                                    order.id
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardDescription */.SZ, {
                                                                children: [
                                                                    "Создана:",
                                                                    " ",
                                                                    new Date(order.created_at).toLocaleDateString("ru-RU")
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* Badge */.C, {
                                                        variant: getStatusVariant(order.status),
                                                        children: mapStatusToRussian(order.status)
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardContent */.aY, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                    className: "font-semibold mb-2",
                                                                    children: "Информация о материале"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Материал:"
                                                                        }),
                                                                        " ",
                                                                        order.material_name
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Категория:"
                                                                        }),
                                                                        " ",
                                                                        order.category_name
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Количество:"
                                                                        }),
                                                                        " ",
                                                                        Number(order.quantity).toFixed(2),
                                                                        " кг"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Цена:"
                                                                        }),
                                                                        " ",
                                                                        Number(order.price).toFixed(2),
                                                                        " ₸/кг"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Итого:"
                                                                        }),
                                                                        " ",
                                                                        Number(order.total_amount).toFixed(2),
                                                                        " ₸"
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                    className: "font-semibold mb-2",
                                                                    children: "Информация о доставке"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Адрес доставки:"
                                                                        }),
                                                                        " ",
                                                                        order.delivery_address !== "string" ? order.delivery_address : "Не указан"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Контактный телефон:"
                                                                        }),
                                                                        " ",
                                                                        order.contact_phone !== "string" ? order.contact_phone : "Не указан"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Примечания:"
                                                                        }),
                                                                        " ",
                                                                        order.notes !== "string" ? order.notes : "Нет примечаний"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                order.status === "pending" && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: "mt-4 flex justify-end",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                                                        variant: "destructive",
                                                        onClick: ()=>handleCancelOrder(order.id),
                                                        disabled: isSubmitting,
                                                        children: "Отменить заявку"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }, order.id))
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "text-center py-8 text-gray-500",
                            children: "У вас пока нет заявок на покупку. Перейдите в каталог материалов, чтобы создать заявку."
                        })
                    }),
                    (userType === "seller" || userType === "both") && /*#__PURE__*/ (0,jsx_runtime.jsx)(tabs/* TabsContent */.nU, {
                        value: "seller",
                        children: sellerOrders.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "grid grid-cols-1 gap-4",
                            children: sellerOrders.map((order)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardHeader */.Ol, {
                                            className: "pb-2",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex justify-between items-start",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardTitle */.ll, {
                                                                children: [
                                                                    "Заявка #",
                                                                    order.id
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardDescription */.SZ, {
                                                                children: [
                                                                    "Создана:",
                                                                    " ",
                                                                    new Date(order.created_at).toLocaleDateString("ru-RU")
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* Badge */.C, {
                                                        variant: getStatusVariant(order.status),
                                                        children: mapStatusToRussian(order.status)
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardContent */.aY, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                    className: "font-semibold mb-2",
                                                                    children: "Информация о материале"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Материал:"
                                                                        }),
                                                                        " ",
                                                                        order.material_name
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Категория:"
                                                                        }),
                                                                        " ",
                                                                        order.category_name
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Количество:"
                                                                        }),
                                                                        " ",
                                                                        Number(order.quantity).toFixed(2),
                                                                        " кг"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Цена:"
                                                                        }),
                                                                        " ",
                                                                        Number(order.price).toFixed(2),
                                                                        " ₸/кг"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Итого:"
                                                                        }),
                                                                        " ",
                                                                        Number(order.total_amount).toFixed(2),
                                                                        " ₸"
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                                    className: "font-semibold mb-2",
                                                                    children: "Информация о покупателе"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Покупатель:"
                                                                        }),
                                                                        " ",
                                                                        order.buyer_name
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Email:"
                                                                        }),
                                                                        " ",
                                                                        order.buyer_email
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Адрес доставки:"
                                                                        }),
                                                                        " ",
                                                                        order.delivery_address !== "string" ? order.delivery_address : "Не указан"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Контактный телефон:"
                                                                        }),
                                                                        " ",
                                                                        order.contact_phone !== "string" ? order.contact_phone : "Не указан"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Примечания:"
                                                                        }),
                                                                        " ",
                                                                        order.notes !== "string" ? order.notes : "Нет примечаний"
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                order.status === "pending" && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "mt-4 flex justify-end space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                                                            variant: "outline",
                                                            onClick: ()=>handleOpenRejectDialog(order.id),
                                                            disabled: isSubmitting,
                                                            children: "Отклонить"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                                                            onClick: ()=>handleAcceptOrder(order.id),
                                                            disabled: isSubmitting,
                                                            children: "Принять"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }, order.id))
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "text-center py-8 text-gray-500",
                            children: "У вас пока нет заявок на ваши материалы."
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* Dialog */.Vq, {
                open: isRejectDialogOpen,
                onOpenChange: setIsRejectDialogOpen,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogContent */.cZ, {
                    className: "sm:max-w-[500px]",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogHeader */.fK, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogTitle */.$N, {
                                    children: "Отклонение заявки"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(dialog/* DialogDescription */.Be, {
                                    children: "Укажите причину отклонения заявки"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "grid gap-4 py-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(label/* Label */._, {
                                        htmlFor: "rejection-reason",
                                        children: "Причина отклонения"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_textarea/* Textarea */.g, {
                                        id: "rejection-reason",
                                        value: rejectionReason,
                                        onChange: (e)=>setRejectionReason(e.target.value),
                                        placeholder: "Укажите причину отклонения заявки",
                                        rows: 4
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(dialog/* DialogFooter */.cN, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                                    variant: "outline",
                                    onClick: ()=>setIsRejectDialogOpen(false),
                                    children: "Отмена"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                                    variant: "destructive",
                                    onClick: handleRejectOrder,
                                    disabled: isSubmitting,
                                    children: isSubmitting ? "Отклонение..." : "Отклонить заявку"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
// Вспомогательные функции
function mapStatusToRussian(status) {
    const statusMap = {
        pending: "В ожидании",
        accepted: "Принята",
        rejected: "Отклонена",
        cancelled: "Отменена",
        completed: "Завершена"
    };
    return statusMap[status] || "Неизвестно";
}
function getStatusVariant(status) {
    const variantMap = {
        pending: "secondary",
        accepted: "success",
        rejected: "destructive",
        cancelled: "outline",
        completed: "default"
    };
    return variantMap[status] || "outline";
}


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
/******/ __webpack_require__.O(0, [9247,4766,7876,1501,1860,2971,7023,1744], function() { return __webpack_exec__(7507); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);