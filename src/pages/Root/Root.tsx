import React from "react";
import { Link } from "react-router-dom";

export const Root = () => {
  return (
    <ul>
      <li>
        <Link to={`kartony`}>kartony</Link>
      </li>
      <li>
        <Link to={`lustra`}>lustra</Link>
      </li>
      <li>
        <Link to={`zaslony`}>zasłony</Link>
      </li>
    </ul>
  );
};
