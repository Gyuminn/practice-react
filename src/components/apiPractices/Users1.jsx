import axios from "axios";
import React, { useEffect, useState } from "react";

const Users1 = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setError(null);
      setUsers(null);

      //loading 상태는 true로 변경
      setLoading(true);
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다!</div>;
  if (!users) return null;

  return (
    <div>
      {users.map((user, idx) => (
        <li key={idx}>{user.username}</li>
      ))}
      <button onClick={fetchUsers}>다시 불러오기</button>
    </div>
  );
};

export default Users1;
