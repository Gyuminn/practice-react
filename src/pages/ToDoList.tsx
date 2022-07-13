import React, { useState } from "react";

export default function ToDoList() {
  const [value, setValue] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };
  return (
    <div>
      <form>
        <input value={value} onChange={onChange} placeholder="todo"></input>
        <button>Add</button>
      </form>
    </div>
  );
}
