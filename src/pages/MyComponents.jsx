import React from "react";
import PropTypes from "prop-types";

const MyComponents = ({ name, favoriteNumber }) => {
  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다.
      <br />
      제가 제일 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};

MyComponents.defaultProps = {
  name: "기본이름",
};

MyComponents.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponents;
