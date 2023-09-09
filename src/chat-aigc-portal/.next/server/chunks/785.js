"use strict";
exports.id = 785;
exports.ids = [785];
exports.modules = {

/***/ 785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CopyToClipboard)
/* harmony export */ });
/* unused harmony export useClipboard */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__);




function useClipboard({ timeout =2000  } = {}) {
    // @ts-ignore
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [copied, setCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [copyTimeout, setCopyTimeout] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const handleCopyResult = (value)=>{
        // @ts-ignore
        clearTimeout(copyTimeout);
        // @ts-ignore
        setCopyTimeout(setTimeout(()=>setCopied(false), timeout));
        setCopied(value);
    };
    const copy = (valueToCopy)=>{
        if ("clipboard" in navigator) {
            navigator.clipboard.writeText(valueToCopy).then(()=>handleCopyResult(true)).catch((err)=>setError(err));
        } else {
            // Use the 'out of viewport hidden text area' trick
            const textArea = document.createElement("textarea");
            textArea.value = valueToCopy;
            // Move textarea out of the viewport so it's not visible
            textArea.style.position = "absolute";
            textArea.style.left = "-999999px";
            document.body.prepend(textArea);
            textArea.select();
            try {
                document.execCommand("copy");
            } catch (error) {
                console.error(error);
            } finally{
                textArea.remove();
                handleCopyResult(true);
            }
        }
    };
    const reset = ()=>{
        setCopied(false);
        // @ts-ignore
        setError(null);
        // @ts-ignore
        clearTimeout(copyTimeout);
    };
    return {
        copy,
        reset,
        error,
        copied
    };
}
function CopyToClipboard({ value  }) {
    const clipboard = useClipboard({
        timeout: 500
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
        label: clipboard.copied ? "已复制" : "复制",
        withArrow: true,
        position: "right",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_2__.ActionIcon, {
            color: clipboard.copied ? "teal" : "gray",
            onClick: ()=>clipboard.copy(value),
            children: clipboard.copied ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__.IconCheck, {
                size: "1rem"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__.IconCopy, {
                size: "1rem"
            })
        })
    });
}


/***/ })

};
;