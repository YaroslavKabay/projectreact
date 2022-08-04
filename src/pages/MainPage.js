import {Link,Routes,Route} from "react-router-dom" ;

import {MoviePage,MoviesPage} from "../pages";
import {MoviesList} from "../components";
import React from "react";

function MainPage() {
    return (
        <div >
            <h2> Menu </h2>
                <Link to={'/'}> basic</Link>
                {/*<Link to={'/movies'}> Movie List</Link>*/}

            <div>
                <h3>Content</h3>
                <Routes>
                <Route path={'/'} element={<MoviesPage/>}>
                        <Route path={':id'} element={<MoviePage/>}/>
                </Route>
                    </Routes>

            </div>

        </div>);
}

export {MainPage};
