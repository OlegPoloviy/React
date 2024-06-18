import {NavLink} from "react-router-dom";
import './navbar.css'

export function Navbar() {
    return(
        <>
            <div className={'nav'}>
                <ul>
                    <NavLink style={{color:'red'}} to={'/'}>
                        <li>To counter</li>
                    </NavLink>
                    <NavLink style={{color:'red'}} to={'/'}>
                        <li>To users</li>
                    </NavLink>
                    <NavLink style={{color:'red'}} to={'/'}>
                        <li>To posts</li>
                    </NavLink>
                    <NavLink style={{color:'red'}} to={'*'}>
                        <li>To comments</li>
                    </NavLink>
                </ul>
            </div>
        </>
    )
}