import Styles from './Card.module.css'
import ButtonWithIcon from './Projects/ButtonWithIcon'

function Card({id, name, budget, category, setLength, projects, setProjects}) {

    // function deleteProject() {
    //     localStorage.removeItem(id)
    //     setLength(localStorage.length)
    // }

    function deleteProject() {
        projects = projects.filter(projects => projects.id !== id)
        localStorage.setItem("projects", JSON.stringify(projects))
        setProjects(projects)
    }

    return (
        <div className={Styles.cardContainer} key={id}>
            <h2>{name}</h2>
            <p className={Styles.cardOrcament}>Orçamento: {budget}</p>
            <p>{category}</p>
            <div className={Styles.cardButtons}>
                <ButtonWithIcon text="Editar" icon='edit' />
                <ButtonWithIcon text="Delete" icon='delete' action={deleteProject} />
            </div>
        </div>
    )
}

export default Card