import { Link } from 'react-router-dom'
import Styles from './Button.module.css'

function Button({action}) {
    return (
        <div>
            {
                !action ? (
                    <button className={Styles.button}><Link to='/newproject'>Criar projeto</Link></button>
                ) : (
                    <button className={Styles.button}><Link to='/projects'>Criar projeto</Link></button>
                )
            }
        </div>
    )
}

export default Button