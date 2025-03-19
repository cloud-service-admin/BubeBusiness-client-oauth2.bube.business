/* eslint-disable @typescript-eslint/no-unused-vars */
import { IDeviceType } from '@apis/app_work/device/device/device.api.interface';
import {
  IDateFormat,
  IGender,
  ISelectCompanyOrBranch,
  IWork_Device_App,
} from '@interfaces/common.interface';
import { Country } from 'country-state-city';
import currency from 'iso-country-currency';
import moment from 'moment-timezone';

export type ICountry = {
  label: string;
  value: string;
  countryCode: string;
};

export type ITimezone = {
  label: string;
  value: string;
};

export type IPhoneCode = {
  label: string;
  value: string;
};

export type ICurrency = {
  label: string;
  value: string;
  iso: string;
  code: string;
  symbol: string;
};

const currencyList: ICurrency[] = [];
const timezoneList: ITimezone[] = [];
const phoneCodeList: IPhoneCode[] = [];
const countryList: ICountry[] = [];

Country.getAllCountries().map((country) => {
  phoneCodeList.push({
    label: country.phonecode,
    value: country.phonecode,
  });
  countryList.push({
    value: country.name,
    label: country.name,
    countryCode: country.isoCode,
  });
});

moment.tz.names().map((mo) => {
  timezoneList.push({
    label: mo,
    value: mo,
  });
});

currency.getAllISOCodes().map((cur) => {
  currencyList.push({
    iso: cur.iso,
    label: cur.currency,
    value: cur.currency,
    code: cur.currency,
    symbol: cur.symbol,
  });
});

const genderOptions = Object.entries(IGender).map(([key, value]) => ({
  label: key.charAt(0).toUpperCase() + key.slice(1),
  value,
}));

const dateFormatOptions = Object.entries(IDateFormat).map(([_key, value]) => ({
  label: value,
  value,
}));

const deviceTypeOptions = Object.entries(IDeviceType).map(([_key, value]) => ({
  label: value,
  value,
}));

const dateFormatValue = Object.entries(IDateFormat).map(
  ([_key, value]) => value,
);

const bubeAppsOption = Object.entries(IWork_Device_App).map(([_key, value]) => {
  if (value === IWork_Device_App.TimeKeepingApp) {
    return {
      label: 'Ứng dụng chấm công Bube TimeKeeping',
      value,
    };
  } else {
    return {
      label: value,
      value,
    };
  }
});

const selectCompanyOrBranch = Object.entries(ISelectCompanyOrBranch).map(
  ([_key, value]) => {
    if (value === ISelectCompanyOrBranch.Company) {
      return {
        label: 'Tài sản công ty',
        value,
      };
    } else if (value === ISelectCompanyOrBranch.Branch) {
      return {
        label: 'Chi nhánh',
        value,
      };
    } else {
      return {
        label: value,
        value,
      };
    }
  },
);

export { countryList, currencyList, phoneCodeList, timezoneList };

const dataConstants = {
  genderOptions,
  dateFormatOptions,
  deviceTypeOptions,
  dateFormatValue,
  bubeAppsOption,
  selectCompanyOrBranch,
};
export default dataConstants;
