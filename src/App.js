import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Projects } from './components/Projects/Projects';
import { Work } from './components/Work/Work';
import './css/style.css'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Projects />
      <Work />
    </div>
  );
}

export default App;
