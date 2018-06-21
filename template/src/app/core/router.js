import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import Analytics from 'vue-analytics';

import Home from '~/home/Home';
import NotFound from '~/not-found/NotFound';

Vue.use(Router);
Vue.use(Meta);

const router = new Router({
  mode: 'history',
  base: process.env.APP_BASE,
  routes: [
    { path: '/', component: Home, meta: { home: true } },
    { path: '/hello-world', component: () => import('~/hello-world/HelloWorld') },
    { path: '*', component: NotFound, meta: { standalone: true } },
  ],
  async scrollBehavior(to, from, savedPosition) {
    if (document.readyState !== 'complete') {
      await new Promise((resolve) => {
        const callback = () => {
          window.requestAnimationFrame(resolve);
          window.removeEventListener('load', callback);
        };

        window.addEventListener('load', callback);
      });
    }

    if (to.hash) return { selector: to.hash };
    if (savedPosition) return savedPosition;

    return new Promise((resolve) => {
      setTimeout(() => resolve({ y: 0 }), 200);
    });
  },
});

router.beforeEach((to, from, next) => {
  next();
});

Vue.use(Analytics, {
  id: process.env.GOOGLE_ANALYTICS || 'UA-XXXXXXXX-X',
  router,
  autoTracking: {
    page: process.env.NODE_ENV === 'production',
  },
});

export default router;
