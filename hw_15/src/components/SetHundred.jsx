import {connect} from "react-redux";
import {SetHundred as Hundred} from "../store/actions/Counter.jsx";

function SetHundred({SetHundredOnClick}) {
    return (
        <button onClick={SetHundredOnClick}> Set 100</button>
    )
}

const mapDispatchToProps = (dispatch) => ({
    SetHundredOnClick : () => dispatch(Hundred())
})

export default connect(null,mapDispatchToProps)(SetHundred)