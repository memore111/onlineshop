// pages/buy/buy.js
const { getbuy, getorder,getorderAdd } = require("../../api/index") 
import{areaList} from '../../vantAreaFile/area-data/dist/data'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    areaList,
    detailAddress: '',
    phoneNumber: '',
    consignee: '',
    orderAddress:'',
    goodId: 0,
    buyData:{}
  },

  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //根据id发网络请求获取购买的商品数据
    this.setData({
      goodId : options.id
    })
    getbuy({id:options.id}).then(res=>{
      this.setData({
        buyData:res.data.data[0],
      })
      // console.log(res.data.data[0])
    })

    //判断是否有地址 有则不显示改变地址的选项
      if(wx.getStorageSync('address')){
        this.setData({
          address: true
        })
      }
      
  },

  //提交订单
  onClickButton(){
    if(!wx.getStorageSync("loginID")){
      wx.showModal({
        title: '提示',
        content: '你还没有登录，先登录吧',
        complete: (res) => {
          if (res.cancel) {
            console.log('用户取消');
          }
          if (res.confirm) {
            wx.switchTab({
              url: '/pages/mine/mine',
            })
          }
        }
      })
    }else if(!(this.data.detailAddress)){
      wx.showModal({
        title: '提示',
        content: '先填写详细电话地址吧',
        complete: (res) => {
          if (res.cancel) {
            
          }
      
          if (res.confirm) {
            
          }
        }
      })
    }else{
      {
        this.setData({
          orderAddress: JSON.stringify(wx.getStorageSync('address'))
        });
        getorderAdd({
          num: 1, 
          tag: this.data.buyData.tag,
          price: this.data.buyData.price,
          title: this.data.buyData.title,
          description: this.data.buyData.title,
          topimage: this.data.buyData.url,
          address: this.data.orderAddress
        }).then(res =>{
          if(res.data.status === 200){
            wx.showToast({
              title: '下单成功',
            })
          }else{
            wx.showToast({
              title: '下单失败',
            })
          }
        })
        
      }
    }
  },

  changeAddress(){
    // console.log('修改地址');
  },

  addressconfirm(res){
    let address = res.detail.values
    //对输入的号码进行检验
    let Regex = /^1[3456789]\d{9}$/
    if(!Regex.test(this.data.phoneNumber)){
      wx.showModal({
        title: '提示',
        content: '请输入正确的手机号码',
        complete: (res) => {
          if (res.cancel) {
            
          }
      
          if (res.confirm) {
            
          }
        }
      })
      return
    }
    address.unshift({goodId: this.data.goodId})
    address.unshift({detailAddress: this.data.detailAddress})
    address.unshift({phoneNumber: this.data.phoneNumber})
    address.unshift({consignee: this.data.consignee})
    wx.setStorageSync('address', address)
    this.setData({ show: false });
    // console.log('用户确认');
  },

  addresscancel(){
    this.setData({ show: false });
    // console.log('用户取消');
  }
})