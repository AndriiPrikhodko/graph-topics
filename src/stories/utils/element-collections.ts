export const getElementCollectionById = async function (this: object & {
    getByTestId(id: string): HTMLElement
}, selectors: string[]): Promise<HTMLElement[]> {
    const collection = await Promise.all(selectors.map(selector => 
        this.getByTestId(selector)
    ))
    return collection
}