import { method } from '@apis/config/api.share.interface';

const baseUrl = 'work/employee/oauth/oauth2';

const work_employee_auth_oauth2_api_path = {
  getQrCodeForOauth2Employee: {
    method: method.post,
    path: `${baseUrl}/get-qr-code-for-oauth2-employee`,
  },
};

export default work_employee_auth_oauth2_api_path;
