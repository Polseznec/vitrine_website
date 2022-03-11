import React from "react";

export const IndexNewProductForm = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <span>Create a new product</span>
      </div>
      <button
        onClick={() => {
          console.log("TO DO = BACK TO THE DASHBORD");
        }}
      >
        back
      </button>
    </div>
  );
};
