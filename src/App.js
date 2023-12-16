import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import GrowthPartner from './components/GrowthPartner';
import StrategySection from './components/StrategySection';
import ClientSection from './components/ClientSection';
import HiringSection from './components/HiringSection';

function App() {
  return (
    <div className="App" >
      <NavigationBar />
      <GrowthPartner />
      <StrategySection />
      <ClientSection />
      <HiringSection />
    </div>
  );
}

export default App;
