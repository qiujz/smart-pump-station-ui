import request from '@/utils/request';
import {TableListParams} from './data.d';

export async function queryRule(params: TableListParams) {
  return request('/api/rule', {
    params,
  });
}

export async function latestByCodeArray(params: any) {
  return request(`/api/log/latestByCodeArray`, {
    method: 'POST',
    // params,
    //  headers:{'Content-Type': 'multipart/form-data',
    //         'Accept':'*/*'
    // },
    // headers:{'Origin':'http://localhost:8000',},
    data: {
      ...params,
    },
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
  return request(`/api/log/setValue`, {params});
}
