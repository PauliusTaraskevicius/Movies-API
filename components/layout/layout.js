import { Fragment } from "react";
import Meta from "../Meta";

function Layout(props) {
  const { children } = props;

  return (

    <Fragment>
      <Meta />
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
