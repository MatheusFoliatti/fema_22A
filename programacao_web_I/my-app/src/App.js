/* eslint-disable no-undef */
import { logDOM } from '@testing-library/react';
import './App.css';

function App() {

 
  const [contador, setContador] = useState(0)

  function aumentar() {
    console.log('aumentar');
    setContador(contador + 1);
  }

  function diminuir() {
    console.log('diminuir');
    setContador(contador - 1);
  }

  return (
    <div className="App">
      <p>Contador</p> 

      <p>{contador}</p>

      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Diminuir</button>
    </div>
  );
}

export default App;
