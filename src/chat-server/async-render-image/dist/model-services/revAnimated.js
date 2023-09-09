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
exports.RevAnimatedService = void 0;
const entity_1 = require("../entity");
const prompt_generate_1 = require("../prompt-generate");
const stable_diffusion_apis_1 = require("../stable-diffusion-apis");
const RevAnimatedRequestPayload = {
    "enable_hr": false,
    "denoising_strength": 0,
    "firstphase_width": 0,
    "firstphase_height": 0,
    "hr_scale": 2,
    "hr_upscaler": "",
    "hr_second_pass_steps": 0,
    "hr_resize_x": 0,
    "hr_resize_y": 0,
    "prompt": "",
    "styles": [],
    "seed": 3401667259,
    "subseed": -1,
    "subseed_strength": 0,
    "seed_resize_from_h": -1,
    "seed_resize_from_w": -1,
    "sampler_name": "Euler a",
    "batch_size": 1,
    "n_iter": 1,
    "steps": 28,
    "cfg_scale": 7,
    "width": 576,
    "height": 768,
    "restore_faces": false,
    "tiling": false,
    "do_not_save_samples": false,
    "do_not_save_grid": false,
    "negative_prompt": "",
    "eta": 0,
    "s_min_uncond": 0,
    "s_churn": 0,
    "s_tmax": 0,
    "s_tmin": 0,
    "s_noise": 1,
    "override_settings": {},
    "override_settings_restore_afterwards": true,
    "script_args": [],
    "sampler_index": "Euler a",
    "script_name": "",
    "send_images": true,
    "save_images": false,
    "alwayson_scripts": {}
};
const RevAnimatedPromptTemplate = '(masterpiece),(best quality),(ultra-detailed), (full body:1.2),{{inputPrompt}},(beautiful detailed face), (beautiful detailed eyes),<lora:blindbox_v1_mix:0.8>,';
class RevAnimatedService extends entity_1.ModelService {
    constructor(serviceType) {
        super();
        this.baseModel = 'revAnimated_v122';
        this.loras = ['<lora:blindbox_v1_mix:0.8>'];
        this.negateivePromptTemplate = '(low quality:1.3), (worst quality:1.3) , nsfw';
        this.requestPayload = RevAnimatedRequestPayload;
        this.promptTemplate = RevAnimatedPromptTemplate;
        this.serviceType = "SIMPLE" /* SERVICE_TYPE.SIMPLE */;
        this.serviceType = serviceType !== null && serviceType !== void 0 ? serviceType : "SIMPLE" /* SERVICE_TYPE.SIMPLE */;
    }
    processingPrompt(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.serviceType === "SIMPLE" /* SERVICE_TYPE.SIMPLE */) {
                prompt = yield (0, prompt_generate_1.generateSdPrompt)(prompt);
            }
            const currentTemplate = RevAnimatedPromptTemplate;
            return (0, entity_1.replaceContent)(currentTemplate, prompt);
        });
    }
    call(prompt) {
        return __awaiter(this, void 0, void 0, function* () {
            const finallyPrompt = yield this.processingPrompt(prompt);
            const payload = JSON.parse(JSON.stringify(RevAnimatedRequestPayload));
            payload.prompt = finallyPrompt;
            payload.negative_prompt = this.negateivePromptTemplate;
            console.log(payload, 'payload');
            return yield (0, stable_diffusion_apis_1.text2img)(payload);
        });
    }
}
exports.RevAnimatedService = RevAnimatedService;
