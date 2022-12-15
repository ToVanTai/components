import { createRouter, createWebHistory } from "vue-router"
import Employes from "../pages/employes/Employes.vue"
import Error from "../pages/Error.vue"
const routes = [
  {
    path: "/",
    component: Employes
  }, {
    path: "/:nothing(.*)",
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router