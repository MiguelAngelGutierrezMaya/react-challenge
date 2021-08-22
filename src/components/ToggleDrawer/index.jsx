import React from 'react';
import { useSelector } from 'react-redux'
import clsx from 'clsx';

/**
 * MenuList
 */
import { MenuList } from './MenuList';

/**
 * Router service
 */
import {
    Link
} from "react-router-dom";

/**
 * Components
 */
import { IconButton, Drawer, List, Divider, ListItem, ListItemText, Avatar, ListItemIcon } from '@material-ui/core';

/**
 * Icons
 */
import MenuIcon from '@material-ui/icons/Menu';

/**
 * reducers
 */
import { selectedUser, isAuthenticated } from './../../reducers/userSlice'

/**
 * Styles
 */
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250,
    },
    large: {
        margin: '1em',
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    containerAvatar: {
        margin: '1em',
        textAlign: 'end'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    }
}));

export const ToggleDrawer = ({ test = false }) => {

    /**
     * Styles
     */
    const classes = useStyles();

    /**
     * States
     */
    const [open, setOpen] = React.useState(false);

    /**
     * Handlers
     */
    const toggleDrawer = (open) => {
        setOpen(open);
    };

    /**
     * UserData
     */
    const user = useSelector(selectedUser)
    const auth = useSelector(isAuthenticated)

    const list = () => (
        <div
            className={clsx(classes.list)}
            role="presentation"
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
        >
            <Avatar alt="User" src={"/static/images/avatar/1.jpg"} className={classes.large} />
            <div className={clsx(classes.containerAvatar)}>
                <span>{user ? `${user.name}` : ''}</span>
            </div>
            <Divider />
            <List>
                {
                    MenuList.map((item) => {
                        return item.auth && auth && (
                            <Link to={auth ? item.link : '/login'} style={{ textDecoration: 'none', color: '#000000' }} key={`menu-item-${item.name}`}>
                                <ListItem button>
                                    <ListItemIcon>{item.icon()}</ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItem>
                            </Link>
                        )
                    })
                }
            </List>
            <Divider />
        </div >
    );

    return (auth || test) && (
        <>
            <IconButton onClick={() => toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Drawer anchor={'left'} open={open} onClose={() => toggleDrawer(false)}>
                {list()}
            </Drawer>
        </>
    )

}