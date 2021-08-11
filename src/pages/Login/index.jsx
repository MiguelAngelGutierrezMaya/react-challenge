import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux'

/**
 * reducers
 */
import { authenticate } from './../../reducers/userSlice'

/**
 * Components
 */
import {
    Card,
    CardContent
} from '@material-ui/core';

import { CardActionsComponent } from '../../components/Card/CardActionsComponent';
import { CardMediaComponent } from '../../components/Card/CardMediaComponent';
import { SnackbarComponent } from '../../components/Snackbar';

/**
 * Services
 */
import { Validator } from '../../services/validation';
import { auth_service } from '../../services/http/requests';
import { FakeAuth } from '../../utils/fakeAuth';

/**
 * Styles
 */
import { makeStyles } from '@material-ui/core/styles';

/**
 * Containers
 */
import { FormLogin } from '../../containers/FormLogin';

const useStyles = makeStyles({
    root: {
        maxWidth: 350,
        margin: '0 auto',
        marginTop: '5%'
    },
    media: {
        height: 140,
    },
    formContent: {
        textAlign: 'center'
    },
    actions: {
        marginBottom: '1em',
        justifyContent: 'center',
        paddingBottom: '0px'
    },
    forgot: {
        justifyContent: 'center',
        paddingTop: '0px'
    }
});

export const Login = () => {

    const dispatch = useDispatch()

    /**
     * Styles
     */
    const classes = useStyles();

    /**
     * Refs
     */
    const snackBarRef = useRef()

    /**
    * States form
    */
    const formInitData = {
        username: {
            error: false,
            msj: "",
            data: "Bret",
            type: ['required', 'min:3', 'max:20']
        },
        password: {
            error: false,
            msj: "",
            data: "Bret",
            type: ['required']
        }
    }

    /**
     * States
     */
    const [formData, setFormData] = useState({ ...formInitData });

    /**
     * Handlers
     */

    const handleChangeFormData = (property, value) => {
        const form_data_obj = formData;
        form_data_obj[property].data = value;
        setFormData({ ...form_data_obj });
    }

    const handleChangeUsername = (event) => handleChangeFormData('username', event.target.value);
    const handleChangePassword = (event) => handleChangeFormData('password', event.target.value);

    const handleLogin = async (event) => {
        event.preventDefault();
        let error = false;
        setFormData({ ...Validator(formData) });
        Object.entries(formData).forEach(([key, value]) => { if (value.error) error = true; });
        if (error) return;
        const { login } = auth_service();
        const response = await login(formData.username.data, formData.password.data);
        if (response.error) return snackBarRef.current.handleOpenSnackBar({ open: true, duration: 6000, msj: response.msj, status: 'error' });
        await FakeAuth.authenticate({ ...response });
        dispatch(authenticate({ user: { ...response.data }, state: FakeAuth.isAuthenticated() }))
    }

    return (
        <>

            <SnackbarComponent ref={snackBarRef}></SnackbarComponent>

            <Card className={classes.root}>
                <form onSubmit={handleLogin}>

                    <CardMediaComponent />

                    <CardContent className={classes.formContent}>
                        <FormLogin
                            changePassword={handleChangePassword}
                            changeUsername={handleChangeUsername}
                            formData={formData}
                        ></FormLogin>
                    </CardContent>

                    <CardActionsComponent
                        type={'single_submit'}
                        data={{
                            classes: {
                                actions: classes.actions
                            },
                            size: 'small',
                            color: 'primary',
                            submit: 'Log In'
                        }}
                    />
                </form>
            </Card>
        </>
    );
}
