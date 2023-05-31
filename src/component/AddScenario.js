import SideBar from "./SideBar"
import "./addscenario.css"
function AddScenario(){
    return (
        <>
        <div className="container">
            <SideBar/>

            <div className="innercontainer">
                <p>Scenario / add</p>    
                <h3>Add Scenario</h3>

                <div className="scenariocontainer"> 
                    <div className="scenariocontaineritem" > Scenario Name
                    <input type="text" name="scenarioname"  required /></div>
                    <div className="scenariocontaineritem " > Scenario Time
                    <input type="text" name="scenarioitem" required /></div>
                    
                    
                </div>
                <div className="action-btn">
                    <button type="button" style={{backgroundColor:"green"} }>Add</button>
                    <button type="button" style={{backgroundColor:"orange"} }>Reset</button>
                    <button type="button" style={{backgroundColor:"blue"} }>Go Back</button>
                </div>

            </div>     
        </div>
        </>
    )
}

export default AddScenario;