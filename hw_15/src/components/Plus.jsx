import {connect} from "react-redux";
import {Plus as pl} from "../store/actions/Counter.jsx";

function Plus({AddOne}) {

    console.log(AddOne)

    return(
        <button onClick={AddOne}>Plus</button>
    )
}

const mapDispatchToProps = (dispatch) => ({
    AddOne : () => dispatch(pl())
})

export default connect(null,mapDispatchToProps)(Plus)