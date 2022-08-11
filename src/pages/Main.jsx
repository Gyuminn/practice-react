import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  return (
    <StyledRoot>
      <StyledLink to="/propPractice">
        <button>prop-Practice</button>
      </StyledLink>
      <StyledLink to="/useStatePractice">
        <button>useState-Practice</button>
      </StyledLink>
      <StyledLink to="/eventPractice">
        <button>event-Practice</button>
      </StyledLink>
      <StyledLink to="/contextPractice">
        <button>useContext-Practice</button>
      </StyledLink>
      <StyledLink to="/reducerPractice">
        <button>useReducer-Practice</button>
      </StyledLink>
      <StyledLink to="/refPractice">
        <button>useRef-Practice</button>
      </StyledLink>
      <StyledLink to="/apiPractice">
        <button>api-Practice</button>
      </StyledLink>
      <StyledLink to="/coins">
        <button>Crypto Tracker</button>
      </StyledLink>
      <StyledLink to="/formPractice">
        <button>useForm-Practice</button>
      </StyledLink>
      <StyledLink to="/toDoList">
        <button>To Do - List</button>
      </StyledLink>
    </StyledRoot>
  );
};

export default Main;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 1rem;
  width: 5rem;
`;
