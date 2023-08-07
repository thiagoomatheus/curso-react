import { useParams, useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import MainTitleWithButton from "../components/layout/MainTitleWithButton"
import Loading from "../components/layout/Loading"
import ProjectForm from "../components/Form/ProjectForm"
import ServiceForm from "../components/Form/ServiceForm"
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
    const [showService, setShowService] = useState(true)

    // Message
    let message = "";
    let type = "";

    if (location.state) {
        message = location.state.message
        type = location.state.type
    }

    useEffect(() => {
        if (location.state) {
            const timer = setTimeout(() => {
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
                setShowProject(true)
                setShowService(true)
            })
            .catch((err) => console.log(err))
    }, [id])

    function changeProjectBtnText() {
        setShowProject(!showProject)
    }

    function changeServiceBtnText() {
        setShowService(!showService)
    }

    // Action Form
    function editData(project) {
        if (project.cost > project.budget) {
            navigate(`/projects`, { state: { message: "O orçamento não pode ser menor que o custo do projeto", type: "error" } })
            return
        }

        fetch(`http://localhost:5000/projects/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json()
        ).then(
            (data) => {
                setProjects(data);
                navigate(`/projects/${id}`, { state: { message: "Projeto alterado com sucesso", type: "success" } })
                changeProjectBtnText()
            }
        ).catch(
            (err) => console.log(err)
        )
    }

    function createService(project) {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json()
        ).then(
            (data) => {
                setProjects(data);
                navigate(`/projects/${id}`, { state: { message: "Serviço adicionado com sucesso", type: "success" } })
                changeServiceBtnText()
            }
        ).catch(
            (err) => console.log(err)
        )
    }
    console.log(projects);

    console.log("Renderizou");

    return (
        <main className={Styles.main}>
            {loading ? <Loading /> : <MainTitleWithButton title={`Projeto: ${projects.name}`} btnText={showProject ? "Editar projeto" : "Fechar"} action={changeProjectBtnText} />}

            {showProject ? (
                <>
                    {showProject && (
                        <>
                            {message && <Message msg={message} type={type} />}
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
                            <>
                                <MainTitleWithButton title="Serviços" btnText={showService ? "Adicionar serviço" : "Fechar"} action={changeServiceBtnText} />
                                {showService ? (
                                    <>
                                        {projects.services && (
                                            <>
                                                {projects.services.length ? (
                                                    projects.services.map(({ service, cost, description }) => (
                                                        <div className={Styles.container} key={projects.services.length + 1}>
                                                            <p>
                                                                <span>Nome do serviço:</span> {service}
                                                            </p>
                                                            <p>
                                                                <span>Custo do serviço:</span> {cost}
                                                            </p>
                                                            <p>
                                                                <span>Descrição do serviço:</span> {description}
                                                            </p>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p>Adicione um serviço</p>
                                                )}
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        <ServiceForm project={projects} btnText="Adicionar serviço" action={createService} />
                                    </>
                                )}
                            </>
                        </>
                    )}
                </>
            ) : (
                <>
                    <ProjectForm btnText="Salvar alterações" action={editData} project={projects} />
                </>
            )}

        </main>
    )
}

export default Projeto