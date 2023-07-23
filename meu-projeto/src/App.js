import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'
import Empresa from './pages/Empresa'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewProject from './pages/NewProject';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={ <Home />} />
        <Route exact path='/projects' element={ <Projetos />} />
        <Route exact path='/company' element={ <Empresa />} />
        <Route exact path='/contact' element={ <Contato />} />
        <Route exact path='/newproject' element={ <NewProject />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
