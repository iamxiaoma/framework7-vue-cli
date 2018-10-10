import HomePage from './views/home.vue';
import AboutPage from './views/about.vue';

export default [{
    path: '/',
    alias: '/#',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '(.*)',
    component: AboutPage,
  },
];