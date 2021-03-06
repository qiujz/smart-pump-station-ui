import request from '@/utils/request';
import { TableListParams } from './data.d';
import Constants from "@/utils/Constants";

export async function queryRule(params: TableListParams) {
  return request(Constants.baseUrl + '/rule', {
    params,
  });
}

export async function LatestAll(params: TableListParams) {
  return request(Constants.baseUrl + `/log/LatestAll`, {
    params,
  });
}

export async function removeRule(params: TableListParams) {
  return request(Constants.baseUrl + '/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
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

export async function setValue(params: TableListParams) {
  return request(Constants.baseUrl + `/log/setValue`, {params});
}
