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
import { isAuthenticated } from "../../lib/auth";
import { RemoveToken } from "../../lib/auth";

export default function MainNavBar() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    router.push("/");
    RemoveToken;
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

           {isAuthenticated && (
              <Button color="inherit">
                <Link href="/Login">Login</Link>
              </Button>
            )}

            {isAuthenticated && (
              <Button color="inherit" onClick={logoutHandler}>
                Logout
              </Button>
            )}

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
                <Link href="/Table">Table View</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/Calendar">Calendar View</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/Form">Add Task</Link>
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}
