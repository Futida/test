import * as types from './types'

export default {
  [types.MUTATE_LIST_USERS]: (state, payload) => {
    state.listUsers = [...payload]
  }
}
