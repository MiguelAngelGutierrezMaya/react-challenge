import React from 'react';
import { useDispatch } from 'react-redux'

/**
 * reducers
 */
import { logout } from './../../reducers/userSlice'


export const LogOut = () => {
    const dispatch = useDispatch()
    dispatch(logout())
    return (<></>)
}