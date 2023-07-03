import React from "react";
import { Link } from "react-router-dom";
import { Pane, Tablist, Tab } from "evergreen-ui";

const DeshBord = () => {
  return (
    <>
      <Pane display="flex" height={580} width={250}>
        <Tablist
          style={{ overflowY: "auto" }}
          marginBottom={16}
          flexBasis={240}
          marginRight={24}
          paddingX={15}
        >
          <Link to="/">
            <Tab marginBottom={10} marginTop={10} direction="vertical">
              ADD
            </Tab>
          </Link>
          {/* <Link to="/Edit">
            <Tab marginBottom={10} marginTop={10} direction="vertical">
              EDIT
            </Tab>
          </Link> */}
          <Link to="/View">
            <Tab marginBottom={10} marginTop={10} direction="vertical">
              VIEW
            </Tab>
          </Link>
          <Link to="/Delete">
            <Tab marginBottom={10} marginTop={10} direction="vertical">
              DELETE
            </Tab>
          </Link>
          <Tab marginBottom={10} marginTop={10} direction="vertical">
            All USERS
          </Tab>
          <Tab marginBottom={10} marginTop={10} direction="vertical">
            MALE
          </Tab>
          <Tab marginBottom={10} marginTop={10} direction="vertical">
            FEMALE
          </Tab>
          <Tab marginBottom={10} marginTop={10} direction="vertical">
            PRODUCTS
          </Tab>
          <Tab marginBottom={10} marginTop={10} direction="vertical">
            ACCOUNT
          </Tab>
          <Tab marginBottom={10} marginTop={10} direction="vertical">
            APPLICATION
          </Tab>
          <Tab marginBottom={10} marginTop={10} direction="vertical">
            COMPONENTS
          </Tab>
          <Tab marginBottom={10} marginTop={10} direction="vertical">
            FOUNDATION
          </Tab>
          <Tab marginBottom={10} marginTop={10} direction="vertical">
            DATA
          </Tab>
          <Tab marginBottom={10} marginTop={10} direction="vertical">
            APPLICATION
          </Tab>
          <Tab marginBottom={10} marginTop={10} direction="vertical">
            COMPONENTS
          </Tab>
          <Tab marginBottom={10} marginTop={10} direction="vertical">
            FOUNDATION
          </Tab>
          <Tab marginBottom={10} marginTop={10} direction="vertical">
            DATA
          </Tab>
        </Tablist>
      </Pane>
    </>
  );
};
export default DeshBord;
