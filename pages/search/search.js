const { gethotSearch } = require("../../api/index")
Page({
  data: {
    value: '',
    data: '',
    search: '',
    hotSearch: [],
  },

  onLoad(options){
    gethotSearch().then(res =>{
      this.setData({
        hotSearch:res.data.data.result
      })
    })
  },
  onChange(e) {
    this.setData({
      value: e.detail,
      
    },
    console.log(e.detail)
    );
  },
  onSearch(e) {
    wx.navigateTo({
      url: '/pages/goods/goods?search=' + this.data.value,
    })
  },
  onSearchClick(e){
    wx.navigateTo({
      url: '/pages/goods/goods?search=' + this.data.value,
    })
},

  clickGetKeyWords(e){
    wx.navigateTo({
      url: '/pages/goods/goods?search=' + e.currentTarget.dataset.hotkey,
    })
   }
});
