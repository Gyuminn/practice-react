import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledRoot>
      <Link to="/">
        <button>안녕하세요, 김규민의 리액트 연습공간입니다</button>
      </Link>
    </StyledRoot>
  );
};

export default Header;

const StyledRoot = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
`;
