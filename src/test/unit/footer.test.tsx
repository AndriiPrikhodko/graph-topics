import {  test } from 'vitest'
import { render } from '@testing-library/react'
import Footer from '../../components/left-side/sub-components/footer/Footer'

test('footer', () => {
    const { getByTestId } = render(<Footer />)
    const footerEl = getByTestId('footer')
    expect(footerEl).toMatchSnapshot()
})

