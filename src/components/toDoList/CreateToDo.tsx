import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../../atoms";

interface IForm {
  toDo: string;
}

export default function CreateToDo() {
  // useRecoilValue 와 useSetRecoilState를 쓰는 대신 useRecoilState를 쓰는 방법도 좋다.
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
}
