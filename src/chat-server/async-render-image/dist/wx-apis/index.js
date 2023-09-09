"use strict";
// import axios from 'axios';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskResultById = exports.text2img = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
function text2img(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log(payload)
        // const result = await axios({
        //     method: 'post',
        //     url: 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis',
        //     headers: {
        //         'X-DashScope-Async': 'enable',
        //         'Authorization': `Bearer ${process.env.WX_APIKEY}`,
        //         'Content-Type': 'application/json'
        //     },
        //     data: payload
        // })
        // console.log(result)
        // return result.data;
        const response = yield (0, node_fetch_1.default)('https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'X-DashScope-Async': 'enable',
                'Authorization': `Bearer ${process.env.WX_APIKEY}`,
                'Content-Type': 'application/json'
            }
        });
        const data = yield response.json();
        return data;
    });
}
exports.text2img = text2img;
function getTaskResultById(task_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, node_fetch_1.default)(`https://dashscope.aliyuncs.com/api/v1/tasks/${task_id}`, {
            method: 'GET',
            headers: {
                'X-DashScope-Async': 'enable',
                'Authorization': `Bearer ${process.env.WX_APIKEY}`,
                'Content-Type': 'application/json'
            }
        });
        const data = yield response.json();
        if (data.output && data.output.task_status === 'SUCCEEDED') {
            return data;
        }
        else {
            yield new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({});
                }, 1000);
            });
            return yield getTaskResultById(task_id);
        }
    });
}
exports.getTaskResultById = getTaskResultById;
