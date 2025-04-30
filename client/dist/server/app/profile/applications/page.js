(() => {
var exports = {};
exports.id = 733;
exports.ids = [733];
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

/***/ 8020:
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
/* harmony import */ var D_UGS_update_recycling_marketplace_client_app_profile_applications_page_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9978);
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
        'profile',
        {
        children: [
        'applications',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9978)), "D:\\UGS\\update\\recycling-marketplace\\client\\app\\profile\\applications\\page.tsx"],
          
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
const pages = ["D:\\UGS\\update\\recycling-marketplace\\client\\app\\profile\\applications\\page.tsx"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/profile/applications/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_3__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_4__/* .RouteKind */ .x.APP_PAGE,
        page: "/profile/applications/page",
        pathname: "/profile/applications",
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

/***/ 6233:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7766));


/***/ }),

/***/ 7766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ApplicationsPage)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(326);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(7577);
// EXTERNAL MODULE: ./context/auth-context.tsx
var auth_context = __webpack_require__(3860);
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
            throw new Error(`Некорректные значения полей: ${invalidFields.map((f)=>f.name).join(", ")}`);
        }
        console.log("[Order Service] Sending fetch request to /api/orders/create");
        const response = await fetch("https://recycling-marketplace-backend.onrender.com/api/orders/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
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
                throw new Error(`Ошибка при создании заявки: ${response.status} - ${responseText}`);
            }
            return {};
        }
        if (!response.ok) {
            const errorMessage = responseData.message || responseData.error || `Ошибка при создании заявки: ${response.status}`;
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
                Authorization: `Bearer ${token}`
            }
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({
                    message: `Ошибка при получении заявок: ${response.status}`
                }));
            throw new Error(errorData.message || `Ошибка при получении заявок: ${response.status}`);
        }
        const allOrders = await response.json();
        const buyerOrders = allOrders.filter((order)=>Number(order.buyer_id) === Number(buyerId));
        console.log(`[Order Service] Filtered ${buyerOrders.length} orders for buyer ${buyerId}`);
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
                Authorization: `Bearer ${token}`
            }
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({
                    message: `Ошибка при получении заявок: ${response.status}`
                }));
            throw new Error(errorData.message || `Ошибка при получении заявок: ${response.status}`);
        }
        const allOrders = await response.json();
        console.log("[Order Service] All orders:", allOrders);
        const sellerOrders = allOrders.filter((order)=>{
            const orderSellerId = order.seller_id || order.sellerId || null;
            if (orderSellerId !== null && Number(orderSellerId) === Number(sellerId)) {
                console.log(`[Order Service] Found order ${order.id} with direct seller_id match:`, orderSellerId);
                return true;
            }
            const binId = order.bin_id || order.binId;
            if (binId) {
                console.log(`[Order Service] Checking bin_id ${binId} for seller ${sellerId}`);
                return true;
            }
            const materialId = order.material_id || order.materialId;
            if (materialId) {
                console.log(`[Order Service] Checking material_id ${materialId} for seller ${sellerId}`);
                return true;
            }
            return false;
        });
        console.log(`[Order Service] Filtered ${sellerOrders.length} orders for seller ${sellerId}:`, sellerOrders);
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
        const response = await fetch(`https://recycling-marketplace-backend.onrender.com/api/orders/${orderId}/status`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                status
            })
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({
                    message: `Ошибка при обновлении статуса: ${response.status}`
                }));
            throw new Error(errorData.message || `Ошибка при обновлении статуса: ${response.status}`);
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
        const response = await fetch(`https://recycling-marketplace-backend.onrender.com/api/orders/${orderId}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({
                    message: `Ошибка при получении заявки: ${response.status}`
                }));
            throw new Error(errorData.message || `Ошибка при получении заявки: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("[Order Service] Error fetching order:", error);
        throw error;
    }
}

// EXTERNAL MODULE: ./components/ui/card.tsx
var card = __webpack_require__(2643);
// EXTERNAL MODULE: ./components/ui/badge.tsx
var badge = __webpack_require__(567);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(772);
// EXTERNAL MODULE: ./components/ui/tabs.tsx + 1 modules
var tabs = __webpack_require__(3427);
// EXTERNAL MODULE: ./components/ui/skeleton.tsx
var skeleton = __webpack_require__(5304);
// EXTERNAL MODULE: ./components/ui/use-toast.ts
var use_toast = __webpack_require__(4008);
// EXTERNAL MODULE: ./services/auth-service.ts
var auth_service = __webpack_require__(5837);
// EXTERNAL MODULE: ./components/ui/dialog.tsx + 1 modules
var dialog = __webpack_require__(613);
// EXTERNAL MODULE: ./components/ui/label.tsx + 1 modules
var label = __webpack_require__(5842);
// EXTERNAL MODULE: ./components/ui/textarea.tsx
var ui_textarea = __webpack_require__(7673);
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
    null;
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
        return /*#__PURE__*/ react_jsx_runtime.jsx("div", {
            className: "container mx-auto py-8 px-4",
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative",
                role: "alert",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx("strong", {
                        className: "font-bold",
                        children: "Внимание!"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
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
        return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "container mx-auto py-8 px-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime.jsx(skeleton/* Skeleton */.O, {
                    className: "h-[50px] w-full mb-4"
                }),
                /*#__PURE__*/ react_jsx_runtime.jsx(skeleton/* Skeleton */.O, {
                    className: "h-[300px] w-full"
                })
            ]
        });
    }
    if (error) {
        return /*#__PURE__*/ react_jsx_runtime.jsx("div", {
            className: "container mx-auto py-8 px-4",
            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                className: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",
                role: "alert",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx("strong", {
                        className: "font-bold",
                        children: "Ошибка!"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("span", {
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
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "container mx-auto py-8 px-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime.jsx("h1", {
                className: "text-3xl font-bold mb-6",
                children: "Мои заявки"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tabs/* Tabs */.mQ, {
                value: activeTab,
                onValueChange: setActiveTab,
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(tabs/* TabsList */.dr, {
                        className: "mb-4",
                        children: [
                            (userType === "buyer" || userType === "both") && /*#__PURE__*/ react_jsx_runtime.jsx(tabs/* TabsTrigger */.SP, {
                                value: "buyer",
                                children: "Мои заявки на покупку"
                            }),
                            (userType === "seller" || userType === "both") && /*#__PURE__*/ react_jsx_runtime.jsx(tabs/* TabsTrigger */.SP, {
                                value: "seller",
                                children: "Заявки на мои материалы"
                            })
                        ]
                    }),
                    (userType === "buyer" || userType === "both") && /*#__PURE__*/ react_jsx_runtime.jsx(tabs/* TabsContent */.nU, {
                        value: "buyer",
                        children: buyerOrders.length > 0 ? /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                            className: "grid grid-cols-1 gap-4",
                            children: buyerOrders.map((order)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* Card */.Zb, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardHeader */.Ol, {
                                            className: "pb-2",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                className: "flex justify-between items-start",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardTitle */.ll, {
                                                                children: [
                                                                    "Заявка #",
                                                                    order.id
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardDescription */.SZ, {
                                                                children: [
                                                                    "Создана:",
                                                                    " ",
                                                                    new Date(order.created_at).toLocaleDateString("ru-RU")
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime.jsx(badge/* Badge */.C, {
                                                        variant: getStatusVariant(order.status),
                                                        children: mapStatusToRussian(order.status)
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardContent */.aY, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime.jsx("h3", {
                                                                    className: "font-semibold mb-2",
                                                                    children: "Информация о материале"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Материал:"
                                                                        }),
                                                                        " ",
                                                                        order.material_name
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Категория:"
                                                                        }),
                                                                        " ",
                                                                        order.category_name
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Количество:"
                                                                        }),
                                                                        " ",
                                                                        Number(order.quantity).toFixed(2),
                                                                        " кг"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Цена:"
                                                                        }),
                                                                        " ",
                                                                        Number(order.price).toFixed(2),
                                                                        " ₸/кг"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
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
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime.jsx("h3", {
                                                                    className: "font-semibold mb-2",
                                                                    children: "Информация о доставке"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Адрес доставки:"
                                                                        }),
                                                                        " ",
                                                                        order.delivery_address !== "string" ? order.delivery_address : "Не указан"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Контактный телефон:"
                                                                        }),
                                                                        " ",
                                                                        order.contact_phone !== "string" ? order.contact_phone : "Не указан"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
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
                                                order.status === "pending" && /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                                    className: "mt-4 flex justify-end",
                                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(ui_button/* Button */.z, {
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
                        }) : /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                            className: "text-center py-8 text-gray-500",
                            children: "У вас пока нет заявок на покупку. Перейдите в каталог материалов, чтобы создать заявку."
                        })
                    }),
                    (userType === "seller" || userType === "both") && /*#__PURE__*/ react_jsx_runtime.jsx(tabs/* TabsContent */.nU, {
                        value: "seller",
                        children: sellerOrders.length > 0 ? /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                            className: "grid grid-cols-1 gap-4",
                            children: sellerOrders.map((order)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* Card */.Zb, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardHeader */.Ol, {
                                            className: "pb-2",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                className: "flex justify-between items-start",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardTitle */.ll, {
                                                                children: [
                                                                    "Заявка #",
                                                                    order.id
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardDescription */.SZ, {
                                                                children: [
                                                                    "Создана:",
                                                                    " ",
                                                                    new Date(order.created_at).toLocaleDateString("ru-RU")
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime.jsx(badge/* Badge */.C, {
                                                        variant: getStatusVariant(order.status),
                                                        children: mapStatusToRussian(order.status)
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardContent */.aY, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime.jsx("h3", {
                                                                    className: "font-semibold mb-2",
                                                                    children: "Информация о материале"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Материал:"
                                                                        }),
                                                                        " ",
                                                                        order.material_name
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Категория:"
                                                                        }),
                                                                        " ",
                                                                        order.category_name
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Количество:"
                                                                        }),
                                                                        " ",
                                                                        Number(order.quantity).toFixed(2),
                                                                        " кг"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Цена:"
                                                                        }),
                                                                        " ",
                                                                        Number(order.price).toFixed(2),
                                                                        " ₸/кг"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
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
                                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime.jsx("h3", {
                                                                    className: "font-semibold mb-2",
                                                                    children: "Информация о покупателе"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Покупатель:"
                                                                        }),
                                                                        " ",
                                                                        order.buyer_name
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Email:"
                                                                        }),
                                                                        " ",
                                                                        order.buyer_email
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Адрес доставки:"
                                                                        }),
                                                                        " ",
                                                                        order.delivery_address !== "string" ? order.delivery_address : "Не указан"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                                                                            className: "text-gray-500",
                                                                            children: "Контактный телефон:"
                                                                        }),
                                                                        " ",
                                                                        order.contact_phone !== "string" ? order.contact_phone : "Не указан"
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("p", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime.jsx("span", {
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
                                                order.status === "pending" && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    className: "mt-4 flex justify-end space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(ui_button/* Button */.z, {
                                                            variant: "outline",
                                                            onClick: ()=>handleOpenRejectDialog(order.id),
                                                            disabled: isSubmitting,
                                                            children: "Отклонить"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(ui_button/* Button */.z, {
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
                        }) : /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                            className: "text-center py-8 text-gray-500",
                            children: "У вас пока нет заявок на ваши материалы."
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(dialog/* Dialog */.Vq, {
                open: isRejectDialogOpen,
                onOpenChange: setIsRejectDialogOpen,
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dialog/* DialogContent */.cZ, {
                    className: "sm:max-w-[500px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dialog/* DialogHeader */.fK, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx(dialog/* DialogTitle */.$N, {
                                    children: "Отклонение заявки"
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(dialog/* DialogDescription */.Be, {
                                    children: "Укажите причину отклонения заявки"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                            className: "grid gap-4 py-4",
                            children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                        htmlFor: "rejection-reason",
                                        children: "Причина отклонения"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime.jsx(ui_textarea/* Textarea */.g, {
                                        id: "rejection-reason",
                                        value: rejectionReason,
                                        onChange: (e)=>setRejectionReason(e.target.value),
                                        placeholder: "Укажите причину отклонения заявки",
                                        rows: 4
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dialog/* DialogFooter */.cN, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx(ui_button/* Button */.z, {
                                    variant: "outline",
                                    onClick: ()=>setIsRejectDialogOpen(false),
                                    children: "Отмена"
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ui_button/* Button */.z, {
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

/***/ 5304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ Skeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7863);


function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)("animate-pulse rounded-md bg-muted", className),
        ...props
    });
}



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

/***/ 7673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ Textarea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7863);



const Textarea = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    });
});
Textarea.displayName = "Textarea";



/***/ }),

/***/ 9978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8570);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\app\profile\applications\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\app\profile\applications\page.tsx#default`));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [960,230,483], () => (__webpack_exec__(8020)));
module.exports = __webpack_exports__;

})();