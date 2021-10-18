import { useEffect, useState, createContext } from 'react'

export const FSContext = createContext()

export const FakeServer = (props) => {

    const [usuarios, setUsuarios] = useState([
        {
            nome: "Rafael",
            senha: 123456
        },
        {
            nome: "Samira",
            senha: 654321
        }
    ])

    useEffect(() => { // atribui os usuários ao localStorage
        usuarios.map(usuario => {
            localStorage.setItem(usuario.senha, usuario.nome)
            return null
        })
    }, [usuarios])

    return(
        <FSContext.Provider value={{ usuarios, setUsuarios }}>
            {props.children}
        </FSContext.Provider>
    )
}