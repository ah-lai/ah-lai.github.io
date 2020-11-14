import Sidebar from './components/sidebar/'
import About from './components/about'
import Projects from './components/projects'
import Timeline from './components/timeline'
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <About></About>
      <Projects></Projects>
      <Timeline></Timeline>
    </div>
  );
}

export default App;
