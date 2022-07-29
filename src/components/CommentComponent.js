import {Link} from "react-router-dom" ;

export function CommentComponent({comment}){
    return (
        <div>
            {comment.name} - <span> <Link to={comment.id.toString()} state={{...comment}}> Check posts </Link></span>
        </div>
    );
}