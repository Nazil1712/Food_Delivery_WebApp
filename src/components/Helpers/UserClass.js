import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    /* this.state = {
      count: 0,
      count2: 1,
    }; */
    // console.log(this.props.name + " I am userClass constructor");

  }

  async componentDidMount() {
    // console.log(this.props.name + " userClass component mounted")

  }

  render() {
    // Destructuring
    // console.log(this.props.name + " I am userClass redner()");
    // const { name } = this.props;
    // const { count, count2 } = this.state;
    

    return (
      <div className="user">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
        <h1>Count2 : {count2}</h1>
        <button
          onClick={() => {
            this.setState({
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increase2
        </button>
        <h2>Name: {name}</h2>
        <h3>This is Akshay's Web series</h3>
        <h4>@nazil</h4>
      </div>
    );
  }
}

export default UserClass;
