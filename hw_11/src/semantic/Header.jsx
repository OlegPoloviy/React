import Styles from './header.module.css'

export function Header(){
    return(
        <div className={Styles.head}>
            <h2>Head</h2>
            <ul className={Styles.list}>
                <li>Menu</li>
                <li>About</li>
                <li>To main</li>
                <li>Donate</li>
            </ul>
        </div>
    )
}