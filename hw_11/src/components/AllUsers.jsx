import {users} from '../constants/data.jsx'
import Styles from './allUser.module.css'

export function AllUser(){

    return(
        <div className={Styles.users}>
            {
                users.map((el,i) => (
                    <div key={i} style={{margin:"5px",border:"2px solid red"}}>
                        <b>{el.id}</b>.{el.name}-{el.email}
                    </div>
                ))
            }
        </div>
    )
}