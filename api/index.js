//网络请求方法
const {request} = require('../utils/request')
// const base = require('./base')
const { baseUrl, banner, goods,hotSearch,search,details,cart ,cartAdd,cartDelet,category,buy,login,order, orderadd, orederDetail,orderReturns,orderDel,returns} = require('./base')
function getBanner(data) {
   return request(baseUrl + banner,'GET',data)
}

function getGoods(data) {
  return request(baseUrl + goods, 'GET' , data)
}

function gethotSearch(data) {
  return request(baseUrl + hotSearch , 'GET' , data)
}

function getSearch(data) {
  return request(baseUrl + search , 'GET' , data)
}

function getDetails(data) {
  return request(baseUrl + details , 'GET' , data)
}

function getCart(data) {
  return request(baseUrl + cart, "GET", data )
}

function getcartAdd(data) {
  return request(baseUrl + cartAdd , "GET", data)
}

function getcartDelet(data){
  return request(baseUrl + cartDelet, "GET", data)
}

function getcategory(data){
  return request(baseUrl + category, "GET" , data)
}

function getbuy(data){
  return request(baseUrl + buy, "GET" , data)  
}

function getlogin(data){
  return request('http://localhost:3300/wxlogin', "POST" , data)  
}

function getorder(data) {
  return request(baseUrl + order, 'GET', data)
}

function getorderAdd(data) {
  return request(baseUrl + orderadd, "GET" ,data)
}

function getorderDetail(data){
  return request(baseUrl + orederDetail, "GET", data)
}

function getorderReturns(data) {
  return request(baseUrl + orderReturns, "GET", data)
}

function getorderDel(data) {
  return request(baseUrl + orderDel, "GET", data)
}

function getReturns(data) {
  return request(baseUrl + returns, "GET", data)
}

module.exports = {
  getBanner,
  getGoods,
  gethotSearch,
  getSearch,
  getDetails,
  getCart,
  getcartAdd,
  getcartDelet,
  getcategory,
  getbuy,
  getlogin,
  getorder,
  getorderAdd,
  getorderDetail,
  getorderReturns,
  getorderDel,
  getReturns
}