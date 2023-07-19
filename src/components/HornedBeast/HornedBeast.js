import React from "react";
import "./HornedBeast.css";

export default function HornedBeast({ title, imgUrl, description }) {
  return (
    <div className="HornedBeast">
      <h2>{title}</h2>
      <img src={imgUrl} alt={title} />
      <p>{description}</p>
    </div>
  );
}
