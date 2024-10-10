// pages/superMarket/superMarket.js
const {getGoods,getBanner} = require('../../api/index')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:'',
    swiperOptions:{
      indicator:'true',
      duration:'1000',
      interval:'3000',
      autoplay:'true',
      swiperData:[]
    },

    navData:[
      {
        text:'超市',
        icon: '/images/超市.png'
      },
      {
        text: '数码',
        icon: '/images/数码家电类目.png'
      },
      {
        text:'生鲜',
        icon: '/images/生鲜_蟹.png'
      },
      {
        text:'美妆',
        icon: '/images/美妆.png'
      },
      {
        text:'服饰',
        icon: '/images/服饰.png'
      },
      {
        text:'好店',
        icon: '/images/好店.png'
      },
      {
        text:'会员',
        icon: '/images/认证用户.png'
      },
      {
        text:'国际',
        icon: '/images/国际物流.png'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getBanner().then(res =>{
      this.setData({
        indicator:'true',
        duration:'1000',
        interval:'3000',
        autoplay:'true',
        swiperData:res.data.data.result,
      })
    })
  },

  clickSearch() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  }
})