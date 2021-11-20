import "./styles.css";
import { WishlistItem } from "../../wishlistItem";

export const WishlistPage = () => {
    return (
        <div className="wishlist-page">
            <div className="wishlist-info">
                <h1>Wishlist</h1>
                <p>This wish list is only temporary. <u>Join or Log in</u> to make sure your wish list is still here when you come back.</p>
            </div>

            <div className="item-list">
                <WishlistItem key={WishlistItem.id} image={WishlistItem.image}/>
                <WishlistItem key={WishlistItem.id} image={WishlistItem.image}/>
                <WishlistItem key={WishlistItem.id} image={WishlistItem.image}/>
            </div>
        </div>
    )
}