import { MaintenanceCar } from "../../Interfaces/MaintenanceCar";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";

import * as ServicesCar from "../../Services/ServiceCar";

interface Props {
  maintenanceItem: MaintenanceCar;
  loadItems: () => void;
}

const MaintenanceItem = ({ maintenanceItem, loadItems }: Props) => {
  const history = useHistory();

  const handleDelete = (id: string) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: {
        cancel: true,
        confirm: true,
      },
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await ServicesCar.deleteMaintenance(id);
        loadItems();
        swal("Poof! Your file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your file is safe!");
      }
    });
  };

  return (
    <tr className={`${maintenanceItem.maintenance ? "table-secondary text-primary" : ""}`}>
      <td className="text-center">{maintenanceItem.description}</td>
      <td className="text-center">{maintenanceItem._id}</td>
      <td className="text-center">{maintenanceItem.clientName}</td>
      <td className="text-center">
        <button
          className="btn btn-info"
          onClick={() => history.push(`/detail/${maintenanceItem._id}`)}
        >
          More info
        </button>
      </td>
      <td className="text-center">
        <button
          className="btn btn-warning"
          onClick={() => history.push(`/edit/${maintenanceItem._id}`)}
        >
          Edit
        </button>
      </td>
      <td className="text-center">
        <button
          className="btn btn-danger"
          onClick={() =>
            maintenanceItem._id && handleDelete(maintenanceItem._id)
          }
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default MaintenanceItem;
