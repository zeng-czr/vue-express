import instance from '@/utils/request.js';
export function getAll () {
  return instance({
    url: '/message/getAll',
    method: 'get'
  })
}
export function add (data) {
  return instance({
    url: '/message/add',
    method: 'post',
    data
  })
}
export function update (data) {
  return instance({
    url: '/message/updateOne',
    method: 'patch',
    data
  })
}
export function deleteOne (data) {
  return instance({
    url: '/message/delete',
    method: 'delete',
    data
  })
}