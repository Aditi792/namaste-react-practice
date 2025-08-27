import RestaurantMenuItemList from "./ResturantMenuItemList";

const ResturantMenuCategory = ({ data ,showMenuItems,setShowIndex}) => {

  const handleClick=()=>{
    setShowIndex();
  }

  return (
    <div className="w-auto flex flex-col items-center justify-center ">
      {/* Category Header */}
      <div className="w-8/12">
        <div className="flex justify-between m-2 p-4 text-lg font-bold cursor-pointer shadow-lg rounded bg-gray-200" onClick={handleClick}>
          <div>
            <span>{data?.title}</span>
            <span> ({data?.itemCards?.length})</span>
          </div>
        <span>{showMenuItems ? "⬆️" : "⬇️"}</span>
        </div>
      </div>

      {/* Category Body */}
      <div className="w-8/12">
        {showMenuItems && <RestaurantMenuItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default ResturantMenuCategory;
