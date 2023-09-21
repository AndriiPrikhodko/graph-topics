interface IAction {
    type: string,
    payload: string[]
}

const graphListReducer = (store: string[] = [], action: IAction) => {
    switch(action.type) {
        case 'LOAD_GRAPH_LIST':
            return action.payload
        default:
            return store
    }
}

export default graphListReducer