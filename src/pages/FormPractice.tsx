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
interface IForm {
  email: string;
  First_Name: string;
  Last_Name: string;
  Password: string;
  Password1: string;
  extraError?: string;
}

export default function FormPractice() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.Password !== data.Password1) {
      setError(
        "Password1",
        { message: "Password is different" },
        { shouldFocus: true }
      );
      console.log(errors);
    }
    // setError("extraError", { message: "Server is offline" });
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/gm,
              message: "naver 메일만 가능합니다",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("First_Name", {
            required: "write here",
            // valideate는 하나의 함수, 또는 여러 함수를 포함하는 객체가 될 수 있다.
            validate: {
              noYuna: (value) =>
                value.includes("yuna") ? "yuna is not allowd" : true,
            },
          })}
          placeholder="Frist Name"
        />
        <span>{errors?.First_Name?.message}</span>
        <input
          {...register("Last_Name", { required: "write here" })}
          placeholder="Last Name"
        />
        <span>{errors?.Last_Name?.message}</span>
        <input
          {...register("Password", {
            required: "Password is required",
            minLength: 5,
          })}
          placeholder="Password"
        />
        <span>{errors?.Password?.message}</span>
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
        <span>{errors?.Password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message} </span>
      </form>
    </div>
  );
}
