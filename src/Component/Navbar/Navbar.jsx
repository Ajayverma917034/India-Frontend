import * as React from 'react';
import { Close, ShoppingCart } from '@mui/icons-material';

import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Button, Tooltip, MenuItem, Container, } from '@mui/material'
import logo from "../../img/logo.png"
import Search from '@mui/icons-material/Search';
import SearchBar from './SearchBar';
import { Link, useNavigate } from 'react-router-dom';

const pages = ['Service', 'Contact', 'About', 'Products'];


const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [open, setOpen] = React.useState(false)
    const navigate = useNavigate()
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = (index) => {

        switch (index) {
            case 0:
                navigate("/service")
                break;

            case 1:
                navigate('/about')
                break;
            case 2:
                navigate('/contact')
                break;
            case 3:
                navigate('/products')
                break;
            default:
                navigate("/")
        }
        setAnchorElNav(null);
    };
    const handleOpenSearch = () => {
        setOpen(!open)
    }

    const MenuClick = (page) => {

        handleCloseNavMenu()

    }



    return (
        <AppBar position="static">
            <Container maxWidth="xl" style={{ background: 'linear-gradient(90deg, rgba(228,248,255,1) 0%, rgba(0,209,255,1) 100%)', }}
            >
                <Toolbar disableGutters>


                    {/* logo */}
                    <Link to={'/'}>
                        <Tooltip title='India Electronics Hub' >
                            <Box sx={{ cursor: 'pointer' }}>
                                <img src={logo} alt='India Electronic Hub and service center' style={{ width: '50px' }} />
                            </Box>
                        </Tooltip>
                    </Link>

                    {/* nav item for md screen */}

                    <Box sx={{ display: { xs: 'flex', md: 'none' }, marginLeft: 'auto', alignItems: 'center' }}>
                        {
                            open && <SearchBar />
                        }
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenSearch}
                            color="inherit"
                        >{
                                open ? <Close /> : <Search />
                            }

                        </IconButton>
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
                            sx={{
                                display: { xs: 'block', md: 'none' },

                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem key={page} onClick={() => handleCloseNavMenu(index)}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}

                            <MenuItem onClick={MenuClick} >
                                <Typography textAlign='center'>Login</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                    {/* nav item for large screen */}




                    <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: 'auto', alignItems: 'center' }}>
                        <SearchBar />
                        {pages.map((page, index) => (
                            <Button
                                key={index}
                                onClick={() => handleCloseNavMenu(index)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}

                        <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                            Login
                        </Button>

                    </Box>
                    <Button
                        sx={{ color: '#fff' }}
                        style={{ marginRight: 2 }}
                    >

                        <ShoppingCart />
                    </Button>


                    {/* user avtar  */}

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
