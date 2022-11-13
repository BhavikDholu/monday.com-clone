
import './App.css';
import Navbar from './components/navbar';
import TopSec from "./components/topSec"
import WorkFlow from './components/workflow';
import BottomSec from "./components/bottomSec";

function App() {
  return (
    <div className="App">
     <Navbar />
     <TopSec />
     <WorkFlow />
     <BottomSec />
    </div>
  );
}

export default App;
