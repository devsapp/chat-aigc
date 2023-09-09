

export function transformBase64ToBuffer(base64Str: string) {
    return Buffer.from(base64Str, 'base64');
}