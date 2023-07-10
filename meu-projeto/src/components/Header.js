import Logo from './Logo'
import Navbar from './Navbar'
import Styles from './../components/Header.module.css'

function Header() {
    return (
        <div className={Styles.headerContainer}>
            <Logo />
            <Navbar />
        </div>
    )
}

export default Header