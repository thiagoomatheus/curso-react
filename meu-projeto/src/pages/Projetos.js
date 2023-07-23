import Header from "../components/MainTitleWithButton"
import ProjectsOpen from '../components/ProjectsOpen'
import Styles from "./Projetos.module.css"

function Projetos() {
    return (
        <main className={Styles.main}>
            <Header title="Meus Projetos" />
            <ProjectsOpen />
        </main>
    )
}

export default Projetos