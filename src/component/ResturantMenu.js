import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResturantMenu from "../utils/useResturantMenu"

const ResturantMenu=()=>{

    const {restId} = useParams();
    const restInfo = useResturantMenu(restId);//custom hook
    
    
    if(restInfo == null)return<Shimmer/>;

    const {name,cuisines,totalRatingsString,avgRatingString} = restInfo?.cards[2]?.card?.card?.info;
    const resList =restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards??[];

    return(
        <div>
            <h1>{name}</h1>
            <h3>{cuisines?.join(" , ")} </h3>
            <h3>{avgRatingString}</h3>
            <p>{totalRatingsString}</p>
            <h2>Menu</h2>
            <ul>
                {resList.map((item)=>(
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - {" Rs. "}
                        {item?.card?.info?.finalPrice/100  || item?.card?.info?.defaultPrice/100 }
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ResturantMenu;