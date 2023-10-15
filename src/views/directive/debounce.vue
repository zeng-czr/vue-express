<template>
  <div>
    <span>防抖指令封装</span>
    <div class="debounce">
      <span style="font-weight: bold; margin-right: 10px;">防抖函数</span>
      <span>当一个动作重复出发，只执行最后一次</span>
      <span>使用场景</span>
      <ul>
        <li>
          登录,发短信等按钮避免用户点击太快,以至于发送过多请求，需要防抖
        </li>
        <li>
          调整浏览器窗口的大小时,resize次数过于频繁会造成计算过多,需要一步到位,就要使用防抖
        </li>
      </ul>
      <el-button v-debounce="debounceClick" type="primary">防抖按钮</el-button>
    </div>
    <div class="throttle">
      <span style="font-weight: bold; margin-right: 10px;">节流函数</span>
      <span>在规定时间内只能执行一遍</span>
      <span>使用场景</span>
      <ul>
        <li>
          scroll事件,每隔一秒执行获取一次位置
        </li>
        <li>
          输入框的实时搜索,每隔一秒发送一次请求
        </li>
      </ul>
      <el-button v-throttle="debounceClick" type="primary">防抖按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'debounce',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    debounceClick(){
      this.$message({
        message:'多次点击，只触发一次',
        type: 'info'
      })
    },
    throttleClick(){
      this.$message({
        message:'3秒内，只触发一次',
        type: 'info'
      })
    }
  },
};
</script>