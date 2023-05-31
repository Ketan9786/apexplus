import SideBar from "./SideBar";
import "./allscenario.css"
function AllScenario(){

  return(
    <>
        <div className="container"><SideBar/>

        <div className="innercontainer">
                 
                <h3>All Scenario</h3>
                <div style={{marginLeft:800, marginTop:20}}>
                <button>New Scenario</button>
                <button>Add Vehicle</button>
                <button>Delete All</button>
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
                            <tr>
                                <td>1</td>
                                <td>Test Scenario</td>
                                <td>2s</td>
                                <td>2</td>
                                <td><button>+</button></td>
                                
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                     
                            <tr>
                                <td>1</td>
                                <td>Test Scenario</td>
                                <td>2s</td>
                                <td>2</td>
                                <td><button>+</button></td>
                                
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                        </table>
                </div>
                </div>
        </>
  )
}
export default AllScenario;