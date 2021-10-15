import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './Components/Home'
import Header from './Components/Header'
import FavoriteList from './Components/FavoriteList'
import { useEffect, useState } from 'react'
import Context from './Context.js'
import PokemonList from './Components/PokemonList';


async function getProducts() {
  let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  let data = await res.json();
  return data;
}

function App() {

  let [pokeData, setPokeData] = useState([]);
  
  
  console.log(pokeData);
  useEffect(() => {
    let mounted = true;
    getProducts()
      .then(items => {
        if(mounted) {
          setPokeData(items.results)
        }
      })
    return () => mounted = false;
  }, [])

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="Nav">
            <Route path='/:page' component={Header} />  
            <Route exact path='/' component={Header} />
          </nav>
        </header>

        <Route path="/pokemon">
          <PokemonList pokeData = {pokeData} />
        </Route>
        <Route path="/favorites">
          <FavoriteList />
        </Route>
        <Route exact path="/">
          <Home pokeData = {pokeData}/>
        </Route>
        <Route exact path="/home">
          <Home pokeData = {pokeData}/>
        </Route>
      </div>
    </Router>
  );
}

export default App;

