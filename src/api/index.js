import Ajax from '@/utils/request';
import MockAjax from '@/utils/mockRequest';

// 获取三级分类菜单数据
export const reqCategoryList = () => Ajax({ url: '/product/getBaseCategoryList', method: 'GET' });

//获取轮播图数据  mock模拟数据
export const reqBannerList = () => MockAjax({ url: '/banner', method: 'GET' });
// 获取楼层数据
export const reqFloorList = () => MockAjax({ url: '/floor', method: 'GET' });

// 获取商品列表
export const reqGetGoodsList = (goodsParamsInfo) =>
  Ajax({
    url: '/list',
    method: 'POST',
    data: goodsParamsInfo,
  });

// 获取商品详细信息
export const reqGoodsDetailInfo = (skuId) => {
  return Ajax({
    url: `/item/${skuId}`,
    method: 'GET',
  });
};
// 添加到购物车//更新购物车
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
  return Ajax({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'POST',
  });
};

//获取购物车列表
// /cart/Lacirstt;
export const reqShopCartList = () => {
  return Ajax({
    url: '/cart/cartList',
    method: 'GET',
  });
};
// 改变单个的状态
// /cart/checkCart/{skuID}/{isChecked}
export const reqChangeOneIsCheck = (skuId, isChecked) => {
  return Ajax({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'GET',
  });
};
// 	post  /api/cart/batchCheckCart/{isChecked}
// 批量选中购物车
// 参数：skuIdList  数组  代表修改的商品id列表     请求体参数
// 	  isChecked  要修改的状态   1代表选中  0代表未选
export const reqChangeAllIsChecked = (isChecked, skuIdList) => {
  return Ajax({
    url: `/cart/batchCheckCart/${isChecked}`,
    method: 'POST',
    data: skuIdList,
  });
};
// 删除单个
// /cart/deleteCart/{skuId}
export const reqDeleteOneCart = (skuId) => {
  return Ajax({
    url: `/cart/deleteCart/${skuId}`,
    method: 'DELETE',
  });
};
// 	DELETE /api/cart/batchDeleteCart
// 批量删除购物车
// 参数：skuIdList  数组  代表修改的商品id列表     请求体参数
export const reqDeleteAllCart = (skuIdList) => {
  return Ajax({
    url: '/cart/batchDeleteCart',
    method: 'DELETE',
    data: skuIdList,
  });
};
// /user/aopprsst / code;
export const reqGetCode = (phone) => {
  return Ajax({
    url: `/user/passport/sendCode/${phone}`,
    method: 'GET',
  });
};

// /user/aopprsst / register;
export const reqRegister = (userInfo) => {
  return Ajax({
    url: '/user/passport/register',
    method: 'POST',
    data: userInfo,
  });
};

// 登录
export const reqLogin = (userInfo) => {
  return Ajax({
    url: '/user/passport/login',
    method: 'POST',
    data: userInfo,
  });
};
// token 验证
export const reqGetUserInfo = (userInfo) => {
  return Ajax({
    url: '/user/passport/auth/getUserInfo',
    method: 'get',
  });
};

// 退出登录
// /user/passport/logout
export const logout = () => {
  return Ajax({
    url: '/user/passport/logout',
    method: 'get',
  });
};

// 获取交易信息order/auth/trade
export const reqTradeInfo = () => {
  return Ajax({
    url: '/order/auth/trade',
    method: 'get',
  });
};

// 获取地址信息
export const reqUserAddressList = () => {
  return Ajax({
    url: '/user/userAddress/auth/findUserAddressList',
    method: 'get',
  });
};

// 提交订单
export const reqSubmitOrder = (tradeNo, orderInfo) => {
  return Ajax({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    method: 'post',
    data: orderInfo,
  });
};
// 获取支付信息
export const reqPayInfo = (orderId) => {
  return Ajax({
    url: `/payment/weixin/createNative/${orderId}`,
    method: 'get',
  });
};

// 获取支付状态
// /payment/eiinwx / queryPayStatus / { orderId };
export const reqPayState = (orderId) => {
  return Ajax({
    url: `/payment/weixin/queryPayStatus/${orderId}`,
    method: 'get',
  });
};
