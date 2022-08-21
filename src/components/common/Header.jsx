import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledRoot>
      <Link to="/">
        <button>리액트 연습공간</button>
      </Link>
    </StyledRoot>
  );
};

export default Header;

const StyledRoot = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
