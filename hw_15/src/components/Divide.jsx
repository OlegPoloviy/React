import {connect} from "react-redux";
import {Divide as Dv} from "../store/actions/Counter.jsx";

function Divide({SetDivision}) {
    return (
        <button onClick={SetDivision}> Divide by 2</button>
    )
}

const mapDispatchToProps = (dispatch) => ({
    SetDivision : () => dispatch(Dv())
})

export default connect(null,mapDispatchToProps)(Divide)