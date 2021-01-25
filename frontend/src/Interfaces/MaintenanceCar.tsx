export interface MaintenanceCar {
  description?: string;
  make?: string;
  model?: string;
  kilometers?: number;
  image?: string;
  maintenance?: boolean;
  clientName?: string;
  _id?: string;
  estimatedate?: string | Date;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}
