import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Layout = ({ children }) => {
  return (
    <>
      <Drawer
        sx={{
          width: 200,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 200,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem button>
            <ListItemIcon>
              <FavoriteBorderIcon style={{ color: "pink" }} />
            </ListItemIcon>
            <ListItemText primary="Favoris" />
          </ListItem>
        </List>
      </Drawer>
      <main style={{ margin: "20px 20px 20px 220px" }}>{children}</main>
    </>
  );
};

export default Layout;
