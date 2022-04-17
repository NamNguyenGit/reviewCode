import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch, useSelector } from "react-redux";
import TodoList from "../../components/Todo/todoList";
import TodoAdd from "../../components/Todo/todoAdd";
import { fetchTodo } from "../../redux/modules/actions";

const Home = () => {
  //!define
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state.data);

  //!state
  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  

  //! state
  const [initialState] = useState({
    imageBanner: "/assets/images/mountain.jpg",
  });

  //! return
  return (
    <>
      <div className="home__container">
        <div className="home__todoAdd">
          <TodoAdd />
        </div>
        <div className="home__todoList">
          <TodoList todo={todo} />
        </div>

        <div className="home__image">
          <LazyLoadImage src={initialState.imageBanner} alt="Banner" />
        </div>
      </div>
   
    </>
  );
};

export default Home;
