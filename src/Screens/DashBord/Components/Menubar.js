import React from "react";
import { Pane, Tablist, Tab, Text } from "evergreen-ui";
import { Link } from "react-router-dom";
const Menubar = () => {
  return (
    <>
      <Pane marginTop={16}>
        <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
          <Text marginLeft={100} marginRight={100}>
            <b> U-DATA</b>
          </Text>
          <Link to="/">
            <Tab>ADD</Tab>
          </Link>
          {/* <Link to="/Edit">
            <Tab>EDIT</Tab>
          </Link> */}
          <Link to="/View">
            <Tab>VIEW</Tab>
          </Link>
          <Link to="/Delete">
            <Tab>DELETE</Tab>
          </Link>
        </Tablist>
        <hr
          style={{
            color: "lightgray",
            height: "2px",
          }}
        ></hr>
      </Pane>
    </>
  );
};
export default Menubar;
