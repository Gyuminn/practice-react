import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface IDragabbleCardProps {
  toDo: string;
  index: number;
}
function DraggableCard({ toDo, index }: IDragabbleCardProps) {
  console.log(toDo, "rerendered");
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
      {(magic) => (
        <Card
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {toDo}
        </Card>
      )}
    </Draggable>
  );
}

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
`;

// 부모 컴포넌트 렌더링 -> 자식도 모두 렌더링 되는 것이 기본
// memo 를 통해 prop이 바뀌는 것들에 한해서만 리렌더링
export default React.memo(DraggableCard);
