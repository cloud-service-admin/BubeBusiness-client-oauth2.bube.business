import appConstantConfig from '@configs/appConstant/appConstant.config';
import { PickerLocale } from 'antd/es/date-picker/generatePicker';
import i18n from './i18n';

const ns = 'admin/work/common/dateTime';

const getDateTimePickerLocaleConfig = async (): Promise<PickerLocale> => {
  // await i18n.init();
  await i18n.loadNamespaces(ns);

  return {
    lang: {
      locale: i18n.t(`${ns}:locale`),
      placeholder: i18n.t(`${ns}:placeholder`),
      rangePlaceholder: [i18n.t(`${ns}:startDate`), i18n.t(`${ns}:endDate`)],
      today: i18n.t(`${ns}:today`),
      now: i18n.t(`${ns}:now`),
      backToToday: i18n.t(`${ns}:backToToday`),
      ok: i18n.t(`${ns}:ok`),
      clear: i18n.t(`${ns}:clear`),
      month: i18n.t(`${ns}:month`),
      year: i18n.t(`${ns}:year`),
      timeSelect: i18n.t(`${ns}:timeSelect`),
      dateSelect: i18n.t(`${ns}:dateSelect`),
      monthSelect: i18n.t(`${ns}:monthSelect`),
      yearSelect: i18n.t(`${ns}:yearSelect`),
      decadeSelect: i18n.t(`${ns}:decadeSelect`),
      yearFormat: i18n.t(`${ns}:yearFormat`),
      dateFormat: i18n.t(`${ns}:dateFormat`),
      dayFormat: i18n.t(`${ns}:dayFormat`),
      dateTimeFormat: i18n.t(`${ns}:dateTimeFormat`),
      monthFormat: i18n.t(`${ns}:monthFormat`),
      monthBeforeYear: true,
      previousMonth: i18n.t(`${ns}:previousMonth`),
      nextMonth: i18n.t(`${ns}:nextMonth`),
      previousYear: i18n.t(`${ns}:previousYear`),
      nextYear: i18n.t(`${ns}:nextYear`),
      previousDecade: i18n.t(`${ns}:previousDecade`),
      nextDecade: i18n.t(`${ns}:nextDecade`),
      previousCentury: i18n.t(`${ns}:previousCentury`),
      nextCentury: i18n.t(`${ns}:nextCentury`),
      shortWeekDays: [
        i18n.t(`${ns}:shortWeekDays_Sun`),
        i18n.t(`${ns}:shortWeekDays_Mon`),
        i18n.t(`${ns}:shortWeekDays_Tue`),
        i18n.t(`${ns}:shortWeekDays_Wed`),
        i18n.t(`${ns}:shortWeekDays_Thu`),
        i18n.t(`${ns}:shortWeekDays_Fri`),
        i18n.t(`${ns}:shortWeekDays_Sat`),
      ],
      shortMonths: [
        i18n.t(`${ns}:shortMonths_Jan`),
        i18n.t(`${ns}:shortMonths_Feb`),
        i18n.t(`${ns}:shortMonths_Mar`),
        i18n.t(`${ns}:shortMonths_Apr`),
        i18n.t(`${ns}:shortMonths_May`),
        i18n.t(`${ns}:shortMonths_Jun`),
        i18n.t(`${ns}:shortMonths_Jul`),
        i18n.t(`${ns}:shortMonths_Aug`),
        i18n.t(`${ns}:shortMonths_Sep`),
        i18n.t(`${ns}:shortMonths_Oct`),
        i18n.t(`${ns}:shortMonths_Nov`),
        i18n.t(`${ns}:shortMonths_Dec`),
      ],
      // Add the missing 'week' property
      week: i18n.t(`${ns}:week`),
    },

    timePickerLocale: {
      placeholder: i18n.t(`${ns}:timePickerLocale_placeholder`),
    },
    dateFormat: appConstantConfig.defaultValues.dateFormat,
    dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
    weekFormat: 'YYYY-wo',
    monthFormat: 'YYYY-MM',
  };
};

const dateTimePickerLocaleConfig = await getDateTimePickerLocaleConfig();

export default dateTimePickerLocaleConfig;
