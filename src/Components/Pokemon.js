import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react"



async function getPokemonDetails(pokeId){
    let realPokeId=parseInt(pokeId)+1;
    let results = await fetch (`https://pokeapi.co/api/v2/pokemon/${realPokeId}`)
    let individualPokemon = await results.json()
    return individualPokemon
}


const Pokemon = ( {pokeData}) =>{
    

    let { pokeId } = useParams();
    const [indPoke, setPoke] = useState([])

    
    useEffect(() => {
        let mounted = true;
        getPokemonDetails(pokeId)
            .then(items => {
                if(mounted) {
                    setPoke(items)
                }
            })
        return () => mounted = false;
      }, [pokeId])    
    //let test = "indPoke.sprites.other.official-artwork.front_default"
    //console.log(indPoke.sprites.front_default)


    
    return (
        <>
            <h2>
                {pokeData[pokeId]?.name}
            </h2>
            <img src = {indPoke.sprites?.front_default} alt = 'pika...no?'/>
            <button>Add To Favorites</button>
            <p>BASE EXPERIENCE: {indPoke.base_experience}</p>
            <p>ID: {indPoke.id}</p>
            {indPoke.abilities?
            <div>
                {(indPoke.abilities.map((ability,index)=>(
                    <p key = {index}>ABILITY {index+1}: {ability.ability.name}</p>
                )))} 
            </div> : <></>}
            {indPoke.moves?
            <div>
                {(indPoke.moves.map((move,index)=>(
                    <p key = {index}>MOVE {index+1}: {move.move.name}</p>
                )))} 
            </div>: <></>}
            {/*type placeholder - indPoke.types[..].type.name 
            ART:
                indPoke.sprites.other.official-artwork.front_default*/}
            {JSON.stringify(indPoke.sprites?.other)}
        </>
    )
}
export default Pokemon;
/*
async function getProductDetails(ProductId) {
    let result = await fetch(`http://52.26.193.201:3000/products/${ProductId}`);
    let json = await result.json();
    return json;
}


function ProductCard(product) {
    const [detailProd, setDetails] = useState([])
    const [url,setUrl] = useState("")
    const [toggled, setToggled] = useState(false);


  useEffect(() => {
    let mounted = true;
    getProducts()
      .then(items => {
        if(mounted) {
            setDetails(detailsList);
        }
      })
    return () => mounted = false;
  }, [])    

    
    async function getDetails(e,id) {
        e.preventDefault();
        let imageURL = await getImageURL(id);
        let detailsList = await getProductDetails(id);
        setDetails(detailsList);
        setUrl(imageURL);
        setToggled(!toggled);
    }
*/