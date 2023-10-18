import { WarningOutlined, CalendarOutlined, ReadOutlined } from '@ant-design/icons';
import { Affix, Layout, Menu, MenuProps } from 'antd';
import { FC, Key, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import classes from './Sidebar.module.scss';

type MenuItem = Required<MenuProps>['items'][number];

const { Sider } = Layout;
const getItem = (label: ReactNode, key: Key, icon?: ReactNode, children?: MenuItem[]) =>
  ({
    key,
    icon,
    children,
    label,
  } as MenuItem);

type Props = {};

const Sidebar: FC<Props> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const matchedKey = location.pathname.match(/^\/([A-Za-zа-яА-ЯёЁ]+)/);
  const activeKey = matchedKey ? matchedKey[1] : '';

  const menuItems: MenuItem[] = [
    getItem('Инциденты', 'incidents', <WarningOutlined />),
    getItem('События', 'events', <CalendarOutlined />),
    getItem('Журнал действий', 'logs', <ReadOutlined />),
  ];

  const onClick: MenuProps['onClick'] = (event) => {
    navigate(event.keyPath.join('/'));
  };

  return (
    <Affix>
      <Sider width={200} className={classes.sidebar}>
        <Menu selectedKeys={[activeKey]} onClick={onClick} items={menuItems}></Menu>
      </Sider>
    </Affix>
  );
};

export default Sidebar;
