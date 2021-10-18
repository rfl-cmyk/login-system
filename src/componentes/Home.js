export const Home = ({ logado, logout }) => {
    return(
        <div>
            <h2>Welcome <strong>{ logado }</strong>, you are logged!</h2>
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}