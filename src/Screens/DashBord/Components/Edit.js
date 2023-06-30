import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  Pane,
  TextInputField,
  FilePicker,
  RadioGroup,
  Button,
} from "evergreen-ui";
import axios from "axios";

const Edit = () => {
  const [selectGender] = useState([
    { label: "male", value: "male" },
    { label: "female", value: "female" },
  ]);
  const [selectStatus] = useState([
    { label: "active", value: "0" },
    { label: "unactive", value: "1" },
  ]);
  const [user, setUser] = useState();
  let { id } = useParams();

  const getUserData = () => {
    axios
      .get(`http://laravelcrud.artixun.com/api/users/${id}`)
      .then((response) => {
        // console.log("response=", response);
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
    if (e.target.checked) {
      setUser({ ...user, active: e });
    }
  }

  // const handleUpdate = (e) => {
  //   e.preventDefault();
  //   const data = new FormData();
  //   data.append("id", user.id);
  //   data.append("name", user.name);
  //   data.append("email", user.email);
  //   data.append("gender", user.gender);
  //   // data.append("avatar", user.file);
  //   data.append("active", user.active);
  //   data.append("_method", "put");

  //   axios
  //     .post(`http://laravelcrud.artixun.com/api/users/${user.id}`, data)
  //     .then((response) => {
  //       let allData = response.data.data;
  //       setUser(allData);
  //       console.log("updated");
  //     })
  //     .catch((error) => {});
  // };

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
      <Pane>
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
      </Pane>

      <Pane>
        <TextInputField
          label="Email"
          required
          type="Email"
          className="form-control"
          id="inputEmail"
          value={user.email}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </Pane>

      <Pane>
        Image
        <FilePicker
          marginY={10}
          multiple
          width={250}
          // value={user.avatar}
          // onChange={(files) => {
          //   setFile(files[0]);
          // }}
          placeholder="Select the file here!"
        />
      </Pane>

      <Pane>
        {"Gender"}
        <RadioGroup
          size={16}
          value={user.gender}
          options={selectGender}
          onChange={(e) => {
            handleGenderChange(e);
          }}
        />
      </Pane>

      <Pane role="group">
        <RadioGroup
          size={16}
          // value={user.active}
          options={selectStatus}
          onChange={(e) => {
            handleActiveChange(e);
          }}
        />
      </Pane>

      <Pane>
        <Button
        // onClick={handleUpdate}
        >
          Update
        </Button>
      </Pane>
    </Pane>
  );
};
export default Edit;
