import { useState } from "react";
import { Checkbox } from "antd";

const TodoAdd = () => {
  //! state
  const [initialState] = useState({
    borderText: "Create new todo..",
  });

  //!functions
  const onChange = () => {
    alert("2");
  };

  //! return
  return (
    <>
      <div className="todoAdd__box">
        <div className="todoAdd__box__check">
          <Checkbox onChange={onChange} />
        </div>
        <div className="todoAdd__box__text">{initialState.borderText}</div>
      </div>
    </>
  );
};

export default TodoAdd;
