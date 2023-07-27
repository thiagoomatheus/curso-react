import Brand from '.././layout/Brand'
import Styles from './Footer.module.css'
import Social from "./Social"
import { MdCopyright } from "react-icons/md";

function Footer() {
    return (
        <div className={Styles.footerContainer}>
            <Social />
            <p className={Styles.copy}><Brand /> <MdCopyright /> 2021 </p>
        </div>
    )
}

export default Footer