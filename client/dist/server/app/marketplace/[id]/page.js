(() => {
var exports = {};
exports.id = 688;
exports.ids = [688];
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

/***/ 4528:
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
/* harmony import */ var D_UGS_update_recycling_marketplace_client_app_marketplace_id_page_tsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4256);
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
        children: [
        '[id]',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4256)), "D:\\UGS\\update\\recycling-marketplace\\client\\app\\marketplace\\[id]\\page.tsx"],
          
        }]
      },
        {
        
        
      }
      ]
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
const pages = ["D:\\UGS\\update\\recycling-marketplace\\client\\app\\marketplace\\[id]\\page.tsx"];


const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/marketplace/[id]/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_future_route_modules_app_page_module_compiled__WEBPACK_IMPORTED_MODULE_3__.AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_4__/* .RouteKind */ .x.APP_PAGE,
        page: "/marketplace/[id]/page",
        pathname: "/marketplace/[id]",
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

/***/ 6747:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1526));


/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 1526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MaterialDetailClient)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(326);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js
var react = __webpack_require__(7577);
// EXTERNAL MODULE: ./node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(5047);
// EXTERNAL MODULE: ./node_modules/next/dist/shared/lib/image-external.js
var image_external = __webpack_require__(9029);
var image_external_default = /*#__PURE__*/__webpack_require__.n(image_external);
;// CONCATENATED MODULE: ./node_modules/next/dist/api/image.js



//# sourceMappingURL=image.js.map
// EXTERNAL MODULE: ./components/ui/card.tsx
var card = __webpack_require__(2643);
// EXTERNAL MODULE: ./components/ui/table.tsx
var table = __webpack_require__(5940);
// EXTERNAL MODULE: ./components/ui/badge.tsx
var badge = __webpack_require__(567);
// EXTERNAL MODULE: ./components/ui/skeleton.tsx
var skeleton = __webpack_require__(5304);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(772);
// EXTERNAL MODULE: ./context/auth-context.tsx
var auth_context = __webpack_require__(3860);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/heart.js
var heart = __webpack_require__(7427);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/package.js
var icons_package = __webpack_require__(8705);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(2881);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/shopping-cart.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ShoppingCart = (0,createLucideIcon/* default */.Z)("ShoppingCart", [
    [
        "circle",
        {
            cx: "8",
            cy: "21",
            r: "1",
            key: "jimo8o"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "21",
            r: "1",
            key: "13723u"
        }
    ],
    [
        "path",
        {
            d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
            key: "9zh506"
        }
    ]
]);
 //# sourceMappingURL=shopping-cart.js.map

// EXTERNAL MODULE: ./components/ui/dialog.tsx + 1 modules
var dialog = __webpack_require__(613);
// EXTERNAL MODULE: ./components/ui/label.tsx + 1 modules
var label = __webpack_require__(5842);
// EXTERNAL MODULE: ./components/ui/input.tsx
var input = __webpack_require__(4432);
// EXTERNAL MODULE: ./components/ui/textarea.tsx
var ui_textarea = __webpack_require__(7673);
// EXTERNAL MODULE: ./components/ui/use-toast.ts
var use_toast = __webpack_require__(4008);
// EXTERNAL MODULE: ./services/auth-service.ts
var auth_service = __webpack_require__(5837);
// EXTERNAL MODULE: ./context/favorites-context.tsx + 1 modules
var favorites_context = __webpack_require__(4642);
;// CONCATENATED MODULE: ./app/marketplace/[id]/material-detail-client.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


















function MaterialDetailClient() {
    const { id } = (0,navigation.useParams)();
    const router = (0,navigation.useRouter)();
    const { user } = (0,auth_context/* useAuth */.a)();
    const { isFavorite, toggleFavorite } = (0,favorites_context/* useFavorites */.r)();
    const { toast } = (0,use_toast/* useToast */.pm)();
    const [material, setMaterial] = (0,react.useState)(null);
    const [stocks, setStocks] = (0,react.useState)([]);
    const [loading, setLoading] = (0,react.useState)(true);
    const [error, setError] = (0,react.useState)(null);
    const [isFav, setIsFav] = (0,react.useState)(false);
    const [isOrderDialogOpen, setIsOrderDialogOpen] = (0,react.useState)(false);
    const [selectedStock, setSelectedStock] = (0,react.useState)(null);
    const [redirecting, setRedirecting] = (0,react.useState)(false);
    const [quantity, setQuantity] = (0,react.useState)("1");
    const [deliveryAddress, setDeliveryAddress] = (0,react.useState)("");
    const [contactPhone, setContactPhone] = (0,react.useState)("");
    const [notes, setNotes] = (0,react.useState)("");
    const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
    const [userType, setUserType] = (0,react.useState)("");
    const getActualUserType = async ()=>{
        try {
            const serverType = await (0,auth_service.getUserTypeFromServer)();
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
    null;
    const isBuyer = userType === "buyer";
    const isSeller = userType === "seller";
    null;
    const safeRedirect = (path)=>{
        try {
            console.log(`[MaterialDetail] Redirecting to ${path}...`);
            setRedirecting(true);
            setTimeout(()=>{
                router.push(path);
            }, 100);
        } catch (error) {
            console.error(`[MaterialDetail] Error redirecting to ${path}:`, error);
            toast({
                title: "Ошибка перенаправления",
                description: `Не удалось перейти на страницу ${path}. Пожалуйста, попробуйте вручную.`,
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
                    description: `Доступно только ${availableQuantity} кг`,
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
                    Authorization: `Bearer ${token}`
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
                    throw new Error(`Ошибка при создании заявки: ${response.status} - ${responseText}`);
                }
                responseData = {
                    success: true
                };
            }
            if (!response.ok) {
                const errorMessage = responseData.message || responseData.error || `Ошибка при создании заявки: ${response.status}`;
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
        return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
            className: "container mx-auto py-8 px-4",
            children: [
                /*#__PURE__*/ react_jsx_runtime.jsx(skeleton/* Skeleton */.O, {
                    className: "h-[300px] w-full mb-8"
                }),
                /*#__PURE__*/ react_jsx_runtime.jsx(skeleton/* Skeleton */.O, {
                    className: "h-[400px] w-full"
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
    if (!material) {
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
                    /*#__PURE__*/ react_jsx_runtime.jsx("span", {
                        className: "block sm:inline",
                        children: " Материал не найден."
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
        className: "container mx-auto py-8 px-4",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* Card */.Zb, {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardHeader */.Ol, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardTitle */.ll, {
                                            className: "text-2xl font-bold",
                                            children: material.name
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardDescription */.SZ, {
                                            className: "text-gray-500",
                                            children: [
                                                material.type && /*#__PURE__*/ react_jsx_runtime.jsx(badge/* Badge */.C, {
                                                    variant: "outline",
                                                    className: "mr-2",
                                                    children: mapTypeToRussian(material.type)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(badge/* Badge */.C, {
                                                    variant: material.dealType === "sell" ? "default" : "secondary",
                                                    children: material.dealType === "sell" ? "Продажа" : "Покупка"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "text-2xl font-bold text-green-600",
                                    children: [
                                        material.price,
                                        " ₸/кг"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardContent */.aY, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                    children: material.image && /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                                        className: "relative h-[300px] w-full rounded-lg overflow-hidden",
                                        children: /*#__PURE__*/ react_jsx_runtime.jsx((image_external_default()), {
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
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx("h3", {
                                            className: "text-xl font-semibold mb-4",
                                            children: "Описание"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                            className: "text-gray-700 mb-6",
                                            children: material.description
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            className: "grid grid-cols-2 gap-4 mb-6",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                            className: "text-sm text-gray-500",
                                                            children: "Продавец"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                            className: "font-medium",
                                                            children: material.userName
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                            className: "text-sm text-gray-500",
                                                            children: "Дата публикации"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                                            className: "font-medium",
                                                            children: new Date(material.createdAt).toLocaleDateString("ru-RU")
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            className: "flex flex-wrap gap-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime.jsx(ui_button/* Button */.z, {
                                                    variant: "outline",
                                                    size: "icon",
                                                    onClick: handleToggleFavorite,
                                                    className: isFav ? "text-red-500 hover:text-red-600" : "text-gray-500 hover:text-red-500",
                                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(heart/* default */.Z, {
                                                        className: isFav ? "fill-current" : ""
                                                    })
                                                }),
                                                user && /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                                    onClick: handleManualRedirect,
                                                    className: "flex items-center gap-2",
                                                    variant: "outline",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime.jsx(icons_package/* default */.Z, {
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
            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* Card */.Zb, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardHeader */.Ol, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardTitle */.ll, {
                                children: "Доступные запасы"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(card/* CardDescription */.SZ, {
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
                    /*#__PURE__*/ react_jsx_runtime.jsx(card/* CardContent */.aY, {
                        children: stocks.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(table/* Table */.iA, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableHeader */.xD, {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(table/* TableRow */.SC, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableHead */.ss, {
                                                children: "ID"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableHead */.ss, {
                                                children: "Продавец"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableHead */.ss, {
                                                children: "Склад"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableHead */.ss, {
                                                children: "Местоположение"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableHead */.ss, {
                                                children: "Количество (кг)"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableHead */.ss, {
                                                children: "Цена (₸/кг)"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableHead */.ss, {
                                                children: "Статус"
                                            }),
                                            isBuyer && /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableHead */.ss, {
                                                children: "Действия"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableBody */.RM, {
                                    children: stocks.map((stock)=>/*#__PURE__*/ (0,react_jsx_runtime.jsxs)(table/* TableRow */.SC, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableCell */.pj, {
                                                    className: "font-medium",
                                                    children: stock.id
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableCell */.pj, {
                                                    children: stock.seller_name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableCell */.pj, {
                                                    children: stock.storage_name
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableCell */.pj, {
                                                    children: stock.storage_location
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableCell */.pj, {
                                                    children: Number.parseFloat(stock.quantity).toFixed(2)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableCell */.pj, {
                                                    children: Number.parseFloat(stock.material_price).toFixed(2)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableCell */.pj, {
                                                    children: /*#__PURE__*/ react_jsx_runtime.jsx(badge/* Badge */.C, {
                                                        variant: stock.status === "active" ? "success" : "secondary",
                                                        children: mapStatusToRussian(stock.status)
                                                    })
                                                }),
                                                isBuyer && /*#__PURE__*/ react_jsx_runtime.jsx(table/* TableCell */.pj, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                                        variant: "default",
                                                        size: "sm",
                                                        onClick: ()=>handleCreateOrder(stock),
                                                        className: "flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime.jsx(ShoppingCart, {
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
                        }) : /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                            className: "text-center py-8 text-gray-500",
                            children: "Нет доступных запасов для этого материала. Пожалуйста, проверьте позже."
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime.jsx(dialog/* Dialog */.Vq, {
                open: isOrderDialogOpen,
                onOpenChange: setIsOrderDialogOpen,
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dialog/* DialogContent */.cZ, {
                    className: "sm:max-w-[500px]",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dialog/* DialogHeader */.fK, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx(dialog/* DialogTitle */.$N, {
                                    children: "Создание заявки"
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(dialog/* DialogDescription */.Be, {
                                    children: "Заполните форму для создания заявки на покупку материала"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                            className: "grid gap-4 py-4",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                    htmlFor: "material-name",
                                                    children: "Материал"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                                    id: "material-name",
                                                    value: material.name,
                                                    disabled: true
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                    htmlFor: "price",
                                                    children: "Цена (₸/кг)"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                                    id: "price",
                                                    value: selectedStock?.material_price || "",
                                                    disabled: true
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                    htmlFor: "quantity",
                                                    children: "Количество (кг)"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                                    id: "quantity",
                                                    type: "number",
                                                    value: quantity,
                                                    onChange: (e)=>setQuantity(e.target.value),
                                                    min: "1",
                                                    max: selectedStock?.quantity || "1",
                                                    step: "0.1"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                                    htmlFor: "total",
                                                    children: "Итого (₸)"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                                    id: "total",
                                                    value: (Number.parseFloat(quantity || "0") * Number.parseFloat(selectedStock?.material_price || "0")).toFixed(2),
                                                    disabled: true
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                            htmlFor: "delivery-address",
                                            children: "Адрес доставки"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                            id: "delivery-address",
                                            value: deliveryAddress,
                                            onChange: (e)=>setDeliveryAddress(e.target.value),
                                            placeholder: "Введите адрес доставки"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: "Если не указан, будет использовано значение по умолчанию"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                            htmlFor: "contact-phone",
                                            children: "Контактный телефон"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(input/* Input */.I, {
                                            id: "contact-phone",
                                            value: contactPhone,
                                            onChange: (e)=>setContactPhone(e.target.value),
                                            placeholder: "+7 (XXX) XXX-XX-XX"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: "Если не указан, будет использовано значение по умолчанию"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime.jsx(label/* Label */._, {
                                            htmlFor: "notes",
                                            children: "Примечания"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime.jsx(ui_textarea/* Textarea */.g, {
                                            id: "notes",
                                            value: notes,
                                            onChange: (e)=>setNotes(e.target.value),
                                            placeholder: "Дополнительная информация для продавца"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime.jsxs)(dialog/* DialogFooter */.cN, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime.jsx(ui_button/* Button */.z, {
                                    variant: "outline",
                                    onClick: ()=>setIsOrderDialogOpen(false),
                                    children: "Отмена"
                                }),
                                /*#__PURE__*/ react_jsx_runtime.jsx(ui_button/* Button */.z, {
                                    onClick: handleSubmitOrder,
                                    disabled: isSubmitting,
                                    children: isSubmitting ? "Отправка..." : "Создать заявку"
                                })
                            ]
                        })
                    ]
                })
            }),
            redirecting && /*#__PURE__*/ react_jsx_runtime.jsx("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0,react_jsx_runtime.jsxs)("div", {
                    className: "bg-white p-6 rounded-lg shadow-lg",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                            className: "text-lg font-semibold",
                            children: "Перенаправление..."
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx("p", {
                            className: "mt-2",
                            children: "Пожалуйста, подождите, вы будете перенаправлены на страницу заявок."
                        }),
                        /*#__PURE__*/ react_jsx_runtime.jsx(ui_button/* Button */.z, {
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

/***/ 5940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RM: () => (/* binding */ TableBody),
/* harmony export */   SC: () => (/* binding */ TableRow),
/* harmony export */   iA: () => (/* binding */ Table),
/* harmony export */   pj: () => (/* binding */ TableCell),
/* harmony export */   ss: () => (/* binding */ TableHead),
/* harmony export */   xD: () => (/* binding */ TableHeader)
/* harmony export */ });
/* unused harmony exports TableFooter, TableCaption */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(326);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7577);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7863);



const Table = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
            ref: ref,
            className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("w-full caption-bottom text-sm", className),
            ...props
        })
    }));
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("[&_tr]:border-b", className),
        ...props
    }));
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("[&_tr:last-child]:border-0", className),
        ...props
    }));
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tfoot", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }));
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }));
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }));
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }));
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("caption", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)("mt-4 text-sm text-muted-foreground", className),
        ...props
    }));
TableCaption.displayName = "TableCaption";



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

/***/ 8705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Package)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2881);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Package = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Package", [
    [
        "path",
        {
            d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
            key: "1a0edw"
        }
    ],
    [
        "path",
        {
            d: "M12 22V12",
            key: "d0xqtd"
        }
    ],
    [
        "path",
        {
            d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",
            key: "yx3hmr"
        }
    ],
    [
        "path",
        {
            d: "m7.5 4.27 9 5.15",
            key: "1c824w"
        }
    ]
]);
 //# sourceMappingURL=package.js.map


/***/ }),

/***/ 2481:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "Image", ({
    enumerable: true,
    get: function() {
        return Image;
    }
}));
const _interop_require_default = __webpack_require__(1174);
const _interop_require_wildcard = __webpack_require__(8374);
const _jsxruntime = __webpack_require__(326);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(7577));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__webpack_require__(962));
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(815));
const _getimgprops = __webpack_require__(119);
const _imageconfig = __webpack_require__(5248);
const _imageconfigcontextsharedruntime = __webpack_require__(1206);
const _warnonce = __webpack_require__(576);
const _routercontextsharedruntime = __webpack_require__(131);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(6820));
// This is replaced by webpack define plugin
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":true};
if (true) {
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput) {
    const src = img == null ? void 0 : img.src;
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== "empty") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
function getDynamicProps(fetchPriority) {
    if (Boolean(_react.use)) {
        // In React 19.0.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError, ...rest } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? "fill" : "1",
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: (0, _react.useCallback)((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
            }
        }, [
            src,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            sizesInput,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== "empty") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload(param) {
    let { isAppRouter, imgAttributes } = param;
    const opts = {
        as: "image",
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.default.preload) {
        // See https://github.com/facebook/react/pull/26940
        _reactdom.default.preload(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_head.default, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: "preload",
            // Note how we omit the `href` attribute, as it would only be relevant
            // for browsers that do not support `imagesrcset`, and in those cases
            // it would cause the incorrect image to be preloaded.
            //
            // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
            href: imgAttributes.srcSet ? undefined : imgAttributes.src,
            ...opts
        }, "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
    });
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(ImageElement, {
                ...imgAttributes,
                unoptimized: imgMeta.unoptimized,
                placeholder: imgMeta.placeholder,
                fill: imgMeta.fill,
                onLoadRef: onLoadRef,
                onLoadingCompleteRef: onLoadingCompleteRef,
                setBlurComplete: setBlurComplete,
                setShowAltText: setShowAltText,
                sizesInput: props.sizes,
                ref: forwardedRef
            }),
            imgMeta.priority ? /*#__PURE__*/ (0, _jsxruntime.jsx)(ImagePreload, {
                isAppRouter: isAppRouter,
                imgAttributes: imgAttributes
            }) : null
        ]
    });
});
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map


/***/ }),

/***/ 3484:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(1616).vendored.contexts.AmpContext;

//# sourceMappingURL=amp-context.js.map

/***/ }),

/***/ 1157:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(1616).vendored.contexts.HeadManagerContext;

//# sourceMappingURL=head-manager-context.js.map

/***/ }),

/***/ 1206:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(1616).vendored.contexts.ImageConfigContext;

//# sourceMappingURL=image-config-context.js.map

/***/ }),

/***/ 8710:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "isInAmpMode", ({
    enumerable: true,
    get: function() {
        return isInAmpMode;
    }
}));
function isInAmpMode(param) {
    let { ampFirst = false, hybrid = false, hasQuery = false } = param === void 0 ? {} : param;
    return ampFirst || hybrid && hasQuery;
} //# sourceMappingURL=amp-mode.js.map


/***/ }),

/***/ 119:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getImgProps", ({
    enumerable: true,
    get: function() {
        return getImgProps;
    }
}));
const _warnonce = __webpack_require__(576);
const _imageblursvg = __webpack_require__(380);
const _imageconfig = __webpack_require__(5248);
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    "lazy",
    "eager",
    undefined
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === "undefined") {
        return x;
    }
    if (typeof x === "number") {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
function getWidths(param, width, sizes) {
    let { deviceSizes, allSizes } = param;
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs(param) {
    let { config, src, unoptimized, width, quality, sizes, loader } = param;
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>loader({
                config,
                src,
                quality,
                width: w
            }) + " " + (kind === "w" ? w : i + 1) + kind).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getImgProps(param, _state) {
    let { src, sizes, unoptimized = false, priority = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest } = param;
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ("allSizes" in c) {
        config = c;
    } else {
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes
        };
    }
    if (typeof defaultLoader === "undefined") {
        throw new Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = "__next_img_default" in loader;
    if (isDefaultLoader) {
        if (config.loader === "custom") {
            throw new Error('Image with src "' + src + '" is missing "loader" prop.' + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader");
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === "fill") {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: "100%",
                height: "auto"
            },
            responsive: {
                width: "100%",
                height: "auto"
            }
        };
        const layoutToSizes = {
            responsive: "100vw",
            fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = "";
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(staticImageData));
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(staticImageData));
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    if (priority) {
        fetchPriority = "high";
    }
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: "transparent"
    }, style);
    const backgroundImage = !blurComplete && placeholder !== "empty" ? placeholder === "blur" ? 'url("data:image/svg+xml;charset=utf-8,' + (0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || "",
        objectFit: imgStyle.objectFit
    }) + '")' : 'url("' + placeholder + '")' // assume `data:image/`
     : null;
    let placeholderStyle = backgroundImage ? {
        backgroundSize: imgStyle.objectFit || "cover",
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage
    } : {};
    if (false) {}
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    if (false) {}
    const props = {
        ...rest,
        loading: isLazy ? "lazy" : loading,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding: "async",
        className,
        style: {
            ...imgStyle,
            ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: overrideSrc || imgAttributes.src
    };
    const meta = {
        unoptimized,
        priority,
        placeholder,
        fill
    };
    return {
        props,
        meta
    };
} //# sourceMappingURL=get-img-props.js.map


/***/ }),

/***/ 815:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    defaultHead: function() {
        return defaultHead;
    }
});
const _interop_require_default = __webpack_require__(1174);
const _interop_require_wildcard = __webpack_require__(8374);
const _jsxruntime = __webpack_require__(326);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(7577));
const _sideeffect = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8003));
const _ampcontextsharedruntime = __webpack_require__(3484);
const _headmanagercontextsharedruntime = __webpack_require__(1157);
const _ampmode = __webpack_require__(8710);
const _warnonce = __webpack_require__(576);
function defaultHead(inAmpMode) {
    if (inAmpMode === void 0) inAmpMode = false;
    const head = [
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            charSet: "utf-8"
        })
    ];
    if (!inAmpMode) {
        head.push(/*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }));
    }
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === "string" || typeof child === "number") {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    "name",
    "httpEquiv",
    "charSet",
    "itemProp"
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf("$") + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case "title":
            case "base":
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case "meta":
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === "charSet") {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== "name" || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements, props) {
    const { inAmpMode } = props;
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ( true && !inAmpMode) {
            if (c.type === "link" && c.props["href"] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
            [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/"
            ].some((url)=>c.props["href"].startsWith(url))) {
                const newProps = {
                    ...c.props || {}
                };
                newProps["data-href"] = newProps["href"];
                newProps["href"] = undefined;
                // Add this attribute to make it easy to identify optimized tags
                newProps["data-optimized-fonts"] = true;
                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
            }
        }
        if (false) {}
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head(param) {
    let { children } = param;
    const ampState = (0, _react.useContext)(_ampcontextsharedruntime.AmpStateContext);
    const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        inAmpMode: (0, _ampmode.isInAmpMode)(ampState),
        children: children
    });
}
const _default = Head;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map


/***/ }),

/***/ 380:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getImageBlurSvg", ({
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
}));
function getImageBlurSvg(param) {
    let { widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit } = param;
    const std = 20;
    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
    const viewBox = svgWidth && svgHeight ? "viewBox='0 0 " + svgWidth + " " + svgHeight + "'" : "";
    const preserveAspectRatio = viewBox ? "none" : objectFit === "contain" ? "xMidYMid" : objectFit === "cover" ? "xMidYMid slice" : "none";
    return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + viewBox + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='" + std + "'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + preserveAspectRatio + "' style='filter: url(%23b);' href='" + blurDataURL + "'/%3E%3C/svg%3E";
} //# sourceMappingURL=image-blur-svg.js.map


/***/ }),

/***/ 5248:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    "default",
    "imgix",
    "cloudinary",
    "akamai",
    "custom"
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: "/_next/image",
    loader: "default",
    loaderFile: "",
    domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: [
        "image/webp"
    ],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
    contentDispositionType: "inline",
    remotePatterns: [],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map


/***/ }),

/***/ 9029:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __webpack_require__(1174);
const _getimgprops = __webpack_require__(119);
const _imagecomponent = __webpack_require__(2481);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(6820));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":true}
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map


/***/ }),

/***/ 6820:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
function defaultLoader(param) {
    let { config, src, width, quality } = param;
    if (false) {}
    return config.path + "?url=" + encodeURIComponent(src) + "&w=" + width + "&q=" + (quality || 75) + ( false ? 0 : "");
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map


/***/ }),

/***/ 8003:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return SideEffect;
    }
}));
const _react = __webpack_require__(7577);
const isServer = "undefined" === "undefined";
const useClientOnlyLayoutEffect = isServer ? ()=>{} : _react.useLayoutEffect;
const useClientOnlyEffect = isServer ? ()=>{} : _react.useEffect;
function SideEffect(props) {
    const { headManager, reduceComponentsToState } = props;
    function emitChange() {
        if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements, props));
        }
    }
    if (isServer) {
        var _headManager_mountedInstances;
        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
        emitChange();
    }
    useClientOnlyLayoutEffect(()=>{
        var _headManager_mountedInstances;
        headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.add(props.children);
        return ()=>{
            var _headManager_mountedInstances;
            headManager == null ? void 0 : (_headManager_mountedInstances = headManager.mountedInstances) == null ? void 0 : _headManager_mountedInstances.delete(props.children);
        };
    });
    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
    // being rendered, we only trigger the method from the last one.
    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
    // singleton in the layout effect pass, and actually trigger it in the effect pass.
    useClientOnlyLayoutEffect(()=>{
        if (headManager) {
            headManager._pendingUpdate = emitChange;
        }
        return ()=>{
            if (headManager) {
                headManager._pendingUpdate = emitChange;
            }
        };
    });
    useClientOnlyEffect(()=>{
        if (headManager && headManager._pendingUpdate) {
            headManager._pendingUpdate();
            headManager._pendingUpdate = null;
        }
        return ()=>{
            if (headManager && headManager._pendingUpdate) {
                headManager._pendingUpdate();
                headManager._pendingUpdate = null;
            }
        };
    });
    return null;
} //# sourceMappingURL=side-effect.js.map


/***/ }),

/***/ 4256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MaterialDetailPage)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-runtime.js
var react_jsx_runtime = __webpack_require__(9510);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(8570);
;// CONCATENATED MODULE: ./app/marketplace/[id]/material-detail-client.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\app\marketplace\[id]\material-detail-client.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

/* harmony default export */ const material_detail_client = ((0,module_proxy.createProxy)(String.raw`D:\UGS\update\recycling-marketplace\client\app\marketplace\[id]\material-detail-client.tsx#default`));

;// CONCATENATED MODULE: ./app/marketplace/[id]/page.tsx


function MaterialDetailPage() {
    return /*#__PURE__*/ react_jsx_runtime.jsx(material_detail_client, {});
}


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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [960,230,483], () => (__webpack_exec__(4528)));
module.exports = __webpack_exports__;

})();