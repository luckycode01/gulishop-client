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


  // 