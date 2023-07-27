import Brand from '../components/layout/Brand'
import Button from '../components/layout/Button'
import savings from './../images/savings.svg'
import Styles from '../pages/Home.module.css'

function Home() {
    return (
        <main className={Styles.main}>
            <h1 className={Styles.mainTitle}>Bem-vindo ao <Brand /></h1>
            <p className={Styles.mainContent}>Começe a gerenciar seus projetos agora mesmo!</p>
            <Button to="/newproject" text="Criar projeto" />
            <img className={Styles.mainImage} src={savings} alt='Economize dinheiro com o Costs' />
        </main>
    )
}

export default Home