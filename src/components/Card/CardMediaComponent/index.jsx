import React from 'react';

/**
 * Components
 */
import {
    CardMedia,
} from '@material-ui/core';

/**
 * Styles
 */
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    media: {
        height: 140,
    },
});

const _image = 'https://images.theconversation.com/files/125391/original/image-20160606-13080-s7o3qu.jpg?ixlib=rb-1.1.0&rect=273%2C0%2C2639%2C1379&q=45&auto=format&w=926&fit=clip';

export const CardMediaComponent = ({ image = _image }) => {
    /**
     * Styles
     */
    const classes = useStyles();

    return (
        <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
        />
    );
}