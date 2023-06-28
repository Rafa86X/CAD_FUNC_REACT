import Formulario from './componente/formulario';
import Banner from './componente/banner';
import { useState } from 'react';

const [colaboradores, setColaboradores] = useState([])

function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaborador={aoNovoColaboradorAdicionado}/>
     </div>
  );
}

export default App;
