import express from "express";
import config from "./config";
import cors from "cors";

import serviceRoutes from "./routes/serviceCar.routes";

const app = express();

app.set("port", config.PORT);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(serviceRoutes);

export default app;
