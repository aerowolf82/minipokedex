import { Switch, Route, useRouteMatch, NavLink} from "react-router-dom";
import Pokemon from './Pokemon.js'
import './Home.css';

function Home({pokeData}) {
        let match = useRouteMatch()
        //console.log(JSON.stringify(match))
    
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