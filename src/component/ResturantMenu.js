import Shimmer from "./Shimmer";
import {useState} from "react";
import { useParams} from "react-router";
import ResturantMenuCategory from "./ResturantMenuCategory";
import useResturantMenu from "../utils/useResturantMenu";

const ResturantMenu = () => {
  const { restId } = useParams();
  const restInfo = useResturantMenu(restId); //custom hook

  const[showIndex,setShowIndex]=useState(0);

  if (restInfo == null) return <Shimmer />;

  const { name, cuisines, totalRatingsString, avgRatingString } =
    restInfo?.cards[2]?.card?.card?.info;
  const resList =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards ?? [];
  const restCategory =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards||[];

  const categories = restCategory.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center item center">
      <h1 className="text-3xl font-bold m-2">{name}</h1>
      <h3 className="text-lg font-bold">{cuisines?.join(" , ").length > 32
                                          ? cuisines?.join(" , ").slice(0,28)+"..."
                                          : cuisines?.join(" , ").slice(0,32)} </h3>
      <h3 className="text-lg font-bold">{avgRatingString} ⭐ </h3>
      <p  className="text-lg font-bold"> {totalRatingsString}</p>
      <h2 className="text-xl font-bold m-2">Menu</h2>
      <div >
        {/* Category list */}

        {categories.map((category,index) => (
          <ResturantMenuCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showMenuItems = {index === showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};
export default ResturantMenu;
