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
