const getters = {
  token: state => state.user.token,
  roles: state => state.user.roles,
  avator: state => state.user.avator,
  permission_routes: state => state.permission.routes,
}
export default getters