// import { store } from '@store/store';
// import { myEmployeeActions } from '@features/app_work/myEmployee.slice';
// import { userAction } from '@features/app_social/user/user.slice';
// import apiAuth from '@apis/app_social/auth/auth.api';
// import work_authApi from '@apis/app_work/auth/work.auth.api';
// import { message } from 'antd';
// import { jwtDecode } from 'jwt-decode';
// import handleCookie from './handleCookie.lib';
// import {
//   I_get_newAccessToken,
//   IGet_employeeTokenFromRefreshToken,
// } from './handleToken.lib.interface';

// export const handle_token = {
//   // token
//   get_accessToken: () => store.getState().user.token?.accessToken,
//   get_refreshToken: () => store.getState().user.token?.refreshToken,
//   get_newAccessToken: async (): I_get_newAccessToken => {
//     try {
//       const refreshToken = store.getState().user.token?.refreshToken;
//       if (!refreshToken) return null;

//       const resApi = await apiAuth.get_newAccessToken({ refreshToken });
//       if (resApi.data.status === 'error') return null;

//       handleCookie.set_refreshToken(resApi.data.values.token.refreshToken);

//       return resApi.data.values;
//     } catch (error) {
//       message.error('Lỗi ứng dụng');
//       return null;
//     }
//   },

//   // employeeToken
//   get_employeeAccessToken: () =>
//     store.getState().employee.defaultEmployee.employeeToken.accessToken,
//   get_employeeRefreshToken: () =>
//     store.getState().employee.defaultEmployee.employeeToken.refreshToken,
//   get_newEmployeeToken: async (): IGet_employeeTokenFromRefreshToken => {
//     try {
//       const employeeId = store.getState().employee.defaultEmployee.employee.id;

//       if (!employeeId) return null;

//       const resApi = await work_authApi.get_newEmployeeToken({
//         employeeId,
//       });
//       if (resApi.data.status === 'error') return null;

//       return resApi.data.values;
//     } catch (error) {
//       message.error('Lỗi ứng dụng');
//       return null;
//     }
//   },
//   decodeEmployeeAccessToken: (employeeAccessToken: string) => {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const accessTokenDecode: any = jwtDecode(employeeAccessToken);
//     if (!accessTokenDecode || !accessTokenDecode.companyId) return null;

//     return {
//       companyId: accessTokenDecode.companyId,
//       branchId: accessTokenDecode.branchId,
//       employeeId: accessTokenDecode.employeeId,
//       fullName: accessTokenDecode.fullName,
//     };
//   },

//   handle401: async (errorCode: number) => {
//     try {
//       let newToken;

//       if (errorCode === 2) {
//         // accessTokenExpires
//         const resApi = await handle_token.get_newAccessToken();
//         if (resApi?.token) {
//           newToken = resApi.token;
//           // update token to store
//           store.dispatch(
//             userAction.updateUserToken({
//               token: newToken,
//             }),
//           );
//         }
//         return {
//           type: 'userToken',
//           accessToken: newToken?.accessToken,
//         };
//       } else if (errorCode === 4) {
//         // employeeAccessTokenExpires

//         // accessTokenExpires
//         const resApi = await handle_token.get_newEmployeeToken();
//         if (resApi?.employeeToken) {
//           newToken = resApi.employeeToken;
//           // update token to store
//           store.dispatch(
//             myEmployeeActions.updateEmployeeToken({
//               employeeToken: newToken,
//             }),
//           );
//         }
//         return {
//           type: 'employeeToken',
//           accessToken: newToken?.accessToken,
//         };
//       } else {
//         return null;
//       }
//     } catch (error) {
//       message.error('Lỗi ứng dụng');
//       return null;
//     }
//   },
// };
