import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: () => import('@/views/frontend/Watchmaster.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/frontend/WatchmasterHome.vue'),
      },
      {
        path: '/brand',
        name: 'Brand',
        component: () => import('@/views/frontend/WatchmasterBrand.vue'),
      },
      {
        path: '/brand/rolex',
        name: 'Rolex',
        component: () => import('@/views/frontend/Rolex.vue'),
      },
      {
        path: '/brand/omega',
        name: 'Omega',
        component: () => import('@/views/frontend/Omega.vue'),
      },
      {
        path: '/brand/iwc',
        name: 'IWC',
        component: () => import('@/views/frontend/Iwc.vue'),
      },
      {
        path: '/brand/gs',
        name: 'GS',
        component: () => import('@/views/frontend/Gs.vue'),
      },
      {
        path: '/product',
        name: 'Product',
        component: () => import('@/views/frontend/Product.vue'),
      },
      {
        path: '/product/:id',
        name: 'ProductDetail',
        component: () => import('@/views/frontend/ProductDetail.vue'),
      },
      {
        path: '/checkout',
        name: 'Checkout',
        component: () => import('@/views/frontend/Checkout.vue'),
      },
      {
        path: '/payment/:id',
        name: 'Payment',
        component: () => import('@/views/frontend/Payment.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/backend/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('@/views/backend/Dashboard.vue'),
    children: [
      {
        path: '',
        name: 'Products',
        component: () => import('@/views/backend/Products.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('@/views/backend/Order.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'coupon',
        name: 'Coupon',
        component: () => import('@/views/backend/Coupon.vue'),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: '*',
    redirect: '/home',
  },
];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes,
  scrollBehavior(to, from, savePosition) {
    if (savePosition) {
      return savePosition;
    }
    return { x: 0, y: 0 };
  },
});

export default router;
