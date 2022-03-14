import React from "react";

function IndexHorizontalCard({
  className,
  title,
  description,
  main_picture,
  id,
  onClick,
}) {
  console.log(main_picture);
  return (
    <div className={className} onClick={onClick}>
      <span>{title}</span>
      <span>{description}</span>
      <img src={main_picture} alt={title} />
      <span>{id}</span>
    </div>
  );
}

export default IndexHorizontalCard;
