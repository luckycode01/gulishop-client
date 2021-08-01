import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
import Center from '@/pages/Center';
import Pay from '@/pages/Pay';
import PaySuccess from '@/pages/PaySuccess';
import Trade from '@/pages/Trade';
import MyOrder from '@/pages/Center/MyOrder';
import GroupOrder from '@/pages/Center/GroupOrder';

export default [
  {
    path: '/center',
    component: Center,
    children: [
      { path: 'myorder', component: MyOrder },
      { path: 'grouporder', component: GroupOrder },
    ],
  },
  {
    path: '/trade',
    component: Trade,
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
  },
  {
    path: '/pay',
    component: Pay,
  },
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
