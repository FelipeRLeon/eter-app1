import Grower from "./components/Grower";
import GrowType from "./components/GrowType";
import PlantStrain from "./components/PlantStrain";
import Nutrients from "./components/Nutrients";
import Buds from "./components/Buds";
import { useState } from "react";
import GrowerContext from "./context/GrowerContext";
import Sumary from "./components/sumary";

function App() {
  const [step, setStep] = useState("grower");
    const persona = {
      grower_name: "",
      grower_team: "",
      grower_city: "",
      license: "",
      environment: "",
      grow_type: "",
      plant_strain: "",
      plant_seedBank: "",
      plant_origin: "",
      plant_dominance: "",
      nutrients_type: "",
      nutrients_brand: "",
      nutrients_fungi: "",
      nutrients_insect: "",
      buds_wash: "",
      buds_flavor: "",
      buds_smell: "",
      buds_floration: "",
      buds_production: "",
    }

    localStorage.setItem("counter", 0);
  

  return (
    <GrowerContext.Provider value={{ step, setStep,}}>
      <div className='container'>
      {step === 'grower' && <Grower/>} 
      {step === 'growtype' && <GrowType/>} 
      {step === 'plantstrain' && <PlantStrain/>} 
      {step === 'nutrients' && <Nutrients/>} 
      {step === 'buds' && <Buds/>} 
      {step === 'sumary' && <Sumary/>} 
    </div>  
    </GrowerContext.Provider>
  );
}

export default App;
