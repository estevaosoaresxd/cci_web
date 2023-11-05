import {
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";

import { Android, Home, ListAlt, Logout } from "@mui/icons-material";
import { themeDefault } from "../theme/themeDefault";
import logo from "../assets/images/bons-fluidos-logo-white.png";

export default function DrawerBase() {
  return (
    <div>
      <Toolbar
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Avatar
          sx={{
            m: 1,
            height: 50,
            width: 50,
            bgcolor: themeDefault.palette.primary.main,
          }}
        >
          <img src={logo} alt="logo" width={35} height={30} />
        </Avatar>
      </Toolbar>
      <Divider />
      <List>
        <ListItem key={"home"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={"Página Inicial"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key={"logs"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ListAlt />
            </ListItemIcon>
            <ListItemText primary={"Logs"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key={"chatbot"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Android />
            </ListItemIcon>
            <ListItemText primary={"Chatbot"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key={"register-admin"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={"Cadastrar Administrador"} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem key={"logoff"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary={"Sair"} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}
