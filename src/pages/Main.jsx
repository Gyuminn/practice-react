import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  const studies = [
    {
      id: 1,
      url: "/propPractice",
      buttonText: "props - practice",
    },
    { id: 2, url: "/useStatePractice", buttonText: "useState-practice" },
    { id: 3, url: "/eventPractice", buttonText: "event-practice" },
    { id: 4, url: "/contextPractice", buttonText: "useContext-practice" },
    { id: 5, url: "/reducerPractice", buttonText: "useReducer-practice" },
    { id: 6, url: "/refPractice", buttonText: "useRef-practice" },
    { id: 7, url: "/apiPractice", buttonText: "api-practice" },
    { id: 8, url: "/coins", buttonText: "Crypto-Tracker" },
    { id: 9, url: "/formPractice", buttonText: "useForm-practice" },
    { id: 10, url: "/toDoList", buttonText: "toDo-List" },
    { id: 11, url: "/trello", buttonText: "trello-clone" },
  ];
  return (
    <StyledRoot>
      {studies.map((study) => (
        <StyledLink to={study.url} key={study.id}>
          <button>{study.buttonText}</button>
        </StyledLink>
      ))}
    </StyledRoot>
  );
};

export default Main;

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 1rem;
  width: 5rem;
`;
