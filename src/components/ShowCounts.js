import {useSelector} from "react-redux";

const ShowCounts = () => {
    const {isLoading, serverError,users} = useSelector(state => state.count1Reducer);
    console.log(users.id);
    return (
        // <div>
        //     <hr/>
        //     {isLoading&& <h1>Loading</h1>}
        //     {serverError&& <h1>{serverError}</h1>}
        //     {JSON.stringify(users)}
        //
        // </div>

        <div>
            Movies:
            {
                users.map(user => <div key={user.genres.id}>
                <h3>{user.genres.name}</h3>
                <hr/>
                {isLoading&& <h1>Loading</h1>}
                {serverError&& <h1>{serverError}</h1>}

            </div>)
            }
        </div>
    );
};

export {ShowCounts};