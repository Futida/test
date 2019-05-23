import * as types from './types'

export default {
  [types.LIST_USERS]: state => {
    return state.listUsers
  },

  [types.GET_USER]: state => userId => state.listUsers.find(user => user._id === userId)
}
