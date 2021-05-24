import React from "react"
import Pokemons from "../../Pokemons/Pokemons"

const leftPokedex = (props) => (
    <div className="left">
        <div className="logo"></div>
        <div className="bg_curve1_left"></div>
        <div className="bg_curve2_left"></div>
        <div className="curve1_left">
        <div className="buttonGlass">
            <div className="reflect"> </div>
        </div>
        <div className="miniButtonGlass1"></div>
        <div className="miniButtonGlass2"></div>
        <div className="miniButtonGlass3"></div>
        </div>
        <div className="curve2_left">
        <div className="junction">
            <div className="junction1"></div>
            <div className="junction2"></div>
        </div>
        </div>
        <div className="screen">
        <div className="topPicture">
            <div className="buttontopPicture1"></div>
            <div className="buttontopPicture2"></div>
        </div>
        <div className="picture">

            <Pokemons inspectPokemon={props.inspectPokemon} pokemons={props.pokemons}/>

        </div>
        <div className="buttonbottomPicture"></div>
        <div className="speakers">
            <div className="sp"></div>
            <div className="sp"></div>
            <div className="sp"></div>
            <div className="sp"></div>
        </div>
        </div>
        <div className="bigbluebutton"></div>
        <div className="barbutton1"></div>
        <div className="barbutton2"></div>
        <div className="cross">
        <div className="leftcross">
            <div className="leftT"></div>
        </div>
        <div className="topcross">
            <div className="upT"></div>
        </div>
        <div className="rightcross">
            <div className="rightT"></div>
        </div>
        <div className="mclassNamecross">
            <div className="mclassNameCircle"></div>
        </div>
        <div className="botcross">
            <div className="downT"></div>
        </div>
        </div>
    </div>
)
    
export default leftPokedex