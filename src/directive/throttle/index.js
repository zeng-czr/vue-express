const throttle = {
  inserted: function (el, binding) {
    let timer = null
    el.addEventListener('click', () => {
      if (timer) return
      timer = setTimeout(() => {
        timer = null

        binding.value()
      }, 3000);
    })
    console.log(el)
    console.log(binding)
  }
}
export default throttle