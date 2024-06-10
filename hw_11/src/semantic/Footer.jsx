import Styles from './footer.module.css'

export function Footer(props){

    return (
        <div className={Styles.foot}>
            <h2>{props.foot}</h2>
            <input
                type="text"
                placeholder="Type something..."
            />
        </div>
    )
}