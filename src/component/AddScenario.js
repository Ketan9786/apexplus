import { useState } from "react";
import {useNavigate} from "react-router-dom"
import SideBar from "./SideBar";
import "./addscenario.css";
function AddScenario() {
    const [sData, setSData] = useState({ scenarioname: "", scenariotime: "" ,id:""});
    const handleInputChange = (event) => {
        const [key, value] = [event.target.name, event.target.value];

        setSData({ ...sData, [key]: value });
       
    };

   

    var scenarioData = {
        "scenarioname":sData.scenarioname,
        "scenariotime":sData.scenariotime ,
        "vehicle":{}
    };

    function handleClick() {
        
      
        // console.log(JSON.stringify(scenarioData));
        fetch("http://localhost:3000/scenario", {
            // Enter your IP address here

            method: "POST",

            body: JSON.stringify(scenarioData), 
            headers: {
                // 'Authorization': `bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        ClearFields();
    }

    function ClearFields() {

        document.getElementById("name").value = "";
        document.getElementById("time").value = "";
    }    
    
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
    return (
        <>
            <div className="container">
                <SideBar />

                <div className="innercontainer">
                    <p>Scenario / add</p>
                    <h3>Add Scenario</h3>

                    <div className="scenariocontainer">
                        <div className="scenariocontaineritem">

                            Scenario Name
                            <input type="text" name="scenarioname"
                            id="name"
                            placeholder="Enter scenarioname here"
                                 value={sData.scenarioname}
                                 onChange={handleInputChange}
                            
                           required />
                        </div>
                        <div className="scenariocontaineritem ">

                            Scenario Time
                            <input type="number" name="scenariotime" 
                              id="time"
                              placeholder="Enter scenariotime"
                            value={sData.scenariotime}
                                 onChange={handleInputChange}
                                 required />
                        </div>
                    </div>
                    <div className="action-btn">
                        <button
                            type="button"
                            style={{ backgroundColor: "green" }}
                            onClick={handleClick}
                        >
                            Add
                        </button>
                        <button type="button" style={{ backgroundColor: "orange" }} onClick={ClearFields}>
                            Reset
                        </button>
                        <button type="button" style={{ backgroundColor: "blue" }} onClick={goBack}>
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddScenario;
