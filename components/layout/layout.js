import { Fragment } from "react";
import Meta from "../Meta";
import MainNavigation from "./main-nav";

function Layout(props) {
  const { children } = props;

  return (

    <Fragment>
      <Meta />
      <MainNavigation />
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
