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
const usermessage =() => import('../components/usermessage');

const profile =() => import('../components/profile');

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
    component:demo,
    meta: {
      title: 'demo'
    }
  },
  {
    path:'/HelloWorld',
    name:'HelloWorld',
    component:HelloWorld,
    meta: {
      title: 'HelloWorld'
    }
  },
  {
    // path:'/user/:abc',
    path:'/user',
    name:'user',
    component:user,
    meta: {
      title: 'user'
    },
    children:[
      {
        path:'/',
        redirect:'news'
      },
      {
        path: 'news',
        name: 'usernews',
        component:usernews,
        meta: {
          title: 'usernews'
        }
      },
      {
        path: 'message',
        name: 'usermessage',
        component:usermessage,
        meta: {
          title: 'usermessage'
        }
      }
    ]
  },
  {
    path:'/profile',
    name:'profile',
    component:profile,
    meta: {
      title: 'profile'
    }
  },

];
const router = new VueRouter({
  //配置路由和组件之间的应用关系
  routes,
  mode:'history',
  linkActiveClass:'active'
});

//前置守卫（guard）
router.beforeEach((to,from,next) => {
  document.title = to.matched[0].meta.title;
  // eslint-disable-next-line no-console
  console.log(to);
  next()
});

//后置钩子（hook）
// eslint-disable-next-line no-unused-vars
router.afterEach((to,from) => {
  // eslint-disable-next-line no-console
  console.log('');
});
//将router对象传入到vue实例
export default router
