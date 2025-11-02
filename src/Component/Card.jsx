import React from "react";

function Card({ name, course, feedback }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        marginTop: "16px",
        boxShadow: "2px 2px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{name}</h3>
      <p>
        <strong>Course:</strong> {course}
      </p>
      <p>{feedback}</p>
    </div>
  );
}

export default Card;
