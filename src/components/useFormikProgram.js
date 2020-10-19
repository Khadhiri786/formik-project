import React from "react";
import { useFormik } from "formik";
import "./App.css";
const initialValues = {
  name: "",
  email: "",
  password: "",
};
const onSubmit = (Values) => {
  console.log(Values);
};
const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "Name is Required";
  }
  if (!values.email) {
    errors.email = "E-mail is Required";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.email
    )
  ) {
    errors.email = "Incorrect e-mail";
  }

  if (!values.password) {
    errors.password = "Password is Required";
  }

  return errors;
};
const useFormikProgram = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log(formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="form-error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label>E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="form-error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="form-error">{formik.errors.password}</div>
          ) : null}
        </div>
        <button type="submit">submit</button>{" "}
      </form>
    </div>
  );
};
export default useFormikProgram;
