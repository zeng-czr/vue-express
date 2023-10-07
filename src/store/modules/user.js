import { login } from '@/api/user.js'
import { setToken } from '@/utils/auth.js'
const state = {
  name: '',
  token: '',
  avator: '',
  roles: []
}
const mutations = {
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_AVATOR: (state, avator) => {
    state.avator = avator
  },
  SET_ROLES: (state, role) => {
    state.roles.push(role)
  },
}
const actions = {
  // login
  login ({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        console.log(response)
        const data = response
        if (data.length > 0) {
          setToken(data[0].token)
          commit('SET_TOKEN', data[0].token)
          commit('SET_AVATOR', data[0].avatar)
          window.localStorage.setItem('userInfo', JSON.stringify(data[0]))
          resolve()
        }
        else {
          reject(new Error("请确认用户名和密码后再次登录"))
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  getInfo ({ commit }) {
    return new Promise((resolve, reject) => {
      // commit('SET_ROLES', ['admin'])
      // resolve(['admin'])
      let roleList = []
      login({ username: "admin", password: "123456" }).then(response => {
        const data = response
        if (data.length > 0) {
          console.log(data)
          commit('SET_ROLES', data[0].role)
          commit('SET_NAME', data[0].name)
          commit('SET_AVATOR', data[0].avatar)
          resolve(data[0])
        }
        else {
          reject(new Error("重新登陆后在访问登录"))
        }
      }).catch(error => {
        reject(error)
      })
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}