import { IStatus } from '@interfaces/common.interface';
import i18n from '@libs/locales/i18n';

const nsStatus = 'admin/work/common/status';
const nsCompanyAndBranch = 'admin/work/inputCompanyAndBranch';

const isCompanyAsset = (
  data: { isCompanyAsset?: boolean }[],
): { text: string; value: boolean }[] => {
  const set = new Set();
  const filterIsCompanyAsset: { text: string; value: boolean }[] = [];
  const label = (isCompanyAsset?: boolean): string =>
    isCompanyAsset
      ? i18n.t(`${nsCompanyAndBranch}:label_company`)
      : i18n.t(`${nsCompanyAndBranch}:label_branch`);

  data.forEach((obj) => {
    if (
      Object.prototype.hasOwnProperty.call(obj, 'isCompanyAsset') &&
      !set.has(obj.isCompanyAsset)
    ) {
      set.add(obj.isCompanyAsset);
      filterIsCompanyAsset.push({
        text: label(obj.isCompanyAsset),
        value: obj.isCompanyAsset ?? false,
      });
    }
  });
  return filterIsCompanyAsset;
};

const productCategory = (
  items: {
    categoryFather?: {
      id?: string;
      name?: string;
    };
  }[],
): { text: string; value: string }[] => {
  const set = new Set();
  const filter: { text: string; value: string }[] = [];

  items.forEach((obj) => {
    if (obj.categoryFather?.name && !set.has(obj.categoryFather.name)) {
      set.add(obj.categoryFather.name);
      filter.push({
        text: obj.categoryFather.name,
        value: obj.categoryFather.id ?? '',
      });
    }
  });
  return filter;
};

const status = (
  items: {
    status: IStatus;
  }[],
): { text: string; value: string }[] => {
  const set = new Set();
  const filterStatus: { text: string; value: string }[] = [];
  const transStatus = (status: IStatus): string => {
    switch (status) {
      case 'waitingActive':
        return i18n.t(`${nsStatus}:waitingActive`);
      case IStatus.Active:
        return i18n.t(`${nsStatus}:active`);
      case IStatus.Inactive:
        return i18n.t(`${nsStatus}:inactive`);
      case IStatus.Delete:
        return i18n.t(`${nsStatus}:waitingDelete`);
      default:
        return '';
    }
  };

  items.forEach((obj) => {
    if (obj.status && !set.has(obj.status)) {
      set.add(obj.status);
      filterStatus.push({
        text: transStatus(obj.status),
        value: obj.status,
      });
    }
  });
  return filterStatus;
};

const handleTableFilter = {
  isCompanyAsset,
  productCategory,
  status,
};

export default handleTableFilter;
