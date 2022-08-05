import './App.css';
import Home from "./components/home";
import BlastoMap from './components/blasto_map';
import HistoMap from './components/histo_map';
import CocciMap from './components/cocci_map';

function App() {
  return (
    <div className="bg-blue-300">
      <Home />
      <BlastoMap />
      <HistoMap />
      <CocciMap />
    </div>
  );
}

export default App;
