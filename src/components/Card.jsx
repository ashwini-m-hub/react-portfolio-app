import React, { Children } from "react";

const Card = ({ className, Children }) => {
  return <article className={`card ${className}`}>
    {Children}</article>;
};

export default Card;
