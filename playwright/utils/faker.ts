import { faker } from '@faker-js/faker'

const generatePhrase = () => Math.random() < 0.5 ? faker.word.noun() :
 `${faker.word.noun()} ${faker.word.noun()}`

const getPhrases = (count: number) => 
    Array.from({length: count}, () => generatePhrase())

export {getPhrases}

