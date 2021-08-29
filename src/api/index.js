import Ajax from '@/utils/request';
import mockAjax from '@/utils/mockRequest';

// 获取分类列表
export const reqCategoryList = () =>
  Ajax({
    url: '/product/getBaseCategoryList',
    method: 'get',
  });
export const reqGetBannerList = () => mockAjax({ url: '/banner', method: 'get' });

export const reqGetFloorList = () => mockAjax({ url: '/floor', method: 'get' });

// 获取商品列表信息
export const reqGoodsListInfo = (searchParams) => Ajax({ url: '/list', method: 'post', data: searchParams });

// 获取详细信息
export const reqGoodsDetailInfo = (skuId) => Ajax({ url: `/item/${skuId}`, method: 'get' });

// 添加到购物车、或更新购物车
// /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqAddOrUpdateToCart = (skuId, skuNum) => {
  return Ajax({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post',
  });
};

// 获取购物车列表
// /api/acrt / cartList;
export const reqCartList = () => {
  return Ajax({
    url: '/cart/cartList',
    method: 'get',
  });
};
// 修改单个购物车的状态
// /api/cart/checkCart/{skuID}/{isChecked}
export const reqUpdateOneCartIsCheak = (skuId, isChecked) => {
  return Ajax({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get',
  });
};
// 修改多个状态 	post  /api/cart/batchCheckCart/{isChecked}
// 参数：skuIdList  数组  代表修改的商品id列表     请求体参数
// isChecked  要修改的状态   1代表选中  0代表未选中
export const reqUpdateAllCartIsCheak = (isChecked, skuIdList) => {
  return Ajax({
    url: `/cart/batchCheckCart/${isChecked}`,
    method: 'post',
    data: skuIdList,
  });
};
// 逐条删除
// /api/acrt / deleteCart / { skuId };
export const reqDeleteOneCart = (skuId) => {
  return Ajax({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete',
  });
};
// 批量删除
// o	DELETE /api/cart/batchDeleteCart
// 参数：skuIdList  数组  代表修改的商品id列表     请求体参数
export const reqDeleteAllCart = (skuIdList) => {
  return Ajax({
    url: '/cart/batchDeleteCart',
    method: 'delete',
    data: skuIdList,
  });
};
// 获取验证码
// /user/passport/sendCode/{phone}
export const reqGetCode = (phone) => {
  return Ajax({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get',
  });
};
// 注册
// /user/aopprsst / register;
export const reqRegister = (userInfo) => {
  return Ajax({
    url: `/user/passport/register`,
    method: 'post',
    data: userInfo,
  });
};
// 登录请求
// /user/aopprsst / login;
export const reqLogin = (userInfo) => {
  return Ajax({
    url: `/user/passport/login`,
    method: 'post',
    data: userInfo,
  });
};
// /user/passport/auth/getUserInfo
// 获取用户信息
export const reqGetUserInfo = () => {
  return Ajax({
    url: '/user/passport/auth/getUserInfo',
    method: 'get',
  });
};
// /user/passport/logout
// 退出登录
export const reqLogout = () => {
  return Ajax({
    url: '/user/passport/logout',
    method: 'get',
  });
};

// /order/auth/trade
// 获取订单信息
export const reqTradeInfo = () => {
  return Ajax({
    url: '/order/auth/trade',
    method: 'get',
  });
};

// 获取用户地址
// /user/Addeerrsssu / auth / findUserAddressList;
export const reqUserAddressList = () => {
  return Ajax({
    url: '/user/userAddress/auth/findUserAddressList',
    method: 'get',
  });
};

// 创建订单
// /order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = (tradeNo, tradeInfo) => {
  return Ajax({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method: 'post',
    data: tradeInfo,
  });
};

// 获取支付信息
// /payment/weixin/createNative/{orderId}
export const reqPayInfo = (orderId) => {
  return Ajax({
    url: `/payment/weixin/createNative/${orderId}`,
    method: 'get',
  });
};
// 获取订单支付状态
export const reqPayState = (orderId) => {
  return Ajax({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: 'get',
  });
};

// 获取订单列表
// /api/deorr / auth / { page } / { limit };
export const reqOrderList = (page, limit) => {
  return Ajax({
    url: `/order/auth/${page}/${limit}`,
    method: 'get',
  });
};
