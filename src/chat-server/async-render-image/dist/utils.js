"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractWanXStyle = exports.transformBase64ToBuffer = void 0;
function transformBase64ToBuffer(base64Str) {
    return Buffer.from(base64Str, 'base64');
}
exports.transformBase64ToBuffer = transformBase64ToBuffer;
function extractWanXStyle(input) {
    let styleMatches = input.match(/<([^>]+)>/g) || [];
    let prompt = input;
    for (let match of styleMatches) {
        prompt = prompt.replace(match, '');
    }
    return { prompt: prompt.trim(), style: styleMatches[0] || '' };
}
exports.extractWanXStyle = extractWanXStyle;
