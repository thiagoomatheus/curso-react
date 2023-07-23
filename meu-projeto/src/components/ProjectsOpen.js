import { useState } from 'react'
import Card from './Card'
import Styles from './ProjectsOpen.module.css'

    function ProjectsOpen() {

    const [length, setLength] = useState(localStorage.length)
    
    let projects = [];

    for (let i = 1; i <= localStorage.length; i++) {
        projects.push(JSON.parse(localStorage.getItem(i)))
    }
    console.log("renderizou");
    console.log(length);

    return (
        <div className={Styles.projectsContainer} >
            {
                projects.length > 0 ? (
                    projects.map(({id, name, budget, category}) => (
                        <Card  id={id} name={name} budget={budget} category={category} setLength={setLength} />
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