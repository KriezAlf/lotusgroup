import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import Results from './pages/Results';
import Home from './pages/Home';
import './index.css';
import { Heading } from '@chakra-ui/react';
import SingleView from './pages/SingleView';
import { SearchContext } from './context/search';

function App() {

  const [animeData, setAnimeData] = useState([])
  const [singleData, setSingleData] = useState({})
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);

  const setData = (data) => {
    setAnimeData(data);
  };

  const setSingle = (data) => {
    setSingleData(data);
  };

  const getTopAnime = async () => {
    const data = await fetch(
      `https://api.jikan.moe/v4/top/anime/1/bypopularity`
    ).then((response) => response.json());

    setTopAnime(data.top);
  };

  const search = async (searchTerm) => {
    return fetch(`https://api.jikan.moe/v4/anime?q=${searchTerm}&sfw=true`)
      .then((response) => response.json());
  };
  




  return (
    <div>
      <SearchContext.Provider value={{search, animeData, setData, singleData, setSingle }}>
        <Router>
          <Heading>
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="results">Results</NavLink>
            </nav>
          </Heading>
          <main>
            <Routes>
              <Route index element={<Home />} />
              <Route path="results" element={<Results />} />
              <Route path="single" element={<SingleView />} />
            </Routes>
          </main>
        </Router>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
