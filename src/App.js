import './App.css';
import Mensaje from "./Mensaje.js"

const Description = () =>{
  return <p>
    Esta es la app del bootcamp fullstack
  </p>
}

function App() {
  return (
    <div className="App">
      <Mensaje color="red" message="Estamos trabajando"/>
      <Mensaje color="green" message="en el bootcamp"/>
      <Mensaje color="black" message="de React"/>
      <Description />
    </div>
  );
}

export default App;
