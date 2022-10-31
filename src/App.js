import "./App.css";
import { CarritoContext } from "./Provider/CartContext";
import Routing from "./Routing/Routing";

function App() {
  return (
    <div className="App">
      <CarritoContext>
        <Routing />
      </CarritoContext>
    </div>
  );
}

export default App;
