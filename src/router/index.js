import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../page/HomeView.vue'
import MahasiswaView from '../page/MahasiswaView.vue'
import GalleryView from '../page/GalleryView.vue'
import AboutView from '../page/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "BSI SOFTWARE ENGINEERING 2021 || Home"
      }
    },
    {
      path: '/mahasiswa',
      name: 'mahasiswa',
      component: MahasiswaView,
      meta: {
        title: "BSI SOFTWARE ENGINEERING 2021 || Mahasiswa"
      }
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView,
      meta: {
        title: "BSI SOFTWARE ENGINEERING 2021 || Gallery"
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: "BSI SOFTWARE ENGINEERING 2021 || About"
      }
    },
  ]
})
const title = document.title;
window.addEventListener("blur", () => {
  document.title = "BSI SOFTWARE ENGINEERING 2021";
});

window.addEventListener("focus", () => {
  document.title = title;
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
})
export default router
