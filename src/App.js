import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Blog from './pages/Blog';
import Home from './pages/Home';

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog/:id' element={<Blog/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
