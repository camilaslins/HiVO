import UserForm from "./components/UserForm.jsx"
import StudentForm from "./components/StudentForm.jsx"
import Interests from "./components/Interests.jsx"

import {useForm} from "./hooks/useForm.jsx";

import './App.css'

function App() {
  const formComponents = [ <Interests />, <UserForm />, <StudentForm />, ];
  
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents);

  return (
    <div className="App">
      <div className='header'>
        <h2>HiVO</h2>
      </div>   
      <div className="form-container">
        <p>etapas</p>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className='actions'>
            {!isFirstStep && (<button type='button' onClick={() => changeStep(currentStep-1)}>Voltar</button>)}
            {!isLastStep ? (<button type='submit' className="seguinte">Seguinte</button> ) : (<button type='button'>Finalizar</button>)}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
