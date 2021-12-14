import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {AppContext} from '../../store/app-context'

// navbar containing a menu anchored to a icon, where each item is a next js router to different pages. the menu would be closed upon clicking
// the navbar title is a link routed to the home page
//conditional render for login/logout button which appears accordingly

export default function MainNavBar() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userCtx = React.useContext(AppContext);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    router.push("/");
    window.localStorage.removeItem("currentUser");
    userCtx.logout()
  };
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "black" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, pl: 10 }}
            >
              <Link href="/">PacsMan</Link>
            </Typography>

            <Button color="inherit" onClick={logoutHandler}>
              Logout
            </Button>
            <Button color="inherit">
              <Link href="/login">Login</Link>
            </Button>

            <Menu
              id="menu-appbar"
              sx={{ minHeight: 200, display: "block" }}
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "left" }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link href="/">Home Page</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/table">Table View</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/calendar">Calendar View</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/form">Add Task</Link>
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}
