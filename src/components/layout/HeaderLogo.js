"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HeaderLogo;
var jsx_runtime_1 = require("react/jsx-runtime");
var link_1 = __importDefault(require("next/link"));
var navigation_1 = require("next/navigation");
var types_1 = require("@/lib/types");
function HeaderLogo() {
    var _a;
    var pathname = (0, navigation_1.usePathname)();
    var firstSegment = (_a = pathname.split("/")[1]) !== null && _a !== void 0 ? _a : "";
    var locale = types_1.ALL_LOCALE_SLUGS.includes(firstSegment) ? firstSegment : null;
    if (locale) {
        return ((0, jsx_runtime_1.jsx)(link_1.default, { href: "/".concat(locale), className: "block text-lg font-bold tracking-tight", children: types_1.SITE_NAMES[locale] }));
    }
    return ((0, jsx_runtime_1.jsx)(link_1.default, { href: "/", className: "block", children: (0, jsx_runtime_1.jsx)("img", { src: "/logo.png", alt: "\u6771\u4EAC\u591C\u666F\u30CA\u30D3", height: 36, style: { height: 36, width: "auto" } }) }));
}
