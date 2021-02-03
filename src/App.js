import React, {useState} from 'react'

//componentes
import LogInForm from './components/logInForm';
import Trivia from './components/trivia';

//CSS
import 'bulma/css/bulma.css'

function App() {
  //definimos el estado del componente
  const [phase, setPhase]= useState(1);
  const [category, setCategory]= useState(" ");

  //verificamos en que estado se encuetra el componente para decidir que vista renderizar
  function HandlePhase(){
    if(phase===1){
      return(
        <LogInForm category={category} onChangePhase={setPhase} onChangeCategory={setCategory}/>
      )
    }else if(phase===2){
      return(
        <Trivia category={category} onChangePhase={setPhase}/>
      )
    }
  }

  return (
    <div className="App">
      <HandlePhase/>
    </div>
  );
}

export default App;
