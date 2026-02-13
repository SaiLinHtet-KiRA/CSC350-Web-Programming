import React from "react";
import "./Card.css";
import Image from "next/image";

export default function Card({ id, image, title, releaseYear, genre }) {
  return (
    <div className="crad-container">
      <div className="img-container">
        <Image src={image} width={100} height={100} alt={title} />
      </div>
      <div className="info-container">
        <div>
          <p>{title}</p>
          <p>year - {releaseYear}</p>
          <div>{genre}</div>
        </div>
      </div>
    </div>
  );
}
