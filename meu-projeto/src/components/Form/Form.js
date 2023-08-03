import Input from "./Input"
import Select from "./Select"
import Styles from "./Form.module.css"
import { useState } from "react"

function Form({btnText, project, action}) {

    const [name, setName] = useState()
    const [budget, setBudget] = useState()
    const [category, setCategory] = useState()


    let projects = {
        name: name,
        budget: budget,
        cost: 0,
        category: category,
        services: []
    }

    function handleSubmit(e) {
        e.preventDefault()
        action(projects)
    }

    // function postData(e) {
    //     e.preventDefault()
    //     action(projects)
    // }

    // function editData(e) {
    //     e.preventDefault()
    //     action(projects)
    // }

    // function postData(e) { // Post com localStorage - Funcionando muito bem!
    //     e.preventDefault()

    //     const getData = localStorage.length

    //     let id = localStorage.length + 1

    //     if (getData === 0) {
    //         let project = [{
    //             id: id,
    //             name: name,
    //             budget: budget, 
    //             category: category
    //         }]
    //         localStorage.setItem("projects", JSON.stringify(project))
    //         navigate("/projects")
    //     }
    //     else {
    //         let projects = JSON.parse(localStorage.getItem("projects"))
    //         let project = {
    //             id: projects.length + 1,
    //             name: name,
    //             budget: budget, 
    //             category: category
    //         }
    //         projects.push(project)
    //         localStorage.setItem("projects", JSON.stringify(projects))
    //         navigate("/projects")
    //     }
    // }

    return(
        <>
            <form className={Styles.formContainer} onSubmit={handleSubmit}>
                <Input label='Nome do projeto' defaultValue={project ? project.name : null } type='text' placeholder='Insira o nome de um projeto' event={setName} />
                <Input label='Orçamento do projeto' defaultValue={project ? project.budget : null } type='number' placeholder='Insira o orçamento total' event={setBudget} />
                <Select label='Selecione a categoria' defaultValue={project ? project.category : null } event={setCategory} />
                <Input type="submit" value={btnText} />
            </form>
        </>
    )
}

export default Form