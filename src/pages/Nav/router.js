// 普通路由加载
// import Nav from './Nav.vue'
// 路由懒加载
const Nav = ()=> import('./Nav.vue')
export default {
  path:'/nav',
  name:'nav',
  component:Nav,
  children:[]
}
