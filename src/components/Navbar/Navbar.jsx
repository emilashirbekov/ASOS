import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/icons/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { useAuth } from "../../contexts/AuthContextProvider";

const pages = ["WOMEN", "MEN"];
const settings = ["Favorites", "Cart", "Profile", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [activeButton, setActiveButton] = React.useState("");
  const { user, logout } = useAuth();

  const handleCloseNavMenu = (page) => {
    setActiveButton(page);
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  const handleNavigateToHomePage = () => {
    navigate("/");
  };
  const handleNavigateToMenPage = () => {
    navigate("/dropped");
  };

  return (
    <AppBar sx={{ background: "#2d2d2d" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" }, fontSize: "1.6rem" }}
          >
            <img
              src={logo}
              style={{ filter: "invert(100%)", cursor: "pointer" }}
              alt="asos logo"
              onClick={handleNavigateToHomePage}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  if (page === "MEN") {
                    handleNavigateToMenPage();
                  } else {
                    handleCloseNavMenu(page);
                  }
                }}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "1.8rem",
                  marginLeft: "2.5rem",
                  ...(activeButton === page && { backgroundColor: "" }),
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Favorites">
              <IconButton size="large" aria-label="show 4 new mails">
                <Badge badgeContent={0} component={Link} to="/fav">
                  <FavoriteIcon sx={{ color: "#fff" }} fontSize="large" />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Cart">
              <IconButton size="large" aria-label="show 17 new notifications">
                <Badge badgeContent={0} component={Link} to="/bag">
                  <ShoppingCartIcon sx={{ color: "#fff" }} fontSize="large" />
                </Badge>
              </IconButton>
            </Tooltip>
            {user ? (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.displayName} src={user.photoURL} />
                </IconButton>
              </Tooltip>
            ) : (
              <Button component={Link} to={"/auth"} color="inherit">
                move to Login
              </Button>
            )}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={(e) => {
                    handleCloseUserMenu(e);
                    if (setting == "Logout") {
                      logout();
                    }
                  }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
