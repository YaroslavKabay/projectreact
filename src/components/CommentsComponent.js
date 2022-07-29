import {useEffect,useState} from "react"
import {Outlet} from "react-router-dom"

import {CommentComponent} from "../components"
import {getComments} from "../services"

export function CommentsComponent(){
    let [comments,setComments] = useState([]);

    useEffect( () =>{
        getComments.then((value)=> setComments([...value]))
    },[]);




    return (
        <div>
            {
                comments.map(comment => <CommentComponent comment={comment} key={comment.id}/>)
            }
            {/*<div>*/}
            {/*    <hr/>*/}
            {/*    <h3> details about comment</h3>*/}
            {/*    <Outlet/>*/}
            {/*</div>*/}



        </div>
    );
}