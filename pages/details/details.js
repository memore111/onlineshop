// pages/details/details.js
const {getDetails,getcartAdd} = require("../../api/index")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    goodsDetails:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.showLoading({
      title: 'Loading',
    })
    getDetails({id:options.id}).then(res =>{
      if(res.data.status == 200){
        this.setData({
          goodsDetails: res.data.data[0]
        })
      }else{
        wx.showToast({
          title: 'Loading',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onShow() {
    
  },
  onClickKF(){
    wx.navigateTo({
      url: '/pages/ServiceAgent/ServiceAgent',
    })
  },

  onClickCart(){
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },

  onClickAddCart(){
    getcartAdd({
      title:this.data.goodsDetails.title,
      price:this.data.goodsDetails.price,
      image:this.data.goodsDetails.topimage,
      currentID:this.data.goodsDetails.id
    }).then(res=>{
      if(res.data.status ===200){
        wx.showToast({
          title: res.data.msg,
        })
      }else{
        wx.showToast({
          title: res.data.msg,
        })
      }
    })
  },

  onClickBuy(e){
    console.log(e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '/pages/buy/buy?id=' + e.currentTarget.dataset.id, 
    })
  }
})