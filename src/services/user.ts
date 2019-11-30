import request from '@/utils/request';
import Constants from '@/utils/Constants';

export async function query(): Promise<any> {
  return request(Constants.baseUrl + '/api/users');
}

export async function queryCurrent(): Promise<any> {
  return request(Constants.baseUrl + '/api/currentUser');
}

export async function queryNotices(): Promise<any> {
  return request(Constants.baseUrl + '/api/notices');
}
