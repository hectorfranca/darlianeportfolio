import 'animate.css';
import Header from './components/Header.jsx';
import Showcase from './components/Showcase.jsx';
import Biography from './components/Biography.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import StartButton from './components/StartButton.jsx';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Showcase/>
      <Biography/>
      <Projects/>
      <Contact/>
      <Footer/>
      <StartButton/>
    </div>
  );
}

export default App;
