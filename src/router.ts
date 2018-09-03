import Vue from 'vue';
import Router from 'vue-router';

Vue.use( Router );

export default new Router( {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import(/* webpackChunkName: "resume" */ './views/Resume.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
    },
  ],
} );
