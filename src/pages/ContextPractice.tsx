import React from "react";
import { Link } from "react-router-dom";

const ContextPractice = () => {
  return (
    <div>
      <Link to="GrandParent">
        <button>GrandParent로 이동하세요</button>
      </Link>
      <Link to="Parent">
        <button>Parent로 이동하세요</button>
      </Link>
      <Link to="Children">
        <button>Children로 이동하세요</button>
      </Link>
    </div>
  );
};

export default ContextPractice;
