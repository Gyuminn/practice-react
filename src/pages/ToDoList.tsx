import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector } from "../atoms";

import CreateToDo from "../components/toDoList/CreateToDo";
import ToDo from "../components/toDoList/ToDo";

function ToDoList() {
  // atom 뿐만 아니라 selector의 값도 가져올 수 있다.
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  // 하위 컴포넌트에서 value를 사용하고 수정하지만
  // useRecoilValue를 통해서 바로 값 가져오기.
  // 어떤 prop도 전달할 필요가 없다.
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
