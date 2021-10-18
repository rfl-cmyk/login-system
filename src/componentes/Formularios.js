import { useState } from 'react/cjs/react.development';
import './formularios.css';

export const Formularios = (props) => {

    const [option, setOption] = useState('entrar');

    const aba = (opt) => {
        setOption(opt)
    }

    return(
        <div className="login">
            <ul>
                <li onClick={() => aba('entrar')}>Login</li>
                <li onClick={() => aba('cadastrar')}>Cadastrar-se</li>
            </ul>
            {option === 'entrar' ?
                <form method="post" onSubmit={props.validacao}>
                    <h1>.: Login :.</h1>
                    <div>
                        <input type="text" required name="nome" placeholder="Nome:" />
                    </div>
                    <div>
                        <input type="password" required name="senha" placeholder="Senha:" />
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            :
                <form method="post" onSubmit={props.addUsuario}>
                    <h1>.: Cadastrar-se :.</h1>
                    <div>
                        <input type="text" required name="nome" placeholder="Nome:" />
                    </div>
                    <div>
                        <input type="password" required name="senha" placeholder="Senha:" />
                    </div>
                    <button type="submit">Cadastrar-se</button>
                </form>
            }
        </div>
    )
}