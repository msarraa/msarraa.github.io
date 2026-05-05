import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"
import Projects from "../pages/Projects.vue"
import ProjectDetail from "../pages/ProjectDetail.vue"
import About from "../pages/About.vue"



export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
//     { path: "/projects", component: Projects },
    { path: "/projects/:slug", component: ProjectDetail, props: true },
    { path: "/about", component: About },

  ],

    scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      }
    }

    return {
      top: 0,
      behavior: "smooth",
    }
  },
})


