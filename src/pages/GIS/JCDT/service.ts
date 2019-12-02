import request from '@/utils/request';
import {TableListParams} from './data.d';
import Constants from '@/utils/Constants';

export async function queryRule(params: TableListParams) {
  return request('/api/rule', {
    params,
  });
}

export async function LatestByCodeArray(params: TableListParams) {
  return request(`${Constants.baseUrl}/log/LatestByCodeArray`, {
    params,
  });
}

export async function removeRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',

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

export async function setValue(params: TableListParams) {
  return request(`${Constants.baseUrl}/log/setValue`, {params});
}
