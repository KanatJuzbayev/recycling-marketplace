"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[7642,6807],{

/***/ 4693:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 5657:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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



/***/ }),

/***/ 2605:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationsProvider: function() { return /* binding */ NotificationsProvider; },
/* harmony export */   z: function() { return /* binding */ useNotifications; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _context_auth_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8245);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6807);
/* __next_internal_client_entry_do_not_use__ NotificationsProvider,useNotifications auto */ 



const NotificationsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
function NotificationsProvider(param) {
    let { children } = param;
    const [notifications, setNotifications] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [unreadCount, setUnreadCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { user } = (0,_context_auth_context__WEBPACK_IMPORTED_MODULE_2__/* .useAuth */ .a)();
    const fetchNotifications = async ()=>{
        if (false) {}
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
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchNotifications();
        const interval = setInterval(fetchNotifications, 60000);
        return ()=>clearInterval(interval);
    }, [
        user
    ]);
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NotificationsContext.Provider, {
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

/***/ 6807:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Co: function() { return /* binding */ createApplicationStatusNotification; },
/* harmony export */   SF: function() { return /* binding */ markAllAsRead; },
/* harmony export */   TH: function() { return /* binding */ getNotifications; },
/* harmony export */   createMaterialNotification: function() { return /* binding */ createMaterialNotification; },
/* harmony export */   createNotificationForStaff: function() { return /* binding */ createNotificationForStaff; },
/* harmony export */   createNotificationForUser: function() { return /* binding */ createNotificationForUser; },
/* harmony export */   rj: function() { return /* binding */ getUnreadNotificationsCount; },
/* harmony export */   zJ: function() { return /* binding */ markAsRead; }
/* harmony export */ });
/* unused harmony exports createNotification, createApplicationNotificationForAdmins, createApplicationNotification, deleteNotification, deleteAllNotifications */
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8590);

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
const createNotificationForUser = async function(userId, title, message) {
    let options = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return createNotification({
        userId,
        title,
        message,
        ...options
    });
};
const createNotificationForStaff = async function(title, message) {
    let options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
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
            message: "Пользователь ".concat(userName, ' создал новую заявку "').concat(applicationTitle, '"'),
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
    await createNotificationForUser(userId, "Заявка создана", 'Ваша заявка "'.concat(applicationTitle, '" успешно создана'), {
        type: "success",
        actionUrl: "/profile/applications",
        actionText: "Перейти к заявкам",
        relatedEntityId: applicationId,
        relatedEntityType: "application"
    });
    await createNotificationForUser(sellerUserId, "Новая заявка", 'Поступила новая заявка "'.concat(applicationTitle, '" от пользователя ').concat(userName), {
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
    await createNotificationForUser(userId, status === "active" ? "Материал одобрен" : status === "rejected" ? "Материал отклонен" : "Материал на проверке", status === "active" ? 'Ваш материал "'.concat(materialName, '" был одобрен и опубликован') : status === "rejected" ? 'Ваш материал "'.concat(materialName, '" был отклонен. Пожалуйста, проверьте требования и попробуйте снова') : 'Ваш материал "'.concat(materialName, '" отправлен на проверку'), {
        type: status === "active" ? "success" : status === "rejected" ? "error" : "info",
        actionUrl: "/profile/materials",
        actionText: "Перейти к материалам",
        relatedEntityId: materialId,
        relatedEntityType: "material"
    });
    if (status === "pending") {
        await createNotificationForStaff("Новый материал требует проверки", 'Пользователь добавил новый материал "'.concat(materialName, '"'), {
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
    await createNotificationForUser(userId, status === "completed" ? "Заявка завершена" : status === "cancelled" ? "Заявка отменена" : "Статус заявки изменен", status === "completed" ? 'Ваша заявка "'.concat(applicationTitle, '" была успешно завершена') : status === "cancelled" ? 'Ваша заявка "'.concat(applicationTitle, '" была отменена') : 'Статус вашей заявки "'.concat(applicationTitle, '" был изменен на "').concat(status === "active" ? "Активна" : status, '"'), {
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


/***/ })

}]);