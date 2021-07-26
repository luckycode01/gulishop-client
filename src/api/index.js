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
    url: `/cart/addToCart/${ skuId }/${ skuNum }`,
    method: 'post',
  });
};
