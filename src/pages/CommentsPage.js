import {Outlet} from "react-router-dom"

import {CommentsComponent} from "../components"

export function CommentsPage(){
    return (
        <div>
            <CommentsComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
}