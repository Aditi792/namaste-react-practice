import { CDN_URL } from "../utils/constant";
import {Link} from "react-router";
import useContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const {
    id,
    name,
    cloudinaryImageId,
    avgRating,
    costForTwo,
    cuisines,
    sla,
    lastMileTravelString
  } = props;

  return (
    <div className="restaurant-card">
      <img className="res-card-img" src={CDN_URL + cloudinaryImageId} alt="Restaurant" />
      <h3>{name}</h3>
      <p>{cuisines?.join(", ")}</p>
      <p>Rating: {avgRating}</p>
      <p>Cost: {costForTwo}</p>
      <p>Delivery: {sla?.deliveryTime} mins</p>
      <p>Distance: {sla?.lastMileTravelString}</p>
      <button className="add-to-cart-btn btn">Add to Cart</button>
      <Link to={"/ResturantMenu/"+id}><button className="view-menu-btn btn">View Menu</button></Link>
    </div>
  );
};

export default RestaurantCard;
