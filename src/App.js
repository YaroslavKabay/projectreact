import {MoviesList, Header, ShowCounts,Count1Tools, } from "./components";

const App = () => {
    return (
        <div>
            <ShowCounts/>
            <Count1Tools/>
            {/*<Header/>*/}
            <hr/>
            <MoviesList/>
        </div>
    );
};

export {App};