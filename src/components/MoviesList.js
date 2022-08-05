import {Link} from "react-router-dom" ;
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';

import {movieActions} from "../redux";

export const MoviesList = () => {
    const dispatch = useDispatch();
    const {movies, isLoading, serverError} = useSelector(state => state.movieReducer);


    useEffect(() => {
            dispatch(movieActions.getMovies())
    }, [])

    console.log(movies);

    return (
        <div className={"moviescontainer"}>
        {movies.map(movie =>
                <div className={"movie"} key={movie.id}>
                    <h3 className={"movieTitle"}>{movie.title}</h3>
                    <img className={"img"} src={"https://image.tmdb.org/t/p/w500/"+ movie.poster_path}/>
                    <div> Rating: {movie.vote_average}</div>
                    {isLoading&& <h1>Loading</h1>}
                    {serverError&& <h1>{serverError}</h1>}
                    <span> <Link to={movie.id.toString()} state={{...movie}}>  <button className={"button"}> Check posts</button> </Link></span>
                </div>
        )}
    </div>)
}