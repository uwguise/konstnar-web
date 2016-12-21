import * as I from 'immutable'
import * as ReduxActions from 'redux-actions'
import * as C from '../constants'

export default ReduxActions.handleActions({
  [C.TickerActions.FETCH]: (state) => {
    return state
      .set('fetchingTickerSuggestions', true)
  },

  [C.TickerActions.SAVE]: (state, action) => {
    const { tickers } = action.payload
    return state
      .set('tickerSuggestions', I.fromJS(tickers))
      .set('fetchingTickerSuggestions', false)
  },
}, I.Map())
