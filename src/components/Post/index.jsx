import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { v4 as uuidv4 } from 'uuid';

/*
 * Styles
 */
import { useStyles } from './style'

/*
 * Components
 */
import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    IconButton,
    Avatar
} from '@material-ui/core';

/*
 * Containers
 */
import { ListOfComments } from './../../containers/ListOfComments';

/*
 * Icons
 */
import VisibilityIcon from '@material-ui/icons/Visibility';

/**
 * reducers
 */
import { selectedUser } from './../../reducers/userSlice'
import { addComment } from './../../reducers/postSlice'

export const Post = ({ data }) => {

    const dispatch = useDispatch();
    const user = useSelector(selectedUser)

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const [comment, setComment] = useState(null)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const saveComment = () => {
        dispatch(addComment({
            postId: data.id,
            id: uuidv4(),
            name: user.name,
            email: user.email,
            body: comment
        }))
        setComment('')
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        {data.user.name && data.user.name.charAt(0).toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings" onClick={handleExpandClick}>
                        <VisibilityIcon />
                    </IconButton>
                }
                title={data.title.length >= 25 ? `${data.title.substring(0, 25)}...` : data.title}
                subheader={data.user.name}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {data.body}
                </Typography>
            </CardContent>

            <ListOfComments
                open={expanded}
                handleClose={handleExpandClick}
                comments={data.comments}
                saveComment={saveComment}
                comment={comment}
                handleSetComment={(event) => setComment(event.target.value)}
            />
        </Card>
    );
}