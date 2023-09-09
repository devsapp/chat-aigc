
export const enum SERVICE_TYPE {
    'SIMPLE' = 'SIMPLE',
    'DETAIL' = 'DETAIL',
    'EXPERT' = 'EXPERT'
}
export abstract class ModelService {
    abstract serviceType: SERVICE_TYPE
    abstract requestPayload: object;
    abstract baseModel: string;
    abstract loras: string[];
    abstract promptTemplate: string;
    abstract negateivePromptTemplate: string;

    abstract call(prompt: string): any;
    abstract processingPrompt(prompt: string): void;
}

export interface Query {
    query: string;
    kwargs: Kwargs;
}

export interface Answer {
    answer: string
}
export interface Kwargs {
    max_length: number;
    do_sample: boolean;
    temperature: number;
    top_k: number;
    top_p: number;
    repetition_penalty: number;
    num_return_sequences: number;
}
export function replaceContent(template: string, newContent: string): string {
    return template.replace(/\{\{(.+?)\}\}/g, newContent);
}



