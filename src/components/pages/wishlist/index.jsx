import "./styles.css";
import { WishlistItem } from "../../wishlistItem";

export const WishlistPage = () => {



    return (
        <div className="wishlist-page">
            <div className="wishlist-content">
                <div className="wishlist-info">
                    <h1>Wishlist</h1>
                    <p>This wish list is only temporary. <u>Join or Log in</u> to make sure your wish list is still here when you come back.</p>
                </div>

                <div className="item-list">
                    <WishlistItem key={WishlistItem.id} image={WishlistItem.image}/>
                </div>
            </div>

            <div className="wishlist-summary">
                <h2>Regular price</h2>
                <h1>$498</h1>
            </div>
        </div>
    )
}