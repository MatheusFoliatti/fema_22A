import { useState } from 'react';
import './App.css';

function App() {

  const [nome, setNome] = useState();
  const [note1, setNote1] = useState();
  const [note2, setNote2] = useState();
  const [lista, setLista] = useState([]);


  function adicionar() {
    let pessoa = [nome, parseInt(note1), parseInt(note2) ]
    console.log('adicionar ')
    lista.push(pessoa);
    setLista([...lista]);
  }

  return (
    <div className="container">
      <h1>Aluno - Notas</h1>
      <form>
        <div className="name">
          <label className="form-label">Nome</label>
          <input type="text" className="form-control" onChange={(event) => setNome(event.target.value)} />
        </div>
        <div className="note1">
          <label className="form-label">Nota 1</label>
          <input type="number" className="form-control" onChange={(event) => setNote1(event.target.value)} />
        </div>
        <div className="note2">
          <label className="form-label">Nota 2</label>
          <input type="number" className="form-control" onChange={(event) => setNote2(event.target.value)} />
        </div>

        <button type="button" onClick={adicionar}>Adicionar Media</button>

      </form>

      <ul>
        {
          lista.map((n, index) => {
            return (
            <li>{n[0]} com media de {(n[1]+n[2])/2}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
