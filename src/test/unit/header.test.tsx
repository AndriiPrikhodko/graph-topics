import {  test } from 'vitest'
import { render } from '@testing-library/react';
import Graph from '../../components/right-side/graph-engine/graph';
import Header from '../../components/left-side/sub-components/header/Header';

test('header', () => {
  const header = render(<Header />)
  expect(header).toMatchSnapshot()
})

test.skip('graph', async () => {
  const wrapper = render(<Graph />)
  expect(wrapper).toBeTruthy()
})
