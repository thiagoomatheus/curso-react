import { Link } from 'react-router-dom'
import Styles from './Button.module.css'

function Button({to, text, handleClick}) {
    return (
        <div className={Styles.button}>
            <Link  to={to} onClick={handleClick}>{text}</Link>
        </div>
    )
}

export default Button