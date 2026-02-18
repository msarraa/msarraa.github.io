import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/Home.vue"
import Projects from "../pages/Projects.vue"
import ProjectDetail from "../pages/ProjectDetail.vue"
import About from "../pages/About.vue"



export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/projects", component: Projects },
    { path: "/projects/:slug", component: ProjectDetail, props: true },
    { path: "/about", component: About },

  ],
  scrollBehavior() {
	    // När du går till Home med hash: scrolla till sektionen
    if (to.hash) return { el: to.hash, behavior: "smooth" }
    return { top: 0 }
    return { top: 0 }
  },
})

