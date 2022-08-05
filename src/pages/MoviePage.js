import React from 'react';
import {useLocation} from "react-router-dom"

function MoviePage(){

    let location = useLocation();
    let {state:movie}= location;

    return (
        <div className={"moviePage"}>
            <h3>{movie.title}</h3>
            <div>{movie.vote_average}</div>
            <img className={"movieImg"} src={"https://image.tmdb.org/t/p/w500/"+ movie.backdrop_path}/>
            <div>{movie.overview}</div>

        </div>
    );
}
export {MoviePage};