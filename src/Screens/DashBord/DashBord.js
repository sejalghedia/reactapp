import { useState } from "react";
import React from "react";

import Add from "./Components/Add";
import Edit from "./Components/Edit";
import Delete from "./Components/Delete";
import View from "./Components/View";
import { Pane, Tablist, Tab, Text } from "evergreen-ui";

const DeshBord = () => {
  const [activeTab, setActiveTab] = useState("ADD");

  const handleAdd = () => {
    setActiveTab("ADD");
  };
  const handleEdit = () => {
    setActiveTab("EDIT");
  };
  const handleView = () => {
    setActiveTab("VIEW");
  };
  const handleDelete = () => {
    setActiveTab("DELETE");
  };

  return (
    <Pane marginTop={16} height={120}>
      <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
        <Text marginLeft={100} marginRight={100}>
          <b> U-DATA</b>
        </Text>
        <Tab
          className={activeTab === "ADD" ? "active" : ""}
          onSelect={handleAdd}
        >
          ADD
        </Tab>
        <Tab
          className={activeTab === "EDIT" ? "active" : ""}
          onSelect={handleEdit}
        >
          EDIT
        </Tab>
        <Tab
          className={activeTab === "VIEW" ? "active" : ""}
          onSelect={handleView}
        >
          VIEW
        </Tab>
        <Tab
          className={activeTab === "DELETE" ? "active" : ""}
          onSelect={handleDelete}
        >
          DELETE
        </Tab>
      </Tablist>
      <hr
        style={{
          background: "lightgray",
          color: "lightgray",
          borderColor: "lightgray",
          height: "3px",
        }}
      ></hr>
      <Pane display="flex" height={600}>
        <Tablist
          style={{ overflowY: "auto" }}
          marginBottom={16}
          flexBasis={240}
          marginRight={24}
        >
          <Tab
            direction="vertical"
            className={activeTab === "ADD" ? "active" : ""}
            onSelect={handleAdd}
          >
            ADD
          </Tab>
          <Tab
            direction="vertical"
            className={activeTab === "EDIT" ? "active" : ""}
            onSelect={handleEdit}
          >
            EDIT
          </Tab>
          <Tab
            direction="vertical"
            className={activeTab === "VIEW" ? "active" : ""}
            onSelect={handleView}
          >
            VIEW
          </Tab>
          <Tab
            direction="vertical"
            className={activeTab === "DELETE" ? "active" : ""}
            onSelect={handleDelete}
          >
            DELETE
          </Tab>
          <Tab direction="vertical">a</Tab>
          <Tab direction="vertical">a</Tab>
          <Tab direction="vertical">a</Tab>
          <Tab direction="vertical">a</Tab>
          <Tab direction="vertical">a</Tab>
          <Tab direction="vertical">a</Tab>
          <Tab direction="vertical">a</Tab>
          <Tab direction="vertical">a</Tab>
          <Tab direction="vertical">a</Tab>
          <Tab direction="vertical">a</Tab>
          <Tab direction="vertical">a</Tab>
          <Tab direction="vertical">a</Tab>
          <Tab direction="vertical">a</Tab>
        </Tablist>
        <Pane padding={30}>
          {activeTab === "ADD" ? (
            <Add />
          ) : activeTab === "EDIT" ? (
            <Edit />
          ) : activeTab === "VIEW" ? (
            <View />
          ) : (
            <Delete />
          )}
        </Pane>
      </Pane>
    </Pane>
  );
};
export default DeshBord;
