<template>
  <div class="cropper-container">
    <div class="cropper-left" :style='{width:`${imgObj.width}px`,height:`${imgObj.height}px`}'>
      <vue-cropper
      ref="cropper"
      :img="imgUrl"
      :autoCropWidth="200"
      :autoCropHeight="200"
      :canMoveBox="true"
      :centerBox="true"
      :autoCrop="true"
      :fixed="true"
      @realTime ="realTime">
      </vue-cropper>
      <button @click="change">change</button>
    </div>
    <div class="cropper-right-s" style="width: 150px;height: 150px;">
      <span>正方形头像预览</span>
      <img style="width: 100%; height: 100%;" v-show="previewImg" :src="previewImg" alt="">
    </div>
    <div class="cropper-right-c" style="width: 150px;height: 150px;">
      <span>圆形头像预览</span>
      <img style="width: 100%; height: 100%; border-radius: 50%;" v-show="previewImg" :src="previewImg" alt="">
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'cropper',
  props:['cropperImg'],
  data() {
    return {
      
      // imgUrl:require('@/assets/vartar.jpg'),
      imgUrl:this.cropperImg,
      previewImg:null,
      imgObj:{
        width:200,
        height:200,
      }
    };
  },
  mounted() {
  },

  methods: {
    change(){
      this.imgUrl=require('@/assets/girl.jpg')

    },
    newRealTime(data){
      console.log(data)
    },

    realTime(){
      const _this = this
      this.$refs.cropper.getCropBlob(data=>{
        this.bolbToDataUrl(data,function(res){
          _this.previewImg = res
        })
      })
    },
    bolbToDataUrl(blob,callback){
      var render = new FileReader()
      render.readAsDataURL(blob)
      render.onload = function(e){
        callback(e.target.result)
      }
    }
  },
  watch:{
    // imgUrl:{
    //   handler:function(val){
    //     console.log("watch触发了")
    //     const _this = this
    //     const img = new Image()
    //     img.url = val
    //     img.onload = function(){
    //       _this.imgObj.width = this.width
    //       _this.imgObj.height = this.height
    //     }
    //   }
    // }
  }
};
</script>
<style lang="scss" scoped>
.cropper-container{
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
  .cropper-left{
    padding-right: 20px;
    border-right: 2px dotted #333;
  }
  .cropper-right-s , .cropper-right-c{
    span{
      display: block;
      margin-bottom: 30px;
      font-size: 18px;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>