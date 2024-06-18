import {CONSTANTS_ENUM} from "../constsants/Constants.jsx";
import {getPosts} from "../../services/posts.api.jsx";

export const Posts = (postsApi) => ({type : CONSTANTS_ENUM.POSTS,payload : postsApi})

export const apiPosts = () => (dispatch) => {
    getPosts()
        .then(res => res.json())
        .then(posts => {
            console.log(posts)
            dispatch(Posts(posts))
            }
        )
}