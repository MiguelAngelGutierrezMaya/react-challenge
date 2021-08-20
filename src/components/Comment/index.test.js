import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
// import { prettyDOM } from '@testing-library/dom'
import { Comment } from './index'

test('test-comment-component', () => {
    const data = {
        email: 'test@test.com',
        body: 'Hello world'
    }
    const component = render(<Comment data={data} />)

    // component.getByText('Hello world')
    expect(component.container).toHaveTextContent(data.body)

    // console.log('*******Debugger-component*******')
    // component.debug()

    // console.log('*******verify-format-li*******')
    // const li = component.container.querySelector('li')
    // console.log(prettyDOM(li))
})