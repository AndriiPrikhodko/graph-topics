import { vi, expect } from 'vitest'
import { test } from 'vitest'
import { render } from '@testing-library/react'
import store from '../../store'
import { Provider } from 'react-redux'
import Select from '../../components/shared/select'
import { fireEvent } from '@testing-library/react'

test('menu select link strategy chain', async () => {

    const Props = {
        label: '',
        'testid': 'link-strategy',
        onChange: vi.fn(),
        optionList: [
            'from',
            'chain'
        ]
    }

    const selectR = render(
        <Provider store={store}>
            <Select {...Props}/>
        </Provider>
    )

    const select = selectR.getByTestId('link-strategy')

    expect(select).not.toBeNull()

    if(select)
        await fireEvent.change(select, { target: { value: 'chain' } })

    expect(Props.onChange).toHaveBeenCalled()
    expect(select).toMatchSnapshot()
})