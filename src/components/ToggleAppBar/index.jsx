import React from 'react';
import { useSelector } from 'react-redux'

/**
 * Components
 */
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { ToggleDrawer } from '../ToggleDrawer';


/**
 * reducers
 */
import { selectedUser } from './../../reducers/userSlice'

/**
 * Styles
 */
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    }
}));

export const ToggleAppBar = () => {

    /**
     * UserData
     */
    const user = useSelector(selectedUser)

    /**
     * Styles
     */
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>

                <ToggleDrawer></ToggleDrawer>

                <Typography variant="h6" className={classes.title}>
                    Welcome to the post system app {user ? `${user.name}` : ''}
                </Typography>

            </Toolbar>
        </AppBar>
    )
}