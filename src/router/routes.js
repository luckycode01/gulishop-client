import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';

export default [
  {
    path: '/shopcart',
    component: ShopCart,
  },
  {
    path: '/addcartsuccess',
    component: AddCartSuccess,
  },
  {
    path: '/detail/:skuId',
    component: Detail,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    name: 'search',
    path: '/search/:keyword?',
    component: Search,
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isShowFooter: true,
    },
  },
  {
    path: '/register',
    component: Register,
    meta: {
      isShowFooter: true,
    },
  },
  {
    path: '/',
    redirect: '/home',
  },
];
