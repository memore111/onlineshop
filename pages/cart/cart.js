// pages/cart/cart.js
const {getCart,getcartDelet} = require("../../api/index")
Page({

  /**
   * 页面的初始数据
   */
  data: {
      cartData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.http()
  },

  onClickDelet(e){
    console.log(e.currentTarget.dataset.id),
    getcartDelet({currentID:e.currentTarget.dataset.id}).then(res =>{
      if(res.data.status ===200){
        wx.showToast({
          title: '删除成功',
        })
        this.http()
      }else{
        wx.showToast({
          title: '删除失败',
        })
      }
    })
  },

  http(){
    getCart().then(res =>{
      if(res.data.status === 200){
        this.setData({
          cartData: res.data.data
        })
      }else{
        wx.showToast({
          title: '暂无数据',
        })
      }
    })
  },

  enterBuy(e){
    console.log(e.currentTarget.dataset.currentid);
    wx.navigateTo({
      url: '/pages/buy/buy?id=' + e.currentTarget.dataset.currentid
    })
  }
})