import { REST_MENU_API } from "./constant";
import { useEffect, useState } from "react";

const useResturantMenu = (restId) => {
    const [restInfo, setRestInfo] = useState(null);

    useEffect(() => {
        fetchRestApi();
    }, []);

    const fetchRestApi = async () => {
        const restData = await fetch(REST_MENU_API + restId);
        const json = await restData.json();
        setRestInfo(json.data);
    };
    return restInfo;
};

export default useResturantMenu;
