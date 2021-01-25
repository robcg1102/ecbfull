import { useEffect, useState } from "react";
import { MaintenanceCar } from "../../Interfaces/MaintenanceCar";
import * as ServicesCar from "../../Services/ServiceCar";
import MaintenanceItem from "../MaitenanceItem.tsx/MaintenanceItem";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const [dataMaintenance, setDataMaintenance] = useState<MaintenanceCar[]>([]);

  const loadDataMaintenance = async () => {
    const res = await ServicesCar.getAllMaintenance();
    setDataMaintenance(res.data);
  };

  useEffect(() => {
    loadDataMaintenance();
  }, []);

  return (
    <div>
      <div className="container d-flex justify-content-around p-4">
        <h1>All maintenance car</h1>
        <button
          className="btn btn-success"
          onClick={() => history.push("/new")}
        >
          New Maintenance
        </button>
      </div>
      <div className="container d-flex justify-content-center">
        <table className="table table-dark col col-lg-2">
          <tbody>
            <tr className="table-secondary text-primary">
              <th scope="row">On maintenance</th>
            </tr>
            <tr>
              <th scope="row">No maintenance</th>
            </tr>
          </tbody>
        </table>
      </div>
      <table className="table table-dark table-hover table-striped">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              Description
            </th>
            <th scope="col" className="text-center">
              ID
            </th>
            <th scope="col" className="text-center">
              Client name
            </th>
            <th scope="col" className="text-center">
              Info
            </th>
            <th scope="col" className="text-center">
              Edit
            </th>
            <th scope="col" className="text-center">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {dataMaintenance.map((maintenance) => {
            return (
              <MaintenanceItem
                maintenanceItem={maintenance}
                loadItems={loadDataMaintenance}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
