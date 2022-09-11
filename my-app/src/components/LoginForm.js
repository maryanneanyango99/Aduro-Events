import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"

import "./LoginForm.css"

function LoginForm({ onLogin, status })  {
  const isLoginLoading = false
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Email not valid")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(8, "Password is too short - should be 8 chars minimum."),
    }),
    onSubmit: (values) => {
      //call method to login here

      onLogin(values)
      //alert(JSON.stringify(values, null, 2));
    },
  })

  return (
    <React.Fragment>
      <div className="container">
        <div className="login-wrapper login">
          <h2>Login Page</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className={"form-control"}
                placeholder="Email"
                autoComplete="username"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <span className="help-block text-danger">
                  {formik.errors.email}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className={"form-control"}
                placeholder="Password"
                autoComplete="current-password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <span className="help-block text-danger">
                  {formik.errors.password}
                </span>
              )}
            </div>
            <div className="mt-3">
              <button
                type="submit"
                className="btn btn-success"
                disabled={isLoginLoading}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default LoginForm