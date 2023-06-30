import React, { useState } from "react";
import { Pane, TextInputField } from "evergreen-ui";
import { RadioGroup, Button } from "evergreen-ui";
import { FilePicker } from "evergreen-ui";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = (props) => {
  const navigate = useNavigate();

  const [selectGender] = useState([
    { label: "male", value: "male" },
    { label: "female", value: "female" },
  ]);
  const [selectStatus] = useState([
    { label: "active", value: "0" },
    { label: "unactive", value: "1" },
  ]);

  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [file, setFile] = useState([]);
  const [gender, setGender] = useState("male");
  const [active, setActive] = useState("0");

  function handleGenderChange(e) {
    if (e.target.checked) {
      setGender(e.target.value);
    }
  }

  function handleActiveChange(e) {
    if (e.target.checked) {
      setActive(e.target.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", enterName);
    data.append("email", enterEmail);
    data.append("gender", gender);
    data.append("avatar", file);
    data.append("active", active);

    axios
      .post(`http://laravelcrud.artixun.com/api/users`, data)
      .then((response) => {
        alert("Saved successfully.");
        navigate("/View");
      })
      .catch((error) => {});
  };

  return (
    <Pane
      elevation={4}
      float="left"
      padding={25}
      borderRadius={20}
      margin={24}
      justifyContent="center"
      flexDirection="column"
    >
      <Pane>
        <TextInputField
          label="Name"
          width={500}
          required
          type="text"
          className="form-control"
          id="inputName"
          onChange={(e) => setEnterName(e.target.value)}
        />
      </Pane>

      <Pane>
        <TextInputField
          label="Email"
          required
          type="Email"
          className="form-control"
          id="inputEmail"
          onChange={(e) => setEnterEmail(e.target.value)}
        />
      </Pane>

      <Pane>
        Image
        <FilePicker
          marginY={10}
          multiple
          width={250}
          onChange={(files) => {
            setFile(files[0]);
          }}
          placeholder="Select the file here!"
        />
      </Pane>

      <Pane>
        {"Gender"}
        <RadioGroup
          size={16}
          value={gender}
          options={selectGender}
          onChange={handleGenderChange}
        />
      </Pane>

      <Pane>
        {"Status"}
        <RadioGroup
          size={16}
          value={active}
          options={selectStatus}
          onChange={handleActiveChange}
        />
      </Pane>

      <Pane>
        <Button onClick={handleSubmit}>add</Button>
      </Pane>
    </Pane>
  );
};
export default Add;
