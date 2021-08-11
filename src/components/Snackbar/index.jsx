import React, { forwardRef, useImperativeHandle, useState } from 'react';

/**
 * Components
 */
import {
    Snackbar,
} from '@material-ui/core';

import Alert from '@material-ui/lab/Alert';

export const SnackbarComponent = forwardRef((props, ref) => {

    /**
     * States
     */
    const snackBarInit = {
        open: false,
        duration: 6000,
        msj: null,
        status: "success"
    }

    const [snackBar, setSnackBar] = useState({ ...snackBarInit });

    /**
     * Handlers
     */

    useImperativeHandle(ref, () => ({
        handleOpenSnackBar({ open, duration, msj, status }) {
            setSnackBar({ open, duration, msj, status })
        }
    }));

    const handleCloseSnackBar = () => setSnackBar({ open: false, duration: snackBar.duration, msj: snackBar.msj, status: snackBar.status });

    return (
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={snackBar.open} autoHideDuration={snackBar.duration} onClose={handleCloseSnackBar}>
            <Alert onClose={handleCloseSnackBar} severity={snackBar.status}>
                {snackBar.msj}
            </Alert>
        </Snackbar>
    )
})