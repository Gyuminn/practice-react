import React, { useContext } from "react";
import { ThemeContext } from "./GrandParent";

const Children = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      Children
      <button style={{ background: theme.background, color: theme.foreground }}>
        I'm styled by theme context
      </button>
    </div>
  );
};

export default Children;
