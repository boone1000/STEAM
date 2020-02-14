import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Educators from './pages/educators'
import Stories from './pages/stories'
import Students from './pages/students'


function App() {
  return <BrowserRouter>
    <div className="App">

      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/educators">Educators</Link>
        <Link to="/stories">Stories</Link>
        <Link to="/students">Students</Link>
      </header>

      <Route path="/" exact component={Home} />
      <Route path="/educators" component={Educators} />
      <Route path="/stories" component={Stories} />
      <Route path="/students" component={Students} />


    </div>
  </BrowserRouter>
}

export default App;
