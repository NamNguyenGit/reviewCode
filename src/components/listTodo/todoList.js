import { Checkbox } from "antd";
import { useState, useEffect } from "react";
import TodoDetail from "./todoDetail";
import { Link } from "react-router-dom";

const TodoList = ({ todo }) => {
  //!define

  //!state

  //!functions

  //!render
  return (
    <>
      <div className="todoList__container">
        {todo &&
          todo.map((item, index) => (
            <div key={index} className="todoList__item">
              <div className="todoList__item__check">
                {item.completed ? <Checkbox checked /> : <Checkbox />}
              </div>
              <Link
                className="todoList__item__link"
                to={`/todoDetail/${item.id}`}
              >
                <div
                  className={
                    item.completed === true
                      ? "todoList__item__completed"
                      : "todoList__item__text"
                  }
                >
                  {item.title}
                </div>
              </Link>
            </div>
          ))}
        <div className="todoList__footer">{todo.length} items left</div>
      </div>
    </>
  );
};

export default TodoList;
