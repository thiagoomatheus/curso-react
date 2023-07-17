import { Link } from "react-router-dom";
import Styles from './Navbar.module.css'

function Navbar() {
    return (
        <div>
            <ul className={Styles.navbarContainer}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projetos</Link></li>
                <li><Link to='/company'>Empresa</Link></li>
                <li><Link to='/contact'>Contato</Link></li>
            </ul>
        </div>
    )
}

export default Navbar