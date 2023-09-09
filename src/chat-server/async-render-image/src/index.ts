
import express from 'express';
import axios from 'axios';
import { transformBase64ToBuffer } from './utils';
import { OssClient } from './alibaba-cloud-services/oss';

import { DefaultService } from './model-services/default';
import { ModelService } from './entity';

const SD_IMAGES_OBJECT = 'sd-upload-images';

const app = express();
const port = 3333;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/renderImage', async (req: any, res: any) => {
  console.log('fc sync invoke');
  const prompt = req.body.prompt;
  let modelSerivce: ModelService = new DefaultService();

  let result;
  try {
    result = await modelSerivce.call(prompt);

  } catch (e) {
    console.log(e)
  }
  let buffer: any = '';
  if (result.output && result.output.results) {
    const _result = result.output.results[0];
    const file = await axios.get(_result.url, { responseType: 'arraybuffer' });
    console.log(_result,'result');
    buffer = file.data;
  } else {
    const images = result?.images ?? [];
    buffer = transformBase64ToBuffer(images.join(''));
  }

  const fileName = Date.now() + 'sd.png';
  const headers = req.headers;
  const region = process.env.REGION;
  const bucketName = process.env.BUCKET_NAME;
  const accessKeyId = headers['x-fc-access-key-id'];
  const accessKeySecret = headers['x-fc-access-key-secret'];
  const stsToken = headers['x-fc-security-token'];
  const ossClient = new OssClient({
    accessKeyId,
    accessKeySecret,
    stsToken,
    region,
    bucket: bucketName
  });
  const uploadResult = await ossClient.putBuffer(buffer, SD_IMAGES_OBJECT + '/' + fileName) //await putBuffer(buffer, SD_IMAGES_OBJECT + '/' + fileName);
  res.send(`![${prompt}](${uploadResult?.url ?? ''})`);


});



app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
