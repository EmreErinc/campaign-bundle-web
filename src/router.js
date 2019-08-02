import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomePage.vue';
import Login from './views/LoginPage.vue';
import Register from './views/RegisterPage.vue';
import Detail from './views/DetailPage.vue';
import Cart from './views/CartPage.vue';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      //component: () => import('./views/HomePage.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('./views/LoginPage.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      //component: () => import('./views/RegisterPage.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      //component: () => import('./views/CartPage.vue')
    },
    {
      path: '/item/:id',
      name: 'detail',
      component: Detail,
      props: true
      //component: () => import('./views/DetailPage.vue')
      //component: (resolve) => require(['./views/DetailPage.vue'], m => resolve(m.default))

    }
  ]
})