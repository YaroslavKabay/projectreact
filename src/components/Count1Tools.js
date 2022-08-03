import {useDispatch} from "react-redux";
import {genresActions} from "../redux";

const Count1Tools = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(genresActions.getGenres())}>Genres</button>
        </div>
    );
};

export {Count1Tools};