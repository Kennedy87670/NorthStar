import React from "react";

const CustomButton = ({ children, color, background, border }) => {
  const style = {
    width: "auto",
    height: "58px",
    padding: "18px 36px",
    gap: "10px",
    color: color || "inherit",
    backgroundColor: background || "transparent",
    border: `2px solid ${border || "transparent"}`,
    borderRadius: 0,
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  };

  return <button style={style}>{children}</button>;
};

export default CustomButton;
