import { createRouter, createWebHashHistory} from "vue-router";
import About from "@/pages/About.vue";
import News from "@/pages/News.vue";
import Home from "@/pages/Home.vue";

//创建路由器
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'news',
      path: "/news",
      component: News,
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