import "./styles.css";
import { BigPromo } from "../../bigPromotion";

export const Homepage = () => {
    return (
        <div className="homepage">
            <div className="homepage-big-promo">
                <BigPromo title="Home décor"/>
                <BigPromo title="Home essentials under $10" details="Lorem ipsum dolor sit amet, consectetur adipiscing elit." subtitle={<p><b>LÄMPLIG</b> now for only <b>$6.99</b></p>}/>
                <BigPromo className="large-promo" title={<p>Save more money this <br/>Black Friday!</p>} details="" subtitle=""/>
                <BigPromo title="Lorem Ipsum Dolor" details="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." subtitle={<p><b>GRÖNÖ</b> table lamp for <b>$9.99</b></p>}/>
            </div>
            <h1>Right Now at IKEA</h1>
        </div>
    )
}