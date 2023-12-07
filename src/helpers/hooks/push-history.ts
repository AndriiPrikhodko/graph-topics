import { clone } from 'ramda'
import { purgeLinks } from '../data-adapter/clear-link-objects'
import { addHistoryItem } from '../../reducers/history.reducer'
import { type Dispatch } from 'redux'

export const pushToHistory = (historyItem: HistoryItem | undefined, dispatch: Dispatch) => {
    if(historyItem &&
        (historyItem.data.nodes.length > 0 ||
            historyItem.data.links.length > 0)) {
        let cloneHistoryItem = clone(historyItem)
        cloneHistoryItem.data.links =
                        purgeLinks(cloneHistoryItem.data.links)
        dispatch(addHistoryItem(cloneHistoryItem))
    }
}