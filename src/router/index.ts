import { createRouter, createWebHistory} from "vue-router";
import type {RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SpotContainer from "@/views/SpotContainer.vue";
const routes : Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'SpotContainer',
      component: SpotContainer,
      children: [
        {
          path: "/",
          name:"home",
          component:HomeView
        }
      ]
    },
  ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router
