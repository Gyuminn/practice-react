import React from "react";

const MyComponents = (props) => {
  console.log(props);
  return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
};

MyComponents.defaultProps = {
  name: "기본이름",
};
export default MyComponents;
