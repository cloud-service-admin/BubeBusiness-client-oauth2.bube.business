import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const ns = 'admin/work/common/isDraft.json';

type Props = {
  fontSize?: number;
};
export default function IsDraft_component(props: Props) {
  const { fontSize } = props;
  const { t } = useTranslation(ns);

  return (
    <Typography
      style={{
        fontSize,
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: 2,
        paddingLeft: 3,
        paddingRight: 3,
        borderRadius: 5,
        color: 'red',
      }}
    >
      {t(`label`)}
    </Typography>
  );
}
