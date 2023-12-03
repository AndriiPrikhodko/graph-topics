import { NodeObject as gNodeObject } from 'force-graph'

declare function addEdge(this: string, graphData: GraphData, linkType: LinkType): GraphData

declare global {

  type NodeObject = Omit<gNodeObject, 'id'> & {id: string} & INodeObjExt

  interface INodeObjExt {
    neighbors?: string[]
    links?: string[]
    color?: string
    index?: number
    __bckgDimensions?: number[]
  }

  interface LinkObject {
    source:  string | NodeObject
    target: string | NodeObject
    [key: string]: any
  }[]
  export interface GraphData {
    nodes: NodeObject[];
    links: LinkObject[];
  }

  
  interface IFuncProps {
    [props : string]: function
  }
  
  interface IPostGraphPayload {
    name?: string
    data?: GraphData
  }
  
  interface IGraphListState {
    data: string [],
    status: 'idle' | 'succeeded' | 'failed' | 'loading',
    error: string | null | undefined,
  }
  
  type LinkType = 'from' | 'chain' | 'bijection' | 'into'

  interface Edge {
    edge: string
  }
  interface Store {
    graphData: GraphData,
    graphList: IGraphListState
    common: {
      editMode: boolean
      type: LinkType
      graphFunction: null | 'addGraphEdge' | 'removeGraphEdge' | 'deleteGraphNode'
    }
  }
}