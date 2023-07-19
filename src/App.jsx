import Grower from "./components/Grower"
import GrowType from "./components/GrowType"
import PlantStrain from "./components/PlantStrain"
import Nutrients from "./components/Nutrients"
import Buds from "./components/Buds"

function App() {

  return (
    <div className='container'>
      <Grower/>
      <GrowType/>
      <PlantStrain/>
      <Nutrients/>
      <Buds/>
    </div>    
  )
}

export default App
