import Vue from 'vue';
import Router from 'vue-router';

import NotFound from '~/shared/NotFound';
import Overview from '~/shared/Overview';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Overview },
    { path: '/hello-world', component: () => import('~/hello-world/HelloWorld') },
    { path: '*', component: NotFound },
  ],
});

export default router;
