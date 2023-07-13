import { Link } from "react-router-dom";
import Styles from './Navbar.module.css'

function Navbar() {
    return (
        <div>
            <ul className={Styles.navbarContainer}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projetos'>Projetos</Link></li>
                <li><Link to='/empresa'>Empresa</Link></li>
                <li><Link to='/contato'>Contato</Link></li>
            </ul>
        </div>
    )
}

export default Navbar