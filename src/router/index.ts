import { createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import About from "@/pages/About.vue";
import News from "@/pages/News.vue";
import Home from "@/pages/Home.vue";
import Details from "@/pages/Details.vue";

//创建路由器
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'news',
      path: "/news",
      component: News,
      children: [
        {
          name: 'details',
          // path: 'details',
          path: 'details/:id/:title/:content',
          component: Details,
          props(route){  //将路由参数映射到组件的props中
            return route.params
          }
        }
      ]
    },
    {
      name: 'home',
      path: "/home",
      component: Home,
    },
    {
      name: 'about',
      path: "/about",
      component: About,
    },
    {//重定向
      path: '/',
      redirect: '/home'
    }
  ]
})

export default router