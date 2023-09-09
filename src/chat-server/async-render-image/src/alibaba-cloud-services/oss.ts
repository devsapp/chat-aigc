import OSS from 'ali-oss';

interface  OssClientConfig {
    accessKeyId: string;
    region?:string,
    accessKeySecret: string;
    stsToken?: string;
    bucket?: any
}
const OSS_REGION_PREFIX = 'oss-'

export class OssClient {
    private client: any
    constructor(config: OssClientConfig) {
        this.client = new OSS({
            region: `${OSS_REGION_PREFIX}${config.region}`,
            accessKeyId: config.accessKeyId,
            accessKeySecret: config.accessKeySecret,
            stsToken: config.stsToken,
            bucket: config.bucket
        })
    }
    async putBuffer(buffer: Buffer, objectName: string) {
        try {
            const headers = {
                'x-oss-tagging': 'Tag1=created-by-fc',
            };
            
            const result = await this.client.put(objectName, buffer, { headers });
            return result;
        } catch (e) {
            console.log(e);
        }
    }

  
}