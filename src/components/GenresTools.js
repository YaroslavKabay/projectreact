import {useDispatch} from "react-redux";
import {genresActions} from "../redux";

const GenresTools = () => {
    const dispatch = useDispatch();
    return (
        <div  className={"genresTools"}>
            <button className={"genresTool"} onClick={()=>dispatch(genresActions.getGenres())}>Genres</button>
            <button className={"genresTool"}>Trending</button>
            <button className={"genresTool"}>Anonses</button>
            <button className={"genresTool"}>Multfilms</button>
            <button className={"genresTool"}>Films</button>
            <button className={"genresTool"}>Collections</button>
            <button className={"genresTool"}>Actors</button>
            <button className={"genresTool"}>Best Films Ever</button>
            <button className={"genresTool"}>Top 100</button>
            <div className={"user"}>
                <img className={"imgUser"} src={"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}/>
            </div>


        </div>
    );
};

export {GenresTools};