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
          component: Details
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
    }
  ]
})

export default router