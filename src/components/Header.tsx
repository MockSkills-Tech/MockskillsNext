'use client';

import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
// import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { Switch } from '@mui/material';
import { toggleTheme } from '@/utils/themeSlice';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ThemeButton from './ThemeButton';
import { FaGraduationCap } from "react-icons/fa";

import HeaderMenu from '@/data/constant';
import HeaderMenus from './HeaderMenu';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
//   const dispatch = useAppDispatch();
//   const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);
    // useEffect(()=>{
    //     if(isDarkMode){
    //         document.body.classList.add('dark-mode');
    //         document.body.classList.remove('white-mode');
    //     }else{
    //         document.body.classList.remove('dark-mode');
    //         document.body.classList.add('white-mode');
    //     }
    // },[isDarkMode]);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Track scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY>1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar className={ `z-20  w-screen dark:text-white text-black ${isScrolled ? 'backdrop-blur-sm bg-opacity-80' : 'bg-transparent'}`}
    position="fixed"
    sx={{
        top: 0,
        backgroundColor: 'transparent',
        //color: isScrolled ? 'black' : 'white',
        boxShadow: isScrolled ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
        //transition: 'background-color 0.3s, color 0.3s, box-shadow 0.3s',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <FaGraduationCap className="text-blue-500 text-2xl md:text-3xl mr-2" />
            <span className="text-xl md:text-2xl tracking-normal font-sans">
                <span className="text-blue-500">Mock</span>
                <span className="text-green-500">Skills</span>
            </span>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
              
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))} */}
              <HeaderMenus/>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
           <FaGraduationCap className="text-blue-500 text-2xl md:text-3xl mr-2" />
            <span className="text-xl md:text-2xl tracking-normal font-sans">
                <span className="text-blue-500">Mock</span>
                <span className="text-green-500">Skills</span>
            </span>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'inherit', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
            <HeaderMenus/>
          </Box>
          {/* <button onClick={() => dispatch(toggleTheme())}>{isDarkMode?<LightModeIcon/>:<DarkModeIcon/>}</button> */}
          
          <Box sx={{ flexGrow: 0 }}>
          <ThemeButton/>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
