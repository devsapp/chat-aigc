import { ModelService, replaceContent, SERVICE_TYPE } from '../entity';
import { generateSdPrompt } from '../prompt-generate';
import { text2img } from '../stable-diffusion-apis';
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
    "styles": [

    ],
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
    "override_settings": {

    },
    "override_settings_restore_afterwards": true,
    "script_args": [

    ],
    "sampler_index": "Euler a",
    "script_name": "",
    "send_images": true,
    "save_images": false,
    "alwayson_scripts": {

    }
}
const RevAnimatedPromptTemplate = '(masterpiece),(best quality),(ultra-detailed), (full body:1.2),{{inputPrompt}},(beautiful detailed face), (beautiful detailed eyes),<lora:blindbox_v1_mix:0.8>,'
export class RevAnimatedService extends ModelService {
    baseModel = 'revAnimated_v122';
    loras = ['<lora:blindbox_v1_mix:0.8>'];
    negateivePromptTemplate = '(low quality:1.3), (worst quality:1.3) , nsfw'
    requestPayload = RevAnimatedRequestPayload;
    promptTemplate = RevAnimatedPromptTemplate;
    serviceType = SERVICE_TYPE.SIMPLE;
    constructor(serviceType?: SERVICE_TYPE) {
        super();

        this.serviceType = serviceType ?? SERVICE_TYPE.SIMPLE;

    }
    async processingPrompt(prompt: string): Promise<string> {
        if(this.serviceType === SERVICE_TYPE.SIMPLE) {
            prompt = await generateSdPrompt(prompt);
        }
        const currentTemplate = RevAnimatedPromptTemplate;
        return replaceContent(currentTemplate, prompt);
    }

    async call(prompt:string) {

        const finallyPrompt = await this.processingPrompt(prompt);
        const payload = JSON.parse(JSON.stringify(RevAnimatedRequestPayload));
        payload.prompt = finallyPrompt;
        payload.negative_prompt = this.negateivePromptTemplate;
        console.log(payload,'payload');
        return await text2img(payload);


    }


}
