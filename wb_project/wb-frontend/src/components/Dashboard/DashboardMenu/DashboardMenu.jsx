import * as React from 'react';
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// icons
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import CategoryIcon from '@mui/icons-material/Category';
import ImageIcon from '@mui/icons-material/Image';
import MouseIcon from '@mui/icons-material/Mouse';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

import './DashboardMenu.css'

const DashboardMenu = () => {
  // const [selectedIndex, setSelectedIndex] = React.useState(1);

  // const handleListItemClick = (event, index) => {
  //   setSelectedIndex(index);
  // };

  // const [open, setOpen] = React.useState(true);

  // const handleClick = () => {
  //   setOpen(!open);
  // };


  return (
    <Box sx={{ width: '100%', maxWidth: 360, minWidth: 150, bgcolor: 'background.paper' }}>
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Меню администратора
        </ListSubheader>
      }
    >
      <Link to='/dashboard/category' className="link_a">
        <ListItemButton>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Категории товаров" />
        </ListItemButton>
      </Link>

      <Link to='/dashboard/product' style={{"text-decoration": "none", "color": "#263238"}} >
        <ListItemButton>
          <ListItemIcon>
          <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Товары" />
        </ListItemButton>
      </Link>

      <Link to='/dashboard/providers' style={{"text-decoration": "none", "color": "#263238"}}>
        <ListItemButton>
          <ListItemIcon>
          <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Поставщики" />
        </ListItemButton>
      </Link>
      
      <Link to='/dashboard/clients' style={{"text-decoration": "none", "color": "#263238"}}>
        <ListItemButton>
          <ListItemIcon>
          <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Клиенты" />
        </ListItemButton>
      </Link>

      <Link to='/dashboard/transactions' style={{"text-decoration": "none", "color": "#263238"}}>
        <ListItemButton>
          <ListItemIcon>
          <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Отгрузки" />
        </ListItemButton>
      </Link>

    </List>
    
  </Box>
);
}

export default DashboardMenu