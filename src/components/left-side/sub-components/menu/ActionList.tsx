export type Action = {
    handleName: "addGraphEdge" | "removeGraphEdge" | "deleteGraphNode",
    label: string,
    placeholder: string,
}

export const actionList: Action[] = [
    {
        handleName: 'addGraphEdge',
        label: 'link nodes',
        placeholder: 'comma separated node names'
    },
    {
        handleName: 'removeGraphEdge',
        label: 'remove edge',
        placeholder: 'two comma separated node names'
    },
    {
        handleName: 'deleteGraphNode',
        label: 'delete node',
        placeholder: 'comma separated node names'
    }
]