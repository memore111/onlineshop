// pages/orderDetail/orderDetail.js
const { getorderDetail,getorderReturns,getorderDel } = require("../../api/index")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    orderDetail: [],
    currentIndex: -1, // 初始化为-1，表示没有选中的订单
    currentAddress: {},
    steps: [
      {
        text: '商家已发货',
        desc: '正通知快递取件',
        activeIcon: 'success',
      },
      {
        text: '运输中',
        desc: '订单已打包完成，正在运输',
        activeIcon: 'plus',
      },
      {
        text: '已代收',
        desc: '已抵达快递驿站',
        activeIcon: 'cross',
      },
      {
        text: '已完成',
        desc: '订单已完成',
        activeIcon: 'fail',
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getorderDetail({id:options.id}).then(res =>{
      res.data.data[0].address = JSON.parse(res.data.data[0].address)
      this.setData({
        orderDetail: res.data.data
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

  returns(){
    console.log(this.data.orderDetail);
    wx.showModal({
      title: '提示',
      content: '确定要退货吗？',
      complete: (res) => {
        if (res.cancel) {
          
        }
    
        if (res.confirm) {
          getorderReturns({
            num: this.data.orderDetail[0].num,
            price: this.data.orderDetail[0].price,
            topimage: this.data.orderDetail[0].topimage,
            description: this.data.orderDetail[0].description,
            title: this.data.orderDetail[0].title,
            address: this.data.orderDetail[0].address,
            reason: this.data.orderDetail[0].reason,
          }).then(res =>{
            if(res.data.status === 200){
              wx.showToast({
                title: '退货成功',
              })
            }else{
              wx.showToast({
                title: '退货失败',
              })
            }
          })
          getorderDel({
            id: this.data.orderDetail[0].id
          }).then(res =>{
            console.log(res);
          })
        }
      }
    })
  }

})