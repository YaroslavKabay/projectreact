import './App.css';

import {Header, MoviesContainer} from "./components";
import {MainPage} from "./pages";

const App = () => {
    return (
        <div>

            <Header/>
            <hr/>
            {/*<MoviesContainer/>*/}
            <MainPage/>
        </div>
    );
};

export {App};