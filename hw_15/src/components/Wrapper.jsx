import {Plus,Minus,Count,Zero} from './index.jsx'
import './wrapper.css'

export function Wrapper() {
    return (
        <>
            <div className='counter'>
                <Count/>
                <Plus/>
                <Minus/>
                <Zero/>
            </div>
        </>
    )
}
