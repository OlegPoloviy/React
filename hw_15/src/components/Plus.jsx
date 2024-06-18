import {useDispatch} from "react-redux";
import {PlusAction} from "../store/actions";

export function Plus() {

    const dispatch = useDispatch()

    return(
        <button onClick={() => dispatch(PlusAction())}>Plus</button>
    )
}
