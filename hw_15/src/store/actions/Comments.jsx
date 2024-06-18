import {CONSTANTS_ENUM} from "../constsants/Constants.jsx";
import {getComments} from "../../services/comments.api.jsx";

export const Comments = (apiComments) => ({type : CONSTANTS_ENUM.COMMENTS,payload : apiComments})

export const apiComments = () => (dispatch) => {
    getComments()
        .then(res => res.json())
        .then(comments => {
            console.log(comments)
            dispatch(Comments(comments))
        })
}