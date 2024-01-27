import React from "react";
import { Link } from "react-router-dom";

export const Root = () => {
  return (
    <ul>
      <li>
        <Link to={`topal`}>topal</Link>
      </li>
      <li>
        <Link to={`okna`}>okna</Link>
      </li>
      <li>
        <Link to={`kartony`}>kartony</Link>
      </li>
      <li>
        <Link to={`lustra`}>lustra</Link>
      </li>
    </ul>
  );
};
