import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'
import Empresa from './pages/Empresa'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NewProject from './pages/NewProject';
import Projeto from "./pages/Projeto";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
          <Route exact path='/' element={ <Home />} />
          <Route path='/projects' element={ <Projetos />} />
          <Route path='/company' element={ <Empresa />} />
          <Route path='/contact' element={ <Contato />} />
          <Route path='/newproject' element={ <NewProject />} />
          <Route path='/projects/:id' element={ <Projeto />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
