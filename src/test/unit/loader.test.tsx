import {  test } from 'vitest'
import { render } from '@testing-library/react'
import GraphLoad from '../../components/left-side/sub-components/menu/GraphLoad'
import store from '../../store'
import { Provider } from 'react-redux'

test('loader', () => {
    const { getByTestId } = render(
        <Provider store={store}>
            <GraphLoad />
        </Provider>
    )
    const loaderEl = getByTestId('load-graph-list')
    expect(loaderEl).toMatchSnapshot()
})

