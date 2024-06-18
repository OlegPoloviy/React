import {NavLink} from "react-router-dom";

export function ErrorPage() {
    return(
        <>
            <h2 style={{color:'red',fontSize:'26px'}}>This is error, you shouldn`t be there</h2>
            <NavLink to={'/'}>
                <button style={{border:'2px solid grey',borderRadius:'15%',color:'green'}}>Go home</button>
            </NavLink>
        </>
    )
}