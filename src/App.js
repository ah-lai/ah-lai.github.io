import Sidebar from './components/sidebar/'
import About from './components/about'
import Projects from './components/projects'
import Timeline from './components/timeline'
import Intro from './components/intro'
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div class="rightpanel">
        <Intro></Intro>
        <About></About>
        <Projects></Projects>
        <Timeline></Timeline>
      </div>
    </div>
  );
}

export default App;
