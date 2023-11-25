import React from "react";
import sardinesImg from "./Sardines.png";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Sardines.css";

function Sardines() {
  return (
    <div className="Sardines">
      <img src={sardinesImg} style={{ backgroundImage: "png(sardinesImg)" }} alt="can of sardines" />
      <Message>
        <h1>Yummy sardines, in your tummy!</h1>
        <h1><Link to="/">Go Back!</Link></h1>
      </Message>
    </div>
  );
}

export default Sardines;
