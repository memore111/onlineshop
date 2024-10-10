const { getlogin } = require("../../api/index")
Page({
  data: {
    avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
    nickname: '',
    userInfo:{},
    containerData:[
      {
        text:"订单",
        id:1,
        img:'/images/订单.png',
        name: 'order'
      },
      {
        text:"待付款",
        id:2,
        img:'/images/_订单 待付款.png',
        name: 'unpay'
      },
      {
        text:"待评价",
        id:3,
        img:'/images/待评价.png',
        name: 'unevaluate'
      },
      {
        text:"售后",
        id:4,
        img:'/images/售后.png',
        name: 'afterSale'
      },
      {
        text:"地址管理",
        id:5,
        img:'/images/地址.png',
        name: 'myAddress'
      },
      {
        text:"退货",
        id:6,
        img:'/images/3.1退款退货.png',
        name: 'saleReturn'
      }
    ]
  },
  onLoad(options) {
    if(wx.getStorageSync('avatarUrl').avatarUrl){
      this.setData({
        avatarUrl: wx.getStorageSync('avatarUrl').avatarUrl,
        nickname: wx.getStorageSync('nickname')
      })
    }
  },

  getUserProfile(){
    wx.getUserProfile({
      desc: '获取您的头像和昵称',
      success: res => {
        this.setData({
          userInfo:res.userInfo
        })
        console.log(res.userInfo);
        this.loginHandle()
        wx.setStorageSync('userInfo', res.userInfo)
      },
      fail(err){
        console.log(err);
      },
      complete(){
        console.log("成功");
      }
    })
  },
    //登录后用户自己选择头像和昵称
    onChooseAvatar(e){
      const { avatarUrl } = e.detail
      wx.setStorageSync('avatarUrl', e.detail)
      //this指向的是page setdata设置data{}
      this.setData({
        avatarUrl,
      }),
      wx.login({
        success: (response) => { 
          getlogin({code:response.code}).then(res =>{
            console.log(res);
            wx.setStorageSync('loginID', res.data.data   )
          })
        },
        fail(err){
          console.log(err);
        }
      })
    },

    //获得昵称
    getUsername(e){
      wx.setStorageSync('nickname', e.detail.value.nickname)
    },

    getUsernameCancel(e){
      console.log(e.detail.value);
    },
  loginHandle(){
    wx.login({
      success: (res) => {
        console.log(res);
      },
    })
  },


  navigateTo(e){
    // console.log(e.currentTarget.dataset.name);
    const targetName = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: `/pages/${targetName}/${targetName}`
    })
  }
})