import copy from './copy'
import debounce from './debounce'
import throttle from './throttle'
import permission from './permission'
const directives = {
  copy,
  debounce,
  throttle,
  permission
}
export default {
  install (Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    });
  }
}