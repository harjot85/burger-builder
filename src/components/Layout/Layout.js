import React, { Fragment } from "react";

const layout = (props) => (
  <Fragment>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main>{props.Children}</main>
  </Fragment>
)

export default layout; 