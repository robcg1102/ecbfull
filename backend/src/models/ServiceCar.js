"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var videoSchema = new mongoose_1.Schema({
    description: {
        type: String,
        trim: true,
        "default": ''
    },
    make: {
        type: String,
        trim: true,
        "default": ''
    },
    model: {
        type: String,
        trim: true,
        "default": ''
    },
    kilometers: {
        type: Number,
        "default": 0
    },
    image: {
        type: String,
        trim: true,
        "default": ''
    },
    estimatedate: {
        type: Date,
        "default": Date.now
    },
    maintenance: {
        type: Boolean,
        "default": false
    },
    clientName: {
        type: String,
        "default": '',
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true
});
exports["default"] = mongoose_1.model("ServiceCar", videoSchema);
