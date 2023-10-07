import instance from "@/utils/request.js";
export function login (data) {
  return instance({
    url: '/login/post',
    method: 'post',
    data
  })
}
export function loginAll () {
  return instance({
    url: '/login',
    method: 'get',
  })
}
export function getAllUser () {
  return instance({
    url: '/users/all',
    method: 'get',
  })
}
export function uploadImg (data) {
  return instance({
    url: '/users/upload',
    method: 'post',
    data
  })
}