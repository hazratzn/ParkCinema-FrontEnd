import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Branch = ({ branch }) => {
  return (
    <>
      <div className="cinema-item">
        <div className="cinema-img-holder">
          <img
            src={branch.image}
            alt="cinema"
            className="cinema-image img-fluid"
            style={{ width: "395px", height: "262px" }}
          />
          <Link className="cinema-title" to={`branch/${branch.id}`}>
            {branch.name}
          </Link>
        </div>
        <div className="detail">
          <div>
            <span>Ünvan: </span>
            {branch.address}
          </div>
          <div>
            <span>Telefon: </span>
            {branch.number}
          </div>
          <div>
            <span>Iş rejimi: </span>
            {branch.workingHours}
          </div>
        </div>
      </div>
    </>
  );
};

export default Branch;
