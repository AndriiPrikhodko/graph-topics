/**
 *
 * @param links
 * @returns links with str source and target removes all other link properties
 */
export const purgeLinks
    : (links: LinkObject[]) => LinkObject[]
    = links => {
        const cleanLinks = links.map(link => {
            const cleanLink = {
                source: typeof link.source === 'string' ? link.source : link.source.id,
                target: typeof link.target === 'string' ? link.target : link.target.id
            }
            return cleanLink
        })

        return cleanLinks
    }