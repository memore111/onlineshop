// pages/saleReturn/saleReturn.js
const {getReturns} = require("../../api/index.js")
Page({
  data: {
    returnData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getReturns().then(res =>{
      res.data.data.result.map((item) =>{
        item.address = JSON.parse(item.address)
      })
      this.setData({
        returnData: res.data.data.result
      })
    })
  },

  showDetail(event) {
    const currentIndex = event.currentTarget.dataset.index;
    const currentAddress = event.currentTarget.dataset.address;
    if (this.data.currentIndex === currentIndex) {
      this.setData({
        currentIndex: -1,  // 点击已经展开的订单则关闭
        currentAddress
      });
    } else {
      this.setData({
        currentIndex,
        currentAddress
      });
    }
  },

})