//   存储网络接口

module.exports ={
  baseUrl:'http://www.hwh010216.com:3300',   //公共地址
  banner:'/api/banner',  //banner url
  goods:'/api/goods',  //goods url
  hotSearch: '/api/keywords', //热门关键商品关键字
  search: '/api/goods/search', //商品搜索
  details: "/api/goods/details", //商品详情页
  cart: "/api/cart", //购物车数据
  cartAdd: "/api/cart/add", //添加购物车数据
  cartDelet: "/api/cart/del", //删除购物车
  category: "/api/category", //分类
  buy: "/api/buy", //通过商品id网络请求获得商品信息
  login: "/api/login", //把code给login网络请求返回登录信息
  order: "/api/order", //获取订单数据
  orderadd: '/api/order/add', //添加到订单数据
  orederDetail: '/api/order/detail', //获取订单的详细数据
  orderReturns: '/api/order/returns', //退货
  orderDel: '/api/order/del', //删除订单
  returns: '/api/order/returns/list' //获取退货订单
}