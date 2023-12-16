import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import GrowthPartner from './components/GrowthPartner';
import StrategySection from './components/StrategySection';
import ClientSection from './components/ClientSection';

function App() {
  return (
    <div className="App" >
      <NavigationBar />
      <GrowthPartner />
      <StrategySection />
      <ClientSection />
    </div>
  );
}

export default App;
