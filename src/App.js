import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Projects } from './components/Projects/Projects';
import { Whoami } from './components/Whoami/Whoami';
import { Work } from './components/Work/Work';
import './css/style.css'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Projects />
      <Work />
      <Whoami />
      <Footer />
    </div>
  );
}

export default App;
