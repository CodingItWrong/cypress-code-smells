import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Example1 from '../views/unprepared/Example1.vue';
import Example2 from '../views/unprepared/Example2.vue';
import Example3 from '../views/unprepared/Example3.vue';
import Example4 from '../views/unprepared/Example4.vue';

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
  {
    path: '/unprepared/example3',
    name: 'Example3',
    component: Example3,
  },
  {
    path: '/unprepared/example4',
    name: 'Example4',
    component: Example4,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
