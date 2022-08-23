import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { trelloToDoState } from "../atoms";
import Board from "../components/trelloClone/Board";
import DraggableCard from "../components/trelloClone/DraggableCard";

export default function TrelloClone() {
  const [toDos, setToDos] = useRecoilState(trelloToDoState);

  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;
    // setToDos((oldToDos) => {
    //   // 불변성 유지를 위해 배열 복사
    //   const toDosCopy = [...oldToDos];
    //   // 1) Delete item on source.index
    //   toDosCopy.splice(source.index, 1);

    //   // 2) Put back the item on the destination.index
    //   toDosCopy.splice(destination?.index, 0, draggableId);

    //   return toDosCopy;
    // });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {/* Object를 map으로 돌리기 위한 방법 */}
          {Object.keys(toDos).map((boardId) => (
            <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;
