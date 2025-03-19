import appConstantConfig from '@configs/appConstant/appConstant.config';
import { appActions, appSelect } from '@features/app/app.slice';
import { IThemeMode } from '@features/app/app.slice.interface';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { Select, message } from 'antd';

type Options = {
  label: string;
  value: string;
};

const options: Options[] = [];
appConstantConfig.listThemeMode.map((themeMode) => {
  options.push({
    label: themeMode.label,
    value: themeMode.value,
  });
});
export default function SelectThemeMode_Component() {
  const dispatch = useAppDispatch();
  const appState = useAppSelector(appSelect);

  const selectChange = (value: IThemeMode) => {
    if (value === 'custom') {
      message.info('Tính năng đang phát triển');
    } else {
      dispatch(appActions.updateThemeMode(value));
    }
  };

  return (
    <Select
      style={{ width: '100%' }}
      options={options}
      showSearch={false}
      defaultValue={appState.settings.themeMode}
      onChange={selectChange}
    />
  );
}
