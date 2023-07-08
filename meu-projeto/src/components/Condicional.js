import { useState } from "react";
import Welcome from "./Welcome"

function Condicional() {

    function cadastraUsuario(e) {
        e.preventDefault()
        let dadosDoUsuario = {
            name: name,
            password: password
        }

        console.log(dadosDoUsuario);

        localStorage.setItem("dadosDoUsuario", JSON.stringify(dadosDoUsuario))
    }
    
    const [name, setName] = useState()
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()

    function enviarMensagem(e) {
        e.preventDefault()
        setUserName(name)
    }

    return (
        <>
            <h1>Insira seus dados</h1>
            <form onClick={enviarMensagem} onSubmit={cadastraUsuario}>
                <div>
                    <label>Nome:
                        <input onChange={(e) => setName(e.target.value)} type="text" />
                    </label>
                </div>
                <div>
                    <label>Password:
                        <input onChange={(e) => setPassword(e.target.value)} type="password" />
                    </label>
                </div>
                <div>
                    <input type="submit"></input>
                </div>
            </form>
            {userName && (
                <div>
                    <Welcome name={userName} />
                </div>
            )}
        </>
    )
}

export default Condicional