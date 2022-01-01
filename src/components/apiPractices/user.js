import axios from "axios";
import { useAsync } from "./useAsync";

const getUser = async () => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  return response.data;
};

export const User = ({ id }) => {
  const [state] = useAsync(() => getUser(id));
  // 어떻게 id를 넘길 수 있는지 고민을 해보자.
  // 구조분해 할당에 대해서 더 공부하기
};
