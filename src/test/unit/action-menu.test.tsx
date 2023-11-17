import {  test } from 'vitest'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ActionMenu from '../../components/left-side/sub-components/menu/ActionMenu'
import store from '../../store';
import { Provider } from 'react-redux';

test('action menu', () => {
  const menuRender = render(
    <Provider store={store}>
     <ActionMenu />
    </Provider>
  )
  
  const dataInputs = menuRender.baseElement.querySelectorAll('.data-input')
  dataInputs.forEach(inputEl => {
    expect(inputEl).toBeInTheDocument()
    expect(inputEl).toMatchSnapshot()
  })
});