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
exports.generateSdPrompt = void 0;
const openai_1 = require("langchain/llms/openai");
const prompts_1 = require("langchain/prompts");
const stable_diffusion_apis_1 = require("../stable-diffusion-apis");
const StableDiffusionPromptTemplate = `Stable Diffusion is an AI art generation model similar to DALLE-2.
Here are some prompts for generating art with Stable Diffusion. 

Example:

- portait of a homer simpson archer shooting arrow at forest monster, front game card, drark, marvel comics, dark, intricate, highly detailed, smooth, artstation, digital illustration
- pirate, concept art, deep focus, fantasy, intricate, highly detailed, digital painting, artstation, matte, sharp focus, illustration
- ghost inside a hunted room, art by lois van baarle and loish and ross tran and rossdraws and sam yang and samdoesarts and artgerm, digital art, highly detailed, intricate, sharp focus, Trending on Artstation HQ, deviantart, unreal engine 5, 4K UHD image
- red dead redemption 2, cinematic view, epic sky, detailed, concept art, low angle, high detail, warm lighting, volumetric, godrays, vivid, beautiful, trending on artstation
- a fantasy style portrait painting of rachel lane / alison brie hybrid in the style of francois boucher oil painting unreal 5 daz. rpg portrait, extremely detailed artgerm
- athena, greek goddess, claudia black, art by artgerm and greg rutkowski and magali villeneuve, bronze greek armor, owl crown, d & d, fantasy, intricate, portrait, highly detailed, headshot, digital painting, trending on artstation, concept art, sharp focus, illustration
- closeup portrait shot of a large strong female biomechanic woman in a scenic scifi environment, intricate, elegant, highly detailed, centered, digital painting, artstation, concept art, smooth, sharp focus, warframe, illustration
- ultra realistic illustration of steve urkle as the hulk, intricate, elegant, highly detailed, digital painting, artstation, concept art, smooth, sharp focus, illustration
- portrait of beautiful happy young ana de armas, ethereal, realistic anime, trending on pixiv, detailed, clean lines, sharp lines, crisp lines, award winning illustration, masterpiece, 4k, eugene de blaas and ross tran, vibrant color scheme, intricately detailed
- A highly detailed and hyper realistic portrait of a gorgeous young ana de armas, lisa frank, trending on artstation, butterflies, floral, sharp focus, studio photo, intricate details, highly detailed, alberto seveso and geo2099 style

Prompts should be written in English, excluding the artist name, and include the following rule:

- Follow the structure of the example prompts. This means Write a description of the scene, followed by modifiers divided by commas to alter the mood, style, lighting, and more, excluding the artist name, separated by commas. place a extra commas.

I want you follow the rules, take one of them as a reference,  and write me a detailed tip about IDEA. Give me the relevant content of the tip directly, do not include other parts, and must in English

IDEA: {userInput}`;
const promptFormat = prompts_1.PromptTemplate.fromTemplate(StableDiffusionPromptTemplate);
function generateSdPrompt(userInput) {
    return __awaiter(this, void 0, void 0, function* () {
        let result = userInput;
        if (process.env.OPENAI_API_KEY && process.env.PROXY_URL) {
            const model = new openai_1.OpenAI({
                modelName: 'gpt-3.5-turbo',
                openAIApiKey: process.env.OPENAI_API_KEY,
                maxTokens: 2048,
            }, {
                basePath: process.env.PROXY_URL,
            });
            const fullyPrompt = yield promptFormat.format({ userInput });
            result = yield model.call(fullyPrompt);
        }
        else if (process.env.GENERATE_PROMPT_URL) {
            const payload = {
                query: userInput,
                kwargs: {
                    max_length: 1024,
                    do_sample: true,
                    temperature: 1,
                    top_k: 50,
                    top_p: 0.95,
                    repetition_penalty: 1.2,
                    num_return_sequences: 1
                }
            };
            const data = yield (0, stable_diffusion_apis_1.genetatePrompt)(payload);
            result = data.answer;
        }
        console.log('prompt beauty', result);
        return result;
    });
}
exports.generateSdPrompt = generateSdPrompt;
