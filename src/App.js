import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppFunctional from "./AppFunctional";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      class: "",
    };
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  componentDidMount() {
    console.log("we are in mounting");
  }

  componentDidUpdate(prevState) {
    if (prevState.name !== this.state.name) {
      console.log("state updated");
    }
  }

  componentWillUnmount() {
    console.log("in");
    alert("we are going");
  }

  handleChangeName(e) {
    console.log("e", e);
    this.setState({
      name: e.target.value,
    });
  }

  sampleFunction = () => {
    console.log("fun called");
    this.setState({
      name: "harsh",
    });
  };

  render() {
    const { name, age } = this.state;

    return (
      <div>
        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => this.handleChangeName(e)}
          />
          <br />
          <input
            type="number"
            value={age}
            onChange={(e) => this.setState({ age: e.target.value })}
          />
          <br />
          <input
            type="number"
            value={this.state.class}
            onChange={(e) => this.setState({ class: e.target.value })}
          />
        </form>
        <h3> this is other form</h3>
        <AppFunctional
          name={name}
          class={this.state.class}
          age={age}
          sampleFunction={this.sampleFunction}
        />
      </div>
    );
  }
}

export default App;
