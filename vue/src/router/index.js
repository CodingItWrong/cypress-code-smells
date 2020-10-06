import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Example1 from '../views/Example1.vue';
import Example2 from '../views/Example2.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/unprepared/example1',
    name: 'Example1',
    component: Example1,
  },
  {
    path: '/unprepared/example2',
    name: 'Example2',
    component: Example2,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
