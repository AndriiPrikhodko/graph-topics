import { faker } from '@faker-js/faker'

const generatePhrase = () => Math.random() < 0.5 ? faker.word.noun() :
 `${faker.word.noun()} ${faker.word.noun()}`

const getPhrases = (count: number) => 
    Array.from({length: count}, () => generatePhrase())

const strategies = [
    'from',
    'chain',
    'into'
]

const graph2Nodes = () => {
    return {
        id: faker.string.uuid(),
        strategy: faker.helpers.arrayElement(strategies),
        vertex: getPhrases(5)
    }
}

export default graph2Nodes