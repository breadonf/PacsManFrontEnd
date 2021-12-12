import * as React from "react";
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
import Divider from "@material-ui/core/Divider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function MainNavBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            <Button color="inherit">
              <Link href="/Login">Login</Link>
            </Button>
            <Menu
              id="menu-appbar"
              sx={{minHeight: 200, display:'block'}}
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
                <Link href="./">Home Page</Link>
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
              <Divider />
              <MenuItem>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={auth}
                        onChange={handleChange}
                        aria-label="login switch"
                      />
                    }
                    label={auth ? "logout" : "login"}
                  />
                </FormGroup>
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}
