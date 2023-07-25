import React, { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MoreIcon from "@mui/icons-material/MoreVert";
import "../scss/Index.scss";
import Carro from "./Carrito";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar({
  searchTerm,
  setSearchTerm,
  handleSearch,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("modoOscuro") === "true"
  );
  const [isCartVisibleMobile, setIsCartVisibleMobile] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkMode");
      localStorage.setItem("modoOscuro", true);
    } else {
      document.body.classList.remove("darkMode");
      localStorage.setItem("modoOscuro", false);
    }
  }, [darkMode]);

  useEffect(() => {
    if (isFirstLoad) {
      setIsCartVisibleMobile(false);
      setIsFirstLoad(false);
    }
  }, [isFirstLoad]);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const ProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const MobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const MenuClose = () => {
    setAnchorEl(null);
    MobileMenuClose();
  };

  const MobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const DarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const AddToCartClick = () => {
    setIsCartVisibleMobile(!isCartVisibleMobile);
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={MenuClose}
    >
      <Link to="/Proveedor">
      <MenuItem onClick={MenuClose}>Proveedores</MenuItem>
      </Link>
      <Link to="/Clientes">
      <MenuItem onClick={MenuClose}>Clientes</MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={MobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="darkMode"
          color="inherit"
          onClick={DarkModeToggle}
        >
          <Badge badgeContent={0} color="error">
            <Brightness6Icon />
          </Badge>
        </IconButton>

        <Link to="/carro">
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            onClick={AddToCartClick}
          >
            <Badge badgeContent={0} color="error">
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "center" }}>
          <IconButton
            size="small"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <Link to="/">
              <HomeIcon sx={{ fontSize: 25 }} />
            </Link>
          </IconButton>
          <Box sx={{ marginLeft: "35px" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              SNEAKERS
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="buscar.."
                inputProps={{ "aria-label": "search" }}
                value={searchTerm || ""}
                onChange={handleSearch}
              />
            </Search>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="darkMode"
              color="inherit"
              onClick={DarkModeToggle}
            >
              <Badge badgeContent={0} color="error">
                <Brightness6Icon />
              </Badge>
            </IconButton>
            <Link to="/carro">
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={AddToCartClick}
              >
                <Badge badgeContent={0} color="error">
                  <AddShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
              onClick={ProfileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={MobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {isCartVisibleMobile && <Carro />}
    </Box>
  );
}
