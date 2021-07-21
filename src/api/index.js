import Ajax from '@/utils/request';
import MockAjax from '@/utils/mockRequest';

export const reqCategoryList = () => Ajax({ url: '/product/getBaseCategoryList', method: 'GET' });

export const reqBannerList = () => MockAjax({ url: '/banner', method: 'GET' });
export const reqFloorList = () => MockAjax({ url: '/floor', method: 'GET' });
