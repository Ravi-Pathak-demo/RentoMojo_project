import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Navbar.css";

{
  /* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton> */
}

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [start, setStart] = React.useState(false);

  const handleDrawerToggle = () => {
    setStart(!start);
  };

  const toggleSearch = (e) => {
    e.preventDefault();
    props.setSearchOpen(!props.searchOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h4" sx={{ my: 1 }}>
        RentoMojo 🐱‍💻
      </Typography>
      <Divider />
      <List>
        <ListItem key="search" disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText
              onClick={(e) => toggleSearch(e)}
              primary={props.searchOpen ? "Close Search" : "search"}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        border: "1px solid 5px",
      }}
    >
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            <p style={{ fontSize: "medium", marginTop: "10px" }}>
              RentoMojo 🐱‍🏍
            </p>
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              backgroundColor: "primary.dark",
            }}
          >
            <Button
              onClick={(e) => toggleSearch(e)}
              key="search"
              sx={{ color: "#fff", textSize: "medium", mr: 0 }}
            >
              {props.searchOpen ? "Close Search" : "search"}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={start}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 2 }}>
        <Toolbar />
        <Typography>{props?.children}</Typography>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
