/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import adicionar from './adicionar';

function App() {
  return (
    <>
    <div className="container">
          <form onSubmit={adicionar}>
            <h3>Nota Aluno</h3>
            <div className="mb-3">
              <label className="form-label">Nome do aluno</label>
              <input type={'text'} className="form-control" id='nomeAluno' />
            </div>
    
            <div className="mb-3">
              <label className="form-label">Nota 1</label>
              <input type={'text'} className="form-control" id='nota1' />
            </div>
    
            <div className="mb-3">
              <label className="form-label">Nota 2</label>
              <input type={'text'} className="form-control" id='nota2' />
            </div>
    
            <div className="mb-3">
              <label className="form-label">Nota 3</label>
              <input type={'text'} className="form-control" id='nota3' />
            </div>
    
            <button type='submit' className="btn btn-primary">Adicionar</button>
          </form>
    
          <table className="table mt-3">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Nota 1</th>
                <th>Nota 2</th>
                <th>Nota 3</th>
                <th>Média</th>
              </tr>
            </thead>
            <tbody id='resultado'>
            </tbody>
          </table>
          

        </div>
    

    
    <footer>
        <h1>Matheus Foliatti</h1>
        <img src={require('./femalogo.jpg')} />
      </footer></> 


  )}
export default App;