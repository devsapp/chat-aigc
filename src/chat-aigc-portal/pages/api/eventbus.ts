// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { nanoid } from "nanoid";
import Ram20150501, * as $Ram20150501 from '@alicloud/ram20150501';
import FC_Open20210406, * as $FC_Open20210406 from '@alicloud/fc-open20210406';
import eventbridge20200401, * as $eventbridge20200401 from '@alicloud/eventbridge20200401';

import * as $OpenApi from '@alicloud/openapi-client';
import * as $Util from '@alicloud/tea-util';



const AIGC_BUS_NAME = 'cloudnative_aigc';

type Data = {

}
type Credential = {
    accessKeyId: string;
    accessKeySecret: string;
    securityToken?: string;
};

type CreateEventBusParams = {
    EventBusName: string;
    Description: string
}

type CreateEventRuleParams = {
    webhook: string;
    token: string;
    region: string,
    serviceName: string,
    functionName: string,
    uid: string
}

type PutFunctionAsyncInvokeConfigParams = {
    serviceName: string,
    functionName: string,
    uid: string,
    region: string
}
type AttachPolicyToRole = {
    policyType: string,
    policyName: string,
    roleName: string
}

function createEbClient(region: string, credential: Credential) {
    const { accessKeyId, accessKeySecret, securityToken } = credential;
    const config = new $OpenApi.Config({
        accessKeyId,
        accessKeySecret,
        securityToken
    });

    config.endpoint = `eventbridge-console.${region}.aliyuncs.com`;
    return new eventbridge20200401(config);

}

function createFcClient(region: string, uid: string, credential: Credential) {
    const { accessKeyId, accessKeySecret, securityToken } = credential;
    const config = new $OpenApi.Config({
        accessKeyId,
        accessKeySecret,
        securityToken
    });
    config.endpoint = `${uid}.${region}.fc.aliyuncs.com`;
    return new FC_Open20210406(config);
}
function createRamClient(region: string, uid: string, credential: Credential): Ram20150501 {
    const { accessKeyId, accessKeySecret, securityToken } = credential;
    let config = new $OpenApi.Config({
        accessKeyId,
        accessKeySecret,
        securityToken
    });
    config.endpoint = `ram.aliyuncs.com`;
    return new Ram20150501(config);
}

async function getEventBus(client: any, eventBusName: string = AIGC_BUS_NAME) {

    let result: any = {};
    const getEventBusRequest = new $eventbridge20200401.GetEventBusRequest({
        eventBusName,
    });
    const runtime = new $Util.RuntimeOptions({});
    try {

        result = await client.getEventBusWithOptions(getEventBusRequest, runtime);
    } catch (error) {
        console.log(error)
    }
    return result
}

async function createEventBus(client: any, params: CreateEventBusParams = { EventBusName: AIGC_BUS_NAME, Description: "【勿删】AIGC服务" }) {

    const createEventBusRequest = new $eventbridge20200401.CreateEventBusRequest({ eventBusName: params.EventBusName, descrption: params.Description });
    const runtime = new $Util.RuntimeOptions({});
    return await client.createEventBusWithOptions(createEventBusRequest, runtime);

}


async function attachPolicyToRole(client: any, params: AttachPolicyToRole = { policyType: "System", policyName: "AliyunEventBridgeFullAccess", roleName: "AliyunFCDefaultRole" }) {
    const { policyType, policyName, roleName } = params;
    let attachPolicyToRoleRequest = new $Ram20150501.AttachPolicyToRoleRequest({
        policyType,
        policyName,
        roleName,
    });
    let runtime = new $Util.RuntimeOptions({});
    try {
        // 复制代码运行请自行打印 API 的返回值
        await client.attachPolicyToRoleWithOptions(attachPolicyToRoleRequest, runtime);
    } catch (error) {
        // 如有需要，请打印 error

    }
}

async function putFunctionAsyncInvokeConfig(client: FC_Open20210406, params: PutFunctionAsyncInvokeConfigParams) {
    try {
        const { uid, serviceName, functionName, region } = params;
        const putFunctionAsyncInvokeConfigHeaders = new $FC_Open20210406.PutFunctionAsyncInvokeConfigHeaders({});

        const destinationConfigDestination = new $FC_Open20210406.Destination({
            destination: `acs:eventbridge:${region}:${uid}:eventbus/${AIGC_BUS_NAME}`,
        });
        const destinationConfig = new $FC_Open20210406.DestinationConfig({
            onSuccess: destinationConfigDestination,
        });
        const putFunctionAsyncInvokeConfigRequest = new $FC_Open20210406.PutFunctionAsyncInvokeConfigRequest({
            destinationConfig: destinationConfig,
        });
        const runtime = new $Util.RuntimeOptions({});
        await client.putFunctionAsyncInvokeConfigWithOptions(serviceName, functionName, putFunctionAsyncInvokeConfigRequest, putFunctionAsyncInvokeConfigHeaders, runtime);
    } catch (e) {
        console.log(e)
    }


}

async function creatEventRule(client: any, eventruleData: CreateEventRuleParams) {
    const { webhook, token, region, serviceName, functionName, uid } = eventruleData;
    const title = process.env.title || '标题测试';

    let result = {};
    const eventTargets0ParamList0 = new $eventbridge20200401.CreateRuleRequestEventTargetsParamList({
        "resourceKey": "URL",
        "value": webhook,
        "form": "CONSTANT"
    });
    const eventTargets0ParamList1 = new $eventbridge20200401.CreateRuleRequestEventTargetsParamList({
        "resourceKey": "SecretKey",
        "value": token,
        "form": "CONSTANT"
    });
    const eventTargets0ParamList2 = new $eventbridge20200401.CreateRuleRequestEventTargetsParamList({
        "resourceKey": "Body",
        "value": "{\n \"text\":\"$.data.responsePayload\"\n}",
        "form": "TEMPLATE",
        template: "{\n   \"msgtype\": \"markdown\",\n    \"markdown\": {\n      \"title\": \"" + title + "\",\n      \"text\": \"${text}\"\n    }\n}"
    });




    const eventTargets0 = new $eventbridge20200401.CreateRuleRequestEventTargets({
        "id": nanoid(),
        "type": "acs.dingtalk",
        "endpoint": webhook,
        "pushRetryStrategy": "BACKOFF_RETRY",
        "paramList": [
            eventTargets0ParamList0,
            eventTargets0ParamList1,
            eventTargets0ParamList2
        ]
    });
    const createRuleRequest = new $eventbridge20200401.CreateRuleRequest({
        eventBusName: AIGC_BUS_NAME,
        description: "【勿删】AIGC服务跟钉钉融合",
        ruleName: `aigc_${nanoid()}`,
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
        ],
    });
    const runtime = new $Util.RuntimeOptions({});
    try {
        result = await client.createRuleWithOptions(createRuleRequest, runtime);
    } catch (error) {
        console.log(error)
    }
    return result;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { headers, body } = req;
    const region = process.env.region || 'cn-hangzhou';
    const serviceName = process.env.serviceName || ''; // 来自异步调用函数的服务名
    const functionName = process.env.functionName || ''; // 来自异步调用函数的函数名
    const accessKeyId: any = headers['x-fc-access-key-id'] || '';
    const accessKeySecret: any = headers['x-fc-access-key-secret'] || '';
    const securityToken: any = headers['x-fc-security-token'];
    const uid: any = headers['x-fc-account-id'] || '';

    const ebClient = createEbClient(region, {
        accessKeyId,
        accessKeySecret,
        securityToken
    })
    const fcClient = createFcClient(region, uid, {
        accessKeyId,
        accessKeySecret,
        securityToken
    })
    const ramClient = createRamClient(region, uid, {
        accessKeyId,
        accessKeySecret,
        securityToken
    });

    const { webhook, token } = body;
    await attachPolicyToRole(ramClient); // 授予 DefaultRole角色Eb权限
    await attachPolicyToRole(ramClient, { policyType: "System", policyName: "AliyunOSSFullAccess", roleName: "AliyunFCDefaultRole" }); // 授予 DefaultRole角色oss权限

    const eventBus = await getEventBus(ebClient);

    if (eventBus && !eventBus?.Data?.EventBusName) {
        await createEventBus(ebClient);
    }

    const result: any = await creatEventRule(ebClient, { webhook, token, region, serviceName, functionName, uid });
    await putFunctionAsyncInvokeConfig(fcClient, { uid, serviceName, functionName, region });
    res.status(200).json({ Code: result?.body?.code })
}
