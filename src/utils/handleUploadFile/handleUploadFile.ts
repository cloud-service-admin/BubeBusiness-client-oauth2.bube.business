// import { store } from '@store/store';
// import system_storageFileApiV2 from '@apis/app_system/storageFile/v2/storageFile.api';
// import resApi from '@libs/api/apiResponse.lib';
// import handleError from '@libs/api/handleError.lib';
// import handleUUID from '@libs/api/handleUUID.lib';
// import axios from 'axios';
// import {
//   _UploadAttachments,
//   _UploadImages,
// } from './handleUploadFile.interface';
// import { IShare_input_file } from '@interfaces/share/share.interface';

// const uploadImages: _UploadImages = async (payload) => {
//   try {
//     if (payload.files.length === 0) return null;

//     const { owner, isPublic, files } = payload;

//     // create new key folder storage
//     const folderStorage = handleUUID.newUUID();
//     const handleOwnerFolderStorage = {
//       user: store.getState().user.storageFolder,
//       company: store.getState().employee.defaultEmployee.company?.storageFolder,
//       employee:
//         store.getState().employee.defaultEmployee.employee?.storageFolder,
//     };

//     const resValues: IShare_input_file[] = [];
//     // check new file need upload
//     const filesNeedGetPresignedURLForUpload: {
//       uid?: string;
//       isPublic: boolean;
//       name: string | null;
//       type: string | null;
//       size: number | 0;
//     }[] = [];

//     files.map((file) => {
//       if (file.id) {
//         if (file.action === 'delete') {
//           // file already uploaded
//           resValues.push({
//             action: file.action,
//             id: file.id,
//             fileName: file.fileName,
//             description: file.description,
//             note: file.note,
//           });
//         } else if (file.action === 'update') {
//           resValues.push({
//             action: file.action,
//             id: file.id,
//             fileName: file.fileName,
//             description: file.description,
//             note: file.note,
//           });
//         }
//       } else {
//         // new file
//         if (file.url) {
//           // url image form internet
//           resValues.push({
//             storageService: 'another',
//             isPublic: true,
//             url: file.url,
//             type: file.type,
//             name: file.name,
//           });
//         } else {
//           // image upload
//           filesNeedGetPresignedURLForUpload.push({
//             uid: file.uid,
//             isPublic,
//             name: file.originFileObj?.name || null,
//             type: file.originFileObj?.type || null,
//             size: file.originFileObj?.size || 0,
//           });

//           resValues.push({
//             storageService: 'another',
//             uid: file.uid,
//             name: file.name,
//             type: file.originFileObj?.type || '',
//             size: file.originFileObj?.size || 0,
//           });
//         }
//       }
//     });

//     if (filesNeedGetPresignedURLForUpload.length < 1) return resValues;

//     // get presigned url for upload
//     const getMultiPresignedURLForUpload =
//       await system_storageFileApiV2.get_multiPresignedURLForUploadImages({
//         owner,
//         key: `${handleOwnerFolderStorage[owner]}/${folderStorage}`,
//         files: filesNeedGetPresignedURLForUpload,
//       });

//     if (getMultiPresignedURLForUpload.data.status === 'error') {
//       resApi.error({ message: 'upload file error' });
//       return null;
//     }

//     // upload image
//     const values = getMultiPresignedURLForUpload.data.values;

//     const promises = values.urls.map(async (newUrl) => {
//       const findIndex = files.findIndex((file) => file.uid === newUrl.uid);

//       const res = await axios.put(
//         newUrl.url,

//         files[findIndex].originFileObj,
//         {
//           headers: {
//             'Content-Type': files[findIndex].type,
//           },
//         },
//       );

//       // Return data to be collected
//       return {
//         key: new URL(res.request.responseURL).pathname.slice(1),
//         url: new URL(res.request.responseURL).href.split('?')[0],
//         newUrl,
//       };
//     });

//     // Wait for all promises to resolve
//     const results = await Promise.all(promises);

//     // Process results
//     results.forEach((result) => {
//       const { key, url, newUrl } = result;
//       const findIndex = resValues.findIndex((file) => file.uid === newUrl.uid);

//       resValues[findIndex]['storageService'] = values.storageService;
//       resValues[findIndex]['isPublic'] = newUrl.isPublic;
//       resValues[findIndex]['bucket'] = values.bucket;
//       resValues[findIndex]['key'] = key;
//       resValues[findIndex]['url'] = url;
//     });

//     const res = await resValues;

//     return res;
//   } catch (error) {
//     handleError(error);
//     return null;
//   }
// };

// const uploadAttachments: _UploadAttachments = async (payload) => {
//   try {
//     if (payload.files.length === 0) return null;

//     const { owner, isPublic, files } = payload;

//     // create new key folder storage
//     const folderStorage = handleUUID.newUUID();
//     const handleOwnerFolderStorage = {
//       user: store.getState().user.storageFolder,
//       company: store.getState().employee.defaultEmployee.company?.storageFolder,
//       employee:
//         store.getState().employee.defaultEmployee.employee?.storageFolder,
//     };

//     const resValues: IShare_input_file[] = [];
//     // check new file need upload
//     const filesNeedGetPresignedURLForUpload: {
//       uid?: string;
//       isPublic: boolean;
//       name: string | null;
//       type: string | null;
//       size: number | 0;
//     }[] = [];

//     files.map((file) => {
//       if (file.id) {
//         if (file.action === 'delete') {
//           // file already uploaded
//           resValues.push({
//             action: file.action,
//             id: file.id,
//             fileName: file.fileName,
//             description: file.description,
//             note: file.note,
//           });
//         } else if (file.action === 'update') {
//           resValues.push({
//             action: file.action,
//             id: file.id,
//             fileName: file.fileName,
//             description: file.description,
//             note: file.note,
//           });
//         }
//       } else {
//         // new file
//         if (file.url) {
//           // url file form internet
//           resValues.push({
//             storageService: 'another',
//             isPublic: true,
//             url: file.url,
//             type: file.type,
//             name: file.name,
//             fileName: file.fileName,
//             description: file.description,
//             note: file.note,
//           });
//         } else {
//           // file upload
//           filesNeedGetPresignedURLForUpload.push({
//             uid: file.uid,
//             isPublic,
//             name: file.originFileObj?.name || null,
//             type: file.originFileObj?.type || null,
//             size: file.originFileObj?.size || 0,
//           });

//           resValues.push({
//             storageService: 'another',
//             uid: file.uid,
//             name: file.name,
//             type: file.originFileObj?.type || '',
//             size: file.originFileObj?.size || 0,
//             fileName: file.fileName,
//             description: file.description,
//             note: file.note,
//           });
//         }
//       }
//     });

//     if (filesNeedGetPresignedURLForUpload.length < 1) return resValues;

//     // get presigned url for upload
//     const getMultiPresignedURLForUpload =
//       await system_storageFileApiV2.get_multiPresignedURLForUploadAttachments({
//         owner,
//         key: `${handleOwnerFolderStorage[owner]}/${folderStorage}`,
//         files: filesNeedGetPresignedURLForUpload,
//       });

//     if (getMultiPresignedURLForUpload.data.status === 'error') {
//       resApi.error({ message: 'upload file error' });
//       return null;
//     }

//     // upload image
//     const values = getMultiPresignedURLForUpload.data.values;

//     const promises = values.urls.map(async (newUrl) => {
//       const findIndex = files.findIndex((file) => file.uid === newUrl.uid);

//       const res = await axios.put(
//         newUrl.url,

//         files[findIndex].originFileObj,
//         {
//           headers: {
//             'Content-Type': files[findIndex].type,
//           },
//         },
//       );

//       // Return data to be collected
//       return {
//         key: new URL(res.request.responseURL).pathname.slice(1),
//         url: new URL(res.request.responseURL).href.split('?')[0],
//         newUrl,
//       };
//     });

//     // Wait for all promises to resolve
//     const results = await Promise.all(promises);

//     // Process results
//     results.forEach((result) => {
//       const { key, url, newUrl } = result;
//       const findIndex = resValues.findIndex((file) => file.uid === newUrl.uid);

//       resValues[findIndex]['storageService'] = values.storageService;
//       resValues[findIndex]['isPublic'] = newUrl.isPublic;
//       resValues[findIndex]['bucket'] = values.bucket;
//       resValues[findIndex]['key'] = key;
//       resValues[findIndex]['url'] = url;
//     });

//     const res = await resValues;

//     return res;
//   } catch (error) {
//     handleError(error);
//     return null;
//   }
// };

// const handleUploadFile = {
//   uploadImages,
//   uploadAttachments,
// };

// export default handleUploadFile;
