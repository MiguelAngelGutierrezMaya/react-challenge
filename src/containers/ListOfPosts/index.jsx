import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

/**
 * Components
 */
import {
    Grid
} from '@material-ui/core';
import { Post } from '../../components/Post';

/**
 * reducers
 */
import { listOfPosts, listOfUsers, listOfComments } from './../../reducers/postSlice'



export const ListOfPosts = () => {

    /*
     * State
     */
    const [data, setData] = useState([])

    const posts = useSelector(listOfPosts)
    const users = useSelector(listOfUsers)
    const comments = useSelector(listOfComments)


    useEffect(() => {
        const dataArray = posts.map(post => {
            const user = users.find(user => user.id === post.userId)
            const commentsArray = comments.filter(comment => comment.postId === post.id)
            return {
                ...post,
                user: user || {},
                comments: [...commentsArray]
            }
        })
        setData([...dataArray])
    }, [posts, users, comments])

    return data.map(el => (
        <Grid item lg={4} md={6} sm={12} xs={12} key={el.id} style={{marginTop: '20px', marginBottom: '20px'}}>
            <Post data={el} />
        </Grid>
    ))
}
