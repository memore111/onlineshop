const { getorder } = require("../../api/index")

// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderData: [],
    currentIndex: -1, // 初始化为-1，表示没有选中的订单
    currentAddress: {},
    id: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getorder().then(res =>{
      res.data.data.result.map((item) =>{
        item.address = JSON.parse(item.address)
      })
      this.setData({
        orderData: res.data.data.result,
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

  // orderDetail(e){
  //   this.setData({
  //     id: e.currentTarget.dataset.id
  //   })
  //   console.log(id);
  // }
})