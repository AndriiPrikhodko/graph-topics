export const linkToString = (link: LinkObject): string => {
    const str = typeof link.source === 'string' &&
    typeof link.target === 'string' ?
        `${link.source},${link.target}` :
        `${JSON.stringify(link.source)},${JSON.stringify(link.target)}`
    return str
}