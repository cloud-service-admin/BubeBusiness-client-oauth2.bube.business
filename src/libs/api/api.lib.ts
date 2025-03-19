/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { currencyList } from '@constants/data.constant';
import { Country, State } from 'country-state-city';

export function convertStringToEnFeature(str: string) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  str = str.replace(/đ/g, 'd');
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  str = str.replace(/Đ/g, 'D');
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    ' ',
  );
  str = str.replace(/  +/g, ' ');
  return str;
}

export const searchListSelect = (input: string, option: any) => {
  return (
    (option?.label ?? '')
      .toLowerCase()
      .includes(convertStringToEnFeature(input.toLowerCase())) ||
    convertStringToEnFeature(option?.label ?? '')
      .toLowerCase()
      .includes(convertStringToEnFeature(input.toLowerCase())) ||
    (option?.value ?? '')
      .toLowerCase()
      .includes(convertStringToEnFeature(input.toLowerCase())) ||
    convertStringToEnFeature(option?.value ?? '')
      .toLowerCase()
      .includes(convertStringToEnFeature(input.toLowerCase()))
  );
};

export const getValueFromCountryCode = (countryCode: string) => {
  const stateCityList: {
    label: string;
    value: string;
  }[] = [];
  State.getStatesOfCountry(countryCode).map((stateCity) => {
    stateCityList.push({
      label: stateCity.name,
      value: stateCity.name,
    });
  });

  const countryInfo = Country.getCountryByCode(countryCode);
  const cur = currencyList.find((cur) => cur.iso === countryInfo?.isoCode);
  const countryName = countryInfo?.name;
  const isoCode = countryInfo?.isoCode;
  const phoneCode = countryInfo?.phonecode;
  const currency = {
    name: cur?.value,
    code: cur?.value,
    symbol: cur?.symbol,
  };
  const timezones = countryInfo?.timezones;

  return {
    countryName,
    isoCode,
    stateCityList,
    phoneCode,
    timezones,
    currency,
  };
};
