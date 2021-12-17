import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import ButtonLink from "./ButtonLink";

export default function Navbar() {
  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const handleMenuOpen = (e) => {
    setMenuAnchor(e.currentTarget);
  };
  const handleMenuClose = (e) => {
    setMenuAnchor(null);
  };
  const menuOpen = Boolean(menuAnchor);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="a" sx={{ flexGrow: 1 }}>
            <Link href="/">Matef.Tech</Link>
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={menuAnchor}
            open={menuOpen}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Box component="nav" display="flex" flexDirection="column">
              <ButtonLink href="/post" variant="inherit">
                Posts
              </ButtonLink>
              <ButtonLink href="/about" variant="inherit">
                About Me
              </ButtonLink>
              <ButtonLink href="/contact" variant="inherit">
                Contact Me
              </ButtonLink>
            </Box>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
