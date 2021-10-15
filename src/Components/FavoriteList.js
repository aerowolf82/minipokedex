import { Switch, Route, useRouteMatch, NavLink} from "react-router-dom";
import Pokemon from './Pokemon.js'

function FavoriteList({pokeData}) {
        let match = useRouteMatch()

    
        return (

        <div>
            <h2>Favorites</h2>
        </div>
    );
}

export default FavoriteList;