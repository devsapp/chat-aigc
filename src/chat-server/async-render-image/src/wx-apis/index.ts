// import axios from 'axios';

import fetch from 'node-fetch';


export async function text2img(payload: any) {


    // console.log(payload)
    // const result = await axios({
    //     method: 'post',
    //     url: 'https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis',
    //     headers: {
    //         'X-DashScope-Async': 'enable',
    //         'Authorization': `Bearer ${process.env.WX_APIKEY}`,
    //         'Content-Type': 'application/json'
    //     },
    //     data: payload
    // })
    // console.log(result)
    // return result.data;


    const response = await fetch('https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'X-DashScope-Async': 'enable',
            'Authorization': `Bearer ${process.env.WX_APIKEY}`,
            'Content-Type': 'application/json'
        }
    });
    
    const data = await response.json();

    return data;
}

export async function getTaskResultById(task_id: string): Promise<any> {
    const response = await fetch(`https://dashscope.aliyuncs.com/api/v1/tasks/${task_id}`, {
        method: 'GET',
        headers: {
            'X-DashScope-Async': 'enable',
            'Authorization': `Bearer ${process.env.WX_APIKEY}`,
            'Content-Type': 'application/json'
        }
    })
    const data: any = await response.json();
 
    if (data.output && data.output.task_status === 'SUCCEEDED') {
        return data;
    } else {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({})
            }, 1000)
        })
        return await getTaskResultById(task_id);
    }
}

