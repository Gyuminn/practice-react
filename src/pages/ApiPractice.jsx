import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiPractice = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
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
    </div>
  );
};

export default ApiPractice;
