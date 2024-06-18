import {connect} from "react-redux";
import {PlusTen as PlTen} from "../store/actions/Counter.jsx";

function PlusTen({PlusTen}) {
    return (
        <button onClick={PlusTen}>Plus ten</button>
    )
}

const mapDispatchToProps = (dispatch) => ({
    PlusTen : () => dispatch(PlTen())
})

export default connect(null,mapDispatchToProps)(PlusTen)