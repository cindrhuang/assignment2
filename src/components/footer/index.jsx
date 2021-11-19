import "./styles.css";
import { Button } from "../button";
import { BsFacebook, BsInstagram, BsPinterest, BsTwitter, BsYoutube } from "react-icons/bs";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="join-ikea">
                <h2>IKEA Family</h2>
                <p>Bring your ideas to life with rewards, inspiration, discounts and a few surprises along the way. <u>Learn more</u>.</p>
                <Button text={<BsFacebook/>}/>
                <Button text={<BsInstagram/>}/>
                <Button text={<BsPinterest/>}/>
                <Button text={<BsTwitter/>}/>
                <Button text={<BsYoutube/>}/>
            </div>
            <ul className="footer-help">
                <h2>Help</h2>
                <li>Customer service</li>
                <li>FAQ</li>
                <li>Track my order</li>
                <li>Reschedule my order</li>
                <li>Cancel my order</li>
                <li>Contact us</li>
                <li>Your safety concerns</li>
                <li>Product recalls</li>
                <li>Sell back program</li>
                <li>Return policies</li>
                <li>Warranties</li>
                <li>Feedback</li>
                <li>Order replacement parts</li>
                <li>COVID-19 information</li>
            </ul>
            <ul className="footer-shop">
                <h2>Shop & Learn</h2>
                <li>IKEA Apps</li>
                <li>Find a location</li>
                <li>IKEA Services</li>
                <li>IKEA Catalogue</li>
                <li>IKEA Family</li>
                <li>IKEA for Business</li>
                <li>IKEA Planners</li>
                <li>IKEA Gift Registry</li>
                <li>Buying guides</li>
                <li>Gift cards and balance checker</li>
                <li>Payment options</li>
            </ul>
            <ul className="footer-about">
                <h2>About IKEA</h2>
                <li>This is IKEA</li>
                <li>Jobs</li>
                <li>Newsroom</li>
                <li>Life at home</li>
                <li>A sustainable everyday</li>
                <li>IKEA Foundation</li>
            </ul>
        </div>
    )
}