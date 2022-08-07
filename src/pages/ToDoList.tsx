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
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("toDo", { required: true, minLength: 10 })}
          placeholder="Email"
        />
        <input
          {...register("Frist_Name", { required: true, minLength: 10 })}
          placeholder="Frist Name"
        />
        <input
          {...register("Last_Name", { required: true, minLength: 10 })}
          placeholder="Last Name"
        />
        <input
          {...register("Password", {
            required: "Password is required",
            minLength: 10,
          })}
          placeholder="Password"
        />
        <input
          {...register("Password1", {
            required: true,
            minLength: {
              value: 5,
              message: "Your password is too short",
            },
          })}
          placeholder="Password1"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
