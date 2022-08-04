import React from 'react';

// const MoviePage = () => {
//     return (
//         <div>
//             MovieCheck
//         </div>
//     );
// };
//
// export {MoviePage};

// import React from 'react';
import {useLocation} from "react-router-dom"

function MoviePage(){

    let location = useLocation();
    let {state:movie}= location;

    return (
        <div>
            {movie.title}
        </div>
    );
}
export {MoviePage};