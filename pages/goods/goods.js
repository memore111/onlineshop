// pages/goods/goods.js
const {getSearch} = require("../../api/index.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsData: Array,
    type: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getSearch({search:options.search}).then(res =>{
      if(!res.data.msg){
        this.setData({
          goodsData:res.data.data
        })
      }else{
        wx.showToast({
          title: '暂无数据',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})