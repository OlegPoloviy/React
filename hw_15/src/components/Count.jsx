import {connect} from 'react-redux'

function Count({count}) {

    return(
        <>
            <div>
                <h2>Count is {count}</h2>
            </div>
        </>
    )
}

const mapStateFromProps = (state) => ({
    count : state.count
})

export default connect(mapStateFromProps)(Count)