import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "./Table/Table";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { TableMaterial } from "./Table/TableMaterial";

export default function Jogadores() {
  return (
    <Paper style={{ border: "1px solid #3f51b5" }}>
      <Toolbar style={{ backgroundColor: "#3f51b5" }}>
        <Typography variant="h6">Cfgs</Typography>
      </Toolbar>
      {/* <Table /> */}
      <TableMaterial />
    </Paper>
  );
}
