import React from 'react';

/**
 * Components
*/
import {
    FormControl,
    InputLabel,
    Input,
    FormHelperText,
    FormGroup,
} from '@material-ui/core';

/**
 * Styles
 */
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    colorTextHelper: {
        color: 'Red'
    },
    cardContent: {
        width: '85%',
        margin: '0 auto'
    },
    formGroup: {
        marginTop: '10px',
        marginBottom: '10px'
    }
});

export const FormLogin = ({ formData, changeUsername, changePassword }) => {

    /**
     * Styles
     */
    const classes = useStyles();

    /**
     * Handlers
     */
    const handleChangeUsername = (event) => changeUsername(event)
    const handleChangePassword = (event) => changePassword(event)

    return (
        <div className={classes.cardContent}>
            <FormGroup className={classes.formGroup}>
                <FormControl>
                    <InputLabel htmlFor="input_username">Username</InputLabel>
                    <Input id="input_username" aria-describedby="username" onChange={handleChangeUsername} type={'text'} value={formData.username.data} />
                    <FormHelperText id="username" className={classes.colorTextHelper}>{formData.username.msj}</FormHelperText>
                </FormControl>
            </FormGroup>
            <FormGroup className={classes.formGroup}>
                <FormControl>
                    <InputLabel htmlFor="input_password">Contraseña</InputLabel>
                    <Input id="input_password" aria-describedby="password" onChange={handleChangePassword} type={'password'} value={formData.password.data} />
                    <FormHelperText id="password" className={classes.colorTextHelper}>{formData.password.msj}</FormHelperText>
                </FormControl>
            </FormGroup>
        </div>
    )
}