import { FC } from 'react';
import { Card } from 'antd';
import classNames from 'classnames';
import { RightOutlined, WarningOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import classes from './MainCard.module.scss';

type Props = {
  title: string;
  path: string;
  periods: {
    day?: number;
    moonth?: number;
    weeks?: number;
  };
};

const MainCard: FC<Props> = ({ title, periods, path }) => {
  const navigate = useNavigate();

  const onExtraIconClick = () => navigate(path);
  return (
    <Card
      className={classes.card}
      title={title}
      extra={<RightOutlined className={classes.extra_icon} onClick={onExtraIconClick} />}
    >
      <div className={classNames(classes.card_item, classes.danger)}>
        <span>За неделю</span>
        <WarningOutlined />
        <span>{periods.weeks}</span>
      </div>
      <div className={classes.card_item}>
        <span>За сегодня</span>
        <span>{periods.day}</span>
      </div>
    </Card>
  );
};

export default MainCard;
