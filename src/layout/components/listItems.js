import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import KeyboardIcon from "@material-ui/icons/Keyboard";

export const ListItems = (
  <div>
    <Link href="/" style={{ textDecoration: "none", color: "#fff" }}>
      <ListItem button>
        <ListItemIcon style={{ textDecoration: "none", color: "#fff" }}>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Início" />
      </ListItem>
    </Link>
    <Link href="/cadastro" style={{ textDecoration: "none", color: "#fff" }}>
      <ListItem button>
        <ListItemIcon style={{ textDecoration: "none", color: "#fff" }}>
          <PersonAddIcon />
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
    <Link href="/binds" style={{ textDecoration: "none", color: "#fff" }}>
      <ListItem button>
        <ListItemIcon style={{ textDecoration: "none", color: "#fff" }}>
          <KeyboardIcon />
        </ListItemIcon>
        <ListItemText primary="Binds" />
      </ListItem>
    </Link>
  </div>
);
