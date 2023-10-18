import { useState } from 'react';
import { Row, Col, DatePicker, Modal, Button, ConfigProvider } from 'antd';
import "dayjs/locale/ru"
import locale from 'antd/locale/ru_RU';
import { getPeriod } from 'helpers/periodBuilder';
import { useAppDispatch, useAppSelector } from 'store/hook';
import { PeriodSelectTypes, setCurrentPeriod } from 'store/slices/currentPeriodSlice';
import classes from './PeriodSelects.module.scss'
import colors from '../../scss/variables/colors.module.scss';
import { HistoryOutlined } from '@ant-design/icons';
import { SelectComponent } from 'Components';
import { setColSize } from 'helpers/setColSize';

export default function PeriodSelects() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState<[string, string, string]>(getPeriod('month'));

  const dispatch = useAppDispatch();
  const { currentPeriod } = useAppSelector((state) => state.period);
  const { indentKey, indentValues } = useAppSelector((state) => state.windowState);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    dispatch(setCurrentPeriod({currentPeriod: 'period', period: selectedPeriod}));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangeDate = (_: any, dateString: [string, string]) => {    
    const period = getPeriod('period', dateString);
    setSelectedPeriod(period);
  };

  const handlePeriodSelect = (value: PeriodSelectTypes) => {
    dispatch(setCurrentPeriod({currentPeriod: value}));
  };

  const periodOptions = [
    { value: 'hour', label: 'Час' },
    { value: 'today', label: 'Сегодня' },
    { value: 'day', label: 'Сутки' },
    { value: 'week', label: 'Неделя' },
    { value: 'month', label: 'Месяц' },
    { value: 'year', label: 'Год' },
    { value: 'period', label: 'Период', style: {display: 'none'}}
  ];

  return (
    <>
      <Row
        justify='start'
        gutter={[indentValues[indentKey], indentValues[indentKey]]}
      >
        <Col span={setColSize(2)}>
          <SelectComponent
            className={classes.mixedInput_select}
            bordered={true}
            dropdownAlign={{offset: [1, 0]}}
            style={{ width: 'calc(100% - 32px)' }}
            value={currentPeriod}
            options={periodOptions}
            onChange={handlePeriodSelect}
            />

          <Button
            className={classes.mixedInput_button}
            onClick={showModal}
            icon={<HistoryOutlined style={{ color: currentPeriod === 'period' ? colors.primary50 : colors.primaryblack }} />}
          />
          <Modal
            width={500}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Отмена
              </Button>,
              <Button type="primary" key="ок" onClick={handleOk}>
                Установить
              </Button>,
            ]}
            title="Выберите диапазон"
            open={isModalVisible}
          >
            <ConfigProvider locale={locale}>
              <DatePicker.RangePicker
                style={{ width: '100%' }}
                // placeholder={['с...', 'по...']}
                onChange={onChangeDate}
              />
            </ConfigProvider>
          </Modal>
        </Col>
      </Row>
    </>
  );
};
