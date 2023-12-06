import { vi } from 'vitest'
import { test } from 'vitest'
import { setGraphDataLocal } from '../../../helpers/local-storage'

globalThis.localStorage = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    clear: vi.fn(),
    removeItem: vi.fn(),
    length: 0,
    key: vi.fn(),
}

test('should set graph data to local storage', () => {
    setGraphDataLocal({nodes: [], links: []})

    expect(localStorage.setItem).toHaveBeenCalled()
})
