import './App.css';
import Allroutes from './componet/Allroutes';
import { Navbar } from './componet/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        {/* <Home /> */}
        <Allroutes />
    </div>
  );
}

export default App;
