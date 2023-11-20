import {  test } from 'vitest'
import { render } from '@testing-library/react';
import GraphHeader from '../../components/right-side/GraphHeader';
import store from '../../store';
import { Provider } from 'react-redux';

test('header', () => {
  const { getByTestId } = render(
    <Provider store={store}>
    <GraphHeader />
    </Provider>
  )
  const graphHeaderEl = getByTestId('graph-view-header')
  expect(graphHeaderEl).toMatchSnapshot()
})
