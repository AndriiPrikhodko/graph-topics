import { render, screen } from '@testing-library/react';
import LeftView from '../../components/left-side/LeftView';
import store from '../../store';
import { Provider } from 'react-redux';
import mediaQuery from 'css-mediaquery';
import '../../components/left-side/LeftView.css'

type CreateMatchMedia = (width: number) => (query: string) => {
    matches: boolean;
    addListener: () => void;
    removeListener: () => void;
  };

const createMatchMedia = (width: number) => {
    return (query: string) => ({
      matches: mediaQuery.match(query, { width }),
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
      addEventListener: () => {},
      removeEventListener: () => {},
      onchange: null,
      media: '(max-width: 500px)',
    });
  };

it('left-view should have classes', () => {
  const expectedClasses = [
    'split-small',
    'left'
  ]

  window.matchMedia = createMatchMedia(500);
  render(
        <Provider store={store}>
         <LeftView />
        </Provider>
      )
  
  const leftViewElement = screen.getByTestId('left-view')
  const actualClasses = leftViewElement.className.split(' ')
  expectedClasses
    .map(className=>
        expect(actualClasses.includes(className)).toBeTruthy)
});