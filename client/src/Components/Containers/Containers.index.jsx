import React from "react";

export const IndexApp = ({ className, children, ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export const IndexFlexCenter = ({ className, children, ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export const IndexColumn = ({ className, children, ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export const indexFullScreen = ({ className, children, ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};
