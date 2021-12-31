import React from "react";
import CustomHook from "../components/apiPractices/CustomHook";
import Users1 from "../components/apiPractices/Users1";
import Users2 from "../components/apiPractices/Users2";
import UsersByParameter from "../components/apiPractices/UsersByParameter";

const ApiPractice = () => {
  return (
    <div>
      <Users1 />
      <Users2 />
      <CustomHook />
      <UsersByParameter />
    </div>
  );
};

export default ApiPractice;
