import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const About=()=>{
    const {loggedInUser} = useContext(UserContext)
    return(
        <div>
            <h1>About Us</h1>
            <h2>{loggedInUser}</h2>
            <p>This is a food delivery app that connects you with your favorite restaurants.</p>
            <p>We aim to provide the best food delivery experience with a wide range of options.</p>
            <User name="Aditi function"/>
            <UserClass name="Argho class" location="Baranagar class"/>
            <UserClass name="Argho class" location="Baranagar class"/>
        </div>
    )
}

export default About; 