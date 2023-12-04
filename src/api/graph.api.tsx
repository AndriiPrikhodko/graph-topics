import { api } from './config/axios.config'
import { defineCancelApiObject } from './config/axios.utils'

const HEADERS = {
    'Content-Type': 'application/json'
}

const ROUTER = {
    graph: '/graph',
    graphList: '/graphList'
}

const constructGetArgsStr = (args: object): string => {
    let argsStr = ''
    if(args) {
        argsStr = Object.entries(args).map(entrie =>
            entrie.join('=')
        ).join('&&')
        argsStr = `?${argsStr}`
    }
    return argsStr
}

export const graphAPI = {
    save: async function (graphData: IPostGraphPayload, cancel = false) {
        const response = await api.request({
            url: ROUTER.graph,
            method: 'POST',
            headers: HEADERS,
            data: graphData
            // signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
        })

        return response.data
    },

    getGraphList: async function(): Promise<string[]> {
        try {
            const response = await api.request({
                url: ROUTER.graphList,
                method: 'GET',
                headers: HEADERS,
            })

            return response.data.graphList
        }
        catch (err) {
            console.error(err)
            return []
        }
    },

    getGraph: async function(args: object): Promise<GraphData> {
        const response = await api.request({
            url: `${ROUTER.graph}${constructGetArgsStr(args)}`,
            method: 'GET',
            headers: HEADERS,
        })

        return JSON.parse(response.data.data)
    }
}

// defining the cancel API object for GraphAPI
const cancelApiObject = defineCancelApiObject(graphAPI)