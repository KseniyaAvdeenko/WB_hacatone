import React from 'react';
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';


const HeaderLoginUser = () => {
    

    return (
            <div>
                 <Typography textAlign="center"><Link to='/login' style={{textDecoration: 'none' }}>Login</Link></Typography>
            </div>
    );
}

export default HeaderLoginUser;