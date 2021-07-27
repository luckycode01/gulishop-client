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
// 添加到购物车
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
  return Ajax({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'POST',
  });
};
