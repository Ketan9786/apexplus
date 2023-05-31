import { Link } from "react-router-dom";

import "./sidebar.css";
function SideBar() {
    return (
        <>
            <div className="sidebar">
                <Link to="/" className="link" >
                  Home</Link>

                <Link to="/AddScenario" className="link" >
                      Add Scenario</Link>
             

                    <Link to="/AllScenario" className="link" >
                    All Scenario</Link>
                  

                        <Link to="/Addvehicle" className="link" >
                              Add Vehicle</Link>

                    </div>
                </>
                );
}
                export default SideBar;
