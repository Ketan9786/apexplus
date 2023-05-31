
import SideBar from "./SideBar"
import "./addvehicle.css"
function AddVehicle(){
        return(
           
            <>
           <div className="container">
            <SideBar/>

            <div className="innercontainer">
                <p>Vehicle / add</p>    
                <h3>Add Vehicle</h3>

                <div className="vehiclecontainer"> 
                    <div className="vehiclecontaineritem" > Scenario List 
                    <select name="Scenario" id="Scenario">
                        <option value="test1">test1</option>
                        <option value="test2">test2</option>
                        <option value="test3">test3</option>
                        <option value="test4">test4</option>
                    </select>
                    </div>
                    <div className="vehiclecontaineritem " > Vehicle Name
                    <input type="text" name="vehiclename" required /> </div>
                    <div className="vehiclecontaineritem " > Speed
                    <input type="text" name="Speed" required />
                    </div>
                    <div className="vehiclecontaineritem " > Position X
                    <input type="text" name="Speed" required />
                    </div>
                    <div className="vehiclecontaineritem" > Position Y
                    <input type="text" name="Speed" required />
                    </div>

                    <div className="vehiclecontaineritem" > Direction
                    <select name="Scenario" id="Scenario">
                        <option value="volvo">Upwords</option>
                        <option value="saab">Dwonwords</option>
                        <option value="mercedes">Towords</option>
                        <option value="audi">Backwords</option>
                    </select>
                    </div>
                   
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
export default AddVehicle;
