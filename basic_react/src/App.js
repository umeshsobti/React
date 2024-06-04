import Form from "./components/Form.js";
import FormFormik from "./components/FormikForm.js";
import Home from "./components/Home.js";
import FetchDetails from "./components/FetchDetails.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HooksForm from "./components/HooksForm.js";
function App() {
  return (
      <Router>
        <main>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/form">Simple Form Validations</Link>
              </li>
              <li>
                <Link to="/formik">Formik Form</Link>
              </li>
              <li>
                <Link to="/json">Fetch Details From Json</Link>
              </li>
              <li>
                <Link to="/hookform">Form Using Hooks</Link>
              </li>
            </ul>
          </nav>
        </main>
        <Routes>
        <Route path="/" element={<Home></Home>} />
          <Route
            path="/form"
            element={
              <Form
                style={{
                  margin: "0",
                  padding: "0",
                  boxSizing: "border-box",
                }}
              />
            }
          ></Route>
          <Route path="/formik" element={<FormFormik />}></Route>
          <Route path="/json" element={<FetchDetails/>}></Route>
          <Route path="/hookform" element={<HooksForm/>}></Route>
        </Routes>
      </Router>
  );
}
export default App;
