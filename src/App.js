import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Add from "./Screens/DashBord/Components/Add";
import Edit from "./Screens/DashBord/Components/Edit";
import View from "./Screens/DashBord/Components/View";
import Delete from "./Screens/DashBord/Components/Delete";
import { Pane } from "evergreen-ui";

import DashBord from "./Screens/DashBord/DashBord";
import Menubar from "./Screens/DashBord/Components/Menubar";

function App() {
  return (
    <>
      <Pane>
        <Menubar />
        <Pane style={{ display: "flex" }}>
          <Pane>
            <DashBord />
          </Pane>
          <Pane>
            <Routes>
              <Route exact index path="/" element={<Add />}></Route>
              <Route path="/Edit/:id" element={<Edit />}></Route>
              <Route path="/View" element={<View />}></Route>
              <Route path="/Delete" element={<Delete />}></Route>
            </Routes>
          </Pane>
        </Pane>
      </Pane>
    </>
  );
}

export default App;
