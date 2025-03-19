/* eslint-disable @typescript-eslint/no-explicit-any */
import { IShare_UploadFileWithIdAndAction } from '@interfaces/share/share.interface';

type Form = {
  [key: string]:
    | null
    | string
    | number
    | boolean
    | object
    | string[]
    | object[]
    | undefined
    | Array<object>;
};

function removeMatchingKeys(formInit: Form, form: Form): Form {
  // Sao chép đối tượng form để không thay đổi đối tượng gốc
  const formCopy = { ...form };

  // Lặp qua từng cặp key-value trong formInit
  for (const key in formInit) {
    if (Object.prototype.hasOwnProperty.call(formInit, key)) {
      // Nếu giá trị của key trong form giống với giá trị của key trong formInit

      if (key === 'images') {
        if (!form[key]) {
          delete formCopy[key];
          continue;
        }

        const images = form[key] as IShare_UploadFileWithIdAndAction[];
        const newImages: IShare_UploadFileWithIdAndAction[] = [];
        const imagesDelete: number[] = [];
        images &&
          images.length > 0 &&
          images.map((image) => {
            if (image.action === 'delete') {
              newImages.push(image);
              imagesDelete.push(imagesDelete.length + 1);
            }
            if (!image.id) newImages.push(image);
          });
        if (images.length === 0) {
          delete formCopy[key];
        }

        if (
          imagesDelete.length > 0 &&
          imagesDelete.length === newImages.length &&
          Number(formCopy['imagePrimaryIndex']) >= imagesDelete.length
        ) {
          formCopy['imagePrimaryIndex'] = null;
        }
      } else {
        if (Array.isArray(form[key]) && Array.isArray(formInit[key])) {
          // if (
          //   form[key]?.sort().toString() === formInit[key]?.sort().toString()
          // ) {
          //   delete formCopy[key];
          // }
        }
      }

      if (form[key as keyof typeof form] === formInit[key]) {
        // Xóa cặp key-value khớp từ đối tượng form
        delete formCopy[key];
      }

      if (objectsEqual(form[key], formInit[key])) {
        // Xóa cặp key-value khớp từ đối tượng form
        delete formCopy[key];
      }
    }
  }

  return formCopy;
}

function objectsEqual(obj1: any, obj2: any): boolean {
  // Kiểm tra xem có cùng kiểu dữ liệu không
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  // Kiểm tra xem có phải là đối tượng không
  if (typeof obj1 === 'object' && obj1 !== null && obj2 !== null) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Kiểm tra xem có cùng số lượng thuộc tính không
    if (keys1.length !== keys2.length) {
      return false;
    }

    // Kiểm tra từng thuộc tính của đối tượng
    for (const key of keys1) {
      if (!objectsEqual(obj1[key], obj2[key])) {
        return false;
      }
    }

    return true;
  }

  // So sánh các giá trị không phải là đối tượng
  return obj1 === obj2;
}

const compareFormInit = (valueInit: any, newValue: any) => {
  if (valueInit === newValue) {
    return false;
  }
  return true;
};

const handleForm = {
  removeMatchingKeys,
  compareFormInit,
};

export default handleForm;
