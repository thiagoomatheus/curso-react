import { Link } from 'react-router-dom'
import Styles from './Button.module.css'

function Button({action, type}) {
    return (
        <div>
            {
                !action ? (
                    <button className={Styles.button}><Link to='/newproject'>Criar projeto</Link></button>
                ) : (
                    <button type={type} className={Styles.button} onClick={action}><Link to='/projects'>Criar projeto</Link></button>
                )
            }
        </div>
    )
}

export default Button