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
        <div>
        Movies:
        {movies.map(movie =>
                <div key={movie.id}>
                    <h3>{movie.title}</h3>
                    {movie.vote_average}
                    <hr/>
                    {isLoading&& <h1>Loading</h1>}
                    {serverError&& <h1>{serverError}</h1>}
                </div>
        )}
    </div>)
}