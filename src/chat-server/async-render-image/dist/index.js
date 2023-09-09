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
const utils_1 = require("./utils");
const oss_1 = require("./alibaba-cloud-services/oss");
const default_1 = require("./model-services/default");
const SD_IMAGES_OBJECT = 'sd-upload-images';
const app = (0, express_1.default)();
const port = 3333;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.post('/renderImage', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    console.log('fc sync invoke');
    const prompt = req.body.prompt;
    let modelSerivce = new default_1.DefaultService();
    let result;
    try {
        result = yield modelSerivce.call(prompt);
    }
    catch (e) {
        console.log(e);
    }
    let buffer = '';
    if (result.output && result.output.results) {
        const _result = result.output.results[0];
        const file = yield axios_1.default.get(_result.url, { responseType: 'arraybuffer' });
        console.log(_result, 'result');
        buffer = file.data;
    }
    else {
        const images = (_a = result === null || result === void 0 ? void 0 : result.images) !== null && _a !== void 0 ? _a : [];
        buffer = (0, utils_1.transformBase64ToBuffer)(images.join(''));
    }
    const fileName = Date.now() + 'sd.png';
    const headers = req.headers;
    const region = process.env.REGION;
    const bucketName = process.env.BUCKET_NAME;
    const accessKeyId = headers['x-fc-access-key-id'];
    const accessKeySecret = headers['x-fc-access-key-secret'];
    const stsToken = headers['x-fc-security-token'];
    const ossClient = new oss_1.OssClient({
        accessKeyId,
        accessKeySecret,
        stsToken,
        region,
        bucket: bucketName
    });
    const uploadResult = yield ossClient.putBuffer(buffer, SD_IMAGES_OBJECT + '/' + fileName); //await putBuffer(buffer, SD_IMAGES_OBJECT + '/' + fileName);
    res.send(`![${prompt}](${(_b = uploadResult === null || uploadResult === void 0 ? void 0 : uploadResult.url) !== null && _b !== void 0 ? _b : ''})`);
}));
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
