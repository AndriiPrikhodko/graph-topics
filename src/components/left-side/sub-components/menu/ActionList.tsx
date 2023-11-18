export type Action = {
    handleName: string,
    label: string,
    placeholder: string,
}

export const actionList: Action[] = [
    {
        handleName: 'addGraphEdge',
        label: 'link nodes:',
        placeholder: 'comma separated strings'
    },
    {
        handleName: 'removeGraphEdge',
        label: 'remove edge:',
        placeholder: 'comma separated strings'
    },
    {
        handleName: 'deleteGraphNode',
        label: 'delete node:',
        placeholder: 'node name'
    }
]