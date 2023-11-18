type LinkNode = {
  id: string
  [key: string]: any
}

interface IGraphData {
  nodes: {
    id: string
    [key: string]: any
    __bckgDimensions?: number[]
  }[]
  links: {
    source:  string | LinkNode
    target: string | LinkNode
    [key: string]: any
  }[]
}

interface IFuncProps {
  [props : string]: function
}

interface IPostGraphPayload {
  name?: string
  data?: IGraphData
}

type Edge = {
  edge: string
}

interface IGraphListState {
  data: string [],
  status: 'idle' | 'succeeded' | 'failed' | 'loading',
  error: string | null | undefined,
}

type Store = {
  graphData: IGraphData,
  graphList: IGraphListState
}
