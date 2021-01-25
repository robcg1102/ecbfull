import axios from "axios";
import { MaintenanceCar } from "../Interfaces/MaintenanceCar";

const API = "https://testecb.herokuapp.com";

export const getAllMaintenance = async () => {
  return await axios.get<MaintenanceCar[]>(`${API}/services`);
};

export const createMaintenance = async (newMaintenance: MaintenanceCar) => {
  return await axios.post(`${API}/services`, newMaintenance);
};

export const deleteMaintenance = async (id: string) => {
  return await axios.delete<MaintenanceCar>(`${API}/services/${id}`);
};

export const getOneMaintenance = async (id: string) => {
  return await axios.get<MaintenanceCar>(`${API}/services/${id}`);
};

export const updateMaintenance = async (id: string, maintenanceCar: MaintenanceCar) => {
  return await axios.put<MaintenanceCar>(`${API}/services/${id}`, maintenanceCar);
};