import React from "react";

export default function Store({ elem }) {
  return (
    <div>
      <p
        style={{
          border: "1px solid black",
          flex: 1,
          textAlign: "center",
          fontSize: "24px",
          marginTop: "10px",
        }}
      >
        <div style={{ fontWeight: "bold" }}>{elem.name}</div>

        {elem.Opening_Hours}
        <br />
      </p>
    </div>
  );
}
