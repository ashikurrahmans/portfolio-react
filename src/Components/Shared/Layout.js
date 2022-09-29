import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-9/12 mx-auto">{children}</div>
    </>
  );
};

export default Layout;
