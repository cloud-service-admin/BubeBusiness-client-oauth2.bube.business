import { IStatus } from '@interfaces/common.interface';
import { SelectProps, UploadFile } from 'antd';

export interface IShare_name {
  firstName?: string;
  lastName?: string;
  fullName: string;
}

export type IShare_address = {
  countryName: string;
  countryCode: string;
  countryIso2?: string;
  countryIso3?: string;
  stateCity?: string;
  postalCode?: string;
  addressLine1: string;
  addressLine2?: string;
  shortAddress?: string;
};

export interface IShare_currency {
  name?: string;
  code?: string;
  symbol?: string;
}

export type IShare_gender = 'male' | 'female' | 'unspecified';

export type IShare_dateFormat = 'DD/MM/YYYY' | 'MM/DD/YYYY' | 'YYYY/MM/DD';

export type IStatusObjectInArray = IStatus.Active | IStatus.Inactive | 'delete';

export type IShare_updateStatusModifyObjectInArray =
  | 'keep'
  | 'create'
  | 'update'
  | 'delete';

export interface IShare_UploadFileWithFileId extends UploadFile {
  id?: string;
}

export interface IShare_OptionList extends SelectProps {
  value: string;
  label: string;
}

export type IShare_file = {
  index?: number;
  id?: string; // old file
  action?: 'create' | 'create' | 'delete';
  name?: string;
  isPublic?: boolean;
  storageService?: 'amazonS3' | 'another';
  bucket?: string;
  key?: string;
  url?: string;
  type?: string;
  size?: number;
  fileName?: string;
  description?: string;
  note?: string;
};

export type IShare_loading = {
  btn_createAndUpdate?: boolean;
};

export type IShare_requiredUploadFiles = {
  storageService?: string;
  bucket?: string;
  keyFolder?: string;
  imagePrimary?: number; // index number of list
  list: {
    id?: string;
    isPublic?: boolean;
    storageService?: 'amazonS3' | 'another';
    key?: string;
    bucket?: string;
    url?: string;
    type?: string;
    size?: number;
  }[];
};

export type IShare_UploadFileWithIdAndAction = {
  id?: string;
  index?: number;
  action?: 'create' | 'update' | 'updated' | 'delete' | 'deleted';
  fileName?: string;
  description?: string;
  note?: string;
} & UploadFile;

export type IShare_input_file = {
  action?: 'create' | 'update' | 'updated' | 'delete' | 'deleted';
  id?: string;
  uid?: string;
  isPublic?: boolean;
  storageService?: 'amazonS3' | 'another';
  key?: string;
  bucket?: string;
  name?: string;
  url?: string;
  type?: string;
  size?: number;
  fileName?: string;
  description?: string;
  note?: string;
};

export type IShare_res_file = {
  id: string;
  name?: string;
  url: string;
  type?: string;
  fileName?: string;
  description?: string;
  note?: string;
};

export type IShare_form_action =
  | 'new'
  | 'detail'
  | 'action_createDraft'
  | 'action_create'
  | 'action_update'
  | 'action_delete';
