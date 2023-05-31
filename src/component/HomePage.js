import SideBar from "./SideBar"
import "./homepage.css"


function Homepage() {

    return (
        <>
            <div className="container" >
            <SideBar />
                <div className="innercontainer">
                    <div>
                    <p>Scenario  </p>
                    <select name="Scenario" id="Scenario">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    </div>

                
                        <table >
                            <tr>
                                <th>Vehical id</th>
                                <th>Vehical Name</th>
                                <th>Position X </th>
                                <th>Position Y </th>
                                <th>Speed </th>
                                <th>Direction</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Car</td>
                                <td>10</td>
                                <td>20</td>
                                <td>3</td>
                                <td>Upword</td>
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Car</td>
                                <td>10</td>
                                <td>20</td>
                                <td>3</td>
                                <td>Upword</td>
                                <td><button>Edit</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                        </table>
                        <div className="action-btn">
                        <button  style={{backgroundColor:"lightgreen",height:"50px"}}> Start Simulation</button>
                        <button style={{backgroundColor: "lightblue",height:"50px"}}> Stop Simulation</button>
                    </div>

                     <div className="graph"> 
                            <div className="graphitem" id="1"></div>
                            <div className="graphitem" id="2"></div>
                            <div className="graphitem" id="3"></div>
                            <div className="graphitem"id="4"></div>
                            <div className="graphitem"id="5"></div>
                            <div className="graphitem"id="6"></div>
                            <div className="graphitem"id="7"></div>
                            <div className="graphitem"id="8"></div>
                            <div className="graphitem"id="9"></div>
                            <div className="graphitem"id="10"></div>
                            <div className="graphitem"id="11"></div>
                            <div className="graphitem"id="12"></div>
                            <div className="graphitem"id="13"></div>
                            <div className="graphitem"id="14"></div>
                            <div className="graphitem"id="15"></div>
                            <div className="graphitem"id="16"></div>
                            <div className="graphitem"id="17"></div>
                            <div className="graphitem"id="18"></div>
                            <div className="graphitem"id="19"></div>
                            <div className="graphitem"id="20"></div>
                            <div className="graphitem"id="21"></div>
                            <div className="graphitem"id="22"></div>
                            <div className="graphitem"id="23"></div>
                            <div className="graphitem"id="24"></div>
                            <div className="graphitem"id="25"></div>
                            <div className="graphitem"id="26"></div>
                            <div className="graphitem"id="27"></div>
                            <div className="graphitem"id="28"></div>
                            <div className="graphitem"id="29"></div>
                            <div className="graphitem"id="30"></div>
                            <div className="graphitem"id="31"></div>
                            <div className="graphitem"id="32"></div>
                            <div className="graphitem"id="33"></div>
                            <div className="graphitem"id="34"></div>
                            <div className="graphitem"id="35"></div>
                            <div className="graphitem"id="36"></div>
                            <div className="graphitem"id="37"></div>
                            <div className="graphitem"id="38"></div>
                            <div className="graphitem"id="39"></div>
                            <div className="graphitem"id="40"></div>
                            <div className="graphitem"id="41"></div>
                            <div className="graphitem"id="42"></div>
                            <div className="graphitem"id="43"></div>
                            <div className="graphitem" id="44"></div>
                            <div className="graphitem"id="45"></div>
                            <div className="graphitem"id="46"></div>
                            <div className="graphitem"id="47"></div>
                            <div className="graphitem"id="48"></div>
                            <div className="graphitem"id="49"></div>
                            <div className="graphitem"id="50"></div>
                            <div className="graphitem"id="51"></div>
                            <div className="graphitem"id="52"></div>
                            <div className="graphitem"id="53"></div>
                            <div className="graphitem"id="54"></div>
                            <div className="graphitem"id="55"></div>
                            <div className="graphitem"id="56"></div>
                            <div className="graphitem"id="57"></div>
                            <div className="graphitem"id="58"></div>
                            <div className="graphitem"id="59"></div>
                            <div className="graphitem"id="60"></div>
                            <div className="graphitem"id="61"></div>
                            <div className="graphitem"id="62"></div>
                            <div className="graphitem"id="63"></div>
                            <div className="graphitem"id="64"></div>
                            <div className="graphitem"id="65"></div>
                            <div className="graphitem"id="66"></div>
                            <div className="graphitem"id="67"></div>
                            <div className="graphitem"id="68"></div>
                            <div className="graphitem"id="69"></div>
                            <div className="graphitem"id="70"></div>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default Homepage;