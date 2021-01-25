"use strict";
exports.__esModule = true;
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
exports["default"] = {
    MONGO_DATABASE: process.env.MONGO_URI,
    PORT: process.env.PORT || 4000
};
