// import React from "react";
// // import { Link } from 'react-router-dom'
// import { useSignOut } from 'react-auth-kit'
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import { useNavigate } from "react-router-dom";

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// const HeaderUser = () => {

//     const signOut = useSignOut()
//     const navigate = useNavigate()

//     const [anchorElUser, setAnchorElUser] = React.useState('');

//     const handleOpenUserMenu = (event, sel) => {
//         console.log(`handleOpenUserMenu event = ${event.currentTarget} sel = ${sel}`)

//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseUserMenu = () => {
//         console.log(`handleCloseUserMenu`)
//         setAnchorElUser(null);
//     };

//     // const handleMenuClick = (url) => {
//     //     console.log(url)
//     //     // history.push('/menu')
        
//     // }

//     const profileMenuClick = () => {
//         console.log('ProfileMenuClick')
//         // history.push('/menu')
        
//     }

//     const logoutMenuClick = () => {
//         console.log('logoutMenuClick')
//         // history.push('/menu')
//         signOut()
//         navigate('/login')

//     }

//     return (
//         <Box sx={{ flexGrow: 0 }}>
//                     <Tooltip title="Open settings">
//                     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                         <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//                     </IconButton>
//                     </Tooltip>
//                     <Menu
//                     sx={{ mt: '45px' }}
//                     id="menu-appbar"
//                     anchorEl={anchorElUser}
//                     anchorOrigin={{
//                         vertical: 'top',
//                         horizontal: 'right',
//                     }}
//                     keepMounted
//                     transformOrigin={{
//                         vertical: 'top',
//                         horizontal: 'right',
//                     }}
//                     open={Boolean(anchorElUser)}
//                     onClose={handleCloseUserMenu}
//                     >
//                     {/* {settings.map(setting => (
//                         <MenuItem key={setting} onClick={e => handleMenuClick(e)}>
//                             <Typography textAlign="center">{setting}</Typography>
//                         </MenuItem>
//                     ))} */}
//                     <MenuItem key='Profile' onClick={profileMenuClick}>
//                             <Typography textAlign="center">Profile</Typography>
//                     </MenuItem>
//                     <MenuItem key='Logout' onClick={logoutMenuClick}>
//                             <Typography textAlign="center">Logout</Typography>
//                     </MenuItem>

//                     </Menu>
//                 </Box>
//     )
// }

// export default HeaderUser