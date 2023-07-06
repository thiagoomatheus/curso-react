import './App.css';
import HelloWord from './components/HelloWord'
import Pessoa from "./components/Pessoa"

function App() {
  return (
    <div className="App">
    <HelloWord />
    <Pessoa nome="Thiago" idade="22" profissao="programador" foto="https://via.placeholder.com/150" />
  </div>
  )


  // const data = {
  //   name: "Thiago",
  //   work: "programador"
  // }


  // return (
  //   <div className="App">
  //     <h1>Testando o JSX</h1>
  //     <p>{data.name} quer ser {data.work}</p>
  //   </div>
  // );
}

export default App;
