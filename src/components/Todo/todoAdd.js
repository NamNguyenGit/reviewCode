import { useState } from "react";
import { Link } from "react-router-dom";
import { RouteBase } from "../../constants/routeUrl";

const TodoAdd = () => {
  //! state
  const [initialState] = useState({
    borderText: "Create new todo..",
  });

  //!functions

  //! return
  return (
    <>
      <div className="todoAdd__box">
        <Link className="todoAdd__box__link" to={RouteBase.Create}>
          <div className="todoAdd__box__text">{initialState.borderText}</div>
        </Link>
      </div>
    </>
  );
};

export default TodoAdd;
