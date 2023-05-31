
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./component/HomePage";
import AddVehicle from "./component/AddVehicle"
import './App.css';
import AddScenario from "./component/AddScenario";
import AllScenario from "./component/AllScenario";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/Addvehicle" element={<AddVehicle />}/>
      <Route path="/AddScenario" element={<AddScenario />}/>
      <Route path="/AllScenario" element={<AllScenario />}/>
      
    </Routes>
  </BrowserRouter>
  )
}

export default App;
