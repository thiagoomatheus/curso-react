import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { Link } from "react-router-dom";
import Styles from './Social.module.css'

function Social() {
    return(
        <div className={Styles.socialContainer}>
            <Link to='//www.facebook.com'>
                <FaFacebook />
            </Link>
            <Link to='//www.instagram.com'>
                <FaInstagram />
            </Link>
            <Link to='//www.linkedin.com'>
                <FaLinkedin />
            </Link>
        </div>
    )
}

export default Social