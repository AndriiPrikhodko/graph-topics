import {  test } from 'vitest'
import { render } from '@testing-library/react';
import store from '../../store';
import { Provider } from 'react-redux';
import Header from '../../components/left-side/sub-components/header/Header';
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
  const { getByRole } = render(
    <Provider store={store}>
      <Header />
    </Provider>
  )
  const h3 = getByRole('heading')
  expect(h3).toMatchSnapshot()
})

