import Layout from '../src/components/Layout';
import { 
  Routes,
  Route 
} from "react-router-dom";

// Pages
import Calculadora from "./pages/Calculadora";
import Contador from "./pages/Contador";
import Todo from "./pages/Todo"
import Tributo from "./pages/Tributo";
import Home from "./pages/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculadora" element={<Calculadora/>} />
          <Route path="contador" element={<Contador/>} />
          <Route path="todo" element={<Todo/>} />
          <Route path="tributo" element={<Tributo/>} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
