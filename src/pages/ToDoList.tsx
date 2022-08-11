import { useRecoilValue } from "recoil";
import { toDoState } from "../atoms";
import CreateToDo from "../components/toDoList/CreateToDo";
import ToDo from "../components/toDoList/ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  // 하위 컴포넌트에서 value를 사용하고 수정하지만
  // useRecoilValue를 통해서 바로 값 가져오기.
  // 어떤 prop도 전달할 필요가 없다.
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          // prop으로 하나하나 내려주는게 아니라 spread로 넘겨주기
          // ToDo에서도 같은 타입을 바라보고 있기 때문에 가능
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
