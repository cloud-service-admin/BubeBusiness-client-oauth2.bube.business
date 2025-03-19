import { IStatus } from '@interfaces/common.interface';
import i18n from '@libs/locales/i18n';
import { Typography } from 'antd';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

const statusSet = new Set();
const statusFilter: { text: string; value: string }[] = [];

export const handle_statusFilter = (
  items: {
    status: IStatus;
  }[],
): { text: string; value: string }[] => {
  const transStatus = (status: IStatus): string => {
    switch (status) {
      case IStatus.Active:
        return i18n.t('component.status_component.active');
      case IStatus.Inactive:
        return i18n.t('component.status_component.inactive');
      case 'waitingActive':
        return i18n.t('component.status_component.waitingActive');
      case IStatus.Delete:
        return i18n.t('component.status_component.delete');
      default:
        return '';
    }
  };

  items.forEach((obj) => {
    if (obj.status && !statusSet.has(obj.status)) {
      statusSet.add(obj.status);
      statusFilter.push({
        text: transStatus(obj.status),
        value: obj.status,
      });
    }
  });
  return statusFilter;
};

type Props = {
  status: IStatus;
  onClick?: () => void;
};
export default function Status_component(props: Props) {
  const { status, onClick } = props;
  const { t } = useTranslation();

  const [statusColor, setStatusColor] = useState<string>();

  const statusLabel = useMemo(() => {
    switch (status) {
      case 'waitingActive':
        return t('component.status_component.waitingActive');
      case IStatus.Active:
        setStatusColor('green');
        return t('component.status_component.active');
      case IStatus.Inactive:
        setStatusColor('red');
        return t('component.status_component.inactive');
      case IStatus.Delete:
        setStatusColor('red');
        return t('component.status_component.delete');
      default:
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, onClick]);

  return (
    <>
      <Typography.Text style={{ color: statusColor }} onClick={onClick}>
        {statusLabel}
      </Typography.Text>
    </>
  );
}
