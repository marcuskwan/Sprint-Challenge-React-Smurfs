import React from "react";

export default function IndividualSmurf(props) {
  const specificSmurf = props.smurfs.find(
    smurfObj => smurfObj.id === props.match.params.id
  );
  return (
    <div>
      <p>{specificSmurf.name}</p>
      <p>{specificSmurf.height}</p>
      <p>{specificSmurf.age}</p>
    </div>
  );
}
