import { Link } from 'react-router-dom'
import Styles from './Button.module.css'

function Button({to, text}) {
    return (
        <div>
            <Link className={Styles.button} to={to}>{text}</Link>
        </div>
    )
}

export default Button