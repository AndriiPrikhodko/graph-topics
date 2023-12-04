import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'
import store from '../store'
import Chip from '../components/shared/chip'

type CustomArgs = React.ComponentProps<typeof Chip> & {
  justifyContent?: string
  alignItems?: string
  backgroundColor?: string
  padding?: React.CSSProperties;
  fontSize?: string
};

const meta = {
    title: 'text chip',
    component: Chip,
    decorators: [Story => <Provider store={store}><Story/></Provider>],
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
    argTypes: {
        text: {control: 'text'},
        backgroundColor: { control: 'color' },
        styles: {control: 'object'}
    }
} satisfies Meta<CustomArgs>

export default meta
type Story = StoryObj<typeof meta>;

const initialStyles = {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '8px',
    height: '20px',
    fontSize: '12px',
    lineHeight : '20px',
    borderRadius: '4px',
    backgroundColor: '#f1f3f4',
    margin: '0 4px',
    color : 'black'
}

export const TextChip: Story = {
    render: args => {

        return <Chip
            text={args.text}
            onRemove={args.onRemove}
            styles={{
                ...args.styles,
                backgroundColor: args['backgroundColor']}} />
    },
    parameters: {
        controls: { exclude: ['style'] },
    },
    args: {
        text: 'placeholder',
        onRemove: () => {},
        styles: initialStyles
    }
}