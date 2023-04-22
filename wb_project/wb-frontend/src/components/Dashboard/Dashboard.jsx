import React  from "react";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/material/Box';
import DashboardMenu from "./DashboardMenu/DashboardMenu";
import {Route, Routes } from 'react-router-dom';
import { default as LayoutDashboard } from './LayoutDashboard'
import { default as Category } from './Category'
import { default as Product } from './Product'
import Providers from "./Providers";
import Clients from "./Clients";
import Transactions from "./Transactions";

const sectionMenu = {
    height: 1000,
    paddingTop: 5,
    backgroundColor: "#fff",
    borderRadius: '40px',
  };

const Dashboard = () => {



    return (
        <Box sx={{ flexGrow: 0, m: 0 }}>
        <Grid container spacing={0} sx={{sectionMenu }}>
          <Grid xs={2.5} > 
            <DashboardMenu />
          </Grid>
          <Grid xs={9}>
          <Routes>
            <Route path='/' element={<LayoutDashboard />}>
                <Route path='category' element={<Category />} />
                <Route path='product' element={<Product />} />
                <Route path='providers' element={<Providers />} />
                <Route path='clients' element={<Clients />} />
                <Route path='transactions' element={<Transactions />} />
            </Route> 
          </Routes>  
          </Grid>
        </Grid>
      </Box>
    )
}

export default Dashboard