import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface IDragabbleCardProps {
  toDoId: number;
  toDoText: string;
  index: number;
}
function DraggableCard({ toDoId, toDoText, index }: IDragabbleCardProps) {
  return (
    <Draggable draggableId={toDoId + ""} index={index}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDoText}
        </Card>
      )}
    </Draggable>
  );
}

const Card = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) =>
    props.isDragging ? "#FAB1A1" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
`;

// 부모 컴포넌트 렌더링 -> 자식도 모두 렌더링 되는 것이 기본
// memo 를 통해 prop이 바뀌는 것들에 한해서만 리렌더링
export default React.memo(DraggableCard);
