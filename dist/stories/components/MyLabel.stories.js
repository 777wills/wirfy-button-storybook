"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: 'Example/MyLabel',
    component: MyLabel_1.MyLabel
};
var Template = function () { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, {}); };
exports.Basic = Template.bind({});
exports.AllCaps = Template.bind({});
exports.Secondary = Template.bind({});
