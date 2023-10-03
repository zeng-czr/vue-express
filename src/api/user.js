import instance from "@/utils/request.js";
export function login (data) {
  return instance({
    url: 'login/post',
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