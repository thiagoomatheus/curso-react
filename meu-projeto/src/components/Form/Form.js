import { useNavigate } from "react-router-dom"
import Input from "./Input"
import Select from "./Select"
import Styles from "./Form.module.css"
import { useState } from "react"

function Form() {

    const [name, setName] = useState()
    const [budget, setBudget] = useState()
    const [category, setCategory] = useState()

    const navigate = useNavigate()

    function postData(e) {
        e.preventDefault()

        const getData = localStorage.length

        let id = localStorage.length + 1

        if (getData === 0) {
            let project = [{
                id: id,
                name: name,
                budget: budget, 
                category: category
            }]
            localStorage.setItem("projects", JSON.stringify(project))
            navigate("/projects")
        }
        else {
            let projects = JSON.parse(localStorage.getItem("projects"))
            let project = {
                id: projects.length + 1,
                name: name,
                budget: budget, 
                category: category
            }
            projects.push(project)
            localStorage.setItem("projects", JSON.stringify(projects))
            navigate("/projects")
        }
    }

    return(
        <>
            <form className={Styles.formContainer} onSubmit={postData}>
                <Input label='Nome do projeto' type='text' placeholder='Insira o nome de um projeto' event={setName} />
                <Input label='Orçamento do projeto' type='number' placeholder='Insira o orçamento total' event={setBudget} />
                <Select label='Selecione a categoria' event={setCategory} />
                <Input type="submit" value="Criar projeto"  />
            </form>
        </>
    )
}

export default Form