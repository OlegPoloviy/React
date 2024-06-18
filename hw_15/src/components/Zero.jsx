import {connect} from "react-redux";
import {Zero as Zr} from "../store/actions/Counter.jsx";

function Zero({SetToZero}){

    return(
        <button onClick={SetToZero}>Set zero</button>
    )
}

const mapDispatchToProps = (dispatch) => ({
    SetToZero : () => dispatch(Zr())
})

export default connect(null,mapDispatchToProps)(Zero)