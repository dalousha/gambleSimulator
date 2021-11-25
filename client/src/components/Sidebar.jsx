import React from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const SidebarNavigation = (props) => {

  return (
    <ProSidebar>
      <Menu>
        <MenuItem>Dashboard</MenuItem>
        <MenuItem>My Profile</MenuItem>
        <MenuItem>My Messages</MenuItem>
        <MenuItem>Pending Wagers</MenuItem>
        <MenuItem>Past Wagers</MenuItem>
        <MenuItem>Daily Figures</MenuItem>
        <MenuItem>My Stats</MenuItem>
        <MenuItem>My Profile</MenuItem>
        <MenuItem>Odds Calculator</MenuItem>
    </Menu>


    </ProSidebar>
  )
}

export default SidebarNavigation;