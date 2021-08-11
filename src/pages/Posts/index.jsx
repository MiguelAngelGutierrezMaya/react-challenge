import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux'

/**
 * Components
 */
import {
    Grid
} from '@material-ui/core';
import { ListOfPosts } from '../../containers/ListOfPosts';

/**
 * Services
 */
import { backoffice_service } from './../../services/http/requests/index'

/**
 * Styles
 */

/**
 * reducers
 */
import { setPosts, setUsers, setComments } from './../../reducers/postSlice'



export const Posts = () => {

    const dispatch = useDispatch()

    const getPosts = useCallback(async () => {
        const response = await backoffice_service().getPost()
        dispatch(setPosts([...response.data.data]))
    }, [dispatch])

    const getUsers = useCallback(async () => {
        const response = await backoffice_service().getUsers()
        dispatch(setUsers([...response.data.data]))
    }, [dispatch])

    const getComments = useCallback(async () => {
        const response = await backoffice_service().getComments()
        dispatch(setComments([...response.data.data]))
    }, [dispatch])

    /**
     * Handlers
     */
    useEffect(() => {
        getPosts()
        getUsers()
        getComments()
    }, [getPosts, getUsers, getComments])

    return (
        <Grid
            container
            direction="row"
        >
            <ListOfPosts></ListOfPosts>
        </Grid>
    );
}
