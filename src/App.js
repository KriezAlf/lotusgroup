import React from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import Results from './pages/Results';
import Home from './pages/Home';
import './index.css';
import { Heading } from '@chakra-ui/react';


function App() {
  return (
    <div>
      <a>hellow</a>
      <Router>
        <Heading>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="results">Results</NavLink>
          </nav>
        </Heading>
        <main>
          <Routes>
            <Route index element={<Home />}/>
            <Route path="results" element={<Results />}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
