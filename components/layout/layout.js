import { Fragment } from "react";
import MainNavigation from "./main-navigation";


function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      {/* homepage deki her şey props.children oluyor */}
      <main>{props.children}</main>
    
    </Fragment>
  );
}

export default Layout;
