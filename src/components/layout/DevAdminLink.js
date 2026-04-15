"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DevAdminLink;
var jsx_runtime_1 = require("react/jsx-runtime");
var link_1 = __importDefault(require("next/link"));
var lucide_react_1 = require("lucide-react");
/**
 * 開発環境でのみヘッダーに表示するAdmin リンク
 */
function DevAdminLink() {
    if (process.env.NODE_ENV !== "development")
        return null;
    return ((0, jsx_runtime_1.jsx)(link_1.default, { href: "/admin", className: "dev-admin-link", title: "Admin", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Settings, { size: 16 }) }));
}
