import React  from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function Hometable(data){
  
    
    function handeldelete(event){
        axios.delete(`http://localhost:3000/scenario/${event.target.id}`)
       }
    return(
        <> 
        <tr>
    <td>{data.data.id}</td>
    <td>{data.data.vehicle.vehiclename}</td>
    <td>{data.data.vehicle.positionx}</td>
    <td>{data.data.vehicle.positiony}</td>
    <td>{data.data.vehicle.speed}</td>
    <td>{data.data.vehicle.direction}</td>
    <td><Link to="/Addvehicle"><button> +</button> </Link></td>
    
    <td><button>Edit</button></td>
    <td><Link to="/Allscenario"><button onClick={handeldelete} id={data.data.id}> Delete</button></Link></td>
</tr>
</>
    )
    
}

export default Hometable;
