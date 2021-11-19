import "./styles.css";

export const Button = (props) => {
    const {action, type, text} = props;

    return (
        <button className={type} onClick={action}>{text}</button> 
    )
}