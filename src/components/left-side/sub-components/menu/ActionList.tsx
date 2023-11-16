type Action = {
    handleName: string,
    label: string,
    placeholder: string,
}

export const actionList: Action[] = [
    {
        handleName: 'graph/addGraphEdge',
        label: 'link nodes:',
        placeholder: 'comma separated strings'
    },
    {
        handleName: 'graph/removeGraphEdge',
        label: 'remove edge:',
        placeholder: 'comma separated strings'
    },
    {
        handleName: 'graph/deleteGraphNode',
        label: 'remove node:',
        placeholder: 'node name'
    }
]