import React from "react";
import { useState, useEffect } from "react";
import { Table } from "evergreen-ui";
import { Pane, Button, Paragraph } from "evergreen-ui";
import { EditIcon, TrashIcon, Dialog } from "evergreen-ui";
import { Link } from "react-router-dom";
import axios from "axios";

const View = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [APIData, setAPIData] = useState([]);
  //for view record
  useEffect(() => {
    axios
      .get("http://laravelcrud.artixun.com/api/users")
      .then((response) => {
        let allData = response.data.data;
        setAPIData(allData);
      })
      .catch((error) => {});
  }, []);
  const deleteRecord = (id) => {
    setIsShown(true);
    console.log(id);
    console.log("delete");
    

    // axios
    //   .delete(`http://laravelcrud.artixun.com/api/users/${id}`)
    //   .then((response) => {
    //     const del = APIData.filter((data) => id !== data.id);
    //     setAPIData(del);
    //   });
  };

  return (
    <>
      <Pane>
        <Table width={1000}>
          <Table.Head>
            <Table.TextHeaderCell>Id</Table.TextHeaderCell>
            <Table.TextHeaderCell>Name</Table.TextHeaderCell>
            <Table.TextHeaderCell>Email</Table.TextHeaderCell>
            <Table.TextHeaderCell>Avatar</Table.TextHeaderCell>
            <Table.TextHeaderCell>Active</Table.TextHeaderCell>
            <Table.TextHeaderCell>Gender</Table.TextHeaderCell>
            <Table.TextHeaderCell>Activity</Table.TextHeaderCell>
          </Table.Head>
          <Table.Body height={300}>
            {APIData.map((items) => (
              <Table.Row
                key={items.id}
                // isSelectable
                // onSelect={() => alert(items.name)}
              >
                <Table.TextCell>{items.id}</Table.TextCell>
                <Table.TextCell>{items.name}</Table.TextCell>
                <Table.TextCell>{items.email}</Table.TextCell>
                <Table.TextCell>
                  <img src={items.avatar} alt="img" width="30" height="35" />
                </Table.TextCell>
                <Table.TextCell>{items.active}</Table.TextCell>
                <Table.TextCell>{items.gender}</Table.TextCell>
                <Table.TextCell>
                  <Link to={`/Edit/${items.id}`}>
                    <Button id={items.id}>
                      {<EditIcon color="success" />}
                    </Button>
                  </Link>

                  <Dialog
                    isShown={isShown}
                    title="Dialog title"
                    intent="danger"
                    confirmLabel="Delete"
                  >
                    Are you sure you want to delete this data?
                  </Dialog>

                  <Button marginLeft={4} onClick={() => deleteRecord(items.id)}>
                    <TrashIcon color="danger" />
                  </Button>

                  {/* <Dialog
                    isShown={isShown}
                    onCancel={cancle}
                    confirmLabel="Delete"
                  >
                    Do you want to delete this record
                  </Dialog>
                  <Button
                    marginLeft={4}
                    onClick={() => {
                      deleteRecord(items.id);
                      setIsShown(true);
                    }}
                  >
                    <TrashIcon color="danger" /> 
                  </Button>*/}
                </Table.TextCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>{" "}
      </Pane>
    </>
  );
};
export default View;
