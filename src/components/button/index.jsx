import "./styles.css";

export const Button = (props) => {
    const {label, price} = props;

    return (
        <div className="button">
            <img className="item-photo" src={image} alt={name + "photo"}/>
            <div className="item-info">
                <Link to ={`/item/${id}`}>
                    <h1 className="item-name"> {name} </h1>
                </Link>
                <p className="item-desc"> {description} </p>
            </div>
            <h1 className="item-price"> {"$" + price} </h1>
        </div>
    )
}

Button.defaultProps = {
    label: "Button",
    price: "249",
}