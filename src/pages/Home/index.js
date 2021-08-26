import React from "react";
import Content from "./Content/Content";
import Grid from "@material-ui/core/Grid";

export default function index() {
  return (
    <Grid container spacing={1}>
      <Grid
        item
        xs={12}
        md={8}
        lg={12}
        style={{
          display: "block",
        }}
        item
      >
        <Content />
      </Grid>
    </Grid>
  );
}
