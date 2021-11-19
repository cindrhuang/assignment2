import "./styles.css";
import { FaArrowRight } from "react-icons/fa";

import livingroom from "../../images/LivingRoom.jpg";

export const BigPromo = (props) => {
    const {image, imgAlt, title, details, subtitle} = props;

    return (
        <div className="big-promo">
            <div className="big-promo-main">
                <img className="big-promo-img" src={image} alt={imgAlt}/>
                <h1 className="big-promo-title">{title}</h1>
                <p className="big-promo-details">{details}</p>
                <p className="big-promo-arrow"><FaArrowRight/></p>
            </div>
            <p className="big-promo-sub">{subtitle}</p>
        </div>
    )
}

BigPromo.defaultProps = {
    image: livingroom,
    imgAlt: "Photo of living room",
    title: "Living room essentials",
    details: "Home is where the heart is. And what makes the heart of your home, is you.",
    subtitle: <p><b>ODGER</b> chair for <b>$95.99</b></p>,
}