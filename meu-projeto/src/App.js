import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import { useState } from 'react';



function App() {

  const [name, setName] = useState()

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={ <Home setName={setName} /> } />
        <Route exact path='/empresa' element={ <Empresa nome={name} /> } />
        <Route exact path='/contato' element={ <Contato nome={name} /> } />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
