"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[6807],{

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