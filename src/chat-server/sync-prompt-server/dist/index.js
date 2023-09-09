"use strict";
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
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const stable_diffusion_apis_1 = require("./stable-diffusion-apis");
const contents_1 = require("./contents");
const app = (0, express_1.default)();
const port = 3333;
const MODELS_LIST_NL = '模型列表';
const MODEL_UPDATE_NL = '更换模型';
const CURRENT_MODEL_NL = '当前模型';
const RENDER_IMAGE_SERVER_PATH = 'renderImage';
const DEFAULT_MODEL = {
    name: 'sd-v1-5-inpainting',
    hash: ''
};
const modelMap = {};
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.post('/chat', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    let prompt = (_b = (_a = req.body) === null || _a === void 0 ? void 0 : _a.text) === null || _b === void 0 ? void 0 : _b.content;
    if (!prompt) {
        res.send('');
    }
    prompt = prompt.trim();
    if (prompt.indexOf(MODELS_LIST_NL) === 0) {
        const customerList = contents_1.modelList.map((item, index) => {
            modelMap[`model_${index + 1}`] = { name: item.model_name, hash: item.hash || '' };
            return `+ ${index + 1}: ${item.model_name}`;
        });
        res.send({
            "msgtype": "markdown",
            "markdown": {
                "title": "模型列表",
                "text": customerList.join('\n')
            },
        });
    }
    else if (prompt.indexOf(CURRENT_MODEL_NL) === 0) {
        const data = yield (0, stable_diffusion_apis_1.getOptions)();
        const currentModel = data.sd_model_checkpoint;
        res.send({
            "msgtype": "markdown",
            "markdown": {
                "title": "当前模型",
                "text": currentModel
            },
        });
    }
    else if (prompt.indexOf(MODEL_UPDATE_NL) === 0) {
        const modelIndex = prompt.replace(MODEL_UPDATE_NL, '').trim();
        //@ts-ignore
        const model = contents_1.modelsIndexMap[`model_${modelIndex}`] || DEFAULT_MODEL;
        yield (0, stable_diffusion_apis_1.options)(model.name, model.hash);
        res.send({
            "msgtype": "markdown",
            "markdown": {
                "title": "切换模型结果",
                "text": "模型切换中，请稍后输入\'当前模型'\进行查看"
            },
        });
    }
    else {
        yield (0, axios_1.default)({
            method: 'POST',
            url: `${process.env.SERVER_URL}/${RENDER_IMAGE_SERVER_PATH}`,
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                "X-Fc-Invocation-Type": "Async"
            },
            data: {
                prompt,
                modelName: ''
            }
        });
        res.send({
            "msgtype": "markdown",
            "markdown": {
                "title": "sd-出图",
                "text": `您的提示词是${prompt},正在生成中，请稍后`
            },
        });
    }
}));
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
