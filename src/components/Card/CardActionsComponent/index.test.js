import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
// import { prettyDOM } from '@testing-library/dom'
import { CardActionsComponent } from './index'

test('test-card-actions-component', () => {
    const mockHandler = jest.fn()
    const data_obj = {
        handleClickButton: mockHandler,
        sizeSubmit: 'small',
        colorSubmit: 'secondary',
        size: 'small',
        color: 'primary',
        classes: {
            actions: 'makeStyles-actions-10'
        }
    }
    const array_data = [
        {
            type: 'multi_actions_with_submit',
            data: {
                ...data_obj,
                submit: 'submit_button_1',
                button: 'button_button_1'
            }
        },
        {
            type: 'single_not_submit',
            data: {
                ...data_obj,
                button: 'button_button_3'
            }
        }
    ], components = []

    array_data.forEach(data => components.push(render(<CardActionsComponent type={data.type} data={data.data} />)))

    components.forEach((component, index) => {
        const button = component.getByText(array_data[index].data.button)
        fireEvent.click(button)
        // console.log('*******Debugger-component*******')
        // component.debug()
    })

    // expect(mockHandler.mock.calls).toHaveLength(2)
    expect(mockHandler).toHaveBeenCalledTimes(2)
})