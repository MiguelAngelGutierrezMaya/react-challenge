import React from 'react';

/**
 * Components
 */
import {
    CardActions,
    Button,
} from '@material-ui/core';

export const CardActionsComponent = ({ type, data = {} }) => {

    var template = (<></>);

    /**
     * Handlers
     */
    const handleClickButton = (event) => data.handleClickButton(event);

    switch (type) {
        case 'multi_actions_with_submit':
            template = (
                <CardActions className={data.classes.actions}>
                    <Button size={data.sizeSubmit} color={data.colorSubmit} type={'submit'}>
                        {data.submit}
                    </Button>
                    <Button size={data.size} color={data.color} onClick={handleClickButton}>
                        {data.button}
                    </Button>
                </CardActions>
            )
            break;
        case 'single_submit':
            template = (
                <CardActions className={data.classes.actions}>
                    <Button size={data.size} color={data.color} type={'submit'}>
                        {data.submit}
                    </Button>
                </CardActions>
            )
            break;
        case 'single_not_submit':
            template = (
                <CardActions className={data.classes.actions}>
                    <Button size={data.size} color={data.color} onClick={handleClickButton}>
                        {data.button}
                    </Button>
                </CardActions>
            )
            break;
        default:
            break;
    }

    return (template);
}