import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Example1 from '../views/unprepared/Example1.vue';
import Example2 from '../views/unprepared/Example2.vue';
import Example3 from '../views/unprepared/Example3.vue';
import Example4 from '../views/unprepared/Example4.vue';
import Example5 from '../views/flickering/Example5.vue';
import Example6 from '../views/flickering/Example6.vue';
import Example7 from '../views/flickering/Example7.vue';
import Example8 from '../views/flickering/Example8.vue';
import Example9 from '../views/impatient/Example9.vue';
import Example10 from '../views/impatient/Example10.vue';
import Example11 from '../views/impatient/Example11.vue';
import Example12 from '../views/impatient/Example12.vue';
import Example13 from '../views/impatient/Example13.vue';
import Example14 from '../views/impatient/Example14.vue';

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
  {
    path: '/flickering/example5',
    name: 'Example5',
    component: Example5,
  },
  {
    path: '/flickering/example6',
    name: 'Example6',
    component: Example6,
  },
  {
    path: '/flickering/example7',
    name: 'Example7',
    component: Example7,
  },
  {
    path: '/flickering/example8',
    name: 'Example8',
    component: Example8,
  },
  {
    path: '/impatient/example9',
    name: 'Example9',
    component: Example9,
  },
  {
    path: '/impatient/example10',
    name: 'Example10',
    component: Example10,
  },
  {
    path: '/impatient/example11',
    name: 'Example11',
    component: Example11,
  },
  {
    path: '/impatient/example12',
    name: 'Example12',
    component: Example12,
  },
  {
    path: '/impatient/example13',
    name: 'Example13',
    component: Example13,
  },
  {
    path: '/impatient/example14',
    name: 'Example14',
    component: Example14,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
