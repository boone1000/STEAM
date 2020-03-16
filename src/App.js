import React from 'react';
import logo from './logo.svg';
import './App.css';
import './media.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Educators from './pages/educators';
import Stories from './pages/stories';
import Students from './pages/students';
import ReactDOM from 'react-dom';
import { Button } from 'antd';



function App() {
  return <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Link to="STEAM/">Home</Link>
        <Link to="STEAM/educators">Educators</Link>
        {/* <Link to="/stories">Stories</Link> */}
        <Link to="STEAM/students">Students</Link>
      </header>

      <Route path="STEAM/" exact component={Home} />
      <Route path="STEAM/educators" component={Educators} />
      {/* <Route path="/stories" component={Stories} /> */}
      <Route path="STEAM/students" component={Students} />

      <footer>
        <div className="app-Footer">
          <p>Website Created by Ashley Boone March 2020</p>
        </div>
      </footer>

    </div>
    
  </BrowserRouter>
}

export default App;
