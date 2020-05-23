import Vue from 'vue'
import VueRouter from "vue-router";
import MSite from "../pages/MSite/MSite";
import Order from "../pages/Order/Order";
import Search from "../pages/Search/Search";
import Profile from "../pages/Profile/Profile";
import Login from "../pages/Login/Login";


Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:MSite,
      meta:{
        ShowFooter:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        ShowFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        ShowFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        ShowFooter:true
      }
    },
    {
      path:'/',
      redirect:'/msite'

    },
    {
      path:'/login',
      component:Login,
    },

  ]
})


