import axios from "axios";
import { useAsync } from "./useAsync";

const getUser = async (id) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  return response.data;
};

export const Users3 = ({ id }) => {
  console.log(id);
  const [state] = useAsync(() => getUser(id), [id]);
  const { loading, data: user, error } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생하였습니다!</div>;
  if (!user) return null;

  return (
    <div>
      <span>아래는 UsersByParameter의 하위 컴포넌트인 Users3 부분입니다.</span>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
    </div>
  );
  // 어떻게 id를 넘길 수 있는지 고민을 해보자.
  // 구조분해 할당에 대해서 더 공부하기
};
