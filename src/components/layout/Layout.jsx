import React, { useContext } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavorisContext from "../../store/context/FavorisContext";

const Layout = ({ children }) => {
  const [{ books }] = useContext(FavorisContext);
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
              {books.length > 0 ? (
                <FavoriteIcon style={{ color: "pink" }} />
              ) : (
                <FavoriteBorderIcon style={{ color: "pink" }} />
              )}
            </ListItemIcon>
            <ListItemText primary={`Favoris ${books.length || ""}`} />
          </ListItem>
        </List>
      </Drawer>
      <main style={{ margin: "20px 20px 20px 220px" }}>{children}</main>
    </>
  );
};

export default Layout;
