import { Component } from "react";
import UserClass from "./Helpers/UserClass";
import UserClass2 from "./Helpers/UserClass2";
import UserContext from "../utils/UserContext";

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
