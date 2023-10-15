const debounce = {
  // el:执行该指令的元素对象
  // binding:指令传入的参数
  inserted: function (el, binding) {
    let timer
    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
        timer = null
      }, 1000)
    })
  }
}
export default debounce