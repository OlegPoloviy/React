import {useDispatch,useSelector} from "react-redux";
import {useEffect} from "react";
import {apiUsers,clearUsers} from "../store/actions";
import './user.css'


export function User() {

    useEffect(() => {
        dispatch(apiUsers())
    }, []);

    const dispatch = useDispatch()
    const {users} = useSelector(store => store.getUsers)

    return(
        <>
            <div className='users'>
                <h2>Users</h2>
                <button onClick={() => dispatch(clearUsers())}>Clear all users</button>
                {
                    Boolean(users.length)&& users.map((el, id) => (
                        <div style={{margin: '10px'}} key={id}>
                            <b style={{color: 'red'}}>{el.id}</b>.{el.name} - {el.username}
                        </div>
                    ))
                }
            </div>
        </>
    )
}