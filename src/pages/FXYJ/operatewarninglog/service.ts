import request from '@/utils/request';
import { TableListParams } from './data.d';
import Constants from '@/utils/Constants';

export async function queryRule(params: any) {
  return request(Constants.baseUrl + '/warning/allPageWOLog', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function removeRule(params: any) {
  return request(Constants.baseUrl + '/warning/deletePWLog', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export async function addRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
