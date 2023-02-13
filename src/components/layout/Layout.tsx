import React, { Fragment } from "react";
import MainNavigation from "./MainNavigation";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className="mx-auto my-12 w-[90%] max-w-[40rem] ">
        {props.children}
      </main>
    </Fragment>
  );
};

export default Layout;
