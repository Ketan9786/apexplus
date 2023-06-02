import SideBar from "./SideBar"
import{useState,useEffect}from "react"
import "./homepage.css"
import axios, { all } from 'axios';
import Hometable from "./Hometable";
function Homepage() {
    const [datas,setDatas]=useState([]);
    const [start,setStart]=useState(true);
  
    let x,y;
   
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

      
     const simulator = ()=>{
       
        
      let eledown= document.getElementsByName("downword");
      let eleup= document.getElementsByName("upword");
      let eleto= document.getElementsByName("toword");
      let eleback= document.getElementsByName("backword");

      for(let i=0;i<eleto.length;i++){
        let speed=document.getElementsByName("toword")[0].id.slice(0,2);
        // console.log(speed)
        let newelm =eleto[i].style.left.split("px");
         
         let newele= parseInt(newelm[0])+parseInt(speed);
         console.log(newele)
         let towords = newele + "px"
        
         document.getElementsByName("toword")[i].style.left=towords;
      
             if(newele >700){
                 document.getElementsByName("toword")[i].style.display="none" 
             }
       }

       for(let i=0;i<eleback.length;i++){
        let speed=document.getElementsByName("backword")[0].id.slice(0,2);
        let newelm =eleback[i].style.left.split("px");
         
         let newele= parseInt(newelm[0])-parseInt(speed);
         let backword = newele + "px"
        
         document.getElementsByName("backword")[i].style.left=backword;
      
             if(newele < -15){
                 document.getElementsByName("backword")[i].style.display="none" 
             }
       }
        
      for(let i=0;i<eledown.length;i++){
        let speed=document.getElementsByName("downword")[0].id.slice(0,2);
       let newelm =eledown[i].style.top.split("px");
        
        let newele= parseInt(newelm[0])+parseInt(speed);
        let downword = newele + "px"
       
        document.getElementsByName("downword")[i].style.top=downword;
     
            if(newele >235){
                document.getElementsByName("downword")[i].style.display="none" 
            }
      }
      
      for(let i=0;i<eleup.length;i++){
        let speed=document.getElementsByName("upword")[0].id.slice(0,2);
        let newelm =eleup[i].style.top.split("px");
         
         let newele= parseInt(newelm[0])-parseInt(speed);
         let upwords = newele + "px"
        
         document.getElementsByName("upword")[i].style.top=upwords;
      
             if(newele < -15){
                 document.getElementsByName("upword")[i].style.display="none" 
             }
       }
      
      
     }
     let startsimulators;
     const startsimulator = ()=>{ 
        setStart(true);
        if(start == true){
            startsimulators  = setInterval(simulator, 1000);
          
        } 
        
     }
     
    
    const stopimulator=()=>{
        clearInterval(startsimulators);
        
    }
    
    
        

   
   

    return (
        <>
            <div className="container" >
            <SideBar />
                <div className="innercontainer">
                    <div>
                
                    
                     
                            <p>Scenario  </p>
                            <select>
                            {datas &&(
                                   <>
                            {
                                datas.map((data)=>{
                                  
                                    return (
                                        <>
                                    
                                            <option>{data.scenarioname}</option>
                                            
                                        </>
                                    )
                                })
                            }
                           
                        </>
                    )
                    }  
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
                                <th>Add Vehicle</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                            {datas && (
                                <>
                               {
                                datas.map((data)=>{
                                    
                                    return (
                                        <>
                                           <Hometable data={data} key={data.id}/>
                                      </>
                                    )
                                })
                               } 
                                </>
                            )}
                        </table>
                        <div className="action-btn">
                           
                           <button  style={{backgroundColor:"green",height:"50px"}} onClick={startsimulator}> Start Simulation</button>
                           <button style={{backgroundColor: "red",height:"50px"}} onClick={stopimulator}> Stop Simulation</button>
                       </div>
                        
    
                        
                        <div className="graph"> 

                     { datas.map((data)=>{
                         x =parseInt(data.vehicle.positionx);
                         y =parseInt(data.vehicle.positiony)
                              const styleObj = {
                                position: "absolute",
                                left: `${x}px`,
                                top:  `${y}px`,
                                width: "25px",
                                height: "25px",
                                borderRadius: "50%",
                                backgroundColor: "red",
                                display:""
                            }
                       
                               
                              
                         

                          

                            return(
                                <>
                                <div style={styleObj} id={`${data.vehicle.speed}sv${data.id}`} name={data.vehicle.direction}>{data.id}</div>
                                </>
                            )
                            
                        })
                     }
                           
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