import Ajax from '@/utils/request';
import mockAjax from '@/utils/mockRequest';

export const reqCategoryList = () =>
  Ajax({
    url: '/product/getBaseCategoryList',
    method: 'get',
  });
export const reqGetBannerList = () => mockAjax({ url: '/banner', method: 'get' });

export const reqGetFloorList = () => mockAjax({ url: '/floor', method: 'get' });

export const reqGoodsListInfo = (searchParams) => Ajax({ url: '/list', method: 'post', data: searchParams });
