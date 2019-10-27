/**
 * jwt controll (front-end)
 */
import Cookies from 'js-cookie'

/* Name jwt token in cookie navigator */
const TokenKey = 'jwt-token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}
