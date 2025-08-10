import { REST_MENU_API } from "../utils/constant";
import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const ResturantMenu=()=>{

    const [restInfo,setRestInfo]=useState(null);
    const {restId} = useParams();
    
    useEffect(()=>{
        fetchRestApi();
    },[])
    
    const fetchRestApi = async()=>{
        const restData = await fetch(REST_MENU_API+restId);
        const json = await restData.json();
        setRestInfo(json.data);
    };

    if(restInfo == null)return<Shimmer/>;

    const {name,cuisines,totalRatingsString,avgRatingString} = restInfo?.cards[2]?.card?.card?.info;
    const {resList} =restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


    return(
        <div>
            <h1>{name}</h1>
            <h2>{cuisines?.join(",")}</h2>
            <h3>{avgRatingString}</h3>
            <p>{totalRatingsString}</p>
            <h3>Menu</h3>
            <ul>
                {resList.map((item)=>(
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {" Rs. "}
                    {item?.card?.info?.finalPrice/100  || item?.card?.info?.defaultPrice/100 }</li>
                ))}
            </ul>
        </div>
    )
}
export default ResturantMenu;