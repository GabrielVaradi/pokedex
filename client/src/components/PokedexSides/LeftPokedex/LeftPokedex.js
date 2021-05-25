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
        <div className="miniButtonGlassLeft miniButtonGlass1"></div>
        <div className="miniButtonGlassLeft miniButtonGlass2"></div>
        <div className="miniButtonGlassLeft miniButtonGlass3"></div>
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
            <div className="searchContainer">
                <input className="searchBar" type="text" placeholder="Search a pokemon!" onKeyUp={props.filterPokemons}/>
                <div className="searchIcon">
                    <i className="fa fa-search" />
                </div>
            </div>
            <button className="arrow leftArrow" onClick={props.previousPage}/>
            <Pokemons inspectPokemon={props.inspectPokemon} pokemons={props.pokemons}/>
            <button className="arrow rightArrow" onClick={props.nextPage}/>

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
        <div className="barbuttonLeft barbutton1"></div>
        <div className="barbuttonLeft barbutton2"></div>
        <div className="cross">
        <div className="crosses leftcross">
            <div className="t leftT"></div>
        </div>
        <div className="crosses topcross">
            <div className="t upT"></div>
        </div>
        <div className="crosses rightcross">
            <div className="t rightT"></div>
        </div>
        <div className="midcross">
            <div className="midCircle"></div>
        </div>
        <div className="crosses botcross">
            <div className="t downT"></div>
        </div>
        </div>
    </div>
)
    
export default leftPokedex