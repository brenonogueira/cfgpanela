import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import Link from "@material-ui/core/Link";

export const ListItems = (
  <div>
    <Link href="/" style={{ textDecoration: "none", color: "#fff" }}>
      <ListItem button>
        <ListItemIcon style={{ textDecoration: "none", color: "#fff" }}>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link href="/cadastro" style={{ textDecoration: "none", color: "#fff" }}>
      <ListItem button>
        <ListItemIcon style={{ textDecoration: "none", color: "#fff" }}>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Cadastro" />
      </ListItem>
    </Link>
    <Link href="/jogadores" style={{ textDecoration: "none", color: "#fff" }}>
      <ListItem button>
        <ListItemIcon style={{ textDecoration: "none", color: "#fff" }}>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Jogadores" />
      </ListItem>
    </Link>
  </div>
);
