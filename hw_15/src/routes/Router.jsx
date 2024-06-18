import {createBrowserRouter} from "react-router-dom";
import {ErrorPage} from "../components/ErrorPage.jsx";
import {MainPage} from "../components/MainPage.jsx";

// const lazyApp = () => import('../App.jsx')
//     .then(file => ({Component: file.App}))

export const routes = createBrowserRouter([
    {
        path: '/',
        Component: MainPage,
        // children : [
        //     {
        //         path : ''
        //     }
        // ]
    },
    {
        path : '*',
        Component : ErrorPage
    }
]);
