import {useEffect, useState } from "react";
import RestaurantList from "./RestaurantList";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constant";
import checkOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredRest,setFilteredRest]=useState([]);
  const [searchText,setSearchText]=useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData=async()=>{
    const data = await fetch(API_URL);
    const json = await data.json();
    const fetchedRestaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setResList(fetchedRestaurants || []);
    setFilteredRest(fetchedRestaurants || []);
    //console.log(fetchedRestaurants);
  }


  const onlineStatus = checkOnlineStatus();//custom hook

  if(!onlineStatus){
    return(
    <h1>
      Sorry ! Something is wrong . Check yout internet connection.
    </h1>)
  } 


  if(!resList.length) {
    return <Shimmer />;
  }

  const FilterBar = () => {
    return (
      <div className="search-container">
        <input type="text" placeholder="Search for restaurants and food" value={searchText} 
        onChange={(e)=>{
          setSearchText(e.target.value);
        }}/>
        <button className="search-btn " onClick={
          () => {
            const serchResList = resList.filter((restaurant) => 
              restaurant.info.name.toLowerCase().includes(searchText)
            );
            setFilteredRest(serchResList);
          }
        }>Search</button>
        <button className="top-rated-rest-btn" onClick={() => { 
            const topRated= resList.filter((resturant)=> resturant.info.avgRating > 4.3);
            setFilteredRest(topRated);
        }}>Top rated restaurant</button>
      </div>
    )
  }
  return (
    <div className="body">
      <FilterBar/>
      <div className="restaurant-list">
        {filteredRest.map((restaurant) => (
          <RestaurantList key={restaurant.info.id} {...restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
