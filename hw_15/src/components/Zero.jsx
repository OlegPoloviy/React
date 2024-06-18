import {useDispatch,useSelector} from "react-redux";
import {ZeroAction} from "../store/actions/index.jsx";

export function Zero(){

    const dispatch = useDispatch()

    const {count} = useSelector(store => store.counter)

    return(
        <>
            <button onClick={() => dispatch(ZeroAction())}>Set zero</button>
            <br/>
            <b>New state : {count} </b>
        </>
    )
}