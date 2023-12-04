/**
 *
 * @param nodeNames
 * @returns links array where nodes are attached in a line
 */
export const linkChain = (nodeNames: string []): LinkObject[] => {
    let linkDiff: LinkObject[] = []
    linkDiff = nodeNames
        .reduce((acc, node, index, arr) => {
            if(index < arr.length - 1)
            {
                acc.push({
                    source: node,
                    target: arr[index+1]
                })
            }
            return acc
        }, linkDiff)
    return linkDiff
}