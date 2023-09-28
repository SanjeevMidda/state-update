import React from "react";

const Color = ({ color, setClicked }) => {
  return (
    <div className="color" onClick={(e) => setClicked(e.target.innerHTML)}>
      <h3>{color}</h3>
    </div>
  );
};

export default Color;
