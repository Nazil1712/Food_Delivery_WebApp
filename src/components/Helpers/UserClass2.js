import React from "react";

class UserClass2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Creating a state variable and assigning default value to it
      userInfo: {
        name: "Default",
        location: "Default",
        avatar_url: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Nazil1712");

    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }


  componentDidUpdate() {
    debugger;
    console.log("Component Updated")
  }

  // This wil be called when you will move to other page like contact, home, cart, etc.
  componentWillUnmount() {
    console.log("Component is Unmounted")
  }
  
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // debugger;
    return (
      <>
        <img src={avatar_url} width="150px" />
        <p>Name: {name}</p>
        <p>Location: {location}</p>
      </>
    );
  }
}

export default UserClass2;
