// import express from 'express';
// import axios from 'axios';
// import { options, getOptions } from './stable-diffusion-apis';
// import { modelList, modelsIndexMap } from './contents';
// const app = express();
// const port = 3333;

// const MODELS_LIST_NL = '模型列表';
// const MODEL_UPDATE_NL = '更换模型';
// const CURRENT_MODEL_NL = '当前模型';
// const RENDER_IMAGE_SERVER_PATH = 'renderImage'
// const DEFAULT_MODEL = {
//   name: 'sd-v1-5-inpainting',
//   hash: ''
// }
// const modelMap: any = {}
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// app.post('/chat', async (req: any, res: any) => {

//   let prompt = req.body?.text?.content;
//   if (!prompt) {
//     res.send('');
//   }
//   prompt = prompt.trim();
//   if (prompt.indexOf(MODELS_LIST_NL) === 0) {
//     const customerList = modelList.map((item: any, index: number) => {
//       modelMap[`model_${index + 1}`] = { name: item.model_name, hash: item.hash || '' }
//       return `+ ${index + 1}: ${item.model_name}`
//     });
//     res.send({
//       "msgtype": "markdown",
//       "markdown": {
//         "title": "模型列表",
//         "text": customerList.join('\n')
//       },
//     })

//   } else if (prompt.indexOf(CURRENT_MODEL_NL) === 0) {
//     const data = await getOptions();
//     const currentModel = data.sd_model_checkpoint;
//     res.send({
//       "msgtype": "markdown",
//       "markdown": {
//         "title": "当前模型",
//         "text": currentModel
//       },
//     })
//   } else if (prompt.indexOf(MODEL_UPDATE_NL) === 0) {
//     const modelIndex:number = prompt.replace(MODEL_UPDATE_NL, '').trim();
//      //@ts-ignore
//     const model = modelsIndexMap[`model_${modelIndex}`] || DEFAULT_MODEL;
//     await options(model.name, model.hash);
//     res.send({
//       "msgtype": "markdown",
//       "markdown": {
//         "title": "切换模型结果",
//         "text": "模型切换中，请稍后输入\'当前模型'\进行查看"
//       },
//     })
//   } else {

//     await axios({
//       method: 'POST',
//       url: `${process.env.SERVER_URL}/${RENDER_IMAGE_SERVER_PATH}`,
//       headers: {
//         'accept': 'application/json',
//         'Content-Type': 'application/json',
//         "X-Fc-Invocation-Type": "Async"
//       },
//       data: {
//         prompt,
//         modelName: ''
//       }
//     });

//     res.send({
//       "msgtype": "markdown",
//       "markdown": {
//         "title": "sd-出图",
//         "text": `您的提示词是${prompt},正在生成中，请稍后`
//       },
//     })
//   }
// });



// app.listen(port, () => {
//   console.log(`Server listening at http://localhost:${port}`);
// });
