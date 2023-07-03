import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Pane,
  TextInputField,
  FilePicker,
  RadioGroup,
  Button,
  Small,
} from "evergreen-ui";

const Edit = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [error, setError] = useState([]);
  let { id } = useParams();

  const [selectGender] = useState([
    { label: "male", value: "male" },
    { label: "female", value: "female" },
  ]);
  const [selectStatus] = useState([
    { label: "true", value: "1" },
    { label: "false", value: "0" },
  ]);

  const getUserData = () => {
    axios
      .get(`http://laravelcrud.artixun.com/api/users/${id}`)
      .then((response) => {
        setUser(response.data.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getUserData();
  }, []);

  function handleGenderChange(e) {
    if (e.target.checked) {
      setUser({ ...user, gender: e.target.value });
    }
  }

  function handleActiveChange(e) {
    if (e.target.checked === true) {
      setUser({ ...user, active: e.target.value });
    }
  }

  const handleImgChange = (e) => {
    let url = URL.createObjectURL(e.target.files[0]);
    setUser({ ...user, avatar: url });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("id", user.id);
    data.append("name", user.name);
    data.append("email", user.email);
    data.append("gender", user.gender);
    // data.append("avatar", user.avatar);
    data.append("active", user.active);
    data.append("_method", "put");

    axios
      .post(`http://laravelcrud.artixun.com/api/users/${user.id}`, data)
      .then((response) => {
        if (response.status === 200) {
          let allData = response.data.data;
          setUser(allData);
          alert("Updated successfully.");
          navigate("/View");
        }
      })
      .catch((error) => {
        if (error.response.status === 422) {
          setError(error.response.data.errors);
        }
      });
  };

  if (!user) {
    return null;
  }

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
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <Small color="red">{error.name}</Small>
      </Pane>

      <Pane marginBottom={20}>
        <TextInputField
          label="Email"
          required
          type="Email"
          className="form-control"
          id="inputEmail"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <Small color="red">{error.email}</Small>
      </Pane>

      <Pane marginBottom={20}>
        Image
        <FilePicker
          marginY={10}
          multiple
          width={250}
          placeholder={user.avatar.toString()}
          onChange={(e) => handleImgChange(e)}
        />
        <Small color="red">{error.avatar}</Small>
      </Pane>

      <Pane marginBottom={20}>
        {"Gender"}
        <RadioGroup
          size={16}
          value={user.gender}
          options={selectGender}
          onChange={(e) => {
            handleGenderChange(e);
          }}
        />
        <Small color="red">{error.gender}</Small>
      </Pane>

      <Pane role="group" marginBottom={20}>
        Status
        <RadioGroup
          size={16}
          value={user.active.toString()}
          options={selectStatus}
          onChange={(e) => {
            handleActiveChange(e);
          }}
        />
        <Small color="red">{error.active}</Small>
      </Pane>

      <Pane marginBottom={20}>
        <Button onClick={handleUpdate}>Update</Button>
      </Pane>
    </Pane>
  );
};
export default Edit;
