import "./styles.css";
import ikeadining from "../../../images/IkeaDining.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../button";

export const LongPromo = (props) => {
    const {image, imgAlt, title, details, colour} = props;

    return (
        <div className="long-promo">
            <img className="long-promo-img" src={image} alt={imgAlt}/>
            <div className="long-promo-text" style="background-color:{colour}">
                <h1 className="long-promo-title">{title}</h1>
                <p className="long-promo-details">{details}</p>
                <Button type="next" action="none" text={<FaArrowRight/>}/>
            </div>
        </div>
    )
}

LongPromo.defaultProps = {
    image: ikeadining,
    imgAlt: "Photo of IKEA's dining room",
    title: "IKEA Food is now available on DoorDash!",
    details: "We've partnered with DoorDash to have your favourite IKEA meals delivered right to your door.",
    colour: "rgb(169, 217, 182)",
}