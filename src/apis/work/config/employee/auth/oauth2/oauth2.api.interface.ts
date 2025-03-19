import { IResAxios } from '@apis/config/api.share.interface';

export type _IGetQrCodeForOauth2Employee = (payload: {
  appId: string;
  companyId: string;
  branchId?: string;
  codeChallenge: string;
  redirectUrl: string;
  firebaseToken: string;
}) => IResAxios<{
  qrCode: string;
}>;
