import { faker } from '@faker-js/faker'

const generatePhrase = () => Math.random() < 0.5 ? faker.word.noun() :
 `${faker.word.noun()} ${faker.word.noun()}`

const getPhrases = (count: number) => 
    Array.from({length: count}, () => generatePhrase())

const graph2Nodes = () => {
    return {
        id: faker.string.uuid(),
        vertex: getPhrases(2)
    }
}

export default graph2Nodes