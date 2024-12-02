
import './App.css'
import Calculatrice from './composants/calculatrice'
function App() {
  return (
    <div>
       <h1 className="text-3xl font-bold text-center ">
          Calculatrice
      </h1> 
      <div className=' min-h-screen text-white flex items-center justify-center'>
        <Calculatrice />
      </div>
     </div>
  )
}
export default App;
