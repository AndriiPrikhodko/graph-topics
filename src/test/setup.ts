import { vi } from 'vitest'
import { server } from '../mocks/server'

if(process.env.NODE_ENV === 'test') {
    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())
}

afterEach(() => {
    vi.restoreAllMocks()
})