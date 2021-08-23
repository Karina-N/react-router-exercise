import React from "react";

function ProjectDetails(props) {
  return (
    <div key={props.id} className="project">
      <h5>{props.title}</h5>
      <p>{props.description}</p>
    </div>
  );
}

export default ProjectDetails;
