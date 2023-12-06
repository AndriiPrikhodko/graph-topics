const toString = (link: LinkObject): string => {
    const str = typeof link.source === 'string' &&
    typeof link.target === 'string' ?
        `${link.source},${link.target}` :
        `${JSON.stringify(link.source)},${JSON.stringify(link.target)}`
    return str
}

const createSet = (links: LinkObject[]) => {
    let linkSet = new Set<string>()
    for (let link of links) {
        linkSet.add(toString(link))
    }
    return linkSet
}

export const historyRemoveEdges
    = (graphData: GraphData, diffLinks: LinkObject[]) => {
        // initializing sets
        const linkSet = createSet(diffLinks)

        const links = graphData.links
            .filter(link => !linkSet.has(toString(link)))

        graphData.links = links

        return graphData
    }