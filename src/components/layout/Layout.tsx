import { Fragment } from "react";
import MainHeader from "./mainHeader/MainHeader";
import HomePage from "../HomePage";


const Layout = () => {
  return (
    <Fragment>
      <MainHeader />
      <HomePage />
    </Fragment>
  );
};

export default Layout;