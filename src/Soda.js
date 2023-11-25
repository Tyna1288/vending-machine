import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import sodaImg from "./Soda.png";
import "./Soda.css";

function Soda() {
  return (
    <div className="Soda">
      <img src={sodaImg} alt="coca and pepsi can" />
      <Message>
        <h1>SUGAR Rush Baby!!</h1>
        <h1><Link to="/">Go Back!</Link></h1>
      </Message>
      <img src={sodaImg} alt="coca cola can" />
    </div>
  );
}

export default Soda;
