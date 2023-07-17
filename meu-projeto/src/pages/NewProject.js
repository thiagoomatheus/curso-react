import Form from "../components/Form/Form"
import Styles from './NewProject.module.css'

function NewProject() {
    return (
        <main className={Styles.main}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            < Form />
        </main>
    )
}

export default NewProject