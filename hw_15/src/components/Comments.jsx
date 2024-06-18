import {useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import {apiComments} from "../store/actions/Comments.jsx";
import './posts.css'

export function Comments() {

    useEffect(() => {
        dispatch(apiComments())
    },[])

    const dispatch = useDispatch()
    const {comments} = useSelector(store => store.getComments)

    return(
        <>
            <div className={'comments'}>
                {
                    Boolean(comments.length) && comments.map((el,id) => (
                        <div style={{margin:'100px'}} key={id}>
                            <b style={{color:'red'}}>{el.id}</b>.{el.name} - {el.body}
                        </div>
                    ))
                }
            </div>
        </>
    )
}