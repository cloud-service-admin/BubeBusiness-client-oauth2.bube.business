import { IStatus } from '@interfaces/common.interface';
import i18n from '@libs/locales/i18n';

const nsStatus = 'admin/work/common/status';
const nsProduct = 'admin/work/common/product';
i18n.loadNamespaces(nsStatus);

const status = (
  status?: IStatus,
): {
  label: string;
  color: string;
} => {
  if (status === 'waitingActive') {
    return {
      label: i18n.t(`${nsStatus}:waitingActive`),
      color: 'green',
    };
  } else if (status === IStatus.Active) {
    return {
      label: i18n.t(`${nsStatus}:active`),
      color: 'green',
    };
  } else if (status === IStatus.Inactive) {
    return {
      label: i18n.t(`${nsStatus}:inactive`),
      color: 'red',
    };
  } else if (status === 'delete') {
    return {
      label: i18n.t(`${nsStatus}:delete`),
      color: 'red',
    };
  } else {
    return {
      label: '',
      color: '',
    };
  }
};

const productOf = async (
  type?:
    | 'productTypeOf'
    | 'productType'
    | 'productGroup'
    | 'productCategory'
    | 'productTag'
    | 'unit'
    | 'unitConversion',
): Promise<React.ReactNode | null> => {
  await i18n.loadNamespaces(nsProduct);

  switch (type) {
    case 'productTypeOf':
      return i18n.t(`${nsProduct}:productTypeOf`);
      break;
    case 'productType':
      return i18n.t(`${nsProduct}:productType`);
      break;
    case 'productGroup':
      return i18n.t(`${nsProduct}:productGroup`);
      break;
    case 'productCategory':
      return i18n.t(`${nsProduct}:productCategory`);
      break;
    case 'productTag':
      return i18n.t(`${nsProduct}:productTag`);
      break;
    case 'unit':
      return i18n.t(`${nsProduct}:unit`);
    case 'unitConversion':
      return i18n.t(`${nsProduct}:unitConversion`);

    default:
      return null;
      break;
  }
};

const handleTransLib = {
  status,
  productOf,
};

export default handleTransLib;
