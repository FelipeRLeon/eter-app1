import Grower from "./components/Grower";
import GrowType from "./components/GrowType";
import PlantStrain from "./components/PlantStrain";
import Nutrients from "./components/Nutrients";
import Buds from "./components/Buds";
import { useState } from "react";

function App() {
  const [step, setStep] = useState("nutrients")

  return (
    <div className='container'>
      {step === 'grower' && <Grower/>} 
      {step === 'growtype' && <GrowType/>} 
      {step === 'plantstrain' && <PlantStrain/>} 
      {step === 'nutrients' && <Nutrients/>} 
      {step === 'buds' && <Buds/>} 
    </div>    
  )
}

export default App
