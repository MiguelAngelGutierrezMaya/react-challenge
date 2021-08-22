import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import store from './../../utils/store'
import { Provider } from 'react-redux'
import { ToggleDrawer } from './index'

describe('<ToggleDrawer />', () => {
    let component

    beforeEach(() => {
        component = render(
            <Provider store={store}>
                <ToggleDrawer test={true} />
            </Provider>
        )
    })

    test('test-toggle-drawer-component', () => {
        console.log('*******Close-drawer*******')
        const button = component.container.querySelector('button')
        expect(button.parentElement.parentElement.childNodes.length).toEqual(1)
        
        console.log('*******Open-drawer*******')
        fireEvent.click(button)
        const drawer = button.parentElement.parentElement.childNodes[1]
        expect(drawer).toHaveStyle('position: fixed;')

        // console.log('*******Debugger-component*******')
        // component.debug()
    })
})
