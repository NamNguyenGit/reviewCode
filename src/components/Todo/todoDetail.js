import { Field, Formik, Form } from "formik";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import InputFields from "../input-fields/InputField";
import * as Yup from "yup";
import { Button } from "antd";
import { fetchTodoDetail } from "../../redux/modules/actions";

//!validate
const validateSchema = Yup.object().shape({
  title: Yup.string().required(<span>Title is required</span>),
});

const TodoDetail = () => {
  //!define
  const { id } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();
  //!status
  const isEdit = !!id;

  const [todoDetailItem, setTodoDetailItem] = useState();
  // useEffect(() => {
  //   if (id) {
  //     const todoItem = todo.find((item) => item.id === Number(id));
  //     setTodoDetailItem(todoItem);
  //     console.log("todoItem", todoItem);
  //   } else {
  //     setTodoDetailItem(todo);
  //   }
  // }, [id]);
  useEffect(() => {
    const todo = dispatch(fetchTodoDetail(id));
    setTodoDetailItem(todo);
    console.log("todoDetailItem",todoDetailItem);
  }, [id]);

  //!functions
  const handleOnClick = () => {
    history.push("/");
  };

  //!render
  return (
    <Formik
      validateOnChange={true}
      validateOnBlur={true}
      validationSchema={validateSchema}
      enableReinitialize
      initialValues={{
        title: todoDetailItem?.title || "",
      }}
      onSubmit={(values, helperFormik) => {
        console.log(values);
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
            {/* <Field as="select" name="status">
                <option value="true">Completed</option>
                <option value="false">Not Completed</option>
              </Field> */}
            <div>
              <ul>
                <li>{helperFormik.errors["title"]}</li>
              </ul>
            </div>
            <Button onClick={handleOnClick} type="primary">
              {isEdit ? "Submit" : "Add"}
            </Button>{" "}
            <Button onClick={handleOnClick} type="primary">
              Go Back
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default TodoDetail;
