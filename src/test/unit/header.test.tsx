import {  test } from 'vitest'
import { render } from '@testing-library/react';
// import Graph from '../../components/right-side/graph-engine/graph';
const Graph = import('../../components/right-side/graph-engine/graph')
import Header from '../../components/left-side/sub-components/header/Header';

test('header', () => {
  const { getByRole } = render(<Header />)
  const h3 = getByRole('heading')
  expect(h3).toMatchSnapshot()
})

