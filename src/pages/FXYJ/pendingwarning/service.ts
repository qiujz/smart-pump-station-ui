import request from '@/utils/request';
import { TableListParams } from './data.d';
import Constants from '@/utils/Constants';

export async function queryRule(params: TableListParams) {
  return request(Constants.baseUrl + '/warning/allPWLog', {
    params,
  });
}

export async function removeRule(params: any) {
  return request(Constants.baseUrl + '/warning/deletePWLog', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function addRule(params: TableListParams) {
  return request(Constants.baseUrl + '/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request(Constants.baseUrl + '/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
