import {useSelector} from "react-redux";

const ShowCounts = () => {
    const {isLoading, serverError,genres} = useSelector(state => state.genresReducer);
    return (
        <div>
            Movies:
            {
                genres?.genres?.map(genre =>

            <div key={genre.id}>
                        <h5>{genre.name}</h5>
                        <hr/>
                        {isLoading && <h1>Loading</h1>}
                        {serverError && <h1>{serverError}</h1>}
            </div>)
            }
        </div>
    );
};

export {ShowCounts};