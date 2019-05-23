import * as types from './types'
import { getUsers, deleteUser, updateUser, createUser } from '../services/users'

export default {
  [types.GET_LIST_USERS]: async ({ state, commit }) => {
    try {
      state.isBusy = true
      const { data } = await getUsers()
      commit(types.MUTATE_LIST_USERS, data)
    } catch (e) {
      console.log(e)
    } finally {
      state.isBusy = false
    }
  },

  [types.DELETE_USER]: async ({ dispatch }, id) => {
    await deleteUser(id)
    dispatch(types.GET_LIST_USERS)
  },

  [types.UPDATE_USER]: async ({ dispatch }, payload) => {
    await updateUser(payload)
    dispatch(types.GET_LIST_USERS)
  },

  [types.CREATE_USER]: async ({ dispatch }, payload) => {
    await createUser(payload)
    dispatch(types.GET_LIST_USERS)
  }
}
