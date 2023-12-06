import { linkToString } from './link-string'
/**
 *
 * @param nodes
 * @returns filtered unique only nodes
 */
export const filterUniqueNodes
:(nodes: NodeObject[]) => NodeObject[]
 = nodes => {
     const nodeDiffNames = nodes.map(n => n.id)
     const filterUnique = nodes
         .filter((node, idx) =>
             nodeDiffNames.lastIndexOf(node.id) === idx)

     return filterUnique
 }

/**
 *
 * @param links
 * @returns filtered unique only links
 */
export const filterUniqueLinks
:(links: LinkObject[]) => LinkObject[]
 = links => {
     const linkNames = links.map(link => linkToString(link))
     const filterUnique = links
         .filter((link, idx) =>
             linkNames.lastIndexOf(linkToString(link)) === idx)

     return filterUnique
 }

/**
 *
 * @param links
 * @returns filtered unique only links
 */
export const filterUniqueLinksDiff
:(links: LinkObject[], linkDiff: LinkObject[]) => LinkObject[]
 = (links, linkDiff) => {
     const linkNames = links.map(link => linkToString(link))
     const filterUnique = linkDiff
         .filter(link => !linkNames.includes(linkToString(link)))

     return filterUnique
 }