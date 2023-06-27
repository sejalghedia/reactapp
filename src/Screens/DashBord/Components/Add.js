import React, { useState } from "react";
import { TextInputField } from "evergreen-ui";
import { RadioGroup } from "evergreen-ui";
import axios from "axios";

const Add = (props) => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [file, setFile] = useState([]);
  const [gender, setGender] = useState();
  const [active, setActive] = useState();

  function handleGenderChange(e) {
    console.log(e);
    const target = e.target;
    if (target.checked) {
      setGender(target.value);
    }
  }

  function handleActiveChange(e) {
    const target = e.target;
    if (target.checked) {
      setActive(target.value);
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
        console.log("inserted");
      })
      .catch((error) => {});
  };

  return (
    <>
      <div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              {/* <label htmlFor="inputName" className="col-sm-2 col-form-label">
                Name
              </label> */}
              <div className="col-sm-10">
                <TextInputField
                  label="Name"
                  required
                  type="text"
                  className="form-control"
                  id="inputName"
                  onChange={(e) => setEnterName(e.target.value)}
                />
              </div>
            </div>

            <div className="row mb-3">
              {/* <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                Email
              </label> */}
              <div className="col-sm-10">
                <TextInputField
                  label="Email"
                  required
                  type="Email"
                  className="form-control"
                  id="inputEmail"
                  onChange={(e) => setEnterEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                Add Image
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="file"
                  name="file"
                  id="formFile"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                {/* <img src={URL.createObjectURL(file)} alt="img" /> */}
              </div>
            </div>

            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">
                Select Gender
              </legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleGenderChange}
                  />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleGenderChange}
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Female
                  </label>
                </div>
              </div>
            </fieldset>

            <fieldset className="row mb-3">
              <legend className="col-form-label col-sm-2 pt-0">
                Select Status
              </legend>
              <div className="col-sm-10">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="active"
                    value={1}
                    onChange={handleActiveChange}
                  />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    Active
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="active"
                    value={0}
                    onChange={handleActiveChange}
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Unactive
                  </label>
                </div>
              </div>
            </fieldset>
            <button type="submit" className="btn btn-primary m-1">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Add;
