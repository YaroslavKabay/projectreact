import {useDispatch} from "react-redux";
import {count1Actions} from "../redux";

const Count1Tools = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(count1Actions.getUsers())}>users</button>
        </div>
    );
};

export {Count1Tools};