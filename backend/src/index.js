"use strict";
exports.__esModule = true;
var app_1 = require("./app");
require("./database");
app_1["default"].listen(app_1["default"].get('port'), function () {
    console.log("Connectted on port: ", app_1["default"].get('port'));
});
