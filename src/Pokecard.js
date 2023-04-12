import React from 'react';
import "./Pokecard.css";

const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard({id, name, type, base_experience}) {
    const img = `${POKE_API}${id}.png`;
    return (
        <div className="Pokecard">
            <div className="Pokecard-title">{ name }</div>
            <img className="Pokecard-image" src={img} alt={name + " image"}/>
            <div className="Pokecard-data">Type: {type}</div>
            <div className="Pokecard-data">EXP: {base_experience}</div>
        </div>
    );
}

export default Pokecard;