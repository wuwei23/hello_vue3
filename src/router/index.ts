import { createRouter, createWebHashHistory} from "vue-router";
import About from "@/components/About.vue";
import News from "@/components/News.vue";
import Home from "@/components/Home.vue";

//创建路由器
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/news",
      component: News,
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    }
  ]
})

export default router