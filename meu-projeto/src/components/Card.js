import Styles from './Card.module.css'
import Button from './Projects/Button'
import ButtonEdit from './Projects/ButtonEdit'

function Card() {
    return (
        <div className={Styles.cardContainer}>
            <h2>Nome do projeto</h2>
            <p className={Styles.cardOrcament}>Orçamento:</p>
            <p>Tipo de Projeto</p>
            <div>
                <Button text="Editar" icon='edit' />
            </div>
        </div>
    )
}

export default Card