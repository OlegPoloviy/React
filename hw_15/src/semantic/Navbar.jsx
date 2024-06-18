import {NavLink} from "react-router-dom";
import './navbar.css'

export function Navbar() {
    return(
        <>
            <div className={'nav'}>
                <ul>
                    <NavLink style={{color:'red'}} to={'/count'}>
                        <li>To counter</li>
                    </NavLink>
                    <NavLink style={{color:'red'}} to={'/users'}>
                        <li>To users</li>
                    </NavLink>
                    <NavLink style={{color:'red'}} to={'/posts'}>
                        <li>To posts</li>
                    </NavLink>
                    <NavLink style={{color:'red'}} to={'/comments'}>
                        <li>To comments</li>
                    </NavLink>
                </ul>
            </div>
        </>
    )
}