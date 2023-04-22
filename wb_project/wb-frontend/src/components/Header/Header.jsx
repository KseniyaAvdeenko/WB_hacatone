import React from 'react';
import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import {useAuthHeader} from 'react-auth-kit'
import HeaderUser from './HeaderUser';
import HeaderLoginUser from './HeaderLoginUser';

const menuAuth = [
    {'item':'Menu', 'url': '/menu'},
    {'item':'Dashboard', 'url': '/dashboard'},
];

const menuGuest = [
    {'item': 'SignUp', 'url': 'signup'},
    {'item':'Dashboard', 'url': '/dashboard'}
]



const Header = (props) => {

    const useHeader = useAuthHeader()

    const [anchorElNav, setAnchorElNav] = React.useState('');
    

    const handleOpenNavMenu = (event, sel) => {
        console.log(`handleOpenNavMenu sel = ${sel}`)
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (event, sel) => {
        setAnchorElNav(null);
    };

    const handleMenuClick = (url) => {
        console.log(url)
        // history.push('/menu')
    }
    // **************************************

    return (
        <div className='container'>
            <AppBar position="static" sx={{
                // background: 'transparent',
                // boxShadow: 'none',
                // opacity: '0.9',

            }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <MapsHomeWorkIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                    variant="h4"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    ml: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'roboto',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    PRODUCT BASE
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
                        onClose={() => handleCloseNavMenu()}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                        >
                        {useHeader() ? 
                        menuAuth.map((page) => (
                            <MenuItem key={page} onClick={() => handleMenuClick(page)}>
                                <Typography textAlign="center"><Link to={page.url} style={{textDecoration: 'none' }}>{page.item}</Link></Typography>
                            </MenuItem>
                        )) :
                        menuGuest.map((page) => (
                            <MenuItem key={page} onClick={() => handleMenuClick(page)}>
                                <Typography textAlign="center"><Link to={page.url} style={{textDecoration: 'none' }}>{page.item}</Link></Typography>
                            </MenuItem>
                        ))
                        }
                    </Menu>
                </Box>
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href=""
                    sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    Product Base
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    
                    
                    {useHeader() ? 
                    menuAuth.map((page) => (
                        <Link to={page.url} >
                            <Button key={page.item} onClick={() => handleMenuClick(page.url)}
                                sx={{ my: 2, color: 'white', display: 'block' }}>
                                <Typography textAlign="center">{page.item}</Typography>
                            </Button>
                        </Link>    
                    )) :
                    menuGuest.map((page) => (
                        <Link to={page.url} >
                            <Button key={page.item} onClick={() => handleMenuClick(page.url)}
                                sx={{ my: 2, color: 'white', display: 'block' }}>
                                <Typography textAlign="center">{page.item}</Typography>
                            </Button>
                        </Link>    
                    ))     
                }

                </Box>
            
                {useHeader() ? <HeaderUser /> : <HeaderLoginUser />}
                </Toolbar>
            </Container>
            </AppBar>
        </div>
        
    )
} 

export default Header;