import React, { Fragment } from "react";
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
  <Fragment>
    <Toolbar />
    <div>Sidebar, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Fragment>
)

export default layout; 