import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { SnackbarComponent } from '../components/Snackbar'

test('render content', () => {

    const component = render(<SnackbarComponent></SnackbarComponent>)

    component.getAllByText('')
})