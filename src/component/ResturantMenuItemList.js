import { CDN_URL } from "../utils/constant";

const RestaurantMenuItemList = ({ items }) => {
  return (
    <div className="w-full">
      {items.map((item) => {
        const { id, name, description, imageId, price, defaultPrice } =
          item?.card?.info;
        return (
          <div
            key={id} 
            className="flex justify-between m-2 p-2 border-b"
          >
            <div className="w-9/12 text-left">
              <h6 className="font-bold">{name}</h6>
              <p className="text-sm text-gray-600">{(description && description.slice(0, 140)) || "Dummy Data"}</p>
              <h6>
                Price : ₹ {(price || defaultPrice) / 100} {/* ✅ divide properly */}
              </h6>
            </div>
            <div className="w-3/12 flex flex-col items-center relative">
              {imageId && (
                <img
                  className="w-35 rounded"
                  src={CDN_URL + imageId}
                  alt={name}
                />
              )}
              <button className="mt-2 px-3 py-1 bg-green-500 text-white rounded absolute bottom-0.5 cursor-pointer">
                Add+
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenuItemList;
