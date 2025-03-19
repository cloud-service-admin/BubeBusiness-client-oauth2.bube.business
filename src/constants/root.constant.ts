import { IDateFormat } from '@interfaces/common.interface';

const defaultValues = {
  dateFormat: IDateFormat.DD_MM_YYYY,
  alignCenter: 'center' as const,
};

const rootConstants = { defaultValues };

export default rootConstants;
