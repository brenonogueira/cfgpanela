import React from "react";
import Content from "./Content/Content";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { TableMaterial } from "../Jogadores/Table/TableMaterial";

export default function index() {
  return (
    <Grid container spacing={1}>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        style={{
          display: "block",
        }}
      >
        <Content />
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
        <Toolbar style={{ backgroundColor: "#3f51b5" }}>
          <Typography variant="h6">Cfgs</Typography>
        </Toolbar>
        <div style={{ border: "1px solid #3f51b5" }}>
          <TableMaterial />
        </div>
      </Grid>
    </Grid>
  );
}
