// pages/category/category.js
import Notify from '@vant/weapp/notify/notify';
const {getcategory} = require("../../api/index")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeKey: 0,
    sidebarItem:[
      {
        text:'热门推荐',
        id:0
      },
      {
        text:'手机数码',
        id:1
      },
      {
        text:'家用电器',
        id:2
      },
      {
        text:'电脑办公',
        id:4
      },
      {
        text:'美妆',
        id:5
      },
      {
        text:'男装',
        id:6
      },
      {
        text:'女装',
        id:7
      },
      {
        text:'日用品',
        id:8
      },
    ],
    categoryData:[],
    currentTag:"热门推荐"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.http(this.data.currentTag)
  },

  onChange(e) {
    this.http(e.currentTarget.dataset.title);
  },

  http(tag){
    getcategory({tag}).then(res=>{
      if(res.data.status === 200){
        this.setData({
          categoryData:res.data.data
        })
      }else{
        wx.showToast({
          title: '暂无数据',
        })
      }
    })
  },

  onclickGoodsDetail(e){
    console.log(e.currentTarget.dataset.tag);
    wx.navigateTo({
      url: '/pages/goods/goods?search=' + e.currentTarget.dataset.tag,
    })
  }

})