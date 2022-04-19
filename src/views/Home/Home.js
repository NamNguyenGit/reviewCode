import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../../components/Todo/todoList";
import TodoAdd from "../../components/Todo/todoAdd";
import { fetchTodo } from "../../redux/modules/todo/actions";
import GetTodosSelector from "../../redux/selectors/getTodosSelector";

const Home = () => {
  //! Define
  const dispatch = useDispatch();
  const todos = GetTodosSelector();

  const { data, loading, error } = todos;

  //! State
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const [initialState] = useState({
    imageBanner: "/assets/images/mountain.jpg",
  });

  //! Functions

  //! Render
  return (
    <>
      <div className="home__container">
        <div className="home__todoAdd">
          <TodoAdd />
        </div>
        <div className="home__todoList">
          <TodoList todo={data} />
        </div>

        <div className="home__image">
          <LazyLoadImage src={initialState.imageBanner} alt="Banner" />
        </div>
      </div>
    </>
  );
};

export default Home;
