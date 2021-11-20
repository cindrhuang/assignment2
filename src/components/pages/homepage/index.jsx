import "./styles.css";
import { BigPromo } from "../../bigPromotion";
import { LongPromo } from "../../longPromotion";

export const Homepage = () => {
    return (
        <div className="homepage">
            <div className="homepage-big-promo">
                <BigPromo title="Home décor"/>
                <BigPromo title="Home essentials under $10" details="Lorem ipsum dolor sit amet, consectetur adipiscing elit." subtitle={<p><b>LÄMPLIG</b> now for only <b>$6.99</b></p>}/>
                <BigPromo className="large-promo" title={<p>Save more money this <br/>Black Friday!</p>} details="" subtitle=""/>
                <BigPromo title="Lorem Ipsum Dolor" details="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore." subtitle={<p><b>GRÖNÖ</b> table lamp for <b>$9.99</b></p>}/>
            </div>

            <div className="right-now">
                <h1>Right Now at IKEA</h1>
                <div className="homepage-long-promo">
                    <LongPromo/>
                    <LongPromo title="15% off KASER quartz kitchen countertops" details="November 11 - December 1. KASKER countertops can only be purchased in sore." colour="rgb(169, 177, 217)"/>
                    <LongPromo title="Christmas deals are here! Get your wallets ready" details="Lorem ipsum dolor sit amet, consectetur adipiscing elit." colour="rgb(245, 191, 144)"/>
                    <LongPromo title="Boost your bedroom with easy upgrades" details="Refresh your bedroom and bathroom with inexpensive accessories like colourful bedlinen." colour="rgb(217, 169, 200)"/>
                    <LongPromo title="Lorem ipsum dolor sit amet, consectetur" details="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt anim id est." colour="rgb(217, 204, 106)"/>
                    <LongPromo title="Lorem ipsum dolor sit amet, consectetur" details="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt anim id est." colour="rgb(149, 219, 205)"/>
                </div>
            </div>
        </div>
    )
}