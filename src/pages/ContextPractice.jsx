import React from "react";
import { Link } from "react-router-dom";

const ContextPractice = () => {
  return (
    <div>
      <Link to="GrandParent">
        <button>GrandParent</button>
      </Link>
      <Link to="Parent">
        <button>Parent</button>
      </Link>
      <Link to="Children">
        <button>Children</button>
      </Link>
    </div>
  );
};

export default ContextPractice;
