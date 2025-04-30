(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[9674],{

/***/ 6043:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2404));


/***/ }),

/***/ 2404:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ UsersPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./context/auth-context.tsx
var auth_context = __webpack_require__(8245);
// EXTERNAL MODULE: ./components/ui/card.tsx
var card = __webpack_require__(6013);
// EXTERNAL MODULE: ./components/ui/table.tsx
var table = __webpack_require__(6975);
// EXTERNAL MODULE: ./components/ui/badge.tsx
var badge = __webpack_require__(4693);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(495);
// EXTERNAL MODULE: ./components/ui/dropdown-menu.tsx
var dropdown_menu = __webpack_require__(6910);
// EXTERNAL MODULE: ./services/user-service.ts
var user_service = __webpack_require__(6459);
// EXTERNAL MODULE: ./services/admin-service.ts
var admin_service = __webpack_require__(3028);
// EXTERNAL MODULE: ./components/ui/use-toast.ts
var use_toast = __webpack_require__(5657);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/shield-alert.js
var shield_alert = __webpack_require__(4341);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/shield-check.js
var shield_check = __webpack_require__(6141);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/ellipsis.js
var ellipsis = __webpack_require__(3550);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(8030);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/user-x.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const UserX = (0,createLucideIcon/* default */.Z)("UserX", [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "line",
        {
            x1: "17",
            x2: "22",
            y1: "8",
            y2: "13",
            key: "3nzzx3"
        }
    ],
    [
        "line",
        {
            x1: "22",
            x2: "17",
            y1: "8",
            y2: "13",
            key: "1swrse"
        }
    ]
]);
 //# sourceMappingURL=user-x.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/user-check.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const UserCheck = (0,createLucideIcon/* default */.Z)("UserCheck", [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "polyline",
        {
            points: "16 11 18 13 22 9",
            key: "1pwet4"
        }
    ]
]);
 //# sourceMappingURL=user-check.js.map

;// CONCATENATED MODULE: ./app/admin/users/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 











function UsersPage() {
    const { user } = (0,auth_context/* useAuth */.a)();
    const { toast } = (0,use_toast/* useToast */.pm)();
    const [users, setUsers] = (0,react.useState)([]);
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    (0,react.useEffect)(()=>{
        const fetchUsers = async ()=>{
            try {
                const data = await (0,user_service/* getAllUsers */.AW)();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
                toast({
                    variant: "destructive",
                    title: "Ошибка",
                    description: "Не удалось загрузить список пользователей"
                });
            } finally{
                setIsLoading(false);
            }
        };
        fetchUsers();
    }, [
        toast
    ]);
    const handleUpdateStatus = async (userId, newStatus)=>{
        try {
            await (0,user_service/* updateUserStatus */.OL)(userId, newStatus);
            setUsers(users.map((u)=>u.id === userId ? {
                    ...u,
                    status: newStatus
                } : u));
            if (user) {
                await (0,admin_service/* addAdminLog */.UE)({
                    userId: user.id,
                    userName: user.name,
                    action: "update_user_status",
                    details: "Изменен статус пользователя ".concat(userId, " на ").concat(newStatus),
                    ip: "127.0.0.1"
                });
            }
            toast({
                title: "Статус обновлен",
                description: 'Статус пользователя успешно изменен на "'.concat(newStatus === "active" ? "Активен" : "Заблокирован", '"')
            });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Ошибка",
                description: "Не удалось обновить статус пользователя"
            });
        }
    };
    const handleUpdateRole = async (userId, newRole)=>{
        if ((user === null || user === void 0 ? void 0 : user.role) !== "admin") {
            toast({
                variant: "destructive",
                title: "Доступ запрещен",
                description: "Только администраторы могут изменять роли пользователей"
            });
            return;
        }
        try {
            await (0,user_service/* updateUserRole */.c7)(userId, newRole);
            setUsers(users.map((u)=>u.id === userId ? {
                    ...u,
                    role: newRole
                } : u));
            if (user) {
                await (0,admin_service/* addAdminLog */.UE)({
                    userId: user.id,
                    userName: user.name,
                    action: "update_user_role",
                    details: "Изменена роль пользователя ".concat(userId, " на ").concat(newRole),
                    ip: "127.0.0.1"
                });
            }
            toast({
                title: "Роль обновлена",
                description: 'Роль пользователя успешно изменена на "'.concat(newRole === "admin" ? "Администратор" : newRole === "manager" ? "Менеджер" : "Пользователь", '"')
            });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Ошибка",
                description: "Не удалось обновить роль пользователя"
            });
        }
    };
    const getRoleLabel = (role)=>{
        switch(role){
            case "admin":
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(badge/* Badge */.C, {
                    variant: "destructive",
                    className: "flex items-center gap-1",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shield_alert/* default */.Z, {
                            className: "h-3 w-3"
                        }),
                        " Администратор"
                    ]
                });
            case "manager":
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(badge/* Badge */.C, {
                    variant: "default",
                    className: "flex items-center gap-1",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shield_check/* default */.Z, {
                            className: "h-3 w-3"
                        }),
                        " Менеджер"
                    ]
                });
            default:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* Badge */.C, {
                    variant: "outline",
                    children: "Пользователь"
                });
        }
    };
    const getTypeLabel = (type)=>{
        switch(type){
            case "staff":
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* Badge */.C, {
                    variant: "secondary",
                    children: "Персонал"
                });
            case "seller":
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* Badge */.C, {
                    variant: "outline",
                    children: "Продавец"
                });
            case "buyer":
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* Badge */.C, {
                    variant: "outline",
                    children: "Покупатель"
                });
            default:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* Badge */.C, {
                    variant: "outline",
                    children: type || "Не указан"
                });
        }
    };
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "flex items-center justify-center h-full",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "text-muted-foreground",
                children: "Загрузка пользователей..."
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        className: "text-3xl font-bold",
                        children: "Управление пользователями"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(badge/* Badge */.C, {
                        variant: "outline",
                        children: [
                            users.length,
                            " пользователей"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardHeader */.Ol, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardTitle */.ll, {
                                children: "Список пользователей"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardDescription */.SZ, {
                                children: [
                                    "Управление пользователями платформы.",
                                    " ",
                                    (user === null || user === void 0 ? void 0 : user.role) === "admin" ? "Как администратор, вы можете изменять роли и статусы пользователей." : "Как менеджер, вы можете изменять статусы пользователей."
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardContent */.aY, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(table/* Table */.iA, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHeader */.xD, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(table/* TableRow */.SC, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHead */.ss, {
                                                children: "Имя"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHead */.ss, {
                                                children: "Email"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHead */.ss, {
                                                children: "Тип"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHead */.ss, {
                                                children: "Роль"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHead */.ss, {
                                                children: "Статус"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHead */.ss, {
                                                children: "Дата регистрации"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableHead */.ss, {
                                                className: "text-right",
                                                children: "Действия"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableBody */.RM, {
                                    children: users.map((user)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(table/* TableRow */.SC, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableCell */.pj, {
                                                    className: "font-medium",
                                                    children: user.name
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableCell */.pj, {
                                                    children: user.email
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableCell */.pj, {
                                                    children: getTypeLabel(user.type)
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableCell */.pj, {
                                                    children: getRoleLabel(user.role)
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableCell */.pj, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* Badge */.C, {
                                                        variant: user.status === "active" ? "success" : "destructive",
                                                        className: user.status === "active" ? "bg-green-500 hover:bg-green-600" : "",
                                                        children: user.status === "active" ? "Активен" : "Заблокирован"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableCell */.pj, {
                                                    children: user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "Не указана"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(table/* TableCell */.pj, {
                                                    className: "text-right",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenu */.h_, {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuTrigger */.$F, {
                                                                asChild: true,
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                                                    variant: "ghost",
                                                                    size: "icon",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ellipsis/* default */.Z, {
                                                                            className: "h-4 w-4"
                                                                        }),
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "sr-only",
                                                                            children: "Меню"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuContent */.AW, {
                                                                align: "end",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuLabel */.Ju, {
                                                                        children: "Действия"
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuSeparator */.VD, {}),
                                                                    user.status === "active" ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */.Xi, {
                                                                        onClick: ()=>handleUpdateStatus(user.id, "blocked"),
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(UserX, {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                children: "Заблокировать"
                                                                            })
                                                                        ]
                                                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */.Xi, {
                                                                        onClick: ()=>handleUpdateStatus(user.id, "active"),
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(UserCheck, {
                                                                                className: "mr-2 h-4 w-4"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                children: "Активировать"
                                                                            })
                                                                        ]
                                                                    }),
                                                                    user.role !== "admin" && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuSeparator */.VD, {}),
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(dropdown_menu/* DropdownMenuLabel */.Ju, {
                                                                                children: "Изменить роль"
                                                                            }),
                                                                            user.role !== "manager" && /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */.Xi, {
                                                                                onClick: ()=>handleUpdateRole(user.id, "manager"),
                                                                                disabled: user.role === "admin" || user.role === "manager",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shield_check/* default */.Z, {
                                                                                        className: "mr-2 h-4 w-4"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        children: "Сделать менеджером"
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            user.role !== "user" && /*#__PURE__*/ (0,jsx_runtime.jsxs)(dropdown_menu/* DropdownMenuItem */.Xi, {
                                                                                onClick: ()=>handleUpdateRole(user.id, "user"),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(UserCheck, {
                                                                                        className: "mr-2 h-4 w-4"
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                        children: "Сделать обычным пользователем"
                                                                                    })
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
                                        }, user.id))
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

/***/ 4341:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ ShieldAlert; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ShieldAlert = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("ShieldAlert", [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ],
    [
        "path",
        {
            d: "M12 8v4",
            key: "1got3b"
        }
    ],
    [
        "path",
        {
            d: "M12 16h.01",
            key: "1drbdi"
        }
    ]
]);
 //# sourceMappingURL=shield-alert.js.map


/***/ }),

/***/ 6141:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ ShieldCheck; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ShieldCheck = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("ShieldCheck", [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
]);
 //# sourceMappingURL=shield-check.js.map


/***/ }),

/***/ 6459:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AW: function() { return /* binding */ getAllUsers; },
/* harmony export */   GA: function() { return /* binding */ getUserById; },
/* harmony export */   Nq: function() { return /* binding */ updateUser; },
/* harmony export */   OL: function() { return /* binding */ updateUserStatus; },
/* harmony export */   c7: function() { return /* binding */ updateUserRole; },
/* harmony export */   h8: function() { return /* binding */ deleteUser; }
/* harmony export */ });
const USERS_KEY = "eco_market_users";
const getUsers = ()=>{
    const users = localStorage.getItem(USERS_KEY);
    if (users) {
        return JSON.parse(users);
    }
    const initialUsers = [
        {
            id: "admin1",
            name: "Администратор",
            email: "admin@ecomarket.ru",
            password: "admin123",
            type: "seller",
            role: "admin",
            status: "active",
            avatar: "",
            location: "Москва",
            createdAt: new Date().toISOString(),
            bio: "Главный администратор системы"
        },
        {
            id: "manager1",
            name: "Менеджер",
            email: "manager@ecomarket.ru",
            password: "manager123",
            type: "seller",
            role: "manager",
            status: "active",
            avatar: "",
            location: "Санкт-Петербург",
            createdAt: new Date().toISOString(),
            bio: "Менеджер по работе с клиентами"
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
    localStorage.setItem(USERS_KEY, JSON.stringify(initialUsers));
    return initialUsers;
};
const saveUsers = (users)=>{
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
};
const getAllUsers = async ()=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const users = getUsers();
    return users.map((param)=>{
        let { password, ...user } = param;
        return user;
    });
};
const getUserById = async (id)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const users = getUsers();
    const user = users.find((u)=>u.id === id);
    if (!user) {
        throw new Error("User not found");
    }
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
};
const deleteUser = async (id)=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const users = getUsers();
    const filteredUsers = users.filter((u)=>u.id !== id);
    if (filteredUsers.length === users.length) {
        throw new Error("User not found");
    }
    saveUsers(filteredUsers);
    return true;
};
const updateUser = async (id, updates)=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const users = getUsers();
    const index = users.findIndex((u)=>u.id === id);
    if (index === -1) {
        throw new Error("User not found");
    }
    const { id: _, role: __, ...allowedUpdates } = updates;
    users[index] = {
        ...users[index],
        ...allowedUpdates
    };
    saveUsers(users);
    const { password, ...userWithoutPassword } = users[index];
    return userWithoutPassword;
};
const updateUserStatus = async (id, status)=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const users = getUsers();
    const index = users.findIndex((u)=>u.id === id);
    if (index === -1) {
        throw new Error("User not found");
    }
    users[index].status = status;
    saveUsers(users);
    const { password, ...userWithoutPassword } = users[index];
    return userWithoutPassword;
};
const updateUserRole = async (id, role)=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const users = getUsers();
    const index = users.findIndex((u)=>u.id === id);
    if (index === -1) {
        throw new Error("User not found");
    }
    users[index].role = role;
    saveUsers(users);
    const { password, ...userWithoutPassword } = users[index];
    return userWithoutPassword;
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [9247,4766,7876,5176,193,1860,270,2971,7023,1744], function() { return __webpack_exec__(6043); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);