import axios from "axios";
import React, { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, data: null, error: null };
    case "SUCCESS":
      return { loading: false, data: action.data, error: null };
    case "ERROR":
      return { loading: false, data: null, error: action.error };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const Users2 = () => {
  const initialState = {
    loading: false,
    data: null,
    error: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchUsers = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };
  useEffect(() => fetchUsers(), []);

  const { loading, data: users, error } = state;

  if (loading) return <div>로딩중입니다...</div>;
  if (error) return <div>에러가 발생하였습니다!</div>;
  if (!users) return null;
  return (
    <div>
      <span>Users2: 아래는 useReducer를 이용하여 API를 연동한 부분입니다!</span>
      {users.map((user, idx) => (
        <li key={idx}>{user.username}</li>
      ))}
      <button onClick={fetchUsers}>다시 불러오기</button>
    </div>
  );
};

export default Users2;
