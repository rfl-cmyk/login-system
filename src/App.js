import './App.css';
import { useContext, useState } from 'react';

import { Formularios } from './componentes/Formularios';
import { Home } from './componentes/Home';
import { FSContext } from './componentes/FakeServer';

function App() {

  const { usuarios, setUsuarios } = useContext(FSContext);
  const [logado, setLogado] = useState('')

  const validacao = evento => {
    evento.preventDefault();

    let user = evento.target[0].value
    let pass = evento.target[1].value
    
    if(localStorage.getItem(pass) === user) {
      setLogado(evento.target[0].value)
      localStorage.setItem('valida', true)
    } else {
      alert('Usuário e/ou senha inválido(s).')
    }
  }

  const addUsuario = evento => {
    evento.preventDefault();
    var novoUsuario = {
        nome: evento.target[0].value,
        senha: evento.target[1].value
    }
    if(novoUsuario.nome && novoUsuario.senha) { // se existir nome e senha
      setLogado(novoUsuario.nome)
      setUsuarios([...usuarios, novoUsuario])
      evento.target[0].value = ''
      evento.target[1].value = ''
      localStorage.setItem('valida', true)
      alert('Usuário cadastrado com sucesso!')
    }
  }

  const logout = () => {
    if(window.confirm("Tem certeza que deseja sair?")) {
      localStorage.removeItem('valida')
      setLogado(false)
    }
  }

  return (
    <div className="App">
      {localStorage.getItem('valida') ?
        <Home logado={logado} logout={logout} />
      :
        <Formularios validacao={validacao} addUsuario={addUsuario} />
      }
    </div>
  );
}

export default App;
