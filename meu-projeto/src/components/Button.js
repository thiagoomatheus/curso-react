import { Link } from 'react-router-dom'
import Styles from './Button.module.css'

function Button() {
    return (
        <div>
            <button className={Styles.button}><Link to='/newproject'>Criar projeto</Link></button>
        </div>
    )
}

export default Button