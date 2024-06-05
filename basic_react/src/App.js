import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import FormFormik from './components/FormikForm';
import FetchDetails from './components/FetchDetails';
import HooksForm from './components/HooksForm';
import ThemeProject from './components/ThemeProject';
import { ThemeProvider } from './ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
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
              <li>
                <Link to="/theme">Theme Project</Link>
              </li>
            </ul>
          </nav>
        </main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/form"
            element={
              <Form
                style={{
                  margin: '0',
                  padding: '0',
                  boxSizing: 'border-box',
                }}
              />
            }
          />
          <Route path="/formik" element={<FormFormik />} />
          <Route path="/json" element={<FetchDetails />} />
          <Route path="/hookform" element={<HooksForm />} />
          <Route path="/theme" element={<ThemeProject />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
