/**
 *
 * @param nodeDiff
 * @returns filtered unique only nodes
 */
export const filterUnique
:(nodeDiff: NodeObject[]) => NodeObject[]
 = nodeDiff => {

     const nodeDiffNames = nodeDiff.map(n => n.id)
     const filterUnique = nodeDiff
         .filter((node, idx) =>
             nodeDiffNames.lastIndexOf(node.id) === idx)

     return filterUnique
 }