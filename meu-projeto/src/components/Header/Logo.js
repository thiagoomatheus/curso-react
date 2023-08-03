import logo from '../../images/costs_logo.png'
import { Link } from 'react-router-dom'

function Logo() {
    return (
    <div>
        <Link to="/"><img src={logo} alt='Costs'/></Link>
    </div>)
}

export default Logo