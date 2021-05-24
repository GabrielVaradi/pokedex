import React from "react"
import Pokemon from "../../Pokemon/Pokemon"

const rightPokedex = (props) => (
    <div className="right">
        <div className="stats">
            <Pokemon pokemon={props.pokemon} pokemons={props.pokemons}/>
        </div>
        <div className="blueButtons1">
        <div className="blueButton"></div>
        <div className="blueButton"></div>
        <div className="blueButton"></div>
        <div className="blueButton"></div>
        <div className="blueButton"></div>
        </div>
        <div className="blueButtons2">
        <div className="blueButton"></div>
        <div className="blueButton"></div>
        <div className="blueButton"></div>
        <div className="blueButton"></div>
        <div className="blueButton"></div>
        </div>
        <div className="miniButtonGlass4"></div>
        <div className="miniButtonGlass5"></div>
        <div className="barbutton3"></div>
        <div className="barbutton4"></div>
        <div className="yellowBox1"></div>
        <div className="yellowBox2"></div>
        <div className="bg_curve1_right"></div>
        <div className="bg_curve2_right"></div>
        <div className="curve1_right"></div>
        <div className="curve2_right"></div>
    </div>
)
    
export default rightPokedex