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
exports.OssClient = void 0;
const ali_oss_1 = __importDefault(require("ali-oss"));
const OSS_REGION_PREFIX = 'oss-';
class OssClient {
    constructor(config) {
        this.client = new ali_oss_1.default({
            region: `${OSS_REGION_PREFIX}${config.region}`,
            accessKeyId: config.accessKeyId,
            accessKeySecret: config.accessKeySecret,
            stsToken: config.stsToken,
            bucket: config.bucket
        });
    }
    putBuffer(buffer, objectName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const headers = {
                    'x-oss-tagging': 'Tag1=created-by-fc',
                };
                const result = yield this.client.put(objectName, buffer, { headers });
                return result;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.OssClient = OssClient;
