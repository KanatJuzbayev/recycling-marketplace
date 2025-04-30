(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[1473,6807],{

/***/ 8611:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1130));


/***/ }),

/***/ 1130:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ ApplicationDetailPage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/next/dist/api/navigation.js
var navigation = __webpack_require__(6463);
// EXTERNAL MODULE: ./context/auth-context.tsx
var auth_context = __webpack_require__(8245);
// EXTERNAL MODULE: ./components/ui/card.tsx
var card = __webpack_require__(6013);
// EXTERNAL MODULE: ./components/ui/button.tsx
var ui_button = __webpack_require__(495);
// EXTERNAL MODULE: ./components/ui/badge.tsx
var badge = __webpack_require__(4693);
// EXTERNAL MODULE: ./components/ui/separator.tsx + 1 modules
var separator = __webpack_require__(42);
// EXTERNAL MODULE: ./services/application-service.ts
var application_service = __webpack_require__(4910);
// EXTERNAL MODULE: ./services/user-service.ts
var user_service = __webpack_require__(6459);
// EXTERNAL MODULE: ./services/admin-service.ts
var admin_service = __webpack_require__(3028);
// EXTERNAL MODULE: ./services/notification-service.ts
var notification_service = __webpack_require__(6807);
// EXTERNAL MODULE: ./components/ui/use-toast.ts
var use_toast = __webpack_require__(5657);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(8030);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/arrow-left.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const ArrowLeft = (0,createLucideIcon/* default */.Z)("ArrowLeft", [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
]);
 //# sourceMappingURL=arrow-left.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/icons/calendar.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Calendar = (0,createLucideIcon/* default */.Z)("Calendar", [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ]
]);
 //# sourceMappingURL=calendar.js.map

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-x.js
var circle_x = __webpack_require__(1935);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/circle-check-big.js
var circle_check_big = __webpack_require__(2940);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/user.js
var icons_user = __webpack_require__(2022);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/package.js
var icons_package = __webpack_require__(7524);
;// CONCATENATED MODULE: ./app/admin/applications/[id]/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 













function ApplicationDetailPage(param) {
    let { params } = param;
    const { user } = (0,auth_context/* useAuth */.a)();
    const router = (0,navigation.useRouter)();
    const { toast } = (0,use_toast/* useToast */.pm)();
    const [application, setApplication] = (0,react.useState)(null);
    const [applicantUser, setApplicantUser] = (0,react.useState)(null);
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    const [isProcessing, setIsProcessing] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        const fetchApplicationData = async ()=>{
            try {
                const applicationData = await (0,application_service/* getApplicationById */.Jv)(params.id);
                setApplication(applicationData);
                if (applicationData.userId) {
                    const userData = await (0,user_service/* getUserById */.GA)(applicationData.userId);
                    setApplicantUser(userData);
                }
            } catch (error) {
                console.error("Error fetching application data:", error);
                toast({
                    variant: "destructive",
                    title: "Ошибка",
                    description: "Не удалось загрузить данные заявки"
                });
                router.push("/admin/applications");
            } finally{
                setIsLoading(false);
            }
        };
        fetchApplicationData();
    }, [
        params.id,
        router,
        toast
    ]);
    const handleUpdateStatus = async (newStatus)=>{
        if (!application || !user) return;
        setIsProcessing(true);
        try {
            const updatedApp = await (0,application_service/* updateApplicationStatus */.kP)(application.id, newStatus);
            setApplication({
                ...application,
                status: newStatus
            });
            await (0,notification_service/* createApplicationStatusNotification */.Co)(application.id, application.title, application.userId, newStatus, user.id);
            await (0,admin_service/* addAdminLog */.UE)({
                userId: user.id,
                userName: user.name,
                action: "update_application_status",
                details: "Изменен статус заявки ".concat(application.id, " на ").concat(newStatus),
                ip: "127.0.0.1"
            });
            toast({
                title: "Статус обновлен",
                description: 'Статус заявки успешно изменен на "'.concat(newStatus === "active" ? "Активна" : newStatus === "completed" ? "Завершена" : "Отменена", '"')
            });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Ошибка",
                description: "Не удалось обновить статус заявки"
            });
        } finally{
            setIsProcessing(false);
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
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "flex items-center justify-center h-full",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: "text-muted-foreground",
                children: "Загрузка данных заявки..."
            })
        });
    }
    if (!application) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
                    variant: "ghost",
                    onClick: ()=>router.push("/admin/applications"),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowLeft, {
                            className: "mr-2 h-4 w-4"
                        }),
                        "Назад к списку заявок"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* Card */.Zb, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardContent */.aY, {
                        className: "flex flex-col items-center justify-center py-10",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-muted-foreground",
                            children: "Заявка не найдена"
                        })
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
                variant: "ghost",
                onClick: ()=>router.push("/admin/applications"),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowLeft, {
                        className: "mr-2 h-4 w-4"
                    }),
                    "Назад к списку заявок"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                        className: "text-3xl font-bold",
                        children: "Детали заявки"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(badge/* Badge */.C, {
                        variant: application.status === "active" ? "default" : application.status === "completed" ? "secondary" : "destructive",
                        className: application.status === "completed" ? "bg-green-500 hover:bg-green-600" : "",
                        children: application.status === "active" ? "Активна" : application.status === "completed" ? "Завершена" : "Отменена"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                        className: "md:col-span-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardHeader */.Ol, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardTitle */.ll, {
                                        children: application.title
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardDescription */.SZ, {
                                        children: [
                                            "Создана: ",
                                            new Date(application.createdAt).toLocaleDateString(),
                                            " ",
                                            new Date(application.createdAt).toLocaleTimeString()
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardContent */.aY, {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                className: "text-lg font-medium mb-2",
                                                children: "Описание"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                children: application.description
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(separator/* Separator */.Z, {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                        className: "text-sm font-medium text-muted-foreground mb-1",
                                                        children: "Тип материала"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                        className: "font-medium",
                                                        children: getMaterialTypeLabel(application.materialType)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                        className: "text-sm font-medium text-muted-foreground mb-1",
                                                        children: "Количество"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        className: "font-medium",
                                                        children: [
                                                            application.quantity,
                                                            " кг"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                        className: "text-sm font-medium text-muted-foreground mb-1",
                                                        children: "Цена"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        className: "font-medium",
                                                        children: [
                                                            application.price,
                                                            " ₸/кг"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                        className: "text-sm font-medium text-muted-foreground mb-1",
                                                        children: "Общая стоимость"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        className: "font-medium",
                                                        children: [
                                                            application.price * application.quantity,
                                                            " ₸"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(separator/* Separator */.Z, {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                className: "text-lg font-medium",
                                                children: "История изменений"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-start gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Calendar, {
                                                                className: "h-4 w-4 mt-1 text-muted-foreground"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    className: "text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "font-medium",
                                                                            children: "Создана:"
                                                                        }),
                                                                        " ",
                                                                        new Date(application.createdAt).toLocaleDateString(),
                                                                        " ",
                                                                        new Date(application.createdAt).toLocaleTimeString()
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    application.updatedAt && application.updatedAt !== application.createdAt && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "flex items-start gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Calendar, {
                                                                className: "h-4 w-4 mt-1 text-muted-foreground"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                    className: "text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                            className: "font-medium",
                                                                            children: "Обновлена:"
                                                                        }),
                                                                        " ",
                                                                        new Date(application.updatedAt).toLocaleDateString(),
                                                                        " ",
                                                                        new Date(application.updatedAt).toLocaleTimeString()
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardFooter */.eW, {
                                className: "flex justify-between",
                                children: [
                                    application.status !== "cancelled" && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                        variant: "destructive",
                                        onClick: ()=>handleUpdateStatus("cancelled"),
                                        disabled: isProcessing,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(circle_x/* default */.Z, {
                                                className: "mr-2 h-4 w-4"
                                            }),
                                            "Отменить заявку"
                                        ]
                                    }),
                                    application.status !== "completed" && application.status !== "cancelled" && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                        variant: "default",
                                        className: "bg-green-500 hover:bg-green-600",
                                        onClick: ()=>handleUpdateStatus("completed"),
                                        disabled: isProcessing,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(circle_check_big/* default */.Z, {
                                                className: "mr-2 h-4 w-4"
                                            }),
                                            "Завершить заявку"
                                        ]
                                    }),
                                    application.status !== "active" && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                        variant: "outline",
                                        onClick: ()=>handleUpdateStatus("active"),
                                        disabled: isProcessing,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(circle_check_big/* default */.Z, {
                                                className: "mr-2 h-4 w-4"
                                            }),
                                            "Активировать"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardHeader */.Ol, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardTitle */.ll, {
                                                children: "Информация о пользователе"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardDescription */.SZ, {
                                                children: "Данные пользователя, создавшего заявку"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardContent */.aY, {
                                        className: "space-y-4",
                                        children: applicantUser ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                            className: "h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_user/* default */.Z, {
                                                                className: "h-6 w-6 text-primary"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "font-medium",
                                                                    children: applicantUser.name
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: applicantUser.email
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(separator/* Separator */.Z, {}),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-start gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_package/* default */.Z, {
                                                                    className: "h-4 w-4 mt-1 text-muted-foreground"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                        className: "text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                className: "font-medium",
                                                                                children: "Тип пользователя:"
                                                                            }),
                                                                            " ",
                                                                            applicantUser.type === "buyer" ? "Покупатель" : "Продавец"
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        applicantUser.location && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-start gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_package/* default */.Z, {
                                                                    className: "h-4 w-4 mt-1 text-muted-foreground"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                        className: "text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                className: "font-medium",
                                                                                children: "Местоположение:"
                                                                            }),
                                                                            " ",
                                                                            applicantUser.location
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "flex items-start gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Calendar, {
                                                                    className: "h-4 w-4 mt-1 text-muted-foreground"
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                                        className: "text-sm",
                                                                        children: [
                                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                                                className: "font-medium",
                                                                                children: "Дата регистрации:"
                                                                            }),
                                                                            " ",
                                                                            new Date(applicantUser.createdAt || "").toLocaleDateString()
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                            className: "text-muted-foreground",
                                            children: "Информация о пользователе недоступна"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardFooter */.eW, {
                                        children: applicantUser && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ui_button/* Button */.z, {
                                            variant: "outline",
                                            className: "w-full",
                                            onClick: ()=>router.push("/admin/users/".concat(applicantUser.id)),
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(icons_user/* default */.Z, {
                                                    className: "mr-2 h-4 w-4"
                                                }),
                                                "Профиль пользователя"
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* Card */.Zb, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(card/* CardHeader */.Ol, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardTitle */.ll, {
                                                children: "Действия"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardDescription */.SZ, {
                                                children: "Управление заявкой"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(card/* CardContent */.aY, {
                                        className: "space-y-2",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ui_button/* Button */.z, {
                                            variant: "outline",
                                            className: "w-full",
                                            onClick: ()=>{
                                                toast({
                                                    title: "Уведомление отправлено",
                                                    description: "Пользователь получит уведомление о необходимости связаться с вами"
                                                });
                                            },
                                            children: "Связаться с пользователем"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
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

/***/ 42:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ separator_Separator; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var dist = __webpack_require__(5171);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-separator/dist/index.mjs
// packages/react/separator/src/separator.tsx



var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator = react.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    dist/* Primitive */.WV.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator.displayName = NAME;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root = Separator;

//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(7440);
;// CONCATENATED MODULE: ./components/ui/separator.tsx
/* __next_internal_client_entry_do_not_use__ Separator auto */ 



const separator_Separator = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, orientation = "horizontal", decorative = true, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Root, {
        ref: ref,
        decorative: decorative,
        orientation: orientation,
        className: (0,utils.cn)("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className),
        ...props
    });
});
separator_Separator.displayName = Root.displayName;



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



/***/ }),

/***/ 8030:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ createLucideIcon; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/shared/src/utils.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = function() {
    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
        classes[_key] = arguments[_key];
    }
    return classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
};
 //# sourceMappingURL=utils.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
 //# sourceMappingURL=defaultAttributes.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/Icon.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 


const Icon = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
    let { color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest } = param;
    return /*#__PURE__*/ (0,react.createElement)("svg", {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
    }, [
        ...iconNode.map((param)=>{
            let [tag, attrs] = param;
            return /*#__PURE__*/ (0,react.createElement)(tag, attrs);
        }),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
 //# sourceMappingURL=Icon.js.map

;// CONCATENATED MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 


const createLucideIcon = (iconName, iconNode)=>{
    const Component = /*#__PURE__*/ (0,react.forwardRef)((param, ref)=>{
        let { className, ...props } = param;
        return /*#__PURE__*/ (0,react.createElement)(Icon, {
            ref,
            iconNode,
            className: mergeClasses("lucide-".concat(toKebabCase(iconName)), className),
            ...props
        });
    });
    Component.displayName = "".concat(iconName);
    return Component;
};
 //# sourceMappingURL=createLucideIcon.js.map


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

/***/ 7524:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ Package; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
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

/***/ 2022:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: function() { return /* binding */ User; }
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8030);
/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const User = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("User", [
    [
        "path",
        {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }
    ]
]);
 //# sourceMappingURL=user.js.map


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

/***/ 3028:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UE: function() { return /* binding */ addAdminLog; },
/* harmony export */   pt: function() { return /* binding */ getAdminLogsHistory; }
/* harmony export */ });
/* unused harmony exports getUserAdminLogs, clearAdminLogs */
const ADMIN_LOGS_KEY = "eco_market_admin_logs";
const getAdminLogs = ()=>{
    const logs = localStorage.getItem(ADMIN_LOGS_KEY);
    return logs ? JSON.parse(logs) : [];
};
const saveAdminLogs = (logs)=>{
    localStorage.setItem(ADMIN_LOGS_KEY, JSON.stringify(logs));
};
const addAdminLog = async (logData)=>{
    await new Promise((resolve)=>setTimeout(resolve, 200));
    const logs = getAdminLogs();
    const newLog = {
        ...logData,
        id: "log_".concat(Date.now()),
        timestamp: new Date().toISOString()
    };
    saveAdminLogs([
        newLog,
        ...logs
    ]);
    return newLog;
};
const getAdminLogsHistory = async function() {
    let limit = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 100;
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const logs = getAdminLogs();
    return logs.slice(0, limit);
};
const getUserAdminLogs = async function(userId) {
    let limit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 50;
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const logs = getAdminLogs();
    return logs.filter((log)=>log.userId === userId).slice(0, limit);
};
const clearAdminLogs = async ()=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    saveAdminLogs([]);
    return {
        success: true
    };
};


/***/ }),

/***/ 4910:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HT: function() { return /* binding */ getUserApplications; },
/* harmony export */   Jv: function() { return /* binding */ getApplicationById; },
/* harmony export */   Rl: function() { return /* binding */ getAllApplications; },
/* harmony export */   kP: function() { return /* binding */ updateApplicationStatus; }
/* harmony export */ });
/* unused harmony exports getApplications, createApplication, updateApplication, deleteApplication, createApplicationStatusNotification */
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8590);

const APPLICATIONS_KEY = "eco_market_applications";
const getApplicationsFromStorage = ()=>{
    const applications = localStorage.getItem(APPLICATIONS_KEY);
    if (applications) {
        return JSON.parse(applications);
    }
    const initialApplications = [
        {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),
            title: "Сдам 50 кг макулатуры",
            description: "Газеты, журналы, книги в хорошем состоянии",
            materialType: "paper",
            materialId: "material1",
            sellerUserId: "user1",
            quantity: 50,
            price: 15,
            userId: "user1",
            userName: "Иван Петров",
            status: "active",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),
            title: "Куплю алюминиевые банки",
            description: "Принимаю алюминиевые банки от напитков в любом количестве",
            materialType: "metal",
            materialId: "material2",
            sellerUserId: "user1",
            quantity: 100,
            price: 80,
            userId: "user2",
            userName: "Анна Иванова",
            status: "active",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        },
        {
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(),
            title: "Сдам старую электронику",
            description: "Старые компьютеры, телефоны, платы",
            materialType: "electronics",
            materialId: "material3",
            sellerUserId: "user2",
            quantity: 30,
            price: 200,
            userId: "user1",
            userName: "Иван Петров",
            status: "completed",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
    ];
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(initialApplications));
    return initialApplications;
};
const saveApplications = (applications)=>{
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(applications));
};
const getApplications = async ()=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    return getApplicationsFromStorage();
};
const getAllApplications = async ()=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    return getApplicationsFromStorage();
};
const getApplicationById = async (id)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const applications = getApplicationsFromStorage();
    const application = applications.find((a)=>a.id === id);
    if (!application) {
        throw new Error("Application not found");
    }
    return application;
};
const createApplication = async (application)=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const applications = getApplicationsFromStorage();
    let userName = "Пользователь";
    let userType = "buyer";
    try {
        const users = JSON.parse(localStorage.getItem("eco_market_users") || "[]");
        const user = users.find((u)=>u.id === application.userId);
        if (user) {
            userName = user.name;
            userType = user.type;
        }
    } catch (error) {
        console.error("Error getting user info:", error);
    }
    const status = userType === "buyer" ? "active" : "pending";
    const newApplication = {
        ...application,
        id: uuidv4(),
        status: status,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        userName
    };
    saveApplications([
        ...applications,
        newApplication
    ]);
    if (userType === "seller") {
        try {
            const { createNotificationForStaff } = await __webpack_require__.e(/* import() */ 6807).then(__webpack_require__.bind(__webpack_require__, 6807));
            await createNotificationForStaff("Новая заявка требует проверки", "Продавец ".concat(userName, ' создал новую заявку "').concat(newApplication.title, '"'), {
                type: "warning",
                actionUrl: "/admin/applications",
                actionText: "Проверить заявку",
                relatedUserId: application.userId,
                relatedEntityId: newApplication.id,
                relatedEntityType: "application"
            });
        } catch (error) {
            console.error("Error sending notification to admins:", error);
        }
    } else if (userType === "buyer" && application.sellerUserId) {
        try {
            const { createNotificationForUser } = await __webpack_require__.e(/* import() */ 6807).then(__webpack_require__.bind(__webpack_require__, 6807));
            await createNotificationForUser(application.sellerUserId, "Новая заявка на ваш материал", "Покупатель ".concat(userName, ' создал новую заявку "').concat(newApplication.title, '"'), {
                type: "info",
                actionUrl: "/profile/applications",
                actionText: "Просмотреть заявку",
                relatedUserId: application.userId,
                relatedEntityId: newApplication.id,
                relatedEntityType: "application"
            });
        } catch (error) {
            console.error("Error sending notification to seller:", error);
        }
    }
    return newApplication;
};
const updateApplication = async (id, updates)=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const applications = getApplicationsFromStorage();
    const index = applications.findIndex((a)=>a.id === id);
    if (index === -1) {
        throw new Error("Application not found");
    }
    const updatedApplication = {
        ...applications[index],
        ...updates,
        updatedAt: new Date().toISOString()
    };
    applications[index] = updatedApplication;
    saveApplications(applications);
    return updatedApplication;
};
const updateApplicationStatus = async (id, status)=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const applications = getApplicationsFromStorage();
    const index = applications.findIndex((a)=>a.id === id);
    if (index === -1) {
        throw new Error("Application not found");
    }
    applications[index].status = status;
    applications[index].updatedAt = new Date().toISOString();
    saveApplications(applications);
    const token = localStorage.getItem("token") || localStorage.getItem("admin_token");
    try {
        const API_URL = "https://recycling-marketplace-backend.onrender.com/api/applications";
        const updateUrl = "".concat(API_URL, "/").concat(id);
        console.log("Updating application status in API: ".concat(updateUrl));
        const applicationToUpdate = applications[index];
        const response = await fetch(updateUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                ...token ? {
                    Authorization: "Bearer ".concat(token)
                } : {}
            },
            body: JSON.stringify(applicationToUpdate)
        });
        if (!response.ok) {
            const errorText = await response.text();
            console.error("API request failed with status ".concat(response.status, ": ").concat(errorText));
        } else {
            const result = await response.json();
            console.log("Application status successfully updated in API:", result);
        }
    } catch (error) {
        console.error("Failed to update application status in API:", error);
    }
    return applications[index];
};
const deleteApplication = async (id)=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const applications = getApplicationsFromStorage();
    const filteredApplications = applications.filter((a)=>a.id !== id);
    saveApplications(filteredApplications);
    return {
        success: true
    };
};
const getUserApplications = async (userId, userType)=>{
    await new Promise((resolve)=>setTimeout(resolve, 300));
    const applications = getApplicationsFromStorage();
    if (userType === "seller") {
        return applications.filter((a)=>a.sellerUserId === userId || a.userId === userId);
    }
    return applications.filter((a)=>a.userId === userId);
};
const createApplicationStatusNotification = async (applicationId, applicationTitle, userId, status, updatedByUserId)=>{
    await new Promise((resolve)=>setTimeout(resolve, 500));
    const { createNotificationForUser } = await __webpack_require__.e(/* import() */ 6807).then(__webpack_require__.bind(__webpack_require__, 6807));
    await createNotificationForUser(userId, status === "completed" ? "Заявка принята" : "Заявка отклонена", status === "completed" ? 'Ваша заявка "'.concat(applicationTitle, '" была принята продавцом') : 'Ваша заявка "'.concat(applicationTitle, '" была отклонена продавцом'), {
        type: status === "completed" ? "success" : "error",
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


/***/ }),

/***/ 6807:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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


/***/ }),

/***/ 5171:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WV: function() { return /* binding */ Primitive; },
/* harmony export */   jH: function() { return /* binding */ dispatchDiscreteCustomEvent; }
/* harmony export */ });
/* unused harmony export Root */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4887);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1538);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7437);
// packages/react/primitive/src/primitive.tsx




var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = (0,_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__/* .createSlot */ .Z8)(`Primitive.${node}`);
  const Node = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
  if (target) react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(() => target.dispatchEvent(event));
}
var Root = (/* unused pure expression or super */ null && (Primitive));

//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 8590:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ esm_browser_v4; }
});

;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/native.js
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ var esm_browser_native = ({ randomUUID });

;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}

;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/stringify.js

const byteToHex = [];
for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset);
    if (!validate(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
/* harmony default export */ var esm_browser_stringify = ((/* unused pure expression or super */ null && (stringify)));

;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js



function v4(options, buf, offset) {
    if (esm_browser_native.randomUUID && !buf && !options) {
        return esm_browser_native.randomUUID();
    }
    options = options || {};
    const rnds = options.random ?? options.rng?.() ?? rng();
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;
    if (buf) {
        offset = offset || 0;
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
        for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return unsafeStringify(rnds);
}
/* harmony default export */ var esm_browser_v4 = (v4);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [9247,1860,2971,7023,1744], function() { return __webpack_exec__(8611); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);