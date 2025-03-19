import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const trans = 'component.isNew';

type Props = {
  fontSize?: number;
};
export default function IsNew_component(props: Props) {
  const { fontSize } = props;
  const { t } = useTranslation();

  return (
    <Typography
      style={{
        fontSize,
        borderStyle: 'solid',
        borderColor: 'green',
        borderWidth: 2,
        paddingLeft: 3,
        paddingRight: 3,
        borderRadius: 5,
        color: 'greed',
      }}
    >
      {t(`${trans}.label`)}
    </Typography>
  );
}
