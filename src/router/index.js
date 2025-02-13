import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ToDoList from '@/views/ToDoList.vue';


// const routes = [
//   { path: '/', name: 'home', component: HomeView },
//   { path: '/todolist', name: 'todolist', component: ToDoList },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView, // This will contain the new to-do list using different components
  },
  {
    path: '/todolist',
    name: 'todolist',
    component: ToDoList, // This is the single-page To-Do List
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})




export default router;











