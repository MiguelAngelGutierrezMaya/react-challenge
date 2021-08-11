// import React from 'react';

/**
 * Icons
 */
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';

/**
 * Routes
 */
import { Routes } from '../../routes';

export const MenuList = [
    {
        name: 'Login',
        auth: false,
        link: Routes.appLogin,
        icon: () => (<VpnKeyIcon />)
    },
    {
        name: 'Post',
        auth: true,
        link: Routes.appPosts,
        icon: () => (<MarkunreadMailboxIcon />)
    },
    {
        name: 'LogOut',
        auth: true,
        link: Routes.appLogout,
        icon: () => (<ExitToAppIcon />)
    }
];