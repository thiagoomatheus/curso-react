import Input from "./Input"
import Select from "./Select"
import Button from "../Button"
import Styles from "./Form.module.css"
import { useState } from "react"

function Form() {

    const [name, setName] = useState()
    const [budget, setBudget] = useState()
    const [category, setCategory] = useState()

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
        }
        // localStorage.setItem(`${id}`, JSON.stringify({id: id, name: name, budget: budget, category: category}));
    }

    return(
        <>
            <form className={Styles.formContainer}>
                <Input label='Nome do projeto' type='text' placeholder='Insira o nome de um projeto' event={setName} />
                <Input label='Orçamento do projeto' type='number' placeholder='Insira o orçamento total' event={setBudget} />
                <Select label='Selecione a categoria' event={setCategory} />
                <Button type="submit" action={postData} />
            </form>
        </>
    )
}

export default Form