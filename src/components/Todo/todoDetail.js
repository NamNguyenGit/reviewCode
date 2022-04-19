import { Field, Formik, Form } from "formik";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import InputFields from "../input-fields/InputField";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { fetchTodoDetail, createTodo } from "../../redux/modules/todo/actions";
import { MDBBtn } from "mdb-react-ui-kit";
import GetTodoDetailSelector from "../../redux/selectors/getTodoDetailSelector";

//! Validate
const validateSchema = Yup.object().shape({
  userId: Yup.string().required(<span>User Id is required</span>),
  id: Yup.string().required(<span>Id is required</span>),
  title: Yup.string().required(<span>Title is required</span>),
});

const TodoDetail = () => {
  //! Define
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const todo = GetTodoDetailSelector();
  const { data, loading, error } = todo;

  console.log("todo", todo);

  //! Status
  const isEdit = !!id;

  useEffect(() => {
    dispatch(fetchTodoDetail({ id }));
  }, []);

  //! Functions
  const handleOnClick = () => {
    history.push("/");
  };

  //! Render
  if (loading) {
    return "Loading...";
  }

  return (
    <div className="todoDetail__container">
      <div className="todoDetail__formik">
        <Formik
          validateOnChange={true}
          validateOnBlur={true}
          validationSchema={validateSchema}
          enableReinitialize
          initialValues={{
            userId: data?.userId || "",
            id: data?.id || "",
            title: data?.title || "",
            completed: data?.completed || true,
          }}
          onSubmit={(values, helperFormik) => {
            if (isEdit) {
            } else {
              dispatch(createTodo(values));
              toast.success("User Add Success");
              setTimeout(() => history.push("/"), 500);
            }
          }}
        >
          {(helperFormik) => {
            return (
              <Form className="todoDetail__formik__form">
                <Field
                  className="todoDetail__formik__input"
                  component={InputFields}
                  name="userId"
                  type="number"
                  placeholder="User ID"
                />
                <Field
                  className="todoDetail__formik__input"
                  component={InputFields}
                  name="id"
                  type="number"
                  placeholder="ID"
                />
                <Field
                  className="todoDetail__formik__input"
                  component={InputFields}
                  name="title"
                  type="text"
                  placeholder="Title"
                />
                <Field
                  className="todoDetail__formik__input"
                  as="select"
                  name="completed"
                >
                  <option value={true}>Completed</option>
                  <option value={false}>Not Completed</option>
                </Field>
                <div>
                  <ul>
                    <li className="todoDetail__formik__li">
                      {helperFormik.errors["userId"]}
                    </li>
                    <li className="todoDetail__formik__li">
                      {helperFormik.errors["id"]}
                    </li>
                    <li className="todoDetail__formik__li">
                      {helperFormik.errors["title"]}
                    </li>
                  </ul>
                </div>
                <MDBBtn type="submit">{isEdit ? "Submit" : "Add"}</MDBBtn>{" "}
                <MDBBtn onClick={handleOnClick} color="danger">
                  Go Back
                </MDBBtn>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default TodoDetail;
