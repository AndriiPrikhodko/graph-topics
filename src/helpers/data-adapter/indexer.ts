/**
 *
 * @param length length of all previous nodes in the graph
 * @param nodeDiff array of new nodes
 * @returns indexed node diff
 */
export const nodeIndex
:(length: number, nodeDiff: NodeObject[]) => NodeObject[]
 = (length, nodeDiff) => {
     const indexedNodeDiff = nodeDiff
         .map((n, idx) => {
             n.index = length + idx
             n.vx = 0
             n.vy = 0
             return n})

     return indexedNodeDiff
 }

/**
 *
 * @param length length of all previous nodes in the graph
 * @param links array of new nodes
 * @returns indexed node diff
 */
export const linkIndex
:(length: number, links: LinkObject[]) => LinkObject[]
 = (length, links) => {
     const indexedLinks = links
         .map((l, idx) => {
             l.index = length + idx
             return l})

     return indexedLinks
 }