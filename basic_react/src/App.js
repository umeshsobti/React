import Form from "./components/Form.js";
import FormFormik from "./components/FormikForm.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
      <Router>
        <main>
          <nav>
            <ul>
              <li>
                <Link to="/form">Simple Form Validations</Link>
              </li>
              <li>
                <Link to="/formik">Formik Form</Link>
              </li>
            </ul>
          </nav>
        
        </main>
        <Routes>
          <Route
            path="/form"
            element={
              <Form
                
              />
            }
          ></Route>
          <Route path="/formik" element={<FormFormik />}></Route>
        </Routes>
      </Router>
  );
}
export default App;
