import {Link,Routes,Route} from "react-router-dom" ;
import React from "react";

import {MoviePage,MoviesPage,HeaderPage} from "../pages";


function MainPage() {
    return (
        <div >
            <div  className="backToMoviesWrapper">
                <Link to={'/'}> <button className={"button"} > Back to movies </button></Link>
            </div>
            <div>

                <Routes>
                    <Route path={'/'} element={<MoviesPage/>}/>
                    <Route path={':id'} element={<MoviePage/>}/>
                </Routes>

            </div>

        </div>);
}

export {MainPage};
