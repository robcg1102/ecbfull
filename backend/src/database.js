"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var config_1 = require("./config");
var mongooseOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
};
mongoose_1["default"]
    .connect("" + config_1["default"].MONGO_DATABASE, mongooseOptions)
    .then(function (db) {
    console.log("Conectado a: ", db.connection.name);
})["catch"](function (err) {
    console.log(err);
});
