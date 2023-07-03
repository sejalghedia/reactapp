import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Pane,
  Small,
  TextInputField,
  RadioGroup,
  Button,
  Text,
  FilePicker,
} from "evergreen-ui";

const Add = (props) => {
  const navigate = useNavigate();

  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [file, setFile] = useState([]);
  const [gender, setGender] = useState("null");
  const [active, setActive] = useState("null");
  const [error, setError] = useState([]);

  const [selectGender] = useState([
    { label: "male", value: "male" },
    { label: "female", value: "female" },
  ]);
  const [selectStatus] = useState([
    { label: "true", value: "1" },
    { label: "false", value: "0" },
  ]);

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
        if (response.status === 200) {
          alert("Saved successfully.");
          navigate("/View");
        }
      })
      .catch((error) => {
        if (error.response.status === 422) {
          setError(error.response.data.errors);
        }
      });
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
      <Pane marginBottom={20}>
        <TextInputField
          label="Name"
          width={500}
          required
          type="text"
          className="form-control"
          id="inputName"
          onChange={(e) => setEnterName(e.target.value)}
        />
        <Text color="red">{error.name}</Text>
      </Pane>

      <Pane marginBottom={20}>
        <TextInputField
          label="Email"
          required
          type="Email"
          className="form-control"
          id="inputEmail"
          onChange={(e) => setEnterEmail(e.target.value)}
        />
        <Small color="red">{error.email}</Small>
      </Pane>

      <Pane marginBottom={20}>
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
        <Small color="red">{error.avatar}</Small>
      </Pane>

      <Pane marginBottom={20}>
        {"Gender"}
        <RadioGroup
          size={16}
          value={gender}
          options={selectGender}
          onChange={handleGenderChange}
        />
        <Small color="red">{error.gender}</Small>
      </Pane>

      <Pane marginBottom={20}>
        {"Status"}
        <RadioGroup
          size={16}
          value={active}
          options={selectStatus}
          onChange={handleActiveChange}
        />
        <Small color="red">{error.active}</Small>
      </Pane>

      <Pane marginBottom={20}>
        <Button onClick={handleSubmit}>add</Button>
      </Pane>
    </Pane>
  );
};
export default Add;
