import { Switch, Route, useRouteMatch, NavLink} from "react-router-dom";
import Pokemon from './Pokemon.js'
import './PokemonList.css';

function PokemonList({pokeData}) {
        let match = useRouteMatch()
        console.log(JSON.stringify(match))
    
        return (

        <div>
            <h1>
                Pokemon List
            </h1>
            <div>
                {(pokeData.map((pokeData,index)=>(
                    <NavLink className="NavLink" to={`${match.url}/${index}`}>
                        {pokeData.name}
                    </NavLink>
                )))}
            </div>
                <Switch>
                    <Route path={`${match.path}/:pokeId`}>
                        <Pokemon pokeData = {pokeData}/>
                    </Route>
                </Switch>
        </div>
    );
}

export default PokemonList;