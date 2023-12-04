import {linkFrom} from './from'
import {linkChain} from './chain'
import {linkBijection} from './map'
import {linkInto} from './into'

const linkStrategy = {
    from: linkFrom,
    chain: linkChain,
    bijection: linkBijection,
    into: linkInto
}

export default linkStrategy