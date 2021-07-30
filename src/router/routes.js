import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
import Trade from '@/pages/Trade';
import PaySuccess from '@/pages/PaySuccess';
import Pay from '@/pages/Pay';
import Center from '@/pages/Center';
import MyOrder from '@/pages/Center/MyOrder';
import GroupOrder from '@/pages/Center/GroupOrder';

export default [
  {
    path: '/center',
    component: Center,
    children: [
      {
        path: 'myorder',
        component: MyOrder,
      },
      {
        path: 'grouporder',
        component: GroupOrder,
      },
      {
        path: '',
        redirect: 'myorder',
      },
    ],
  },
  {
    path: '/pay',
    component: Pay,
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
  },
  {
    path: '/trade',
    component: Trade,
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
