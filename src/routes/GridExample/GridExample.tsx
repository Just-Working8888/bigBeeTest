import { Row, Col } from 'antd';
import React, { useState } from 'react';
import colors from '../../scss/variables/colors.module.scss';
import { useAppSelector } from 'store/hook';
import { setColSize } from 'helpers/setColSize'
import { ButtonComponent } from 'Components';
import { useNavigate } from 'react-router-dom';
import { colGridType } from 'store/slices/windowStateSlice';

const styleCol: React.CSSProperties = {
  background: colors.lightgrayfill,
  padding: '8px 0',
  borderRadius: 4,
  textAlign: 'center',
};

export default function GridExample() {
  const [colsexamples, setColsexamples] = useState<JSX.Element[]>([])
  const { indentKey, indentValues, colCountKey } = useAppSelector((state) => state.windowState);

  const navigate = useNavigate();

  React.useEffect(() => {
    let arrCols: JSX.Element[] = [];
    for (let i = 0; i < 30; i++) {      
      let currentCol = Math.round(((i+1) / 6) + 1);
      arrCols.push(<Col key={i.toString()} span={setColSize(currentCol as colGridType)}>
        <div style={styleCol}>
          Column № {i+1}, size - {currentCol}
        </div>
      </Col>)
    };    
    setColsexamples(arrCols);

  }, [indentKey, colCountKey]);

  return (
    <Row
      justify='center'
      gutter={[indentValues[indentKey], indentValues[indentKey]]}
       style={{padding: indentValues[indentKey]}}
    >
      {colsexamples}
      <Col span={setColSize(1)}>
        <ButtonComponent type='primary' onClick={() => navigate('/')}>To start page</ButtonComponent>
      </Col>
    </Row>
  )
}
