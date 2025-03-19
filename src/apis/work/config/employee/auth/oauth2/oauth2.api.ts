import axios_work_config from '@apis/work/config/axiosConfig';
import { _IGetQrCodeForOauth2Employee } from './oauth2.api.interface';
import work_employee_auth_oauth2_api_path from './oauth2.api.path';

const config = work_employee_auth_oauth2_api_path;
const getQrCodeForOauth2Employee: _IGetQrCodeForOauth2Employee = (data) => {
  return axios_work_config({
    method: config.getQrCodeForOauth2Employee.method,
    url: config.getQrCodeForOauth2Employee.path,
    data,
  });
};

const work_employee_auth_oauth2_api = {
  getQrCodeForOauth2Employee,
};

export default work_employee_auth_oauth2_api;
