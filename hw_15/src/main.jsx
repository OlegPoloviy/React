import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/Router.jsx";
import {Navbar} from "./semantic/Navbar.jsx";
import {Provider} from "react-redux";
import {myStore} from "./store/index.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Provider store={myStore}>
            <RouterProvider router={routes}>
                <App/>
            </RouterProvider>
        </Provider>
    </>
)