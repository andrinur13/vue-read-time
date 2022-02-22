import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import PostDetail from '../views/PostDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Post
  },
  {
    path: '/post/:id',
    name: 'Post Detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: PostDetail
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
