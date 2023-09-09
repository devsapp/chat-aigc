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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultService = void 0;
const entity_1 = require("../entity");
const prompt_generate_1 = require("../prompt-generate");
const stable_diffusion_apis_1 = require("../stable-diffusion-apis");
const wx_apis_1 = require("../wx-apis");
const utils_1 = require("../utils");
class DefaultService extends entity_1.ModelService {
    constructor(serviceType) {
        super();
        this.baseModel = '';
        this.loras = [];
        this.negateivePromptTemplate = stable_diffusion_apis_1.DEFAULT_NEGATIVE_PROMPT;
        this.requestPayload = stable_diffusion_apis_1.DEFAULT_TXT2IMAGE_PAYLOAD;
        this.promptTemplate = '';
        this.serviceType = '';
        this.serviceType = serviceType || '';
    }
    processingPrompt(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.serviceType === "SIMPLE" /* SERVICE_TYPE.SIMPLE */) {
                prompt = yield (0, prompt_generate_1.generateSdPrompt)(prompt);
            }
            return prompt;
        });
    }
    call(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            const finallyPrompt = yield this.processingPrompt(prompt);
            const serviceType = process.env.serviceType || 'WX';
            if (serviceType === 'SD') {
                const payload = JSON.parse(JSON.stringify(stable_diffusion_apis_1.DEFAULT_TXT2IMAGE_PAYLOAD));
                payload.prompt = finallyPrompt;
                payload.negative_prompt = stable_diffusion_apis_1.DEFAULT_NEGATIVE_PROMPT;
                return yield (0, stable_diffusion_apis_1.text2img)(payload);
            }
            else {
                const { prompt: _prompt, style } = (0, utils_1.extractWanXStyle)(finallyPrompt);
                const payload = {
                    "model": "wanx-v1",
                    "input": {
                        "prompt": _prompt
                    },
                    "parameters": {
                        "style": style || "<auto>",
                        "size": "1024*1024",
                        "n": 1,
                        "seed": 42
                    }
                };
                const wxResult = yield (0, wx_apis_1.text2img)(payload);
                if (wxResult.output && wxResult.output.task_id) {
                    return yield (0, wx_apis_1.getTaskResultById)(wxResult.output.task_id);
                }
                else {
                    return {};
                }
            }
        });
    }
}
exports.DefaultService = DefaultService;
