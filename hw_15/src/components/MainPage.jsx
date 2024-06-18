import {Outlet} from "react-router-dom";
import {Navbar} from "../semantic/Navbar.jsx";

export function MainPage() {
    return(
        <div>
            <Navbar/>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}