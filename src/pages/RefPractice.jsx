import React, { useRef } from "react";

const RefPractice = () => {
  //DOM을 꼭 사용해야 하는 상황
  //1. 특정 input에 포커스 주기
  //2. 스크롤 박스 조작하기
  //3. Canvas 요소에 그림 그리기 등
  // 이 밖에도 여러 경우가 있고, 어쩔 수 없이 DOM에 직접적으로 접근해야 할 때 ref를 사용한다.
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
};

export default RefPractice;
