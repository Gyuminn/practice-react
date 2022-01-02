import axios from "axios";
import React, { useState } from "react";
import { useAsync } from "./useAsync";
import { Users3 } from "./Users3";

const getUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  return response.data;
};

const UsersByParameter = () => {
  const [userId, setUserId] = useState(null);
  const [state, refetch] = useAsync(getUsers, [], true);

  const { loading, data: users, error } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생하였습니다!</div>;
  if (!users) return <button onClick={refetch}>유저 정보 불러오기</button>;

  return (
    <div>
      <span>
        UsersByParameter: 아래 부분은 useAsync customHook을 이용하고, id를
        가져와서 하위 컴포넌트인 'Users3'에 넘겨줍니다. 이를 이용하여 user를
        클릭하면 그에 대한 정보를 가져옵니다.
      </span>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: "pointer", color: "coral" }}
          >
            {user.name} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시 불러오기</button>
      {userId && <Users3 id={userId} />}
    </div>
  );
};

export default UsersByParameter;
