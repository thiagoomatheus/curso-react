import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'
import Empresa from './pages/Empresa'
import Header from './components/Header';


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={ <Home />} />
        <Route exact path='/projetos' element={ <Projetos />} />
        <Route exact path='/empresa' element={ <Empresa />} />
        <Route exact path='/contato' element={ <Contato />} />
      </Routes>
    </Router>
  )
}

export default App;
