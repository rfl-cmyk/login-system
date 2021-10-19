import { useState } from 'react';
import './formularios.css';

export const Formularios = (props) => {

    const [option, setOption] = useState('entrar');

    const aba = (opt) => {
        setOption(opt)
    }

    var contador = 0;

    const show = () => {
        if(contador % 2 === 0) {
            document.getElementById('pass').type = "text"
            contador ++;
        } else {
            document.getElementById('pass').type = "password"
            contador ++;
        }
    }

    return(
        <div className="login">
            <ul>
                <li onClick={() => aba('entrar')}>Login</li>
                <li onClick={() => aba('cadastrar')}>Register</li>
            </ul>
            {option === 'entrar' ?
                <form method="post" onSubmit={props.validacao}>
                    <h1>.: Login :.</h1>
                    <div>
                        <input type="text" required name="nome" placeholder="Username:" />
                    </div>
                    <div>
                        <input id="pass" type="password" required name="senha" placeholder="Password:" />
                        <p onClick={() => show()} >&#128065;</p>
                    </div>
                    <button type="submit">Enter</button>
                </form>
            :
                <form method="post" onSubmit={props.addUsuario}>
                    <h1>.: Register :.</h1>
                    <div>
                        <input type="text" required name="nome" placeholder="Username:" />
                    </div>
                    <div>
                        <input id="pass" type="password" required name="senha" placeholder="Password:" />
                        <p onClick={() => show()} >&#128065;</p>
                    </div>
                    <button type="submit">Register</button>
                </form>
            }
        </div>
    )
}
