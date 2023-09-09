(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(247);
// EXTERNAL MODULE: ./pages/global.scss
var global = __webpack_require__(128);
;// CONCATENATED MODULE: ./pages/_app.tsx




function App(props) {
    const { Component , pageProps  } = props;
    // const [render, setRender] = useState(false);
    // useEffect(() => setRender(true), []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Chat 万相"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "/favicon.svg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "minimum-scale=1, initial-scale=1, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(core_.MantineProvider, {
                withGlobalStyles: true,
                withNormalizeCSS: true,
                theme: {
                    /** Put your mantine theme override here */ colorScheme: "dark"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}


/***/ }),

/***/ 128:
/***/ (() => {



/***/ }),

/***/ 247:
/***/ ((module) => {

"use strict";
module.exports = require("@mantine/core");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(422));
module.exports = __webpack_exports__;

})();