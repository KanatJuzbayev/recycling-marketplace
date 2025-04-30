"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1860],{

/***/ 8245:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; },
/* harmony export */   a: function() { return /* binding */ useAuth; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7437);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2265);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9235);
/* __next_internal_client_entry_do_not_use__ AuthProvider,useAuth auto */ 


const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);
function AuthProvider(param) {
    let { children } = param;
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (false) {}
        const token = localStorage.getItem("token");
        console.log("[Auth Context] Initial token check:", !!token);
        if (token) {
            (0,_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.getUserProfile)(token).then((userData)=>{
                console.log("[Auth Context] User profile loaded:", userData.name);
                console.log("[Auth Context] User type:", userData.type);
                setUser(userData);
                (0,_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.forceUpdateUserTypeFromServer)().then((updated)=>{
                    if (updated) {
                        (0,_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.getUserProfile)(token).then((updatedUserData)=>{
                            console.log("[Auth Context] User profile updated after type check:", updatedUserData.name);
                            console.log("[Auth Context] Updated user type:", updatedUserData.type);
                            setUser(updatedUserData);
                        }).catch((error)=>{
                            console.error("[Auth Context] Error updating user after type check:", error);
                        });
                    }
                }).catch((error)=>{
                    console.error("[Auth Context] Error checking user type on server:", error);
                });
            }).catch((error)=>{
                console.log("[Auth Context] Error fetching user profile:", error);
                localStorage.removeItem("token");
            }).finally(()=>{
                setIsLoading(false);
            });
        } else {
            console.log("[Auth Context] No token found, not logged in");
            setIsLoading(false);
        }
    }, []);
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
        Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 9235)).then((param)=>{
            let { logout } = param;
            return logout();
        });
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(AuthContext.Provider, {
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

/***/ 7440:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: function() { return /* binding */ cn; }
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4839);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6164);


function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__/* .twMerge */ .m6)((0,clsx__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .W)(inputs));
}


/***/ }),

/***/ 9235:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adminLogin: function() { return /* binding */ adminLogin; },
/* harmony export */   forceUpdateUserTypeFromServer: function() { return /* binding */ forceUpdateUserTypeFromServer; },
/* harmony export */   getCurrentUserRole: function() { return /* binding */ getCurrentUserRole; },
/* harmony export */   getCurrentUserType: function() { return /* binding */ getCurrentUserType; },
/* harmony export */   getUserProfile: function() { return /* binding */ getUserProfile; },
/* harmony export */   getUserTypeFromServer: function() { return /* binding */ getUserTypeFromServer; },
/* harmony export */   loginUser: function() { return /* binding */ loginUser; },
/* harmony export */   logout: function() { return /* binding */ logout; },
/* harmony export */   refreshUserData: function() { return /* binding */ refreshUserData; },
/* harmony export */   registerUser: function() { return /* binding */ registerUser; },
/* harmony export */   updateUserRole: function() { return /* binding */ updateUserRole; },
/* harmony export */   updateUserType: function() { return /* binding */ updateUserType; },
/* harmony export */   verifyTwoFactorCode: function() { return /* binding */ verifyTwoFactorCode; }
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8590);

const API_BASE_URL = "https://recycling-marketplace-backend.onrender.com/api";
const REGISTER_ENDPOINT = "".concat(API_BASE_URL, "/users/register");
const LOGIN_ENDPOINT = "".concat(API_BASE_URL, "/users/login");
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
        console.log("[Auth Service] Making ".concat(method, " request to ").concat(url, " with token: ").concat(token ? "present" : "missing"));
        const response = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
                ...token ? {
                    Authorization: "Bearer ".concat(token)
                } : {}
            },
            body: data ? JSON.stringify(data) : undefined
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({}));
            console.error("API request failed with status ".concat(response.status, ":"), errorData);
            throw new Error(errorData.message || "API request failed with status ".concat(response.status));
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
    const tempToken = "temp_".concat((0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)());
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
    const token = "admin_".concat((0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)());
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
                id: "user_".concat(Date.now()),
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
            console.log("[Auth Service] User registered with type: ".concat(type, ", role: ").concat(role));
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
            const token = "token_".concat((0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)());
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
            var _data_user, _data_user1, _data_user2;
            localStorage.setItem("last_login_email", email);
            let userType = ((_data_user = data.user) === null || _data_user === void 0 ? void 0 : _data_user.userType) || "buyer";
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
                const userProfileResponse = await fetch("".concat(API_BASE_URL, "/users/profile"), {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer ".concat(data.token)
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
            console.log("[Auth Service] User logged in with type: ".concat(userType, ", role: ").concat(userRole));
            const user = {
                id: ((_data_user1 = data.user) === null || _data_user1 === void 0 ? void 0 : _data_user1.id) || "user_id",
                name: ((_data_user2 = data.user) === null || _data_user2 === void 0 ? void 0 : _data_user2.name) || email.split("@")[0],
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
        const response = await fetch("".concat(API_BASE_URL, "/users/profile"), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
            }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch user type: ".concat(response.status));
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
        const response = await fetch("".concat(API_BASE_URL, "/users/update-type"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
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
        const response = await fetch("".concat(API_BASE_URL, "/users/profile"), {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(token)
            }
        });
        if (!response.ok) {
            console.error("[Auth Service] Failed to fetch user profile: ".concat(response.status));
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


/***/ })

}]);