import Formulario from './componente/formulario';
import Banner from './componente/banner';
import { useState } from 'react';



function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador)=>{
    console.log(colaborador)
  
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador =>aoNovoColaboradorAdicionado(colaborador)}/>
     </div>
  );
}

export default App;
