

export function transformBase64ToBuffer(base64Str: string) {
    return Buffer.from(base64Str, 'base64');
}

export function extractWanXStyle(input: string): { prompt: string; style: string } {

    let styleMatches = input.match(/<([^>]+)>/g) || [];
    let prompt = input;
  
    for (let match of styleMatches) {
      prompt = prompt.replace(match, '');
    }
  
    return { prompt: prompt.trim(), style: styleMatches[0] || '' };
  }
  