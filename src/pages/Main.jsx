import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <StyledRoot>
      <div>안녕하세요, 김규민의 리액트 연습 공간입니다.</div>
      <button>prop-Practice</button>
      <button>useState-Practice</button>
      <button>event-Practice</button>
      <button>context-Practice</button>
    </StyledRoot>
  );
};

export default Main;

const StyledRoot = styled.div`
  margin: 2rem 5rem;
  display: flex;
  flex-direction: column;

  & > button {
    width: 10rem;
    margin: 1rem;
  }
`;
