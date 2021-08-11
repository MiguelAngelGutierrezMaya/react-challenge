import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { CardActionsComponent } from '../components/Card/CardActionsComponent'

test('render content', () => {

    const component = render(<CardActionsComponent type='multi_actions_with_submit' data={{ classes: { action: '' }, submit: 'Guardar' }}></CardActionsComponent >)

    component.getByText('Guardar')
})