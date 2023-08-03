import { useParams, useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import MainTitleWithButton from "../components/layout/MainTitleWithButton"
import Loading from "../components/layout/Loading"
import Form from "../components/Form/Form"
import Message from "../components/layout/Message"
import Styles from "./Projeto.module.css"

function Projeto() {

    // Hooks
    const location = useLocation()
    const navigate = useNavigate()
    const { id } = useParams()
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [showProject, setShowProject] = useState(true)

    // Message
    let message = "";
    let type = "";

    if (location.state) {
        message = location.state.message
        type = location.state.type
    }

    useEffect(() => {
        if (location.state) {
            const timer = setTimeout(()=> {
                navigate(location.state, {})
            }, 3000)
            
            return () => clearTimeout(timer)
        }
    })

    // Functions
    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setProjects(data)
            setLoading(false)
        })
        .catch((err) => console.log(err))
    }, [id])

    function changeBtnText() {
        setShowProject(!showProject)
    }

    // Action Form
    function editData(project) {
        if (project.cost > project.budget) {
            navigate(`/projects`, {state: {message: "O orçamento não pode ser menor que o custo do projeto", type: "error"}})
        }

        fetch(`http://localhost:5000/projects/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(project)
        }).then(
            (data) => {
                console.log(data);
                navigate(`/projects`, {state: {message: "Projeto alterado com sucesso", type: "success"}})
                changeBtnText()
            } 
        ).catch(
            (err) => console.log(err)
        )
    }

    return (
        <main className={Styles.main}>
            {loading && <Loading />}

            <MainTitleWithButton title={`Projeto: ${projects.name}`} btnText={showProject ? "Editar projeto" : "Fechar"} action={changeBtnText} />
            {message && <Message msg={message} type={type} />}

            {showProject ? (
                <div className={Styles.container}>
                    <p>
                        <span>Categoria:</span> {projects.category}
                    </p>
                    <p>
                        <span>Total Orçamento:</span> R$ {projects.budget}
                    </p>
                    <p>
                        <span>Total Utilizado:</span> R$ {projects.cost}
                    </p>
                </div>
            ) : (
                <div>
                    <Form btnText="Salvar alterações" action={editData} project={projects} />
                </div>
            )}
        </main>
    )
}

export default Projeto