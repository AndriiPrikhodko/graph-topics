import {  test } from 'vitest'
import { render } from '@testing-library/react';
// import Graph from './components/right-side/graph-engine/graph';
const DGraph = import('./components/right-side/graph-engine/graph')
import Header from './components/left-side/sub-components/header/Header';

  test('header', () => {
    const wrapper = render(<Header />)
    expect(wrapper).toBeTruthy()
})

test('graph', async () => {
  const Graph = (await DGraph).default
  const wrapper = render(<Graph />)
  expect(wrapper).toBeTruthy()
})
