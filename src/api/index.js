import Ajax from '@/utils/request';
import MockAjax from '@/utils/mockRequest';

export const reqGetCateList = () => Ajax.get('/product/getBaseCategoryList');

export const reqGetBannerList = () =>
  MockAjax({
    method: 'GET',
    url: '/banner',
  });
export const reqGetFloorList = () =>
  MockAjax({
    method: 'GET',
    url: '/floor',
  });

//获取搜索页数据
export const reqGoodsListInfo = (goodsInfo) => {
  return Ajax({
    url: '/list',
    method: 'post',
    data: goodsInfo,
  });
};

// 获取商品详细信息
export const reqGoodsDetailInfo = (skuId) => {
  return Ajax({
    url: `/item/${skuId}`,
    method: '',
  });
};
// 添加购物车获修改购物车数量

// /cart/CTaaddort / { skuId } / { skuNum };
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
  return Ajax({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post',
  });
};

// /cart/cartList
// 获取购物车列表信息
export const reqShopCartList = () => {
  return Ajax({
    url: '/cart/cartList',
    method: 'get',
  });
};

// 切换单个商品状态
// 、/cart/checkCart/{skuID}/{isChecked}
export const reqOneIsChecked = (skuId, isChecked) => {
  return Ajax({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get',
  });
};
// 	post  /api/cart/batchCheckCart/{isChecked}
// 批量选中购物车
// 参数：skuIdList  数组  代表修改的商品id列表     请求体参数
// 	  isChecked  要修改的状态   1代表选中  0代表未选中
export const reqAllIsChecked = (isChecked, skuIdList) => {
  return Ajax({
    url: `/cart/batchCheckCart/${isChecked}`,
    method: 'post',
    data: skuIdList,
  });
};
// 单个删除
export const reqDeleteOneCart = (skuId) => {
  return Ajax({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete',
  });
};
// 删除多个
export const reqDeleteAllCart = (skuIdList) => {
  return Ajax({
    url: `/cart/batchDeleteCart`,
    method: 'delete',
    data: skuIdList,
  });
};

// 获取验证码
export const reqGetCode = (phone) => {
  return Ajax({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get',
  });
};
// 注册
export const reqRegister = (userInfo) => {
  return Ajax({
    url: '/user/passport/register',
    method: 'post',
    data: userInfo,
  });
};
// 登录
export const reqLogin = (userInfo) => {
  return Ajax({
    url: '/user/passport/login',
    method: 'post',
    data: userInfo,
  });
};
// 获取用户信息
export const reqUserInfo = () => {
  return Ajax({
    url: '/user/passport/auth/getUserInfo',
    method: 'get',
  });
};
// 退出登录
export const reqLogout = () => {
  return Ajax({
    url: '/user/passport/logout',
    method: 'get',
  });
};
