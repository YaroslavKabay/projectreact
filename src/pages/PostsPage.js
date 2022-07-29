import {useLocation} from "react-router-dom"

export function PostsPage(){

    let location = useLocation();
    let {state:user}= location;

    return (
        <div>
            {user.body}
        </div>
    );
}