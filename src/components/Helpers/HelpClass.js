import { Component } from "react";
import UserClass from "./UserClass";
import UserClass2 from "./UserClass2";
import UserContext from "d:/Nazil/1 A CHARUSAT/1 Visual Studio Code/Personal/Practice/13_React_Akshay/Food_Delivery_WebApp/src/utils/UserContext";

class HelpClass extends Component {
  constructor(props) {
    super(props);
    // console.log("I am HelpClass constructor")
  }

  // This is called after this component is mounted
  componentDidMount() {
    // console.log("Help class Mounted")
  }

  render() {
    // console.log("I am HelpClass render")
    return (
      <>
        <h1>This is Help Page</h1>
        {/*  */}
        {/* <User name={"Nazil Dhalwala (fucntion)"}/> */}
        {/* <UserClass name={"Class based Components"} /> */}
        {/* <UserClass name={"Class based Components2"} />
        <UserClass name={"Class based Components3"} /> */}


        {/* Fetching API DATA */}
        <UserClass2/>

        {/* Using Context */}
        <UserContext.Consumer>
          {(data)=><h1>Context: {data.loggedInUserName}</h1>}
        </UserContext.Consumer>
      </>
    );
  }
}

export default HelpClass;
