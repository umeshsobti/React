import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import PersonIcon from "@mui/icons-material/Person";
import MailLockSharpIcon from "@mui/icons-material/MailLockSharp";
import styles from "./Form.module.css";
function Form() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit() {
    if (name.length < 4) {
      alert("Name is Invalid");
    }
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(name)) {
      alert("Name can contain only alphabets.");
    }

    const ageRegex = /^[0-9]{1,2}$/;
    if (!ageRegex.test(age)) {
      alert(
        "Age Can not contain alphabets and it can contain maximum 2 digits"
      );
    }

    const emailRegex = /^[A-Za-z0-9.]{4,}[@][A-Za-z0-9.]+[.]com$/;

    if (!emailRegex.test(email)) {
      alert("Invalid Email Format");
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,20}$/;
    if (!passwordRegex.test(password)) {
      alert("Password Format does not match");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{ backgroundColor: "#f0f0f0", height: "100vh" }}
        className={styles.parent}
      >
        '
        <div className={styles.inner_box}>
          <h1 className={styles.heading}>React Form</h1>

          <div className={styles.parent}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <PersonIcon style={{ marginRight: "10px" }} />
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <br /> <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <PersonIcon style={{ marginRight: "10px" }} />
              <TextField
                id="standard-basic"
                label="Age"
                variant="standard"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <br /> <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <EmailSharpIcon style={{ marginRight: "10px" }}></EmailSharpIcon>
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br /> <br />
            <div style={{ display: "flex", alignItems: "center" }}>
              <MailLockSharpIcon style={{ marginRight: "10px" }} />
              <TextField
                id="standard-basic"
                label="Password"
                variant="standard"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br /> <br />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </Box>
    </form>
  );
}

export default Form;
