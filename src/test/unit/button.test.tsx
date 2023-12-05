import { vi, expect } from 'vitest'
import { test } from 'vitest'
import { render } from '@testing-library/react'
import store from '../../store'
import { Provider } from 'react-redux'
import Button from '../../components/shared/button'
import userEvent from '@testing-library/user-event'

test('shared button should invoke handle on click', async () => {

    const Props = {
        label: 'Test',
        'testid': 'button',
        onClick: vi.fn(),
    }

    const ButtonR = render(
        <Provider store={store}>
            <Button {...Props}/>
        </Provider>
    )

    const button = ButtonR.getByTestId('button')
    await userEvent.click(button)

    expect(Props.onClick).toHaveBeenCalled()
    expect(button).toMatchSnapshot()
})