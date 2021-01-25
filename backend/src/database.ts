import mongoose, { ConnectionOptions } from "mongoose";
import config from "./config";

const mongooseOptions: ConnectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
};

mongoose
  .connect(`${config.MONGO_DATABASE}`, mongooseOptions)
  .then((db) => {
    console.log("Conectado a: ", db.connection.name);
  })
  .catch((err) => {
    console.log(err);
  });
