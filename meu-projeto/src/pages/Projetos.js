import Header from "../components/MainTitleWithButton"
import ProjectsOpen from '../components/Projects/ProjectsOpen'
import Styles from "./Projetos.module.css"
import Message from "../components/Message"
import { useLocation, useNavigate} from "react-router-dom"
import { useEffect } from "react"

function Projetos() {

    const location = useLocation()
    const navigate = useNavigate()
    let message = "";
    let type = "";
    if (location.state) {
        message = location.state.message
        type = location.state.type
    }

    useEffect(() => {
        const timer = setTimeout(()=> {
            navigate(location.state, {})
            console.log(location.state);
        }, 3000)
        
        return () => clearTimeout(timer)
    })

    return (
        <main className={Styles.main}>
            <Header title="Meus Projetos" />
            {message && <Message msg={message} type={type} />}
            <ProjectsOpen />
        </main>
    )
}

export default Projetos