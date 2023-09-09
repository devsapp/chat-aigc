"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceContent = exports.ModelService = void 0;
class ModelService {
}
exports.ModelService = ModelService;
function replaceContent(template, newContent) {
    return template.replace(/\{\{(.+?)\}\}/g, newContent);
}
exports.replaceContent = replaceContent;
