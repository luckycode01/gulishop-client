// import Home from '@/pages/Home';
// import Search from '@/pages/Search';
// import Login from '@/pages/Login';
// import Register from '@/pages/Register';
// import Detail from '@/pages/Detail';
// import AddCartSuccess from '@/pages/AddCartSuccess';
// import ShopCart from '@/pages/ShopCart';
// import Trade from '@/pages/Trade';
// import PaySuccess from '@/pages/PaySuccess';
// import Pay from '@/pages/Pay';
// import Center from '@/pages/Center';
// import MyOrder from '@/pages/Center/MyOrder';
// import GroupOrder from '@/pages/Center/GroupOrder';

const Home = () => import('@/pages/Home');
const Search = () => import('@/pages/Search');
const Login = () => import('@/pages/Login');
const Register = () => import('@/pages/Register');
const Detail = () => import('@/pages/Detail');
const AddCartSuccess = () => import('@/pages/AddCartSuccess');
const ShopCart = () => import('@/pages/ShopCart');
const Trade = () => import('@/pages/Trade');
const PaySuccess = () => import('@/pages/PaySuccess');
const Pay = () => import('@/pages/Pay');
const Center = () => import('@/pages/Center');
const MyOrder = () => import('@/pages/Center/MyOrder');
const GroupOrder = () => import('@/pages/Center/GroupOrder');

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
    beforeEnter: (to, from, next) => {
      // ...
      if (from.path === '/trade') {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
    beforeEnter: (to, from, next) => {
      // ...
      if (from.path === '/pay') {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: '/trade',
    component: Trade,

    beforeEnter: (to, from, next) => {
      if (from.path === '/shopcart') {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: '/shopcart',
    component: ShopCart,
  },
  {
    path: '/addcartsuccess',
    component: AddCartSuccess,
    beforeEnter: (to, from, next) => {
      // ...路由独享守卫
      const skuNum = to.query.skuNum;
      const skuInfo = sessionStorage.getItem('skuInfo_key');
      if (skuInfo && skuNum) {
        next();
      } else {
        alert('1');
        next(false);
      }
    },
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

  {
    path: '/communication',
    component: () => import('@/pages/Communication/Communication'),
    children: [
      {
        path: 'event',
        component: () => import('@/pages/Communication/EventTest/EventTest'),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: 'model',
        component: () => import('@/pages/Communication/ModelTest/ModelTest'),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: 'sync',
        component: () => import('@/pages/Communication/SyncTest/SyncTest'),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: 'attrs-listeners',
        component: () => import('@/pages/Communication/AttrsListenersTest/AttrsListenersTest'),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: 'children-parent',
        component: () => import('@/pages/Communication/ChildrenParentTest/ChildrenParentTest'),
        meta: {
          isHideFooter: true,
        },
      },
      {
        path: 'scope-slot',
        component: () => import('@/pages/Communication/ScopeSlotTest/ScopeSlotTest'),
        meta: {
          isHideFooter: true,
        },
      },
    ],
  },
];
