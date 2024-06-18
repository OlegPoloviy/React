import {useDispatch,useSelector} from "react-redux";
import {useEffect} from "react";
import {apiPosts} from "../store/actions/Posts.jsx";
import './posts.css'

export function Posts() {

    useEffect(() => {
        dispatch(apiPosts())
    },[])

    const dispatch = useDispatch()
    const {posts} = useSelector(store => store.getPosts)

    return(
        <>
            <div className={'posts'}>
                <h2>Posts</h2>
                {
                    Boolean(posts.length) && posts.map((el,id) => (
                        <div style={{margin:'10px'}} key={id}>
                            <b style={{color:'red'}}>{el.id}</b> - {el.title} - {el.body}
                        </div>
                    ))
                }
            </div>
        </>
    )
}