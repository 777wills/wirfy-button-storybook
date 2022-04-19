"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Icon = function (_a) {
    var _b = _a.width, width = _b === void 0 ? '20' : _b, _c = _a.height, height = _c === void 0 ? '20' : _c, _d = _a.color, color = _d === void 0 ? '#fff' : _d;
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", id: "arrow-circle-down", viewBox: "0 0 24 24", width: width, height: height, fill: color }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M0,12A12,12,0,1,0,12,0,12.013,12.013,0,0,0,0,12Zm22,0A10,10,0,1,1,12,2,10.011,10.011,0,0,1,22,12Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M16,12a2.993,2.993,0,0,1-.752,1.987c-.291.327-.574.637-.777.84L11.647,17.7a1,1,0,1,1-1.426-1.4L13.05,13.42c.187-.188.441-.468.7-.759a1,1,0,0,0,0-1.323c-.258-.29-.512-.57-.693-.752L10.221,7.7a1,1,0,1,1,1.426-1.4l2.829,2.879c.2.2.48.507.769.833A2.99,2.99,0,0,1,16,12Z" })] })));
};
exports.Icon = Icon;
