import React from "react";
// import xxx from "xxx"; import Daniel'S file 

function Container({pictures}) {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexWrap: "wrap",
        margin: "20px",
        padding: "20px",
        gap="10px"
      }}
    >
      {pictures.map((pic) => (
        // < Here comes Daniel's code/>
      ))}
    </div>
  );
}

export default Container;



