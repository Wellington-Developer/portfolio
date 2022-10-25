import { About } from './components/Aboutme/About';
import { Home } from './components/Home/Home';
import { Projects } from './components/Projects/Projects';
import { Work } from './components/Work/Work';
import './css/style.css'

function App() {
  return (
    <div>
      <Home />
      <Projects />
      <Work />
      <About />
    </div>
  );
}

export default App;
