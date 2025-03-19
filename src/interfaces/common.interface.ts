export type IName = {
  firstName: string;
  lastName: string;
  fullName?: string;
};

export enum IGender {
  Male = 'male',
  Female = 'female',
  Unspecified = 'unspecified',
}

export type ICurrency = {
  name: string;
  code: string;
  symbol: string;
};

export enum IDateFormat {
  DD_MM_YYYY = 'DD/MM/YYYY',
  DD_MM_YYYY_DASH = 'DD-MM-YYYY',
  MM_DD_YYYY = 'MM/DD/YYYY',
  MM_DD_YYYY_DASH = 'MM-DD-YYYY',
  YYYY_MM_DD = 'YYYY/MM/DD',
  YYYY_MM_DD_DASH = 'YYYY-MM-DD',
}

export type IAddress = {
  countryName: string;
  countryCode: string;
  state?: string;
  county?: string;
  district?: string;
  city?: string;
  postalCode?: string;
  addressLine1?: string;
  addressLine2?: string;
  shortAddress?: string;
  latitude?: number;
  longitude?: number;
};

export enum IStatus {
  Pending = 'pending',
  WaitingActive = 'waitingActive',
  Active = 'active',
  Inactive = 'inactive',
  Delete = 'delete',
}

export type ILoading = {
  buttonSearch?: boolean;
  buttonRegister?: boolean;
  buttonCreate?: boolean;
  buttonConfirm?: boolean;
  buttonUpdate?: boolean;
  buttonDelete?: boolean;
  buttonUpdateStatus?: boolean;
  buttonFind?: boolean;
  buttonGetList?: boolean;
  buttonActive?: boolean;
  buttonInactive?: boolean;
  table?: boolean;
  form?: boolean;
};

export enum ITimeKeepingType {
  QrCode = 'qrCode',
  Wifi = 'wifi',
  Manual = 'manual',
}

export enum ITimeKeepingMode {
  Single = 'single',
  InOut = 'inOut',
}

export type IOption = {
  label: React.ReactNode;
  value: React.ReactNode;
};

export enum IWork_Device_App {
  TimeKeepingApp = 'time-keeping-app',
}

export enum ISelectCompanyOrBranch {
  Company = 'company',
  Branch = 'branch',
}
