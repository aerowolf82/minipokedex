import { Switch, Route, Link} from "react-router-dom";
import PokemonList from './PokemonList.js'
import FavoriteList from './FavoriteList.js'
import {useState} from "react"

function Home({pokeData}) {
    let [favorites,setFavorites] = useState([]);

    console.log('home favorites', favorites)
    
        return (

        <div>
            <h1>
                Home
            </h1>
            <Link to="./pokemon">Pokemon List</Link>
            <Switch>
                <Route path="/pokemon">
                    <PokemonList pokeData = {pokeData} favorites = {favorites}/>
                </Route>
                <Route path="/favorites">
                    <FavoriteList />
                </Route>
            </Switch>   
                
            {/* <Switch>
                <Route path={`${match.path}/:topicId`}>
                    <IndivProduct />
                </Route>
                <Route exact path={match.path}>
                    <h3>Please select a Product.</h3>
                </Route>
            </Switch> */}

        </div>
    );
}

export default Home;