// Cookies本地存储--持久化
import Cookies from 'js-cookie'
// import store from '@/store'

const TokenKey = 'TokenKey'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}