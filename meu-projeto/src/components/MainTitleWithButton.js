import Button from "./Button"
import Styles from "./MainTitleWithButton.module.css"

function MainTitleWithButton({title}) {
    return (
    <header className={Styles.header}>
        <h1>{title}</h1>
        <Button to="/newproject" text="Criar Projeto" />
    </header>
    )
}

export default MainTitleWithButton