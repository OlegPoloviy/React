import {useSelector} from "react-redux";

export function Count() {

    const {count} = useSelector(store => store.counter)

    return(
        <>
            <h2>Count is {count}</h2>
        </>
    )
}