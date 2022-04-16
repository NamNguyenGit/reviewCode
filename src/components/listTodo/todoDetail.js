import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import InputFields from "../input-fields/InputField";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";

//!validate
const validateSchema = Yup.object().shape({
  title: Yup.string().required(<span>Title is required</span>),
});

const TodoDetail = () => {
  //!define
  const { id } = useParams();
  const { todo } = useSelector((state) => state.data);
  //!states
  const [todoDetailItem, setTodoDetailItem] = useState(todo);
  useEffect(() => {
    if (id) {
      const todoItem = todo.find(todo.id === id);
      setTodoDetailItem(todoItem);
    }
  }, [id]);

  //!functions

  //!render
  return (
    <>
      <Formik
        validateOnChange={true}
        validateOnBlur={true}
        validationSchema={validateSchema}
        enableReinitialize
        initialValues={{
          title: "",
        }}
      >
        {(helperFormik) => {
          return (
            <Form>
              <Field
                component={InputFields}
                name="title"
                type="text"
                placeholder="Title"
              />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default TodoDetail;
