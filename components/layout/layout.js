import { Fragment } from "react";
import Meta from "../Meta";
import Banner from "./banner";
import Footer from "./footer";
import MainNavigation from "./main-nav";

function Layout(props) {
  const { children } = props;

  return (

    <Fragment>
      <Meta />
      <MainNavigation />
      <Banner />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
