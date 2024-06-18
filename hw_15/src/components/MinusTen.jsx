import {connect} from "react-redux";
import {MinusTen as MinTen} from "../store/actions/Counter.jsx";

function MinusTen({SetMinusTen}) {
    return(
        <button onClick={SetMinusTen}> Minus Ten </button>
    )
}

const mapDispatchToProps = (dipatch) => ({
    SetMinusTen : () => dipatch(MinTen())
})

export default connect(null,mapDispatchToProps)(MinusTen)