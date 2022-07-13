import React, { useState } from "react";
import { useForm } from "react-hook-form";

// export default function ToDoList() {
//   const [todo, setTodo] = useState("");
//   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = e;
//     setTodo(value);
//   };

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(todo);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           value={todo}
//           onChange={onChange}
//           placeholder="write a todo"
//         ></input>
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

export default function ToDoList() {
  const { register, watch } = useForm();

  console.log(watch());

  return (
    <div>
      <form>
        <input {...register("toDo")} placeholder="Email" />
        <input {...register("Frist_Name")} placeholder="Frist Name" />
        <input {...register("Last_Name")} placeholder="Last Name" />
        <input {...register("Password")} placeholder="Password" />
        <input {...register("Password1")} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  );
}
