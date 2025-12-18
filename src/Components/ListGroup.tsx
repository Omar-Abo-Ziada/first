import { Fragment } from "react/jsx-runtime";
import { useState, type MouseEvent } from "react";

function ListGroup() {
  let items = [
    "California",
    "Texas",
    "Florida",
    "New York",
    "Illinois",
    "Pennsylvania",
  ];

  //   items = [];

  //   const message = items.length === 0 ? <p>No items found</p> : null;
  //   const message2 = items.length === 0 && <p>No items found</p> ;

  // good approach because it could be more complex logic and take params based on specific conditions
  const getMessage = () => {
    // return items.length === 0 && <p>No items found</p>;
    return items.length === 0 ? <p>No items found</p> : null;
  };

  // event handler
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    console.log("Clicked");
    console.log(event.currentTarget); // HTMLLIElement
    console.log(event);
  };

  //   items.map((item) => <li className="list-group-item">{item}</li>);

  // wont be updated on re-render because its a normal variable
  // has to be a state variable
  // let selectedIndex = 0;

  // // useState hook
  // const arr = useState(-1);
  // arr[0]; // current state value
  // arr[1]; // state update function

  // and each component has its own state
  const [selectedIndex, setSelectedIndexState] = useState(0);
  const [name, setName] = useState("Omar"); // u can use this hook to define multiple state variables

  return (
    // can't have multiple sibling elements (multiple returns ) ,, need to wrap them
    // Using Fragment to avoid adding extra nodes to the DOM ,, can also use <> </>
    <Fragment>
      <h1>List</h1>
      {/* {message} */}
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            // onClick={(event) => console.log(item, index, event)}
            // onClick={handleClick}
            onClick={() => setSelectedIndexState(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
