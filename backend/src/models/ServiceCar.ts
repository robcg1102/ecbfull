import { Schema, model } from "mongoose";

const videoSchema = new Schema(
  {
    description: {
      type: String,
      trim: true,
      default: '',
    },
    make: {
      type: String,
      trim: true,
      default: '',
    },

    model: {
      type: String,
      trim: true,
      default: '',
    },
    kilometers: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      trim: true,
      default: '',
    },
    estimatedate: {
      type: Date,
      default: Date.now,
    },
    maintenance: {
      type: Boolean,
      default: false,
    },
    clientName: {
      type: String,
      default: '',
      trim: true,
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("ServiceCar", videoSchema);
