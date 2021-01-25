import { Router } from "express";
import * as serviceCarController from "../controllers/serviceCar.controller";
const router = Router();

router.get("/services", serviceCarController.getServices);

router.get("/services/:id", serviceCarController.getService);

router.post("/services", serviceCarController.createService);

router.put("/services/:id", serviceCarController.updateService);

router.delete("/services/:id", serviceCarController.deleteService);

export default router;
