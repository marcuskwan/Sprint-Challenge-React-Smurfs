import React from "react";
import { Link } from "react-router-dom";

const Smurf = props => {
  function routeToSmurf(event, smurf) {
    event.preventDefault();
    props.history.push(`/smurfs/${smurf.id}`);
  }
  return (
     <div
      onClick={event => routeToSmurf(event, props.smurfObject)}
      className="Smurf"
    >
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={event => props.updateSmurf(event, props.smurfObject)}>
        Update smurf
      </button>
      <button onClick={event => props.deleteSmurf(event, props.id)}>
        Delete smurf
      </button>
    </div> 
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
