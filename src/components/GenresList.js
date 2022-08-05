import {useSelector} from "react-redux";

const GenresList = () => {
    const {isLoading, serverError,genres} = useSelector(state => state.genresReducer);
    return (
        <div className={"genrescontainer"}>
            {
                genres?.genres?.map(genre =>

            <div className={"genres"} key={genre.id}>
                        <h5>{genre.name}</h5>
                        {isLoading && <h1>Loading</h1>}
                        {serverError && <h1>{serverError}</h1>}
            </div>)

            }
        </div>
    );
};

export {GenresList};