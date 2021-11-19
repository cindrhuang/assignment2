import "./styles.css";
import { GrLinkNext } from "react-icons/gr";

export const BigPromo = (props) => {
    const {image, imgAlt, title, details, subtitle} = props;

    return (
        <div className="big-promo">
            <div className="bit-promo-main">
                <img className="big-promo-img" src={image} alt={imgAlt}/>
                <h1 className="big-promo-title">{title}</h1>
                <p className="big-promo-details">{details}</p>
                <p><GrLinkNext/></p>
            </div>
            <p className="big-promo-sub">{subtitle}</p>
        </div>
    )
}