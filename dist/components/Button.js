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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./button.scss");
var classnames_1 = __importDefault(require("classnames"));
var namespace = 'wirfy-button';
var Button = function (_a) {
    var _b, _c;
    var children = _a.children, className = _a.className, _d = _a.color, color = _d === void 0 ? 'is-primary' : _d, icon = _a.icon, _e = _a.isDisabled, isDisabled = _e === void 0 ? false : _e, _f = _a.isFullwidth, isFullwidth = _f === void 0 ? false : _f, _g = _a.isInverted, isInverted = _g === void 0 ? false : _g, _h = _a.isLight, isLight = _h === void 0 ? false : _h, _j = _a.isLoading, isLoading = _j === void 0 ? false : _j, _k = _a.isOutlined, isOutlined = _k === void 0 ? false : _k, _l = _a.isResponsive, isResponsive = _l === void 0 ? false : _l, _m = _a.isRounded, isRounded = _m === void 0 ? false : _m, _o = _a.isStatic, isStatic = _o === void 0 ? false : _o, onClick = _a.onClick, size = _a.size, state = _a.state, style = _a.style, text = _a.text;
    var buttonClasses = (0, classnames_1.default)(namespace, 'button', color, (_b = {},
        _b["".concat(className)] = className,
        _b['is-fullwidth'] = isFullwidth,
        _b['is-inverted'] = isInverted,
        _b['is-light'] = isLight,
        _b['is-loading'] = isLoading,
        _b['is-outlined'] = isOutlined,
        _b['is-responsive'] = isResponsive,
        _b['is-rounded'] = isRounded,
        _b['is-static'] = isStatic,
        _b["".concat(size)] = size,
        _b["".concat(state)] = state,
        _b));
    var iconClasses = (0, classnames_1.default)('icon', (_c = {
            'is-small': icon && !text
        },
        _c["".concat(namespace, "__icon")] = icon && text,
        _c));
    return ((0, jsx_runtime_1.jsxs)("button", __assign({ className: buttonClasses, disabled: isDisabled, style: style, onClick: onClick }, { children: [icon && (0, jsx_runtime_1.jsx)("span", __assign({ className: iconClasses }, { children: icon })), text && (0, jsx_runtime_1.jsx)("span", { children: text }), children] })));
};
exports.Button = Button;
exports.default = exports.Button;
