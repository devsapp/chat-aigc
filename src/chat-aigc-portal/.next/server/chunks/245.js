"use strict";
exports.id = 245;
exports.ids = [245];
exports.modules = {

/***/ 245:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmAndSubmit": () => (/* binding */ ConfirmAndSubmit),
/* harmony export */   "DingTalkOutGoing": () => (/* binding */ DingTalkOutGoing),
/* harmony export */   "EventBus": () => (/* binding */ EventBus),
/* harmony export */   "Landing": () => (/* binding */ Landing)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);
/* harmony import */ var _mantine_hooks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mantine_hooks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mantine_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(445);
/* harmony import */ var _mantine_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mantine_form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_landing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(130);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(164);
/* harmony import */ var _markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(506);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_landing__WEBPACK_IMPORTED_MODULE_7__, _markdown__WEBPACK_IMPORTED_MODULE_9__]);
([_store_landing__WEBPACK_IMPORTED_MODULE_7__, _markdown__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// import { useNavigate } from 'react-router-dom';









const CONTAINER_SIZE = 720;
function DingTalkOutGoing() {
    const [opened, { toggle  }] = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_5__.useDisclosure)(false);
    const outgoing = (0,_store_landing__WEBPACK_IMPORTED_MODULE_7__/* .useGlobalStore */ .s)().outgoing;
    const { postUrl , token  } = outgoing;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            width: CONTAINER_SIZE,
            padding: 20
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {
                        span: 4,
                        children: "Outgoing Post地址"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {
                        span: 8,
                        className: "copy_container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                            justify: "flex-start",
                            align: "center",
                            direction: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                    fw: 700,
                                    children: postUrl
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.CopyButton, {
                                    value: postUrl,
                                    timeout: 2000,
                                    children: ({ copied , copy  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                                            label: copied ? "已复制" : "复制",
                                            withArrow: true,
                                            position: "right",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.ActionIcon, {
                                                color: copied ? "teal" : "gray",
                                                onClick: copy,
                                                children: copied ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__.IconCheck, {
                                                    size: "1rem"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__.IconCopy, {
                                                    size: "1rem"
                                                })
                                            })
                                        })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {
                        span: 4,
                        children: "Outgoing Token"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {
                        span: 8,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                            justify: "flex-start",
                            align: "center",
                            direction: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                    fw: 700,
                                    children: token
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.CopyButton, {
                                    value: token,
                                    timeout: 2000,
                                    children: ({ copied , copy  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
                                            label: copied ? "已复制" : "复制",
                                            withArrow: true,
                                            position: "right",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.ActionIcon, {
                                                color: copied ? "teal" : "gray",
                                                onClick: copy,
                                                children: copied ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__.IconCheck, {
                                                    size: "1rem"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__.IconCopy, {
                                                    size: "1rem"
                                                })
                                            })
                                        })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    textAlign: "right"
                },
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        variant: "subtle",
                        compact: true,
                        onClick: toggle,
                        children: "详细指引"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Collapse, {
                in: opened,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_markdown__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    content: _constant__WEBPACK_IMPORTED_MODULE_8__/* .DingTalkReadme */ .Ix
                })
            })
        ]
    });
}
function EventBus({ form  }) {
    const [opened, { toggle  }] = (0,_mantine_hooks__WEBPACK_IMPORTED_MODULE_5__.useDisclosure)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            width: CONTAINER_SIZE,
            padding: 20
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.TextInput, {
                label: "Webhook",
                placeholder: "输入钉钉webhook地址",
                ...form.getInputProps("webhook")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.TextInput, {
                label: "加签Token",
                placeholder: "输入加签的秘钥",
                ...form.getInputProps("token")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    textAlign: "right"
                },
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        variant: "subtle",
                        compact: true,
                        onClick: toggle,
                        children: "详细指引"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Collapse, {
                in: opened,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_markdown__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    content: _constant__WEBPACK_IMPORTED_MODULE_8__/* .EventbusReadme */ .pV
                })
            })
        ]
    });
}
function ConfirmAndSubmit({ form  }) {
    const outgoing = (0,_store_landing__WEBPACK_IMPORTED_MODULE_7__/* .useGlobalStore */ .s)().outgoing;
    const { postUrl , token  } = outgoing;
    const eventBusValues = form?.values || {};
    const { webhook , token: dingTalkToken  } = eventBusValues;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            width: CONTAINER_SIZE,
            padding: 20
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {
                        fw: 700,
                        children: "钉钉outgoing配置："
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {
                        span: 4,
                        children: "Outgoing Url"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {
                        span: 8,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Highlight, {
                            highlight: postUrl,
                            children: postUrl
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {
                        span: 4,
                        children: "Outgoing Token"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {
                        span: 8,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Highlight, {
                            highlight: token,
                            children: token
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Divider, {
                my: "sm",
                variant: "dashed"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Text, {
                    fw: 700,
                    children: "事件总线连接配置："
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {
                        span: 4,
                        children: "钉钉webhook"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {
                        span: 8,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Highlight, {
                            highlight: webhook,
                            children: webhook
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {
                        span: 4,
                        children: "钉钉加签验证Token"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Grid.Col, {
                        span: 8,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Highlight, {
                            highlight: dingTalkToken,
                            children: dingTalkToken
                        })
                    })
                ]
            })
        ]
    });
}
function Landing() {
    const form = (0,_mantine_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({
        initialValues: {
            webhook: "",
            token: ""
        },
        validate: {
            webhook: (value)=>!value ? "webhook必填" : null,
            token: (value)=>!value ? "token必填" : null
        }
    });
    // const navigate = useNavigate();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const nextStep = ()=>setActive((current)=>current < 3 ? current + 1 : current);
    const prevStep = ()=>setActive((current)=>current > 0 ? current - 1 : current);
    const confirmSubmit = async function(values) {
        try {
            setVisible(true);
            const res = await fetch("/api/eventbus", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });
            const result = await res.json();
            if (result.Code === "Success") {
                // navigate(Path.Action);
                router.push(_constant__WEBPACK_IMPORTED_MODULE_8__/* .Path.Action */ .y$.Action);
            }
        } catch (e) {
            console.log(e);
        } finally{
            setVisible(false);
        }
    };
    const validateEventBus = function() {
        form.validate();
        if (form.isValid()) {
            nextStep();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.LoadingOverlay, {
                visible: visible,
                overlayBlur: 2
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: form.onSubmit(confirmSubmit),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Stepper, {
                        active: active,
                        onStepClick: setActive,
                        breakpoint: "sm",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Stepper.Step, {
                                label: "钉钉机器人设置",
                                description: "配置钉钉机器人",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DingTalkOutGoing, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Stepper.Step, {
                                label: "事件总线设置",
                                description: "配置事件总线连接",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EventBus, {
                                    form: form
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Stepper.Completed, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConfirmAndSubmit, {
                                    form: form
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Group, {
                        position: "center",
                        mt: "xl",
                        children: [
                            active > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                variant: "default",
                                onClick: prevStep,
                                children: "返回"
                            }) : null,
                            active < 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                onClick: active === 1 ? validateEventBus : nextStep,
                                children: "下一步"
                            }) : null,
                            active === 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                type: "submit",
                                children: "确定"
                            }) : null
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 506:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(135);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_2__]);
react_markdown__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Markdown = ({ content  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "markdown-container",
        children: content
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Markdown);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ix": () => (/* binding */ DingTalkReadme),
/* harmony export */   "pV": () => (/* binding */ EventbusReadme),
/* harmony export */   "y$": () => (/* binding */ Path)
/* harmony export */ });
var Path;
(function(Path) {
    Path["Home"] = "/";
    Path["Action"] = "/action";
})(Path || (Path = {}));
const DingTalkReadme = `### chat& 万相机器人设置教程一
#### 1.钉群中添加机器人
![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/r4mlQmJYMPXNlxow/img/9e67cd78-9d7f-40c8-92a9-6c6c7c8996b3.png)

![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/r4mlQmJYMPXNlxow/img/e2e488ad-af11-4208-aff0-c80d541e65c3.png)

![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/r4mlQmJYMPXNlxow/img/6ed7d36b-2757-4a7c-ae35-4fbf34513c7b.png)

![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/r4mlQmJYMPXNlxow/img/0253e413-d389-4498-a461-00007683f59c.png)
#### 2.安全设置选择“加签”（后续配置需要）
![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/r4mlQmJYMPXNlxow/img/81788dbf-fd69-4715-883d-fd7080b87195.png)
#### 3.开启outgoing，并复制页面信息填写到输入框
![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/r4mlQmJYMPXNlxow/img/733ed8f4-7501-42e9-88da-e30b031dd1b9.png)`;
const EventbusReadme = `### chat& 万相机器人设置教程二
#### 1.复制钉钉机器人生成的webhook和加签token
#### 2.将webhook和token录入页面的输入框.`;


/***/ })

};
;