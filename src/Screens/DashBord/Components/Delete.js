import React from "react";
import { Pane, Dialog, Button } from "evergreen-ui";

const Delete = (props) => {
  const [isShown, setIsShown] = React.useState(false);
  return (
    <>
      <Pane>
        <Dialog
          isShown={isShown}
          title="Dialog title"
          intent="danger"
          onCloseComplete={() => setIsShown(false)}
          confirmLabel="Delete"
        >
          Are you sure you want to delete this item?
        </Dialog>

        <Button onClick={() => setIsShown(true)}>Show Dialog</Button>
      </Pane>
    </>
    // <Pane style={{ overflowY: "auto" }} height={500}>
    //   <Pane width={1000} margin={4}>
    //     DELETE Testing New Programs Imagine you own a big e-commerce website
    //     that sells watches in bulk. Your company is called Batch Watch — it’s
    //     your baby. One of the biggest assets the company has is the data it
    //     collects on vendors, its products, and customers.
    //   </Pane>
    //   <Pane width={1000} margin={4}>
    //     When you started the company, you didn’t have much cash to spend on an
    //     expensive database program, so you took the first inexpensive option
    //     that came your way. Unfortunately, this means your data is not
    //     well-modeled, and you’re not really sure how that initial data program’s
    //     technical skeleton is structured.
    //   </Pane>
    //   <Pane width={1000} margin={4}>
    //     After years of growth, you’ve now got cash to invest and want to
    //     implement a high quality database management system. However, you want
    //     to ensure the transfer is smooth and requires minimal downtime. You hire
    //     an IT consultant to execute the transfer. The IT consultant analyzes
    //     your data and its structure, and she decides on a new program that’s
    //     most efficient to store your data.
    //   </Pane>
    //   <Pane width={1000} margin={4}>
    //     The project outlines is as follows: Create a conceptual data model for
    //     the existing business structure Align this structure with the underlying
    //     data in a logical data model Link the logical data model to the new
    //     Database Management System (DBMS) Use dummy data to test the database
    //     structure in the DBMS Fix bugs Go live with real data in the DBMS
    //   </Pane>
    //   <Pane width={1000} margin={4}>
    //     DELETE Testing New Programs Imagine you own a big e-commerce website
    //     that sells watches in bulk. Your company is called Batch Watch — it’s
    //     your baby. One of the biggest assets the company has is the data it
    //     collects on vendors, its products, and customers.
    //   </Pane>
    //   <Pane width={1000} margin={4}>
    //     When you started the company, you didn’t have much cash to spend on an
    //     expensive database program, so you took the first inexpensive option
    //     that came your way. Unfortunately, this means your data is not
    //     well-modeled, and you’re not really sure how that initial data program’s
    //     technical skeleton is structured.
    //   </Pane>
    //   <Pane width={1000} margin={4}>
    //     After years of growth, you’ve now got cash to invest and want to
    //     implement a high quality database management system. However, you want
    //     to ensure the transfer is smooth and requires minimal downtime. You hire
    //     an IT consultant to execute the transfer. The IT consultant analyzes
    //     your data and its structure, and she decides on a new program that’s
    //     most efficient to store your data.
    //   </Pane>
    //   <Pane width={1000} margin={4}>
    //     The project outlines is as follows: Create a conceptual data model for
    //     the existing business structure Align this structure with the underlying
    //     data in a logical data model Link the logical data model to the new
    //     Database Management System (DBMS) Use dummy data to test the database
    //     structure in the DBMS Fix bugs Go live with real data in the DBMS
    //   </Pane>
    //   <Pane width={1000} margin={4}>
    //     DELETE Testing New Programs Imagine you own a big e-commerce website
    //     that sells watches in bulk. Your company is called Batch Watch — it’s
    //     your baby. One of the biggest assets the company has is the data it
    //     collects on vendors, its products, and customers.
    //   </Pane>
    //   <Pane width={1000} margin={4}>
    //     When you started the company, you didn’t have much cash to spend on an
    //     expensive database program, so you took the first inexpensive option
    //     that came your way. Unfortunately, this means your data is not
    //     well-modeled, and you’re not really sure how that initial data program’s
    //     technical skeleton is structured.
    //   </Pane>
    //   <Pane width={1000} margin={4}>
    //     After years of growth, you’ve now got cash to invest and want to
    //     implement a high quality database management system. However, you want
    //     to ensure the transfer is smooth and requires minimal downtime. You hire
    //     an IT consultant to execute the transfer. The IT consultant analyzes
    //     your data and its structure, and she decides on a new program that’s
    //     most efficient to store your data.
    //   </Pane>
    //   <Pane width={1000} margin={4}>
    //     The project outlines is as follows: Create a conceptual data model for
    //     the existing business structure Align this structure with the underlying
    //     data in a logical data model Link the logical data model to the new
    //     Database Management System (DBMS) Use dummy data to test the database
    //     structure in the DBMS Fix bugs Go live with real data in the DBMS
    //   </Pane>
    //   <Pane width={1000} margin={4}>
    //     DELETE Testing New Programs Imagine you own a big e-commerce website
    //     that sells watches in bulk. Your company is called Batch Watch — it’s
    //     your baby. One of the biggest assets the company has is the data it
    //     collects on vendors, its products, and customers.
    //   </Pane>
    //   <Pane width={1000} margin={4}>
    //     When you started the company, you didn’t have much cash to spend on an
    //     expensive database program, so you took the first inexpensive option
    //     that came your way. Unfortunately, this means your data is not
    //     well-modeled, and you’re not really sure how that initial data program’s
    //     technical skeleton is structured.
    //   </Pane>
    //   <Pane width={1000} margin={4}>
    //     After years of growth, you’ve now got cash to invest and want to
    //     implement a high quality database management system. However, you want
    //     to ensure the transfer is smooth and requires minimal downtime. You hire
    //     an IT consultant to execute the transfer. The IT consultant analyzes
    //     your data and its structure, and she decides on a new program that’s
    //     most efficient to store your data.
    //   </Pane>
    //   <Pane width={1000} margin={4}>
    //     The project outlines is as follows: Create a conceptual data model for
    //     the existing business structure Align this structure with the underlying
    //     data in a logical data model Link the logical data model to the new
    //     Database Management System (DBMS) Use dummy data to test the database
    //     structure in the DBMS Fix bugs Go live with real data in the DBMS
    //   </Pane>
    // </Pane>
  );
};
export default Delete;
