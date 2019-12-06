import request from '@/utils/request';
import Constants from "@/utils/Constants";

export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  return request(Constants.baseUrl + '/user/login/account', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(Constants.baseUrl + `/login/captcha?mobile=${mobile}`);
}
