import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, expect } from '@storybook/test'
import { Provider } from 'react-redux'
import store from '../store'
import selectors from './components/actions.selectors'
import {default as testData} from './test-data/actions.data.json'
import { expectIdSelectorsPresence } from './custom-expect/expect-presence'
import { getElementCollectionById } from './utils/element-collections'
import ActionMenu from '../components/left-side/sub-components/menu/ActionMenu'

const meta = {
    title: 'action menu',
    component: ActionMenu,
    decorators: [Story =>
        <Provider store={store}>
            <Story/>
        </Provider>],
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ActionMenu>

export default meta
type Story = StoryObj<typeof meta>;

export const ActionList: Story = {
    play: async ({ args, canvasElement, step }) => {
        const canvas = within(canvasElement)

        await step('should not show clear on empty graph action', async () => {
            await expectIdSelectorsPresence.call(canvas,
                [
                    selectors.testIdClearAddEdge,
                    selectors.testIdClearRemoveEdge,
                    selectors.testIdClearDeleteNode
                ],
                false)
        })

        await step('should show clear when fill in graph actions inputs', async () => {
            const [
                addEdgeInput,
                removeEdgeInput,
                deleteNodeInput
            ] = await getElementCollectionById.call(canvas, [
                selectors.testIdInputAddEdge,
                selectors.testIdInputRemoveEdge,
                selectors.testIdInputDeleteNode
            ])

            await userEvent.type(addEdgeInput, testData.addEdge)
            await userEvent.type(removeEdgeInput, testData.removeEdge)
            await userEvent.type(deleteNodeInput, testData.deleteNode)

            await expectIdSelectorsPresence.call(canvas,
                [
                    selectors.testIdClearAddEdge,
                    selectors.testIdClearRemoveEdge,
                    selectors.testIdClearDeleteNode
                ],
                true)
        })

        await step('should clear in graph actions input when click on clear', async () => {
            const clearInputs = await getElementCollectionById.call(canvas, [
                selectors.testIdClearAddEdge,
                selectors.testIdClearRemoveEdge,
                selectors.testIdClearDeleteNode
            ])

            await Promise.all(clearInputs.map(clear =>
                userEvent.click(clear)
            ))

            await expectIdSelectorsPresence.call(canvas,
                [
                    selectors.testIdClearAddEdge,
                    selectors.testIdClearRemoveEdge,
                    selectors.testIdClearDeleteNode
                ],
                false)

            const actionInputs = await getElementCollectionById.call(canvas, [
                selectors.testIdInputAddEdge,
                selectors.testIdInputRemoveEdge,
                selectors.testIdInputDeleteNode
            ])

            actionInputs.map(input =>
                expect(input.nodeValue).toBeNull()
            )
        })
    },
}