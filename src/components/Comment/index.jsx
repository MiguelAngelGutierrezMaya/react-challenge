import React from 'react';

/*
 * Components
 */
import { ListItem, ListItemText, ListItemAvatar, Avatar } from '@material-ui/core';

export const Comment = ({ data }) => {

    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    {data.email.charAt(0).toUpperCase()}
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={data.body} secondary={data.email} />
        </ListItem>
    );
}