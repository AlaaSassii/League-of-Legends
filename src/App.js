import React from 'react';
import './App.css';
import {Route , Routes,BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Components/Navbar';
import ToggleButton from './Components/ToggleButton'
import Home from './Pages/Home';
import Champions from './Pages/Champions';
import ChampionInfo from './Pages/ChampionInfo';
import SearchPlayer from './Pages/SearchPlayer'
function App() {

  return (
    <div className="App">
    <Router>
      <Navbar/>
      <ToggleButton/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/Champions' element={<Champions/>}/> 
      <Route path='/Champions/:id' element={<ChampionInfo/>}/> 
      <Route path="/SummonerSearch" element={<SearchPlayer/>} />
    </Routes>
    </Router>
    </div>
  );
} 

export default App;
