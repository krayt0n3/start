import React from "react";


export default function ImageCard(props) {
  
  return (
    <div className="card">
      <section>
        <h6>{props.title}</h6>
      </section>
      <div className="imageContainer">
        <img src={props.url} alt={props.title} />
      </div>
      
    </div>
  );
}
