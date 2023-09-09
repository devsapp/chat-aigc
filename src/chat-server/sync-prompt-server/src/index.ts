import express from 'express';
import axios from 'axios';

const app = express();
const port = 3333;


const RENDER_IMAGE_SERVER_PATH = 'renderImage'


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/chat', async (req: any, res: any) => {

  let prompt = req.body?.text?.content;
  if (!prompt) {
    res.send('');
  }
  prompt = prompt.trim();
  await axios({
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
      "title": "出图",
      "text": `您的提示词是${prompt},正在生成中，请稍后`
    },
  })
});



app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
