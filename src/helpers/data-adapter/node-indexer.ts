
/**
 * 
 * @param length length of all previous nodes in the graph
 * @param nodeDiff array of new nodes
 * @returns indexed and unique node diff
 */
export const nodeIndex
:(length: number, nodeDiff: NodeObject[]) => NodeObject[]
 = (length, nodeDiff) => {

    const nodeDiffNames = nodeDiff.map(n => n.id)
    const indexedNodeDiff = nodeDiff
    .filter((node, idx) => 
      nodeDiffNames.lastIndexOf(node.id) === idx)
    .map((n, idx) => { 
      n.index = length + idx
      n.vx = 0
      n.vy = 0
      return n})
      
    return indexedNodeDiff
}