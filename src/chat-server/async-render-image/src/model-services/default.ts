import { ModelService, SERVICE_TYPE } from '../entity';
import { generateSdPrompt } from '../prompt-generate';
import { text2img as sd_text2img, DEFAULT_NEGATIVE_PROMPT, DEFAULT_TXT2IMAGE_PAYLOAD } from '../stable-diffusion-apis';
import { text2img as wx_text2img, getTaskResultById } from '../wx-apis';
import { extractWanXStyle } from '../utils';

export class DefaultService extends ModelService {
    baseModel = '';
    loras = [];
    negateivePromptTemplate = DEFAULT_NEGATIVE_PROMPT
    requestPayload = DEFAULT_TXT2IMAGE_PAYLOAD;
    promptTemplate = '';
    serviceType: any = '';
    constructor(serviceType?: SERVICE_TYPE) {
        super();

        this.serviceType = serviceType || '';

    }
    async processingPrompt(prompt: any): Promise<string> {
        if (this.serviceType === SERVICE_TYPE.SIMPLE) {
            prompt = await generateSdPrompt(prompt);
        }
        return prompt
    }

    async call(prompt: string) {

        const finallyPrompt = await this.processingPrompt(prompt);

        const serviceType = process.env.serviceType || 'WX';

        if (serviceType === 'SD') {
            const payload = JSON.parse(JSON.stringify(DEFAULT_TXT2IMAGE_PAYLOAD));
            payload.prompt = finallyPrompt;
            payload.negative_prompt = DEFAULT_NEGATIVE_PROMPT;
            return await sd_text2img(payload);
        } else {
            const { prompt: _prompt, style } = extractWanXStyle(finallyPrompt);
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
            const wxResult: any = await wx_text2img(payload);
            if (wxResult.output && wxResult.output.task_id) {
                return await getTaskResultById(wxResult.output.task_id);
            } else {
                return {};
            }
        }



    }


}
