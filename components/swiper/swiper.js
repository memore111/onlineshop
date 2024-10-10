
// components/swiper/swiper.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
      indicator:{
        type:Boolean,
        value:false,
      },
      duration:{
        type:Number,
        value:500,
      },
      interval:{
        type:Number,
        value:2000,
      },
      
      autoplay:{
        type:Boolean,
        value:false,
      },

      swiperData:{
        type:Array,
        value: [],
      }
  },

})