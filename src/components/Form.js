import { useState } from "react";

function Form() {
    function cadastraUsuario(e) {
        e.preventDefault()
        let dadosDoUsuario = {
            name: name,
            password: password
        }

        console.log(dadosDoUsuario);

    }
    
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <>
            <h1>Insira seus dados</h1>
            <form onSubmit={cadastraUsuario}>
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
        </>
    )
}

export default Form