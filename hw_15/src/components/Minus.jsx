import {connect} from "react-redux";
import {Minus as Min} from '../store/actions/Counter.jsx'

function Minus({MinusOne}) {
    return(
        <button onClick={MinusOne}>Minus</button>
    )
}

const mapDispatchToProps = (dispatch) => ({
    MinusOne : () => dispatch(Min())
})

export default connect(null,mapDispatchToProps)(Minus)