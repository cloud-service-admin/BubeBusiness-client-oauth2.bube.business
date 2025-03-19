import {
  IShare_input_file,
  IShare_UploadFileWithIdAndAction,
} from '@interfaces/share/share.interface';
import { UploadFile } from 'antd';

export type IHandleUploadSingleImage = (payload: {
  owner: 'user' | 'company' | 'employee';
  file: UploadFile;
}) => Promise<{
  isPublic?: boolean;
  storageService?: 'amazonS3' | 'another';
  key?: string;
  bucket?: string;
  url?: string;
  type?: string;
  size?: number;
} | null>;

export type _UploadImages = (payload: {
  owner: 'user' | 'company' | 'employee';
  isPublic: boolean;
  files: IShare_UploadFileWithIdAndAction[];
}) => Promise<IShare_input_file[] | null>;

export type _UploadAttachments = (payload: {
  owner: 'user' | 'company' | 'employee';
  isPublic: boolean;
  files: IShare_UploadFileWithIdAndAction[];
}) => Promise<IShare_input_file[] | null>;

export type IUpload_Files = (payload: {
  ownerBy: 'user' | 'company' | 'employee';
  filesUpload?: UploadFile[];
  filesList?: {
    url: string | null;
    type: string | null;
    size: number | 0;
  }[];
}) => Promise<{
  ownerBy: {
    type: 'user' | 'company' | 'employee';
    id: string;
  };
  filesUpload: {
    storageLocation: 'amazonS3';
    serviceUrl: string;
    bucket: string;
    files: {
      url: string;
      name: string;
      type: string;
      size: number;
    }[];
  };
  filesLink: {
    storageLocation: 'another';
    file: {
      url: string | null;
      type: string | null;
      size: number | 0;
    }[];
  };
} | null>;
