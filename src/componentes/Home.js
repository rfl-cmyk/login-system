export const Home = ({ logado, logout }) => {
    return(
        <div>
            <h1>Welcome { logado }, you are logged in! To have a look at the code behind this application, go to Github.</h1>
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}