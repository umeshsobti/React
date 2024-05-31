import { useFormik } from "formik";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const initialValues = {
  name: "",
  email: "",
  age: "",
  phone: "",
  password: "",
  cpassword: "",
  date: "",
};
const CustomInput = ({ value, onClick }) => (
  <input
    type="text"
    value={value}
    onClick={onClick}
    readOnly
    placeholder="Select Date"
  />
);
const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (!/^[A-Za-z]{4,15}$/.test(values.name)) {
    errors.name = "Invalid Name";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (
    !/^[0-9a-zA-Z]{4,15}[@][a-zA-Z]{4,10}[.][com]/.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!values.age) {
    errors.age = "Required";
  } else if (!/^[0-9]{1,2}$/.test(values.age) || parseInt(values.age) < 18) {
    errors.age = "Invalid Age Format or Age exceed 18.";
  }
  if (!values.phone) {
    errors.phone = "Required";
  } else if (!/^[0-9]{10}$/.test(values.phone)) {
    errors.phone = "Invald Phone Number";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()-_+=]{8,}$/.test(
      values.password
    )
  ) {
    errors.password = "Invalid password format";
  }
  if (!values.cpassword) {
    errors.cpassword = "Required";
  } else if (values.password !== values.cpassword) {
    errors.cpassword = "Confirm password does not match with password";
  }
  return errors;
};
function FormFormik() {
  const { values, handleChange, handleSubmit, handleBlur, errors } = useFormik({
    initialValues: initialValues,
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const[startDate , setStartDate] = useState(new Date())
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name ? <div style={{ color: "red" }}>{errors.name}</div> : null}
        <br /> <br />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email ? (
          <div style={{ color: "red" }}>{errors.email}</div>
        ) : null}
        <br /> <br />
        <label htmlFor="age">Age: </label>
        <input
          type="text"
          name="age"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.age ? <div style={{ color: "red" }}>{errors.age}</div> : null}
        <br /> <br />
        <label htmlFor="phone">Phone: </label>
        <input
          type="text"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        {errors.phone ? (
          <div style={{ color: "red" }}>{errors.phone}</div>
        ) : null}
        <br /> <br />
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        {errors.password ? (
          <div style={{ color: "red" }}>{errors.password}</div>
        ) : null}
        <br /> <br />
        <label htmlFor="cpassword">Confirm Password</label>
        <input
          type="text"
          name="cpassword"
          value={values.cpassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />{" "}
        {errors.cpassword ? (
          <div style={{ color: "red" }}>{errors.cpassword}</div>
        ) : null}
        <br /> <br />
        <label htmlFor="date">Date: </label>
        <DatePicker selected={startDate} onChange={(date)=> setStartDate(date)} customInput={<CustomInput />}></DatePicker>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default FormFormik;
