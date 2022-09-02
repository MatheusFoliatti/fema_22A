import { useState } from 'react'
import './App.css';

function App() {
  // Inicializar as variáveis que vamos utilizar
  const [id, setId] = useState('');
  const [tarefa, setTarefa] = useState('');
  const [descricao, setDescricao] = useState('');
  const [lista, setLista] = useState([]);

  // Função para adicionar um novo tarefa ou edita um já existente
  function adicionar() {
    // Verifica se já tem um id
    console.log(id)
    console.log(tarefa)
    console.log(descricao)
    console.log(lista)
    if (id) {
      // Se sim, procura qual item está sendo editado de acordo com o id informado
      const index = lista.findIndex(n => n.id === id);
      // Edita esse item da lista com os novos valores
      lista[index].tarefa = tarefa;
      lista[index].descricao = descricao
    } else {
      // Se não possui id, define uma tarefa com os dados informados
        let tarefa1 = {
        id:Math.random().toString(36).substring(2),
        tarefa: tarefa,
        descricao: descricao,
        feito: false
      }
      // Coloca essa tarefa dentro da lista
      lista.push(tarefa1 );
      

      // Limpa formulários
      setId("")
      setTarefa("")
      setDescricao("")
      setLista([...lista]);
    }
  }

  // Função que recebe o id e começa sua edição
  function editarTarefa(id) {
    // Identifica qual item da lista vai ser editado e retorna esse item
    const t = lista.find(n => n.id === id);

    // Coloca nos inputs o valor correspondente para edição
    setId(t.id);
    setTarefa(t.tarefa);
    setDescricao(t.descricao);
  }

  // Função que recebe o id e remove da lista
  function removeTarefa(id) {
    // Identifica qual item da lista vai ser excluido
    let index = lista.findIndex(n => n.id === id)

    // Retira esse item da lista
    lista.splice(index,1)
    setLista([...lista])
    
  }
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label className="form-label">Tarefa: </label>
          <input type="text" className="form-control" id='tarefa' value={tarefa} onChange={(event) => setTarefa(event.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Descrição da Tareda: </label>
          <input type="text" className="form-control" id='descricao' value={descricao} onChange={(event) => setDescricao(event.target.value)} />
        </div>
        <button type="button" onClick={adicionar}>Adicionar</button>
      </form>
        <table className='table mt-3'>
            <thead>
              <tr>
                <th >Tarefa</th>
                <th >Descrição</th>
                <th ></th>
              </tr>
            </thead>
            <tbody>
              {
                lista.map((n, index) => {           
                  return (
                    <tr key={index}>
                    <td>{n.tarefa}</td>
                    <td>{n.descricao}</td>

                    <td>
                      <button type="button" id='editarTarefa' className="material-icons md-light" onClick={() => editarTarefa(n.id)} >edit</button>
                      <button type="button" id='excluirTarefa' className="material-icons md-light" onClick={() => removeTarefa(n.id)} >delete</button>
                      <input id='check' type='checkbox'></input>
                    </td>
                  </tr>
                  )
                })
              }
            </tbody>
          </table>
      </div>
  )
}

export default App;
