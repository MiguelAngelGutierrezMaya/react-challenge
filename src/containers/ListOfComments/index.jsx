import React, { useState } from 'react';

/*
 * Components
 */
import { Modal, List, Paper, InputBase, Divider, IconButton } from '@material-ui/core';
import { Comment } from './../../components/Comment'

/*
 * Icons
 */
import AddIcon from '@material-ui/icons/Add';

/*
 * Styles
 */
import { useStyles } from './style'

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export const ListOfComments = ({ open, comment, comments, handleClose, handleSetComment, saveComment }) => {

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2>Comments</h2>
            <List className={classes.root}>
                {
                    comments.map(el => <Comment data={el} key={el.id} />)
                }
            </List>
            <hr />
            <div className={classes.commentSection}>
                <Paper component="form" className={classes.textRoot}>
                    <InputBase
                        className={classes.input}
                        placeholder="Write comment..."
                        onChange={handleSetComment}
                        value={comment}
                    />
                    <Divider className={classes.divider} orientation="vertical" />
                    <IconButton color="primary" className={classes.iconButton} aria-label="directions" onClick={saveComment}>
                        <AddIcon />
                    </IconButton>
                </Paper>
            </div>
        </div>
    );

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
    );
}