import React  from "react";
import axios from 'axios';
import {useState} from 'react'
import { Link } from "react-router-dom";
function ScenarioTable(data){
  
    const [inp, setInp] = useState(-1)
    function handeldelete(event){
        axios.delete(`https://apexplusketan.onrender.com/scenario/${event.target.id}`)
       }
    return(
        <> 
       
        <tr>
    <td>{data.data.id}</td>
    <td>{data.data.scenarioname}</td>
    <td>{data.data.scenariotime}s</td>
    <td>2</td>
    <td><Link to="/Addvehicle"><button> +</button> </Link></td>
    
    <td><button>Edit</button></td>
    <td><Link to="/Allscenario"><button onClick={handeldelete} id={data.data.id}> Delete</button></Link></td>
</tr>
</>
    )
    
}

export default ScenarioTable;