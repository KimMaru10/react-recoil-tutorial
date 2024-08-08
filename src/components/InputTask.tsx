import "./InputTask.css";
import { useRecoilState } from "recoil"; //atom에 데이터를 가져오기 위해 필요
import React, { useCallback } from "react";
import { inputTitleState } from "../states/inputTitleState";
import { addTitleState } from "../states/addTitleState";
const InputTask = () => {
  const [inputTitle, setIntputTitle] = useRecoilState(inputTitleState);
  const [addTitle, setAddTitle] = useRecoilState(addTitleState);

  const getKey = () => Math.random().toString(32).substring(2);
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIntputTitle(e.target.value);
      console.log(inputTitle);
    },
    [inputTitle]
  );

  const handleClick = () => {
    setAddTitle([...addTitle, { id: getKey(), title: inputTitle }]);
    setIntputTitle("");
  };

  return (
    <div className="inputField">
      <input
        type="text"
        className="inputTitle"
        onChange={onChange}
        value={inputTitle}
      />
      <button type="button" className="addButton" onClick={handleClick}>
        추가
      </button>
    </div>
  );
};

export default InputTask;
