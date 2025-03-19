import { Dropdown, MenuProps } from 'antd';

type Props = {
  items: MenuProps['items'];
};
export default function ButtonActionRowTable(props: Props) {
  const { items } = props;

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>Hành động</a>
    </Dropdown>
  );
}
