import "./styles.css";
import { Link } from "react-router-dom";

import armchair from "../../images/EkeroArmchair.PNG";

export const WishlistItem = (props) => {
    const {image, name, description, price, id} = props;

    return (
        <div className="item">
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

WishlistItem.defaultProps = {
    image: armchair,
    name: "EKERÖ",
    description: "Armchair, skiftebo yellow",
    price: "249",
}