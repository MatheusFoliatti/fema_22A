import React from 'react';
import { Home } from './components/home/Home'
import { AvatarList } from './components/avatar/AvatarLista'
import { AvatarCadastro } from './components/avatar/AvatarCadastro'
import { Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <> 
    <h1> Olá avatar</h1>

    <ul>
      <li> <Link to ={'/'}> Home </Link> </li>
      <li> <Link to ={'/avatar'}> Avatar </Link> </li>
    </ul>
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avatar" element={<AvatarList />} />
        <Route path="/avatar/cadastro" element={<AvatarCadastro />} />
        <Route path="/avatar/cadastro/:id" element={<AvatarCadastro />} />
      </Routes>
    
    </>
  );
}

export default App;
