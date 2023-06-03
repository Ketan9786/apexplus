import {useEffect, useState}from"react";
    import axios from 'axios';
import SideBar from "./SideBar";
import "./allscenario.css"
import ScenarioTable from "./ScenarioTable"
import AddVehicle from "./AddVehicle"
import { Link } from "react-router-dom";
export const scenarionames = [];
function AllScenario(){

    const [datas,setDatas]=useState([]);

    async function performAPICall() {

        try {
        
           const response = await axios.get("https://apexplusketan.onrender.com/scenario")    
           const scenarios = response.data;
            
           setDatas(scenarios);
           
        } catch(error) {
            console.log(error);
        }
          
      }

    useEffect(() => {

        performAPICall();
     
      });
    
  const deletall=()=>{

        datas.map((data)=>{

            function handeldelete(){
                axios.delete(`https://apexplusketan.onrender.com/scenario/${data.id}`)
               }
               handeldelete();
        })
      
  } 
      
      
  return(
    <>
        <div className="container"><SideBar/>

        <div className="innercontainer">
                 
                <h3>All Scenario</h3>
                <div style={{marginLeft:800, marginTop:20}}>
                <Link to="/AddScenario"><button>New Scenario</button></Link>
                <Link to="/Addvehicle">  <button>Add Vehicle</button></Link>
                <button onClick={deletall}>Delete All</button>
                </div>

                <table >
                            <tr>
                                <th>Scenario id</th>
                                <th>Scenario Name</th>
                                <th>Scenario Time </th>
                                <th>Number of Vehicle </th>
                                <th>Add Vehicle </th>
                               
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                           {
                            datas && (
                                <>
                                    {datas.map((data)=>{
                                        console.log(data,"DD")
                                        return (
                                           <>

                                            <ScenarioTable data={data} key={data.id}
                                            
                                            />
                                            
                                           </>
                                        )
                                    })}
                                </>
                            )
                           }
                              
                          
                            
                        </table>
                </div>
                </div>
        </>
  )
}
export default AllScenario;