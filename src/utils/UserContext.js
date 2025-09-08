import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Aditi",
    cart: 0,
});

export default UserContext;