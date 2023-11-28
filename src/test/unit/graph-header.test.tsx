import {  test } from 'vitest'
import { render } from '@testing-library/react';
import GraphHeader from '../../components/right-side/GraphHeader';
import store from '../../store';
import { Provider } from 'react-redux';
import { vi } from 'vitest';

vi.mock('react-router-dom', async () => {
  const router = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  const mockNavigate = vi.fn();
  return {
    ...router,
    useNavigate: vi.fn().mockReturnValue(mockNavigate),
  };
});

test('header', () => {
  const { getByTestId } = render(
    <Provider store={store}>
        <GraphHeader />
    </Provider>
  )
  const graphHeaderEl = getByTestId('graph-view-header')
  expect(graphHeaderEl).toMatchSnapshot()
})
