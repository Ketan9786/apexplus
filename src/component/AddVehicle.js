
import {useState,useEffect} from "react";
import axios, { all } from 'axios';

import SideBar from "./SideBar";
import {useNavigate} from "react-router-dom"
import "./addvehicle.css"
import {scenarionames} from "./AllScenario.js"
export let allData=[]
function AddVehicle(){

    const [datas,setDatas]=useState([]);
    const [vData, setVData] = useState({ vehiclename: "", positionx: Number,positiony:Number,speed:Number });
    const [direction,setDirection]=useState({direction:""});
    const[scenarioid,setScenarioid]=useState();
    const[scenario,setScenario]=useState({scenario:""})
    async function performAPICall() {

        try {
        
           const response = await axios.get("http://localhost:3000/scenario")    
           const scenarios = response.data;
            
           setDatas(scenarios);
           
        } catch(error) {
            console.log(error);
        }
          
      }

    useEffect(() => {

        performAPICall();
     
      },[]);

      
      const handleInputChange = (event) => {
          const [key, value] = [event.target.name, event.target.value];
  
          setVData({ ...vData, [key]: value });
         
      };
      const handelselect=(event)=>{
      

        setDirection(event.target.value);
       

      }
      const handelselectscenario=(event)=>{
        var options = event.target.options;
        var id      = options[options.selectedIndex].id;
        var value = options[options.selectedIndex].value;
        console.log(value);
        setScenario(event.target.value);
        setScenarioid(id);
        
      }


      var vehicleData =  {"vehicle": {
          "vehiclename":vData.vehiclename,
          "speed":vData.speed ,
          "positionx":vData.positionx,
            "positiony":vData.positiony,
            "direction":direction,
            "scenario":scenario
            
        }}
     

      function handleClick() {
    
       
            // console.log(JSON.stringify(scenarioData));

            console.log(scenarioid)
            
                fetch(`http://localhost:3000/scenario/${scenarioid}`, {
                    // Enter your IP address here
        
                    method: "PATCH",
        
                    body: JSON.stringify(
                        vehicleData
                    ), 
                    headers: {
                        // 'Authorization': `bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
           
         
       
        ClearFields() 

        }
        
  
      function ClearFields() {

       document.getElementById("vehiclename").value="";
        document.getElementById("speed").value = "";
        document.getElementById("positionx").value = "";
        document.getElementById("positiony").value = "";
    }    
    

     
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
    
        return(
           
            <>
           <div className="container">
            <SideBar/>

            <div className="innercontainer">
                <p>Vehicle / add</p>    
                <h3>Add Vehicle</h3>

                <div className="vehiclecontainer"> 
                    <div className="vehiclecontaineritem" > Scenario List 
                    <select name="Scenario" id="Scenario"onClick={handelselectscenario} >   
                    {
                            datas && (
                                <>
                                    {datas.map((data)=>{
                                        
                                        return (
                                           <>
                                          
                                           <option id={data.id} >{data.scenarioname}</option>

                                         
                                           
                                           
                                           </>
                                        )
                                    })}
                                </>
                            )
                           }
                           </select>
                        
                   
                    </div>
                    <div className="vehiclecontaineritem " > Vehicle Name
                    <input type="text" name="vehiclename" id="vehiclename"value={vData.vehiclename} placeholder="Enter Vehicle Name Here"  onChange={handleInputChange}required /> </div>
                    <div className="vehiclecontaineritem " > Speed
                    <input type="number" name="speed" id="speed" value={vData.speed} placeholder="Speed of Vehicle" onChange={handleInputChange} required />
                    </div>
                    <div className="vehiclecontaineritem " > Position X
                    <input type="number" name="positionx" id="positionx" placeholder="Enter positon x" value={vData.positionx} onChange={handleInputChange} required />
                    </div>
                    <div className="vehiclecontaineritem" > Position Y
                    <input type="number" name="positiony" id="positiony" value={vData.positiony} placeholder="Enter positon y"  onChange={handleInputChange} required />
                    </div>

                    <div className="vehiclecontaineritem" > Direction
                    <select name="scenario" id="scenario"  onClick={handelselect}>
                        <option value="upword"  >Upwords</option>
                        <option value="downword">Dwonwords</option>
                        <option value="toword">Towords</option>
                        <option value="backword" >Backwords</option>
                        
                    </select>
                    </div>
                   
                </div>
                <div className="action-btn">
                    <button type="button" style={{backgroundColor:"green"} } onClick={handleClick}>Add</button>
                    <button type="button" style={{backgroundColor:"orange"}}onClick={ClearFields}>Reset</button>
                    <button type="button" style={{backgroundColor:"blue"} } onClick={goBack}>Go Back</button>
                </div>

            </div>     
        </div>
            </>
        )
}
export default AddVehicle;
