import { Droppable } from "react-beautiful-dnd";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { ItrelloTodo, trelloToDoState } from "../../atoms";
import DraggableCard from "./DraggableCard";

interface IBoardProps {
  toDos: ItrelloTodo[];
  boardId: string;
}

interface IAreaProps {
  isDragginFromThis: boolean;
  isDraggingOver: boolean;
}

interface IForm {
  toDo: string;
}
export default function Board({ boardId, toDos }: IBoardProps) {
  const setTrelloToDos = useSetRecoilState(trelloToDoState);
  const { register, setValue, handleSubmit } = useForm<IForm>();

  const onValid = ({ toDo }: IForm) => {
    const newTrelloToDo = {
      id: Date.now(),
      text: toDo,
    };
    setTrelloToDos((prevAllBoards) => {
      return {
        ...prevAllBoards,
        [boardId]: [newTrelloToDo, ...prevAllBoards[boardId]],
      };
    });
    setValue("toDo", "");
  };

  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add task a ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(provided, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDragginFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard
                key={toDo.id}
                toDoId={toDo.id}
                index={index}
                toDoText={toDo.text}
              />
            ))}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px 0px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
  overflow: hidden;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#A39BFE"
      : props.isDragginFromThis
      ? "#FAB1A1"
      : "transparent"};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
  padding: 20px;
`;

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;
