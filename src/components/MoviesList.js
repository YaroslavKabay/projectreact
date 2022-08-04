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
                    <h3>{movie.title}</h3>
                    <img className={"img"} src={"https://image.tmdb.org/t/p/w500/"+ movie.poster_path}/>
                    {movie.vote_average}
                    {isLoading&& <h1>Loading</h1>}
                    {serverError&& <h1>{serverError}</h1>}
                </div>
        )}
    </div>)
}