import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        console.log("child constructor")

        this.state={
            count:0,
            count2:0,
        };
    }

    componentDidMount(){
        console.log("Child component did mount ? ")
        //api call (replacement of ueEffect as functional component)
    }

    componentDidUpdate(){
        console.log("Component is updated.")
    }

    componentWillUnmount(){
        console.log("component will unmount")
    }
    render(){
        console.log("child render")
        const {location} = this.props;//destructioring of props in class
        const{count2} = this.state;//destructioring of state in class
        return(
            <div className="user-card">
                <h2>Count : {this.state.count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count +1,
                        count2:this.state.count2 +1,//both count are batched and increase value simultanously.
                        // always create state variable once.
                        //it a object
                    })
                }}>Increase Count</button>
                <h2>Count2 : {count2}</h2>
                <h2>hello {this.props.name} here !</h2> 
                <p>I am from {location}</p>
            </div>
        )
    }
}
export default UserClass;