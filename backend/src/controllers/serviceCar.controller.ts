import { RequestHandler } from "express";
import ServiceCar from "../models/ServiceCar";

export const getServices: RequestHandler = async (req, res) => {
  try {
    const services = await ServiceCar.find().sort({ createdAt: -1 });
    res.json(services);
  } catch (error) {
    res.json(error);
  }
};

export const getService: RequestHandler = async (req, res) => {
  try {
    const serviceFound = await ServiceCar.findById(req.params.id);
    if (serviceFound) return res.json(serviceFound);
    res.status(204).json();
  } catch (error) {
    res.json(error);
  }
};

export const createService: RequestHandler = async (req, res) => {
  try {
    const serviceCar = new ServiceCar(req.body);
    const savedCar = await serviceCar.save();
    res.json(savedCar);
  } catch (error) {
    res.json(error);
  }
};

export const updateService: RequestHandler = async (req, res) => {
  const serviceCarUpdated = await ServiceCar.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!serviceCarUpdated) return res.status(204).json();
  res.json(serviceCarUpdated);
};

export const deleteService: RequestHandler = async (req, res) => {
  const serviceCarFound = await ServiceCar.findByIdAndDelete(req.params.id);
  if (!serviceCarFound) return res.status(204).json();
  res.json(serviceCarFound);
};
