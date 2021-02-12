import './App.css';
import HomePageImage from './components/HomepageImage'
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './projects.js'; 
import About from './about.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
  
        <Route exact path="/" component={Projects} />
        <Route path="/about" component={About} />
  
        <div className="navigation">
          <div className="navigation-sub">
                                          
            <Link to="/" className="item">Projects</Link>
            <Link to="/about" className="item">About</Link>
  
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
