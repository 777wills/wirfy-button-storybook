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
exports.WithLoading = exports.WithChildren = exports.OnlyIcon = exports.WithIcon = exports.TextChildren = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var index_1 = __importDefault(require("../../components/index"));
require("../../wirvi-styles.scss");
var icon_1 = require("../../components/icon");
exports.default = {
    title: 'Wirfy/Button',
    component: index_1.default
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(index_1.default, __assign({}, args)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    text: 'Hello Word!',
};
var TextChildren = function (args) { return ((0, jsx_runtime_1.jsx)(index_1.default, __assign({}, args, { children: "Label Children" }))); };
exports.TextChildren = TextChildren;
exports.TextChildren.args = {
    color: 'is-danger'
};
exports.WithIcon = Template.bind({});
exports.WithIcon.args = {
    icon: (0, jsx_runtime_1.jsx)(icon_1.Icon, {}),
    text: 'Hello Word!'
};
exports.OnlyIcon = Template.bind({});
exports.OnlyIcon.args = {
    icon: (0, jsx_runtime_1.jsx)(icon_1.Icon, {}),
    color: 'is-success'
};
var WithChildren = function (args) { return ((0, jsx_runtime_1.jsxs)(index_1.default, __assign({}, args, { children: [(0, jsx_runtime_1.jsx)("span", __assign({ style: { marginRight: '10px' } }, { children: "Label Children" })), (0, jsx_runtime_1.jsx)(icon_1.Icon, {})] }))); };
exports.WithChildren = WithChildren;
exports.WithChildren.args = {
    isRounded: true
};
exports.WithLoading = Template.bind({});
exports.WithLoading.args = {
    isLoading: true,
    text: 'Hello Word!'
};
