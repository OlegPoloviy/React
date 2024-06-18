import {createBrowserRouter} from "react-router-dom";
import {ErrorPage} from "../components/ErrorPage.jsx";
import {MainPage} from "../components/MainPage.jsx";

const lazyApp = () => import('../App.jsx')
    .then(file => ({Component: file.App}))

const lazyUser = () => import ('../components/User.jsx')
    .then(file => ({Component : file.User}))

const lazyPosts = () => import ('../components/Posts.jsx')
    .then(file => ({Component : file.Posts}))

const lazyComments = () => import ('../components/Comments.jsx')
    .then(file => ({Component : file.Comments}))

export const routes = createBrowserRouter([
    {
        path: '/',
        Component: MainPage,
        children : [
            {
                path : '/count',
                lazy : lazyApp
            },
            {
                path : '/users',
                lazy : lazyUser,
            },
            {
                path : '/posts',
                lazy : lazyPosts
            },
            {
                path : '/comments',
                lazy : lazyComments
            }
        ]
    },
    {
        path : '*',
        Component : ErrorPage
    }
]);
