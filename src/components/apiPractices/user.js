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
};
