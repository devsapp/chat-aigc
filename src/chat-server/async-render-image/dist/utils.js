"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformBase64ToBuffer = void 0;
function transformBase64ToBuffer(base64Str) {
    return Buffer.from(base64Str, 'base64');
}
exports.transformBase64ToBuffer = transformBase64ToBuffer;
