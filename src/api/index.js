import Ajax from '@/utils/request';

export const reqCategoryList = () => Ajax({ url: '/product/getBaseCategoryList', method: 'GET' });

reqCategoryList();
