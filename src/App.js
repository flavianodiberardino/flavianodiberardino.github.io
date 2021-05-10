import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Project from './components/Projects/Project';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <div>
      <Header />
      <Home />
      <Project />
      <About />
      <Contact />
    </div>
  );
}

export default App;
