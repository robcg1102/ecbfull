import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";

import { MaintenanceCar } from "../../Interfaces/MaintenanceCar";
import * as ServicesCar from "../../Services/ServiceCar";
import { toast } from "react-toastify";
import swal from "sweetalert";

type inputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
  id: string;
}

const FormMaintenance = () => {
  const params = useParams<Params>();
  const history = useHistory();

  const initialState = {
    description: "",
    make: "",
    model: "",
    kilometers: 0,
    maintenance: false,
    clientName: "",
    estimatedate: "",
  };

  const initialDate = {
    todayDate: Date(),
  };

  const [getMaintenance, setMaintenance] = useState<MaintenanceCar>(
    initialState
  );
  const [getTodayDate, setTodayDate] = useState(initialDate);

  const formatDate = (date: string) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const handleInputChange = (e: inputChange) => {
    setMaintenance({ ...getMaintenance, [e.target.name]: e.target.value });
  };

  const handleCheck = (e: inputChange) => {
    setMaintenance({
      ...getMaintenance,
      maintenance: !getMaintenance.maintenance,
    });
  };

  useEffect(() => {
    setTodayDate({
      todayDate: formatDate(getTodayDate.todayDate),
    });
    setMaintenance({
      ...getMaintenance,
      estimatedate: getTodayDate.todayDate,
    });

    if (params.id) {
      getDataMaintenance(params.id);
    }
  }, []);

  const getDataMaintenance = async (id: string) => {
    const res = await ServicesCar.getOneMaintenance(id);
    const {
      description,
      make,
      model,
      kilometers,
      maintenance,
      clientName,
      estimatedate,
    } = res.data;
    setMaintenance({
      description,
      make,
      model,
      kilometers,
      maintenance,
      clientName,
      estimatedate,
    });
  };

  const sendData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (params.id) {
      swal({
        text: "Maintenance updated!",
        icon: "success",
      });
      await ServicesCar.updateMaintenance(params.id, getMaintenance);
      toast.success("Maintenance updated");
    } else {
      swal({
        text: "Maintenance created!",
        icon: "success",
      });
      await ServicesCar.createMaintenance(getMaintenance);
      toast.success("New Maintenance created");
    }
    
    history.push("/");
  };

  return (
    <div>
      {params.id ? <h2>Edit</h2> : <h2>Create new</h2>}
      <form onSubmit={sendData}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Client name
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Client name"
            aria-label="Client name"
            aria-describedby="basic-addon1"
            value={getMaintenance.clientName}
            onChange={handleInputChange}
            name="clientName"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Make
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Make"
            aria-label="Make"
            aria-describedby="basic-addon1"
            value={getMaintenance.make}
            onChange={handleInputChange}
            name="make"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Model
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Model"
            aria-label="Model"
            aria-describedby="basic-addon1"
            value={getMaintenance.model}
            onChange={handleInputChange}
            name="model"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">Description</span>
          <textarea
            value={getMaintenance.description}
            className="form-control"
            aria-label="With textarea"
            onChange={handleInputChange}
            name="description"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Kilometers
          </span>
          <input
            type="number"
            className="form-control"
            aria-label="Model"
            aria-describedby="basic-addon1"
            value={getMaintenance.kilometers}
            onChange={handleInputChange}
            name="kilometers"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Estimate Date
          </span>
          <input
            id="date"
            type="date"
            onChange={handleInputChange}
            name="estimatedate"
            value={`${getMaintenance.estimatedate}`}
            min={`${getTodayDate.todayDate}`}
          />
        </div>
        <div className="input-group mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              name="maintenance"
              onChange={handleCheck}
              checked={getMaintenance.maintenance}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              On Maintenance
            </label>
          </div>
        </div>
        {params.id ? (
          <button className="btn btn-success">Update Data</button>
        ) : (
          <button className="btn btn-success">Create</button>
        )}
      </form>
    </div>
  );
};

export default FormMaintenance;
