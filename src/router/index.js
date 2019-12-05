//配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'
// import demo from '../components/demo'
// import HelloWorld from '../components/HelloWorld'
// import user from '../components/user'

//路由懒加载
const demo = () => import('../components/demo');
const HelloWorld = () => import('../components/HelloWorld');
const user = () => import('../components/user');

const usernews =() => import('../components/usernews');
const usermessage =() => import('../components/usermessage')

//通过vue.use(插件)，安装插件
Vue.use(VueRouter);

//创建VueRouter对象

const  routes = [
  {
    path:'/',
    redirect:'/HelloWorld'
  },
  {
    path:'/demo',
    name:'demo',
    component:demo
  },
  {
    path:'/HelloWorld',
    name:'HelloWorld',
    component:HelloWorld
  },
  {
    // path:'/user/:abc',
    path:'/user',
    name:'user',
    component:user,
    children:[
      {
        path:'/',
        redirect:'news'
      },
      {
        path: 'news',
        name: 'usernews',
        component:usernews
      },
      {
        path: 'message',
        name: 'usermessage',
        component:usermessage
      }
    ]
  }

];
const router = new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  mode:'history'
});
//将router对象传入到vue实例
export default router
