import { useEffect, useState } from "react";
import * as ServicesCar from "../../Services/ServiceCar";
import { useParams, Link } from "react-router-dom";
import { MaintenanceCar } from "../../Interfaces/MaintenanceCar";
import Moment from "react-moment";
import imageAltern from "../../assets/images/alternImage.jpg";

interface Params {
  id: string;
}

const DetailMaintenance = () => {
  const params = useParams<Params>();

  const [getMaintenance, setMaintenance] = useState<MaintenanceCar>();

  const loadMaintenance = async (id: string) => {
    const res = await ServicesCar.getOneMaintenance(id);
    setMaintenance(res.data);
    return res.data;
  };
  useEffect(() => {
    loadMaintenance(params.id);
  }, []);
  return (
    <div>
      <div className="card text-center">
        <div className="card-header">
          <h2 className="card-title">OWNER: {getMaintenance?.clientName}</h2>
        </div>
        <div className="card-body">
          <h3 className="card-title">MAKE: {getMaintenance?.make}</h3>
          <h5 className="card-title">MODEL: {getMaintenance?.model}</h5>
          <p>KILOMETERS: {getMaintenance?.kilometers} km</p>
          <p>
            ON MAINTENANCE:{" "}
            {getMaintenance?.maintenance ? (
              <span className="border border-danger">Yes</span>
            ) : (
              <span>No</span>
            )}
          </p>
          {getMaintenance?.image ? (
            <img src="..." className="img-fluid" alt="..." />
          ) : (
            <img src={imageAltern} className="img-fluid" alt="Alternimage" />
          )}

          <hr />
          <p className="card-text border border-warning">
            DESCRIPTION: <br /> {getMaintenance?.description}
          </p>
          <hr />
          <p className="card-text border border-success">
            ESTIMATE DATE: <br />
            <Moment format="YYYY/MM/DD">{getMaintenance?.estimatedate}</Moment>
          </p>
          <hr />
          <p className="card-text">ID: {getMaintenance?._id}</p>
          <Link to="/" className="btn btn-primary">
            Home
          </Link>
        </div>
        <div className="card-footer text-muted">
          LAST UPDATED: <Moment fromNow>{getMaintenance?.updatedAt}</Moment>
        </div>
      </div>
    </div>
  );
};

export default DetailMaintenance;
