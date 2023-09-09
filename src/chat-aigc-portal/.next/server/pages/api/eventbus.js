"use strict";
(() => {
var exports = {};
exports.id = 413;
exports.ids = [413];
exports.modules = {

/***/ 439:
/***/ ((module) => {

module.exports = require("@alicloud/eventbridge20200401");

/***/ }),

/***/ 113:
/***/ ((module) => {

module.exports = require("@alicloud/fc-open20210406");

/***/ }),

/***/ 272:
/***/ ((module) => {

module.exports = require("@alicloud/openapi-client");

/***/ }),

/***/ 487:
/***/ ((module) => {

module.exports = require("@alicloud/ram20150501");

/***/ }),

/***/ 151:
/***/ ((module) => {

module.exports = require("@alicloud/tea-util");

/***/ }),

/***/ 611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ }),

/***/ 386:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(611);
/* harmony import */ var _alicloud_ram20150501__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(487);
/* harmony import */ var _alicloud_ram20150501__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_alicloud_ram20150501__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _alicloud_fc_open20210406__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(113);
/* harmony import */ var _alicloud_fc_open20210406__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_alicloud_fc_open20210406__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _alicloud_eventbridge20200401__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(439);
/* harmony import */ var _alicloud_eventbridge20200401__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_alicloud_eventbridge20200401__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _alicloud_openapi_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(272);
/* harmony import */ var _alicloud_openapi_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_alicloud_openapi_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _alicloud_tea_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(151);
/* harmony import */ var _alicloud_tea_util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_alicloud_tea_util__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_0__]);
nanoid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction






const AIGC_BUS_NAME = "cloudnative_aigc";
function createEbClient(region, credential) {
    const { accessKeyId , accessKeySecret , securityToken  } = credential;
    const config = new _alicloud_openapi_client__WEBPACK_IMPORTED_MODULE_4__.Config({
        accessKeyId,
        accessKeySecret,
        securityToken
    });
    config.endpoint = `eventbridge-console.${region}.aliyuncs.com`;
    return new (_alicloud_eventbridge20200401__WEBPACK_IMPORTED_MODULE_3___default())(config);
}
function createFcClient(region, uid, credential) {
    const { accessKeyId , accessKeySecret , securityToken  } = credential;
    const config = new _alicloud_openapi_client__WEBPACK_IMPORTED_MODULE_4__.Config({
        accessKeyId,
        accessKeySecret,
        securityToken
    });
    config.endpoint = `${uid}.${region}.fc.aliyuncs.com`;
    return new (_alicloud_fc_open20210406__WEBPACK_IMPORTED_MODULE_2___default())(config);
}
function createRamClient(region, uid, credential) {
    const { accessKeyId , accessKeySecret , securityToken  } = credential;
    let config = new _alicloud_openapi_client__WEBPACK_IMPORTED_MODULE_4__.Config({
        accessKeyId,
        accessKeySecret,
        securityToken
    });
    config.endpoint = `ram.aliyuncs.com`;
    return new (_alicloud_ram20150501__WEBPACK_IMPORTED_MODULE_1___default())(config);
}
async function getEventBus(client, eventBusName = AIGC_BUS_NAME) {
    let result = {};
    const getEventBusRequest = new _alicloud_eventbridge20200401__WEBPACK_IMPORTED_MODULE_3__.GetEventBusRequest({
        eventBusName
    });
    const runtime = new _alicloud_tea_util__WEBPACK_IMPORTED_MODULE_5__.RuntimeOptions({});
    try {
        result = await client.getEventBusWithOptions(getEventBusRequest, runtime);
    } catch (error) {
        console.log(error);
    }
    return result;
}
async function createEventBus(client, params = {
    EventBusName: AIGC_BUS_NAME,
    Description: "【勿删】AIGC服务"
}) {
    const createEventBusRequest = new _alicloud_eventbridge20200401__WEBPACK_IMPORTED_MODULE_3__.CreateEventBusRequest({
        eventBusName: params.EventBusName,
        descrption: params.Description
    });
    const runtime = new _alicloud_tea_util__WEBPACK_IMPORTED_MODULE_5__.RuntimeOptions({});
    return await client.createEventBusWithOptions(createEventBusRequest, runtime);
}
async function attachPolicyToRole(client, params = {
    policyType: "System",
    policyName: "AliyunEventBridgeFullAccess",
    roleName: "AliyunFCDefaultRole"
}) {
    const { policyType , policyName , roleName  } = params;
    let attachPolicyToRoleRequest = new _alicloud_ram20150501__WEBPACK_IMPORTED_MODULE_1__.AttachPolicyToRoleRequest({
        policyType,
        policyName,
        roleName
    });
    let runtime = new _alicloud_tea_util__WEBPACK_IMPORTED_MODULE_5__.RuntimeOptions({});
    try {
        // 复制代码运行请自行打印 API 的返回值
        await client.attachPolicyToRoleWithOptions(attachPolicyToRoleRequest, runtime);
    } catch (error) {
    // 如有需要，请打印 error
    }
}
async function putFunctionAsyncInvokeConfig(client, params) {
    try {
        const { uid , serviceName , functionName , region  } = params;
        const putFunctionAsyncInvokeConfigHeaders = new _alicloud_fc_open20210406__WEBPACK_IMPORTED_MODULE_2__.PutFunctionAsyncInvokeConfigHeaders({});
        const destinationConfigDestination = new _alicloud_fc_open20210406__WEBPACK_IMPORTED_MODULE_2__.Destination({
            destination: `acs:eventbridge:${region}:${uid}:eventbus/${AIGC_BUS_NAME}`
        });
        const destinationConfig = new _alicloud_fc_open20210406__WEBPACK_IMPORTED_MODULE_2__.DestinationConfig({
            onSuccess: destinationConfigDestination
        });
        const putFunctionAsyncInvokeConfigRequest = new _alicloud_fc_open20210406__WEBPACK_IMPORTED_MODULE_2__.PutFunctionAsyncInvokeConfigRequest({
            destinationConfig: destinationConfig
        });
        const runtime = new _alicloud_tea_util__WEBPACK_IMPORTED_MODULE_5__.RuntimeOptions({});
        await client.putFunctionAsyncInvokeConfigWithOptions(serviceName, functionName, putFunctionAsyncInvokeConfigRequest, putFunctionAsyncInvokeConfigHeaders, runtime);
    } catch (e) {
        console.log(e);
    }
}
async function creatEventRule(client, eventruleData) {
    const { webhook , token , region , serviceName , functionName , uid  } = eventruleData;
    const title = process.env.title || "标题测试";
    let result = {};
    const eventTargets0ParamList0 = new _alicloud_eventbridge20200401__WEBPACK_IMPORTED_MODULE_3__.CreateRuleRequestEventTargetsParamList({
        "resourceKey": "URL",
        "value": webhook,
        "form": "CONSTANT"
    });
    const eventTargets0ParamList1 = new _alicloud_eventbridge20200401__WEBPACK_IMPORTED_MODULE_3__.CreateRuleRequestEventTargetsParamList({
        "resourceKey": "SecretKey",
        "value": token,
        "form": "CONSTANT"
    });
    const eventTargets0ParamList2 = new _alicloud_eventbridge20200401__WEBPACK_IMPORTED_MODULE_3__.CreateRuleRequestEventTargetsParamList({
        "resourceKey": "Body",
        "value": '{\n "text":"$.data.responsePayload"\n}',
        "form": "TEMPLATE",
        template: '{\n   "msgtype": "markdown",\n    "markdown": {\n      "title": "' + title + '",\n      "text": "${text}"\n    }\n}'
    });
    const eventTargets0 = new _alicloud_eventbridge20200401__WEBPACK_IMPORTED_MODULE_3__.CreateRuleRequestEventTargets({
        "id": (0,nanoid__WEBPACK_IMPORTED_MODULE_0__.nanoid)(),
        "type": "acs.dingtalk",
        "endpoint": webhook,
        "pushRetryStrategy": "BACKOFF_RETRY",
        "paramList": [
            eventTargets0ParamList0,
            eventTargets0ParamList1,
            eventTargets0ParamList2
        ]
    });
    const createRuleRequest = new _alicloud_eventbridge20200401__WEBPACK_IMPORTED_MODULE_3__.CreateRuleRequest({
        eventBusName: AIGC_BUS_NAME,
        description: "【勿删】AIGC服务跟钉钉融合",
        ruleName: `aigc_${(0,nanoid__WEBPACK_IMPORTED_MODULE_0__.nanoid)()}`,
        filterPattern: `{
            \"data\": {
              \"requestContext\": {
                \"functionArn\": [\"acs:fc:${region}:${uid}:services/${serviceName}.LATEST/functions/${functionName}\"]
              }
            }
          }`,
        // filterPattern: `{\n    \n    \"subject\": [\"acs:fc:${region}:${uid}:services/${serviceName}.LATEST/fun\"]\n   \n}`,
        eventTargets: [
            eventTargets0
        ]
    });
    const runtime = new _alicloud_tea_util__WEBPACK_IMPORTED_MODULE_5__.RuntimeOptions({});
    try {
        result = await client.createRuleWithOptions(createRuleRequest, runtime);
    } catch (error) {
        console.log(error);
    }
    return result;
}
async function handler(req, res) {
    const { headers , body  } = req;
    const region = process.env.region || "cn-hangzhou";
    const serviceName = process.env.serviceName || ""; // 来自异步调用函数的服务名
    const functionName = process.env.functionName || ""; // 来自异步调用函数的函数名
    const accessKeyId = headers["x-fc-access-key-id"] || "";
    const accessKeySecret = headers["x-fc-access-key-secret"] || "";
    const securityToken = headers["x-fc-security-token"];
    const uid = headers["x-fc-account-id"] || "";
    const ebClient = createEbClient(region, {
        accessKeyId,
        accessKeySecret,
        securityToken
    });
    const fcClient = createFcClient(region, uid, {
        accessKeyId,
        accessKeySecret,
        securityToken
    });
    const ramClient = createRamClient(region, uid, {
        accessKeyId,
        accessKeySecret,
        securityToken
    });
    const { webhook , token  } = body;
    await attachPolicyToRole(ramClient); // 授予 DefaultRole角色Eb权限
    await attachPolicyToRole(ramClient, {
        policyType: "System",
        policyName: "AliyunOSSFullAccess",
        roleName: "AliyunFCDefaultRole"
    }); // 授予 DefaultRole角色oss权限
    const eventBus = await getEventBus(ebClient);
    if (eventBus && !eventBus?.Data?.EventBusName) {
        await createEventBus(ebClient);
    }
    const result = await creatEventRule(ebClient, {
        webhook,
        token,
        region,
        serviceName,
        functionName,
        uid
    });
    await putFunctionAsyncInvokeConfig(fcClient, {
        uid,
        serviceName,
        functionName,
        region
    });
    res.status(200).json({
        Code: result?.body?.code
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(386));
module.exports = __webpack_exports__;

})();