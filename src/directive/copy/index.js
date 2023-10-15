import { Message } from "element-ui";
const copy = {
  // 指令第一次绑定到元素时调用
  bind (el, { value }) {
    el.$value = value;
    el.handler = () => {
      if (!el.$value) {
        console.log("无复制内容！！！")
        return
      }
      const textarea = document.createElement('textarea')
      textarea.readOnly = 'readonly'
      textarea.style.position = 'absolute'
      textarea.style.left = '-99999px'
      textarea.value = el.$value
      document.body.appendChild(textarea)
      textarea.select()
      const result = document.execCommand('Copy')
      if (result) {
        Message({
          message: '复制成功',
          type: "success"
        })
      }
      document.body.removeChild(textarea)
    }
    el.addEventListener('click', el.handler)
  },
  componentUpdated (el, { value }) {
    el.$value = value
  },
  unbind (el) {
    el.removeEventListener('click', el.handler)
  }
}
export default copy