import {
  login,
  register,
  logout
} from '@/api/auth'
import {
  removeToken,
  getToken,
  setToken
} from '@/utils/auth'
const state = {
  user: {},
  token: getToken(),
  logged: false
}

const mutations = {
  SET_USER: (state, user) => {
    state.user = user
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_LOGGED: (state, boolean) => {
    state.logged = boolean
  },
}

const actions = {
  // user login
  login({
    commit
  }, userInfo) {
    const {
      email,
      password
    } = userInfo
    return new Promise((resolve, reject) => {
      login({
          email: email.trim(),
          password: password
        })
        .then(response => {
          commit('SET_TOKEN', response.token)
          commit('SET_USER', response.user)
          commit('SET_LOGGED', true)

          setToken(response.token)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  register({
    commit
  }, user) {
    const {
      email,
      password
    } = user
    return new Promise((resolve, reject) => {
      register({
          email: email.trim(),
          password: password
        })
        .then(response => {
          // commit('SET_TOKEN', response.token);
          // setToken(response.token);
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  async logout({
    commit
  }) {
    await commit('SET_TOKEN', undefined)
    commit('SET_USER', {

    })
    commit('SET_LOGGED', false)

    await removeToken()
  }

}

const getters = {
  user: state => state.user,
  token: state => state.token,
  logged: state => state.logged
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
