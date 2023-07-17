import Input from "./Input"
import Select from "./Select"
import Button from "../Button"
import Styles from "./Form.module.css"

function Form() {
    return(
        <>
            <form className={Styles.formContainer}>
                <Input label='Nome do projeto' type='text' placeholder='Insira o nome de um projeto' />
                <Input label='Orçamento do projeto' type='number' placeholder='Insira o orçamento total' />
                <Select label='Selecione a categoria' />
                <Button action='teste' />
            </form>
        </>
    )
}

export default Form