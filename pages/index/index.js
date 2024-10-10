const { getBanner,getGoods } = require('../../api/index')
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
        icon: '/images/超市.png',
        name: 'superMarket'
      },
      {
        text: '数码',
        icon: '/images/数码家电类目.png',
        name: 'computer'
      },
      {
        text:'生鲜',
        icon: '/images/生鲜_蟹.png',
        name: 'seafood'
      },
      {
        text:'美妆',
        icon: '/images/美妆.png',
        name: 'makeup'
      },
      {
        text:'服饰',
        icon: '/images/服饰.png',
        name: 'cloth'
      },
      {
        text:'好店',
        icon: '/images/好店.png',
        name: 'shop'
      },
      {
        text:'会员',
        icon: '/images/认证用户.png',
        name: 'vip'
      },
      {
        text:'国际',
        icon: '/images/国际物流.png',
        name: 'international'
      }
    ],
    page : 1,
    goodsData:[]

  },
  onLoad(){
  getBanner().then(res=>{
    this.setData({
      indicator:'true',
      duration:'1000',
      interval:'3000',
      autoplay:'true',
      swiperData:res.data.data.result,
    })
  })
  this.http(this.data.page)
},
http(page){
    getGoods({page}).then(res=>{
      if(!res.data.msg){
        this.setData({
          goodsData:this.data.goodsData.concat(res.data.data.result)
        })
      }else{
        wx.showToast({
          title: res.data.msg,
          icon: 'success',
          duration:2000,
        })
      }
    })
    },

    clickSearch(){
      wx.navigateTo({
        url: '/pages/search/search',
      })
    },

    onReachBottom(){
      this.setData({
        page:this.data.page +=1
      })
      this.http(this.data.page)
    },

    navDetails(e){
      const target = e.currentTarget.dataset.name
        wx.navigateTo({
          url: `/pages/${target}/${target}`,
        })
    }
})