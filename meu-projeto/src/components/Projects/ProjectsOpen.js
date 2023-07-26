import { useEffect, useState } from 'react'
import Card from './Card'
import Styles from './ProjectsOpen.module.css'

    function ProjectsOpen() {
        
        const [projects, setProjects] = useState([])

        useEffect(() => {
            fetch("http://localhost:5000/projects")
            .then((resp) => resp.json())
            .then((data) => setProjects(data))
            .catch((err) => console.log(err))
        }, [])

    // const [projects, setProjects] = useState(JSON.parse(localStorage.getItem("projects"))) // Com localStorage - funcionando

    return (
        <div className={Styles.projectsContainer} >
            {
                projects !== null && projects.length !== 0 ? (
                    projects.map(({id, name, budget, category}) => (
                        <Card key={id} id={id} name={name} budget={budget} category={category} projects={projects} setProjects={setProjects}/>
                )
                )
            ) : (
                <p>Que pena! Você ainda não tem um projeto. Crie um clicando no botão acima e visualize aqui!</p>
            )
            }
        </div>
    )
}

export default ProjectsOpen