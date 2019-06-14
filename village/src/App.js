import React, { Component } from "react";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  componentDidMount() {
    axios
      // making api req
      .get("http://localhost:3333/smurfs")
      // sets this.state.smurfs to res.data
      .then(res => this.setState({ smurfs: res.data }))
      // log errors
      .catch(err => console.log(err));
  }
  // adding smurf fn, takes in e and id
  addSmurfApp = (newSmurf) => {
    // prevent btn refresh
    axios
      // post new smurf using url, newSmurf object 
      .post("http://localhost:3333/smurfs/",newSmurf)
      // sets this.state.smurfs to res.data again
      .then(res => this.setState({ smurfs: res.data }))
      // log errors
      .catch(err => console.log(err));
  }

  // update smurf 
  updateSmurf = (e, id) => {
    // prevent btn refresh
    e.preventDefault();
    axios
      // updating server with put using id
      .put(`"http://localhost:3333/smurfs/${id}"`)
      // sets this.state.smurfs to res.data again
      .then(res => this.setState({ smurfs: res.data }))
      // log errors
      .catch(err => console.log(err));
  }

  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfForm addSmurfApp={this.addSmurfApp}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
